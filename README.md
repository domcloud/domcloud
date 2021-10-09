# Welcome to DOM Cloud Documentation

We use GitHub for [Issue Tracking](https://github.com/domcloud/domcloud-io/issues) and [Discussions](https://github.com/domcloud/domcloud-io/discussions). For private inquiries please send an email to [support@domcloud.id](mailto:support@domcloud.id).

## What is DOM Cloud? And why?

It's a platform-as-a-service to host your content to the internet using shared virtual machine. Basically, DOM Cloud is similar like hosting providers out in the wild, but very customizable to modern apps.

DOM Cloud servers is available in NYC (New York City), SGA (Singapore), JPN (Japan). All servers have default domain to `*.domcloud.io`.

<details>

<summary>More explanations....</summary>

For an overview, DOM Cloud let's you to:

+ Host PHP or Non-PHP web apps
+ Manage MySQL or PostgreSQL Database
+ Run an existing web apps using script deployments
+ Sync your deployed web app with GitHub

To understand why DOM Cloud exist, we need to compare with existing hosting solutions...


### Comparing with shared hosting providers

Existing shared hosting solutions like GoDaddy or BlueHost or many other solutions similarly uses Apache (or \[Open\]LiteSpeed). Apache thrives in hosting businesses because the portability of configuration files in form of `.htaccess` files. It was true that Apache was a common choice, but nowadays, it has been surpassed with NginX.

NginX delivers better performance and simplicity of configuration for modern websites. In Apache era, PHP was the obvious choice to go with website development, especially with WordPress which what powers 37% of the internet. But today, we have things build with variety of languages like Node.JS, Ruby, Go or Python. NginX now is go to for these, and around 2019, NginX surpasses global usage over Apache.

Unlike common hosting providers, DOM Cloud uses NginX and can host your non-PHP apps even for free. Even better, you can also use Postgres over MariaDB (MySQL) if you prefer that (we support both).

### Comparing with serverless hosting providers

Serverless hosting providers like Vercel or Netlify is superior in web performance because it can be replicated across the globe. However with those replication ability, the web server has to be "stateless" or "immutable", which means you can't use local files for anything and persistent connection like WebSocket is simply impossible. Also, serverless deployments from AWS has a moderate server size limit of 256 MB.

This is mostly fine for modern languages, but for old languages which very reliant with file operations like PHP, it's very tricky to get to work. Essentially you also have to rely on external solutions to store database or even data sessions. Depending on the scale of your project, serverless maybe the right choice, or maybe not.

DOM Cloud is a shared hosting solution and *statelessness* or *immutability* is not a requirement. You can examine and edit files in place, setup a cron job, or perform quick debug with SSH in production.


### Comparing about Uptime and Quality

Warning: This section is solely my opinion.

TODO

</details>

<br>

## Feature Pricing

DOM Cloud features a free plan where you can try for up to 256 MB storage size. To unlock for additional size or custom domain you can subscribe for as low as 5 USD a year. See our pricing page for more details.

<details>

<summary>More explanations....</summary>

Here's quick table for reference:

| Feature | Freedom | Lite | Pro | Super | Ultimate |
|---|:-:|:-:|:-:|:-:|:-:|
| Storage | 256 MB | 1 GB | 4 GB | 7 GB | 10 GB |
| Bandwidth | 12 GB | 45 GB | 150 GB | 450 GB | 1500 GB |
| Database | 1 | 3 | 10 | 25 | 50 |
| Custom Domain | ⛔ | ✅ | ✅ | ✅ | ✅ |
| Subserver Max | ⛔ | ⛔ | 8 | 25 | 50 |
| Multi Account | ⛔ | ⛔ | ⛔ | 25 | 50 |

The free plan has no time limit. However to prevent spam you have to reactivate every two months by logging in to portal and perform extension.


### What are benefits of using paid Plans?

Paid plans is available to purchase using PayPal, and using these gains your hosting additional features:
+ No more 2 month limit expiration
+ Can use any custom domain you want
+ DNS feature can be turned on
+ Can purchase additional network bandwidth
+ Can never be accidentally deleted (until it expires)


### Can I switch plan later?

Yes, you can upgrade from free plan to any paid plan anytime. You can also upgrade or purchase additional bandwidth quota after you bought your initial plan.

However, during your paid plan term, you can't downgrade unless it's nearly expiring (in under 1 month). For technical reasons right now you can't ever go back to free plan if you have already purchased a paid plan before.

</details>

## Setup with Script Runner

The runner is the core feature in DOM Cloud. It let's you to perform automatic configuration all by convenience of a single script.

For common script deployments, you don't have to write it yourself. You can start from existing templates in [the homepage](https://domcloud.io/#templates) or [template repository](https://github.com/domcloud/dom-templates).

We make it as simple as possible to understand. And better, our runner script is open sourced. More in depth explanation is available in the repository page.

<details>
<summary>More explanations....</summary>

The script runner is in YAML format. For example to create a new WordPress instance:

```yaml
source:
  url: https://wordpress.org/latest.zip
  directory: wordpress
features: [mysql, ssl]
nginx:
  ssl: enforce
  fastcgi: on
  locations:
  - match: /
    try_files: $uri $uri/ /index.php$is_args$args
commands:
- cp wp-config-sample.php wp-config.php
- sed -i "s/database_name_here/${DATABASE}/g" wp-config.php
- sed -i "s/username_here/${USERNAME}/g" wp-config.php
- sed -i "s/password_here/${PASSWORD}/g" wp-config.php
- sed -i "s/utf8/utf8mb4/g" wp-config.php
```

With a quick look, you can tell that it will download `https://wordpress.org/latest.zip` extracting and moving it out of `wordpress` directory, then creating a mysql database and signing SSL certificate, also configuring the correct NginX record for WordPress and perform quick `sed` operations to inject database credentials directly to the config files.

Here's what you can configure:

---

### `source`

Type: `string` or `object`. If it a string, it will be the `url`.

If this value is set, it will download contents inside the host. The content can be either a ZIP file or a Git repository (to perform clone).

> CAUTION: This action will **overwrite** all contents inside the host.

#### `url`
The zip (or clone) URL to download. Required.

#### `type`
To `extract` a ZIP file or `clone` a repo. If omitted, it autodetects whether it is a `github.com` or `gitlab.com` URL and perform `clone` instead of `extract`.

#### `directory` (`type: clone` only)
Specify the folder name to move out of ZIP file after extraction. This also can be specified from `url`'s hash. If omitted, no move operation performed.

> For legacy reason, a `directory` in root config will works too, it will be converted as `source.directory`.

#### `branch` (`type: extract` only)
Specify the clone branch to get checked out. This also can be specified from directory or `url`'s hash. If omitted, the default branch is checked out.

#### `shallow` (`type: extract` only)
Do shallow clone? Default to `true`. It is recommended to leave it that way to keep `.git` internal size low.

---

### `features`

Type: Array of `string` or `object`. If one item is a string, it will be converted to object (.e.g. `mysql on` become `{ mysql: on }`).

This configures all features available for the host in DOM Cloud.

#### mysql

Configure MariaDB (MySQL).

+ `mysql` or `mysql on` Enable MariaDB and create default DB.
+ `mysql create <dbname>` Create a new database with `<dbname>`.
+ `mysql drop <dbname>` Drop a database with `<dbname>`.
+ `mysql off`. Disables `mysql` feature. **Caution: Also drop all DB  permanently**.

#### postgresql

Configure PostgreSQL.

+ `postgresql` or `postgresql on` Enable PostgreSQL and create default DB.
+ `postgresql create <dbname>` Create a new database with `<dbname>`.
+ `postgresql drop <dbname>` Drop a database with `<dbname>`.
+ `postgresql off`. Disables `postgresql` feature. **Caution: Also drop all DB permanently**.

#### dns

Configure BIND DNS Server.

+ `dns` or `dns on` Enable DNS server.
+ `dns add <type> <value>` Add a record.
+ `dns rem <type> <value>` Deletes a record.
+ `dns off`. Disables `dns` feature. **Caution: Also clears all DNS records**.

DNS records for child server is handled automatically.

#### firewall

Configure Whitelist Firewall.

+ `firewall on` or `firewall` Enable firewall.
+ `firewall off` Disable firewall.

Firewall is an additional protection to make sure the host won't send any outgoing request not defined in the [whitelist](). It's recommended for any host who doesn't use any third-party API.

**Please note due to obvious PHP weakness in security, it's mandatory to turn on this feature for WordPress or any weakly protected PHP server**.

#### ssl

Attempt to renew SSL certificate.

#### root

Set directory root path.

#### php

Set PHP (FastCGI) version. Available options:

+ `php 5.6`
+ `php 7.4` (default)
+ `php 8.0`

Remember that `php 8.x` is an active release. It will automatically get incremented over time.

#### node

Install specific NodeJS version.

By default it's Node 14.x

#### python

Install specific Python version.

By default it's Python 3.6

#### ruby

Install specific Ruby version.

By default it's Ruby 2.7


---

### `nginx`

Type: `object`.

This is the NGINX configuration for a given host.

#### `ssl`

HTTPS options: `on` (default), `enforce` (always redirect HTTP to HTTPS), `off` (not recommended).

#### `fastcgi`

Whether to enable or not enable PHP file execution: `on` or `off`. If omitted, `off` is the default.

If you set this to `on`, please consider to turn the [`firewall`](#firewall) on.

You can override PHP settings via the `.user.ini` file in the document root. Once changed it will not change immediately due to cache, but usually takes no more than 5 minutes.

#### `error_pages`

List of error pages command. It's particularly useful for static websites. Read on [the NGINX docs](http://nginx.org/en/docs/http/ngx_http_core_module.html#error_page).

+ `404 /404.html`: Show `404` error page as `404.html`.
+ `404 =200 /200.html`: Assume `404` error as 200 OK and show `200.html` (SPA).
+ `500 502 503 504 /50x.html`: Show `50x` error as `50x.html`.

### `passenger`

If you want to run Non-PHP apps, you need to setup with passenger phusion.
To enable non-PHP apps, at minimum you need these configuration:

```yaml
root: public_html/public
passenger:
  enabled: on
  app_start_command: node server.js --port=$PORT
```

The configuration above will execute `node server.js --port=$PORT` in the parent of root folder (in this case, `~/public_html`). Note that you need to pass the `$PORT` and use that as the port where your app is listening to. If your app accept port from environment instead you can use env like `env PORT=$PORT node server.js`.

For custom environment values you can use `app_envs` but it's recommended to write directly to `~/.env` instead.

To restart a non-PHP apps you can execute `passenger-config restart-app /`.

Available options:

+ `enabled`: (`on` or `off`)
+ `app_envs`: array of environments
+ `app_start_command`: Passenger GLS command
+ `app_type`: Type of App (for non GLS)
+ `startup_file`: Startup filename (for non GLS)
+ `ruby`: Ruby path (for non GLS)
+ `nodejs`: Nodejs path (for non GLS)
+ `python`: Python path (for non GLS)
+ `meteor_app_settings`: Meteor path (for non GLS)
+ `friendly_error_pages`: (`on` or `off`)
+ `document_root`: path to public document root (default is `root`)
+ `base_uri`: base URL
+ `app_root`: path to app root (default is parent of `root`)
+ `sticky_sessions`: (`on` or `off`) enable this for websocket support

### `locations`

Array objects which one or more of:

+ `match`: Matching URL location (required)
+ `root`: Root path (relative to `~`)
+ `alias`: Alias path (relative to `~`)
+ `rewrite`: Rewrite URL directive
+ `try_files`: Try files URL directive
+ `return`: Return code directive
+ `fastcgi`: (same as above)
+ `passenger`: (same as above)

---

### `commands`

Type: array of `string`.

List of SSH commands in sequence. The starting directory is always `~/public_html`. If any exit code detected to be not zero, the execution chain stop.

This is where all the things you usually put after the execution of `source`. Things like installing depedencies, bundling frontend or injecting database credential.

One of examples which good for production environment will be:

#### Installing depedencies

+ PHP `composer.json`: `composer install --no-dev --no-cache --optimize-autoloader`
+ NodeJS `package.json`: `npm ci` or `yarn install --freeze-lockfile`
+ Python `requirements.txt`: `pip install --no-cache-dir --user -r requirements.txt`
+ Ruby `gem.bundle`: `bundle install --without development test`

</details>


## Manage servers with Virtualmin Panel

TODO

## Troubleshooting

For PHP, Error logs is available in error logs provided by Virtualmin.

For Non-PHP (via Phusion Passenger), error logs is not available but if your app is failed to start up, a nice detailed explanation for the crash is available.

<details>
<summary></summary>

### Website down `ERR_NAME_NOT_RESOLVED`

This means that there is a problem with the DNS system. If you are using DOM Cloud make sure:

+ Has fulfilled the requirements / required documents (including email confirmation) from the Registrar.
+ Already pointing the Name Server correctly (scroll up if not already).
+ The DNS feature for the server is turned on (set up via webmin).
+ The A / CNAME records for the intended domain are correct.

You can [contact us](mailto:support@domcloud.id) if it is still not correct.

### HTTPS Error `ERR_CERT_AUTHORITY_INVALID`

This means that your SSL certificate has not been set or has expired. To update it please [scroll up](#how-to-renew-ssl).

If you encounter `ERR_CERTIFICATE_TRANSPARENCY_REQUIRED` after an SSL update, you don't need to panic because of an error due to cache and it will disappear in a few minutes.

### Nginx Error `403 Forbidden` page

This means that NGINX cannot access the file due to a linux mode setting error in the file. In order to fix this easily you can run this on SSH:

`` bash
chmod -R 750 ~/
``

### Nginx Error page `404 Found`

There are 2 possibilities:

+ If this happens for all page URLs, chances are you forgot to set NGINX to [setup index.php](#how-to-install-php-framework) or [turn on passenger mode](#passenger) for non-PHP.
+ If this happens for only a few files, there may be errors such as typo in the URL, wrong Base URL or not paying attention to the file name size.


### Blank page `HTTP Error 500`

This means that there is an error in your PHP, but unlike XAMPP, PHP by default will not raise an error on the website.

You have 2 options for viewing the error:
+ Via Webmin > Logs and Reports > Nginx Error Log
+ [Set in .user.ini](#fastcgi): `display_errors = On`

### Nginx Error `502 Bad Gateway` page

It is possible that the file you uploaded is too large or the PHP script you are running is taking too long. You can fix this via [.user.ini](#fastcgi) file.

</details>