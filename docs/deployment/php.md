---
title: PHP
sidebar_position: 2
format: mdx
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy PHP Apps

PHP is a popular programming language for web development. PHP is served in production server using PHP-FPM.

Popular PHP recipes is [CodeIgniter](https://codeigniter.com/) and [Laravel](https://laravel.com/). Please read our [Runner's Guide](../features/runner.md) first if you haven't.

## Recipes

<Tabs>
  <TabItem value="simple" label="General PHP" default>

### Development Mode

```yaml
source: clear
nginx:
  fastcgi: on
commands:
- echo "<h1>Hello, World!</h1>" > index.php
- echo "<?php phpinfo(15);" > phpinfo.php
- echo "display_errors = On" > .user.ini
- echo "display_startup_errors = On" >> .user.ini
```

This creates a simple PHP that outputs "Hello, World!" and load some useful development features.

  </TabItem>
  <TabItem value="codeigniter" label="CodeIgniter">

### Init in Development Mode

```yaml
source: clear
features:
- mysql
nginx:
  root: public_html/public
  fastcgi: on
  locations:
  - match: /
    try_files: $uri $uri/ /index.php$is_args$args
commands:
- composer create-project codeigniter4/appstarter .
- cp env .env
- sed -ri "s/.*database.default.database.*/database.default.database = ${DATABASE}/g" .env
- sed -ri "s/.*database.default.username.*/database.default.username = ${USERNAME}/g" .env
- sed -ri "s/.*database.default.password.*/database.default.password = ${PASSWORD}/g" .env
- sed -ri "s/.*app.baseURL.*/app.baseURL = https:\/\/${DOMAIN}/g" .env
- composer install
```

This set up a fresh CodeIgniter project in development mode with a database initialized.

### Switch to Production Mode

```yaml
commands:
- 'sed -ri "s/# CI_ENVIRONMENT = production/CI_ENVIRONMENT = production/g" .env'
- composer install --no-dev --optimize-autoloader
```

This sets up CodeIgniter in production mode.


  </TabItem>
  <TabItem value="laravel" label="Laravel">

### Init in Development Mode

```yaml
source: clear
features:
- php latest
- mysql
nginx:
  root: public_html/public
  fastcgi: on
  locations:
  - match: /
    try_files: $uri $uri/ /index.php$is_args$args
commands:
- composer create-project laravel/laravel .
- cp .env.example .env
- sed -i "s/DB_HOST=127.0.0.1/DB_HOST=localhost/g" .env
- sed -ri "s/DB_DATABASE=.*/DB_DATABASE=${DATABASE}/g" .env
- sed -ri "s/DB_USERNAME=.*/DB_USERNAME=${USERNAME}/g" .env
- sed -ri "s/DB_PASSWORD=.*/DB_PASSWORD=${PASSWORD}/g" .env
- sed -ri "s/APP_URL=.*/APP_URL=http:\/\/${DOMAIN}/g" .env
- composer install
- php artisan migrate:fresh
- php artisan key:generate
- php artisan storage:link
```

This set up a fresh Laravel project in development mode with a database initialized.

### Enable Laravel UI

```yaml
commands:
- composer require laravel/ui
- php artisan ui bootstrap –-auth
- npm install
- npm run build
```

This enables Laravel UI with Bootstrap and authentication.

:::info

If you wish to enable development mode with Laravel UI, specify the host IP address and random ephemeral ports. Run this in CLI/SSH:

```yaml
npm run dev -- --host `hostname -I | cut -d " " -f1` --port `shuf -n 1 -i 49152-65535`
```

Note: this doesn't work with HTTPS, only run it in development mode. You might need to set the `APP_URL` to `http://...` in `.env`.

:::


### Switch to Production Mode

```yaml
features:
- ssl
commands:
- sed -ri "s/APP_DEBUG=true/APP_DEBUG=false/g" .env
- sed -ri "s/http:\/\//https:\/\//g" .env
- composer install --optimize-autoloader
- npm run build
```

This switches Laravel to production mode.

  </TabItem>
</Tabs>

---

Let's extract those recipes meaning individually.

## NGINX Setup

[NGINX](../features/nginx.md) can be configured to serve PHP files. PHP files are served by the PHP-FPM server. This works by writing `fastcgi_pass` directive in the NGINX configuration, which points to underlying PHP-FPM server proxy for given host.

The minimum configuration to enable PHP is:

```yaml
nginx:
  fastcgi: on
```

### `fastcgi` Options

The [`fastcgi`](../features/runner.md#fastcgi) option has three options: `on`, `off`, `always`. The difference between three options:

#### `fastcgi` Options `off`

```
location ~ \.php$ {
    return 404;
    fastcgi_pass ....;
}
```

This essentially disables PHP support in NGINX because it directly return 404 without being forwarded to `fastcgi`. This is the default value for `fastcgi`.

#### `fastcgi` Options `on`

```
location ~ \.php$ {
    try_files $uri =404;
    fastcgi_pass ......;
}
```

This detects all URLs that ends with `.php` and forwards it to the PHP-FPM server. However, if the file is not found, it will return 404 without being forwarded to `fastcgi`.

#### `fastcgi` Options `always`

```
location ~ \.php(/|$) {
    fastcgi_pass ......;
}
```

This detects all URLs that ends with `.php` or contains `.php` in the path and forwards it to the PHP-FPM server. The path after `.php` is sent as additional path in [$_SERVER\['PATH_INFO'\]](https://www.php.net/manual/en/reserved.variables.server.php#:~:text=the%20authentication%20type.-,%27PATH_INFO%27,-Contains%20any%20client).

### Multiple Directory Setup

If you have multiple directory setup, it's important to write `fastcgi: on`
where the directory should also serve PHP files, for example:

```yaml
nginx:
  fastcgi: on
  locations:
  - match: /admin/
    root: public_app/public
    fastcgi: on
```

The second `fastcgi: on` will make sure PHP files inside `/admin/` directory are also served by PHP-FPM.

### Rewrite root directory

```yaml
nginx:
  root: public_html/public
```

The default root directory is `public_html`, where app files are extracted from recipes.
Some modern frameworks like Laravel and CodeIgniter put static files inside `public` folder to avoid leaking bare `*.php` files be accessed maliciously and creates RCE attack.

So when your app requires this behavior, you need to change the root folder to `public_html/public`.

:::info

Not to be confused with `root:` inside `nginx:`, this setting is placed outside of `nginx:`
because it will also tell Virtualmin to use this folder as e.g. SSL verification requests.

:::

### Reroute index.php

```yaml
nginx:
  locations:
  - match: /
    try_files: $uri $uri/ /index.php$is_args$args
  fastcgi: on
```

If you use frameworks, they also likes to handle custom routes. The `try_files:` configuration
here is to instruct NGINX to try to serve the root `/index.php` file in case no static files found
in the given request URL.

### Multiple website in a domain

```yaml
root: public_html
nginx:
  locations:
  - match: ~ ^/(app|auth|api|web)/
    root: public_app/public
    fastcgi: on
    try_files: $uri $uri/ /index.php$is_args$args
  - match: /uploads/
    alias: public_app/storage/app/public/
  - match: /
    try_files: $uri $uri/ /index.php$is_args$args
  fastcgi: on
```

The example setup above is a typical setup for combining a WordPress (the landing page) in `~/public_html`
and a Laravel app in `~/public_app`. Let's see what happens when we do requests from browser:

1. `/`: Resolves to `/public_html/index.php` and loads the landing page at `/`.
1. `/about`: Resolves to `/public_html/index.php` and loads the landing page at `/about`.
2. `/api/oauth`: Resolves to `/public_app/index.php` and loads the Laravel app at `/api/oauth`.
3. `/web/login`: Resolves to `/public_app/index.php` and loads the Laravel app at `/web/login`.
4. `/uploads/image.png`: Resolves to `/public_app/storage/app/public/image.png` and loads the image (if exist).

Let's see another approach to combine multiple websites in a domain.

```yaml
root: public_html
nginx:
  locations:
  - match: /app/
    alias: public_app/public
    fastcgi: on
    try_files: $uri $uri/ @app
  - match: "@app"
    /app/(.*)$ /app/index.php last
  - match: /uploads/
    alias: public_app/storage/app/public/
  - match: /
    try_files: $uri $uri/ /index.php$is_args$args
  fastcgi: on
```

The example above puts the whole laravel app inside `/app/` subfolder. Let's see how it works:

1. `/`: Resolves to `/public_html/index.php` and loads the landing page at `/`.
1. `/about`: Resolves to `/public_html/index.php` and loads the landing page at `/about`.
2. `/app/api/oauth`: Resolves to `/public_app/index.php` and loads the Laravel app at `/api/oauth`.
2. `/app/web/login`: Resolves to `/public_app/index.php` and loads the Laravel app at `/web/login`.
3. `/web/login`: Resolves to `/public_html/index.php` and loads the landing page at `/web/login` (404 error).
4. `/uploads/image.png`: Resolves to `/public_app/storage/app/public/image.png` and loads the image (if exist).

You can read more about putting Laravel in subfolder using NGINX in this [StackOverflow answer](https://stackoverflow.com/a/62965174/3908409).

## PHP environment setup

The default PHP version is `7.4`, which is the default provided from the OS.

To change PHP version used in PHP-FPM to the latest one, put this in runner:

```yaml
features:
- php latest
```

You can also use a fixed PHP version: `php 7.4`, `php 8.0`, `php 8.1`.

Unfortunately you can't use custom PHP version other than provided because it's tied to system daemon.
We always update the list to the latest supported version or latest major version starting from PHP 7.4.

Support for PHP extensions is varies but you can request a ticket to be included, provided the extension is provided officially by PHP.

When PHP version is changed, it's also changing the `php` and `composer` version it used.

Alternatively, you can call the alternative `php` version using `php81`, `php80`, `php56`, etc.

You can also do this for composer, e.g. ``php81 `which composer` install``.

## Composer install

Composer is installed automatically. The good recommendation to install packages is with:

```sh
composer install --no-dev --no-progress --optimize-autoloader
```

+ `--no-dev` to skip development packages (things like PHPUnit), to save space.
+ `--no-progress` to skip the progress bar, because it's problematic when used inside runner.
+ `--optimize-autoloader` to speed up the package resolution in production.

### Clearing composer cache

If your development is stable enough, you can clear the cache to save space by calling:

```sh
composer clear-cache
```

The composer cache locates in `~/.composer/cache/`.

## PHP INI configuration

The PHP INI configuration is useful to tweak the PHP behavior such at upload size limits.
While you can't directly change the PHP INI located in system files, you can create `.user.ini`
into PHP root folder (typically `~/public_html/.user.ini`) and tweak the config there.

An example of PHP INI configuration is:

```ini title="~/public_html/.user.ini"
upload_max_filesize = 32M
post_max_size = 32M
```

See the list of available PHP INI configuration [in official PHP documentation](https://www.php.net/manual/en/ini.list.php).
To see default values or if your change has been in effect, use `phpinfo()`.

:::caution

PHP INI doesn't work? You may need to wait until the PHP process is restarted, which typically about 5 minutes without traffic or after about 500 requests.
Note that you can't change configs with `PHP_INI_SYSTEM` level because it's only changeable in the main system INI files.

:::

## PHP Error Logging

The error logs can be seen in `NGINX Error Logs` in Virtualmin web UI.
You won't see error details in your website because we use production default settings.

If you want to see the error details in website (not recommended!), change this setting in `.user.ini`:

```ini title="~/public_html/.user.ini"
display_errors = On
display_startup_errors = On
```

## Restarting PHP

PHP doesn't need restart. Changing PHP files instantly changes the running server code.

The PHP-FPM instance itself is running as `ondemand` and goes inactive after 5 minutes of no traffic.
