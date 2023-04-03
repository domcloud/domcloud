---
layout: docs
title: The System Runner
---

# The Runner

The runner is the core feature in DOM Cloud. It let's you to perform automatic configuration all by convenience of a single script. It's also a CI (Continous Integration) tool that perform some tasks inside your website.

For common script deployments, you don't have to write it yourself. You can start from existing recipes from [the deployment page](../deployment/index.md) or [recipe repository](https://github.com/domcloud/recipes).

We make it as simple as possible to understand. We also make our runner script [open sourced](https://github.com/domcloud/bridge) so you take a better view of how it works if you want that.

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


## `source`

Type: `string` or `object`. If it a string, it will be the `url`.

If this value is set, it will download contents inside the host. The content can be either a ZIP file or a Git repository (to perform clone).

> CAUTION: This action will always **overwrite** all contents inside the host.

### `url`
The zip (or clone) URL to download. Required.

### `type`
To `extract` a ZIP file or `clone` a repo. If omitted, it autodetects whether it is a `github.com` or `gitlab.com` URL and perform `clone` instead of `extract`.

### `directory` (`type: extract` only)
Specify the folder name to move out of ZIP file after extraction. This also can be specified from `url`'s hash. If omitted, no move operation performed.

> For legacy reason, a `directory` in root config will works too, it will be converted as `source.directory`.

### `branch` (`type: clone` only)
Specify the clone branch to get checked out. This also can be specified from directory or `url`'s hash. If omitted, the default branch is checked out.

### `shallow` (`type: clone` only)
Do shallow clone? Default to `true`. It is recommended to leave it that way to keep `.git` internal size low.

### `submodules` (`type: clone` only)
Do Recursive clone of submodules? Default to `false`.

---

## `features`

Type: Array of `string` or `object`. If one item is a string, it will be converted to object (.e.g. `mysql on` become `{ mysql: on }`).

This configures all features available for the host in DOM Cloud.

### `mysql`

Configure MariaDB (MySQL) Database Server.

+ `mysql` or `mysql on` Enable MariaDB and create default DB.
+ `mysql create <dbname>` Create a new database with `<dbname>`.
+ `mysql drop <dbname>` Drop a database with `<dbname>`.
+ `mysql off`. Disables `mysql` feature. **Caution: Also drop all DB  permanently**.

### `postgresql`

Configure PostgreSQL Database Server.

+ `postgresql` or `postgresql on` Enable PostgreSQL and create default DB.
+ `postgresql create <dbname>` Create a new database with `<dbname>`.
+ `postgresql drop <dbname>` Drop a database with `<dbname>`.
+ `postgresql off`. Disables `postgresql` feature. **Caution: Also drop all DB permanently**.

### `dns`

Configure BIND DNS Server.

+ `dns` or `dns on` Enable DNS server.
+ `dns add <type> <value>` Add a record.
+ `dns rem <type> <value>` Deletes a record.
+ `dns off`. Disables `dns` feature. **Caution: Also clears all DNS records**.

You can add multiple records with lists. For example:

```yaml
features:
- dns:
  - add a sub-a 1.2.3.4
  - add aaaa sub-a 1.2.3.4
  - add cname sub-b example.net.
  - add cname sub-c example.net.
```

DNS records for child server is handled automatically.

:::info

When applying CNAME, looks out for the trailing dot (`.`) at the end of CNAME values. 

It is required to specify the root domain, otherwise it will be appended with the parent domain.

:::

### `firewall`

Configure Whitelist Firewall.

+ `firewall on` or `firewall` Enable firewall.
+ `firewall off` Disable firewall.

Firewall is an additional protection to make sure the host won't send any outgoing request not defined [in the whitelist](https://github.com/domcloud/bridge/blob/main/src/whitelist/sites.conf). 

It's intended for use of hosts with [low security measures](https://github.com/domcloud/domcloud/issues/10). It's recommended for any host who doesn't use any third-party API.

:::caution

Please note due to obvious PHP weakness in security, it's mandatory to turn on this feature for WordPress or any weakly protected PHP server.

:::


### `ssl`

Attempt to renew SSL certificate with Let's Encrypt.

### `root`

Set directory root path. This also changes the `root` directive in NginX config.

:::info
Because of legacy reason, this is also available in root config.
:::

### `php`

Set PHP (FastCGI) version. Available options:

+ `php 7.4` (default)
+ `php 8.0`
+ `php 8.1`
+ `php latest`

Remember that `php 8.x` is an active release. It will automatically get incremented over time.

This also sets the `php` (and `composer`) to the right version in CLI/SSH.

### `node`

Install specific NodeJS version. Available options:

+ `node` or `node lts`
+ `node latest`
+ `node beta`
+ `node x.y.z`

By default it's Node 14.x provided from system.

This also sets the `node` (and `npm`, `yarn`, etc.) to the right version in CLI/SSH.

### `python`

Install specific Python version. Available options:

+ `python` or `python latest`
+ `python x.y`
+ `python x.y.z`

By default it's Python 3.6 provided from system.

This also sets the `python` (and `pip`) to the right version in CLI/SSH.

### `ruby`

Install specific Ruby version. Available options:

+ `ruby` or `ruby latest`
+ `ruby x.y.z`

By default it's Ruby 2.7 provided from system.

---

## `nginx`

Type: `object`.

This is the NGINX configuration for a given host.

All configurations below are not preserved at each config update. It's recommended to use the `NGINX` tab in the dashboard to reconfigure NGINX.

### `ssl`

HTTPS options: `on` (default), `always` (always redirect HTTP to HTTPS), `off` (not recommended).

### `fastcgi`

Whether to enable or not enable PHP file execution: `on` or `off`. If omitted, `off` is the default.

You can override PHP settings via the `.user.ini` file in the document root. Once changed it will not change immediately due to cache, but usually takes no more than 5 minutes.

### `error_pages`

List of error pages command. It's particularly useful for static websites. Read on [the NGINX docs](http://nginx.org/en/docs/http/ngx_http_core_module.html#error_page).

+ `404 /404.html`: Show `404` error page as `404.html`.
+ `404 =200 /200.html`: Assume `404` error as 200 OK and show `200.html` (SPA).
+ `500 502 503 504 /50x.html`: Show `50x` error as `50x.html`.

---

## `passenger`

If you want to run Non-PHP apps, you need to setup with [Passenger Phusion](https://www.phusionpassenger.com/). Passenger is an additional layer on top of NGINX to run any non-PHP apps.

To enable non-PHP apps, at minimum you need these configuration:

```yaml
root: public_html/public
nginx:
  passenger:
    enabled: on
    app_start_command: node server.js --port=$PORT
```

The configuration above will execute `node server.js --port=$PORT` in the parent of root folder (in this case, `~/public_html`). Note that you always need to pass the `$PORT` and use that as the port where your app is listening to. If your app accept port from environment instead you can use env like `env PORT=$PORT node server.js`.

For custom environment values you can leverage `app_env` and `env_var_list`.

To restart a non-PHP apps you can execute `passenger-config restart-app /` in CLI/SSH. You can also make it [always restart](https://www.phusionpassenger.com/library/admin/apache/restart_app.html#restart-txt) if you have to.

Available options:

+ [`enabled`](https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_enabled): `on` or `off` (default)
+ [`app_env`](https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_app_env): environment setup. Either `production` (default) or `development`.
+ [`env_var_list`](https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_env_var): array of environment values in the format of `KEY=VALUE`.
+ [`app_start_command`](https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_app_start_command): [Passenger GLS](https://www.phusionpassenger.com/docs/advanced_guides/gls/) command to start the app with `$PORT` as the port where your app is listening to.
+ [`friendly_error_pages`](https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_friendly_error_pages): `on` (default) or `off`
+ [`base_uri`](https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_base_uri): base URL for the app (default is `/`).
+ [`sticky_sessions`](https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_sticky_sessions): `on` or `off` (default). Enable this for websocket support.
+ [`document_root`](https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_document_root): path to public document root (default is `root`). This value is relative to the user `$HOME` folder.
+ [`app_root`](https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_app_root): path to app root (default is parent of `root`). This value is relative to the user `$HOME` folder.

For non-GLS these options are available too:
+ `app_type`: Type of App
+ `startup_file`: Startup filename
+ `ruby`: Ruby path
+ `nodejs`: Nodejs path
+ `python`: Python path 
+ `meteor_app_settings`: Meteor path

:::info

[GLS (Generic Language Support)](https://www.phusionpassenger.com/passenger6) is a cool concept where you can run any language or binaries within NginX with the help of Passenger. It's recommended to use GLS instead of the non-GLS options.

:::

## `locations`

Array objects which one or more of:

+ `match`: Matching URL location (required)
+ `root`: Root path (relative to `$HOME`)
+ `alias`: Alias path (relative to `$HOME`)
+ `rewrite`: Rewrite URL directive
+ `try_files`: Try files URL directive
+ `return`: Return code directive
+ `fastcgi`: (same as above)
+ `passenger`: (same as above)

Please read [NGINX Location directive](http://nginx.org/en/docs/http/ngx_http_core_module.html#location) for more information.

:::info

`proxy_pass`, although it's popular, we're not supporting it because it's not a good practice to use it in a shared servers. You must use `passenger` instead.

:::

---


## `commands`

Type: array of `string`.

List of SSH commands in sequence. The starting directory is always `~/public_html`. If any exit code detected to be not zero, the execution chain stop.

This is where all the things you usually put after the execution of `source`. Things like installing depedencies, bundling frontend or injecting database credential.

The list of commands is always executed after the `source` and `features` and before `nginx` and `root` list.

#### Builtin envar for commands

Aside with the usual SSH commands, it does have an additional envar to help with scripting:

+ `$USERNAME`: The username.
+ `$DATABASE`: The database name (usually `${USERNAME}_db` but can be changed if new database name is supplied before).
+ `$PASSWORD`: The user login password.
+ `$DOMAIN`: The domain name.

These envars also will be set:

+ `CI=true`
+ `CONTINUOUS_INTEGRATION=true`
+ `DEBIAN_FRONTEND=noninteractive`
+ `LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8`

#### Builtin Git Credentials

If you have logged in with GitHub with repo access, an envar `$GITHUB_TOKEN` will be available for you to use. Together with Git Credentials API, it will grant the access to your private repos along with all `git` commands run from the Runner.

This is useful for cloning or pulling private repos after a webhook is received, for example.

:::caution

This does have security implication and we have taken some security measures to prevent leaks. For example, since it's provided within envar, you `git` commands will break if run within SSH. That's because its doesn't saved anywhere in the server.

We doesn't prevent you, for example to run `echo $GITHUB_TOKEN` in the `commands` list and use it as the token used for SSH session. But we do recommend you to not do that.

:::

#### Time limit

The time limit for overall script in single run is 10 minutes. If it's exceeded, the execution chain will automatically stop.

---

## `subdomains` and `subdomain`

`subdomains` is used to run specific commands for a given `subdomain` name. It's an array of objects with `subdomain`, some of the `features` and `commands` keys.
