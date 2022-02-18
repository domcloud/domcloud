---
layout: docs
---

## Setup with Script Runner

The runner is the core feature in DOM Cloud. It let's you to perform automatic configuration all by convenience of a single script.

For common script deployments, you don't have to write it yourself. You can start from existing templates in [the homepage](https://domcloud.io/#templates) or [template repository](https://github.com/domcloud/dom-templates).

We make it as simple as possible to understand. And better, our runner script is [open sourced](https://github.com/domcloud/dom-next-rootkit). More in depth explanation is available in the repository page.

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

Actually you don't have to understand them right now. If you used some popular software or framework, you can use the [template repository](https://github.com/domcloud/dom-templates).

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

#### `directory` (`type: extract` only)
Specify the folder name to move out of ZIP file after extraction. This also can be specified from `url`'s hash. If omitted, no move operation performed.

> For legacy reason, a `directory` in root config will works too, it will be converted as `source.directory`.

#### `branch` (`type: clone` only)
Specify the clone branch to get checked out. This also can be specified from directory or `url`'s hash. If omitted, the default branch is checked out.

#### `shallow` (`type: clone` only)
Do shallow clone? Default to `true`. It is recommended to leave it that way to keep `.git` internal size low.

#### `submodules` (`type: clone` only)
Do Recursive clone of submodules? Default to `false`.

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


