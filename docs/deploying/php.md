---
title: PHP
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploying PHP Application with DOM Cloud

PHP is a popular programming language for web development. PHP is served in production server using PHP-FPM. 

Popular PHP recipes is `WordPress`, `CodeIgniter` and `Laravel`. Please read our [Runner's Guide](../runner.md) first if you haven't.

## Recipes

<Tabs>
  <TabItem value="simple" label="Simple PHP" default>

```yaml
source: clear
nginx:
  fastcgi: on
commands:
- echo "Hello, World!" > index.php
```

A simple PHP that outputs "Hello, World!"

  </TabItem>
  <TabItem value="wordpress" label="WordPress">

```yaml
source: https://wordpress.org/latest.zip
directory: wordpress
features:
- mysql
nginx:
  fastcgi: on
  locations:
  - match: /
    try_files: $uri $uri/ /index.php$is_args$args
  - match: ~ /xmlrpc\.php$
    deny: all
commands:
- cp wp-config-sample.php wp-config.php
- sed -i "s/database_name_here/${DATABASE}/g" wp-config.php
- sed -i "s/username_here/${USERNAME}/g" wp-config.php
- sed -i "s/password_here/${PASSWORD}/g" wp-config.php
- sed -i "s/utf8/utf8mb4/g" wp-config.php
```

This downloads and extracts WordPress and setup the database. 
Also blocks `/xmlrpc.php` because it's a common DoS attack.

  </TabItem>
  <TabItem value="codeigniter" label="CodeIgniter">

```yaml
source: clear
root: public_html/public
nginx:
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
- composer install --no-dev --no-progress --optimize-autoloader
```

This set up a fresh CodeIgniter 4 project and creates a MySQL database.

  </TabItem>
  <TabItem value="laravel" label="Laravel">

```yaml
source: clear
root: public_html/public
features:
- mysql
nginx:
  fastcgi: on
  locations:
  - match: /
    try_files: $uri $uri/ /index.php$is_args$args
commands:
- composer create-project laravel/laravel .
- mv .env.example .env
- sed -i "s/DB_HOST=127.0.0.1/DB_HOST=localhost/g" .env
- sed -ri "s/DB_DATABASE=.*/DB_DATABASE=${DATABASE}/g" .env
- sed -ri "s/DB_USERNAME=.*/DB_USERNAME=${USERNAME}/g" .env
- sed -ri "s/DB_PASSWORD=.*/DB_PASSWORD=${PASSWORD}/g" .env
- sed -ri "s/APP_URL=.*/APP_URL=https:\/\/${DOMAIN}/g" .env
- composer install --no-dev --no-progress --optimize-autoloader
- php artisan migrate:fresh
- php artisan key:generate
- php artisan storage:link
```

This set up a fresh Laravel project and creates a MySQL database.

  </TabItem>
</Tabs>

Let's extract those recipes meaning individually.

## NginX Setup 

### FastCGI on

```yaml
nginx:
  fastcgi: on
```

This configuration enables FastCGI (PHP Processing) on Nginx. 
Without this, NginX will serve PHP files as static files.

If you have multiple directory setup, it's important to write `fastcgi: on`
where the directory should also serve PHP files, for example:

```yaml
nginx:
  locations:
  - match: /admin/
    root: public_app/public
    fastcgi: on
  fastcgi: on
```

If you curious, the `fastcgi: on` internally represents as this in NginX configuration:

```conf
location ~ \.php$ {
    fastcgi_pass   unix:/path/to/socket/file.sock;
}
```

### Rewrite root directory

```yaml
root: public_html/public
```

The default root directory is `public_html`, where app files are extracted from recipes.
Some modern frameworks like Laravel and CodeIgniter put static files inside `public` folder
to avoid leaking bare `*.php` files be accessed maliciously and creates RCE attack.

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
here is to instruct Nginx to try to serve the root `/index.php` file in case no static files found
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

You can read more about putting Laravel in subfolder using NginX in this [StackOverflow answer](https://stackoverflow.com/a/62965174/3908409).

## PHP version setup

The default PHP version is `7.4`, which is the default provided from the OS.

To change PHP version used in PHP-FPM to the latest one, put this in runner:

```yaml
features:
- php latest
```

You can also use a fixed PHP version: `php 5.6`, `php 7.4`, `php 8.0`, `php 8.1`.

Unfortunately you can't use custom PHP version other than provided because it's tied to system daemon. 
We always update the list to the latest supported version or latest major version starting from PHP 5.

Support for PHP extensions is varies but you can request a ticket to be included, provided the extension 
is provided officially by PHP (with notable exception: `xdebug`).

*(Coming soon)* when PHP version is fixed, it's also changing the `php` and `composer` version it used.
This is done using PATH manipulation. Alternatively, you can call the alternative `php` version using 
`php81`, `php80`, `php56`, etc.

## Composer install

Composer is installed automatically. Note that the good recommendation install packages is:

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

The error logs can be seen in `Nginx Error Logs` in Virtualmin web UI. 
You won't see error details in your website because we use production default settings.

If you want to see the error details in website (not recommended!), change this setting in `.user.ini`:

```ini title="~/public_html/.user.ini"
display_errors = 1
```

## Restarting PHP

PHP doesn't need restart. Changing PHP files instantly changes the running server code.

The PHP-FPM instance itself is running as `ondemand` and goes inactive after 5 minutes of no traffic.
