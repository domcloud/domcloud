---
layout: docs
---

# Tips and Troubleshooting

## Common Tips and Good Practices

#### Portal

+ The runner script is available as the alternative way to manage things in Virtualmin, even for things that didn't available there, like configuring NginX or Firewall.
+ The runner script is capable to be triggered with GitHub Actions CI, useful for auto-syncing host code with GitHub repo.
+ We don't serve email transactions, however you can use third-party

#### NginX

+ Use `ssl: enforce` to redirect all insecure traffic to secure one.
+ NginX alone is capable of creating `E-Tag` cache to speed up static files delivery.
+ If you use Cloudflare, and you happen to get infinite redirection, please turn off the SSL proxy in Cloudflare.
+ We have built-in bursted rate-limit of 50 requests for 3 requests/seconds in each IP address.

#### PHP-FPM

+ You can choose PHP version either from Virtualmin or runner script.
+ To configure `php.ini`, create `.user.ini` file in the public root path.
+ Default upload size is `8MB`, increase it by set `upload_max_filesize` and `post_max_size` in `php.ini`.
+ Any fatal error in PHP will result in blank `500` error. You can enable error reporting by set `display_errors` to 1 in `php.ini`, but this is not recommended.
+ When installing depedencies with composer, use `--no-cache` to avoid wasted storage by caches.

#### Python

+ `python` and `pip` is referred as latest Python 3. We have no support of Python 2.
+ When installing depedencies with pip, always use `--user` otherwise you will get install error because of sudo requirements.

#### Passenger Phusion

+ Passenger Phusion Node.JS looks for `app.js`, `passenger_wsgi.py` or `config.ru` in parent of root path to start the app.
+ The GLS feature from Passenger Phusion can start any app, even binary files, provided you pass `$PORT` correctly.
+ Passenger Phusion Node.JS works with CJS. If your project use ESM you need to use GLS.
+ Passenger Phusion will be activated if `passenger_enabled on` and no files present in destination path.
+ You can tell if Phusion is serving a file by checking `server: nginx + Phusion Passenger` HTTP header.
+ Static files is often better to be handled within NginX alone to make use of `E-Tag` cache.
+ You can add environment variables by writing in `~/.env` (and use commands like this: `export NODE_ENV=production`)


## Common Errors Troubleshooting

For PHP, Error logs is available in error logs provided by Virtualmin.

For Non-PHP (via Phusion Passenger), error logs is not available but if your app is failed to start up, a nice detailed explanation for the crash is available.

#### Website down `ERR_NAME_NOT_RESOLVED`

This means that there is a problem with the DNS system. If you are using DOM Cloud make sure:

+ Has fulfilled the requirements / required documents (including email confirmation) from the Registrar.
+ Already pointing the Name Server correctly (scroll up if not already).
+ The DNS feature for the server is turned on (set up via webmin).
+ The A / CNAME records for the intended domain are correct.

You can [contact us](mailto:support@domcloud.id) if it is still not correct.

#### HTTPS Error `ERR_CERT_AUTHORITY_INVALID`

This means that your SSL certificate has not been set or has expired. To update it please [scroll up](#how-to-renew-ssl).

If you encounter `ERR_CERTIFICATE_TRANSPARENCY_REQUIRED` after an SSL update, you don't need to panic because of an error due to cache and it will disappear in a few minutes.

#### Nginx Error `403 Forbidden` page

This means that NGINX cannot access the file due to a linux mode setting error in the file. In order to fix this easily you can run this on SSH:

`` bash
chmod -R 750 ~/
``

#### Nginx Error page `404 Found`

There are 2 possibilities:

+ If this happens for all page URLs, chances are you forgot to set NGINX to [setup index.php](#how-to-install-php-framework) or [turn on passenger mode](#passenger) for non-PHP.
+ If this happens for only a few files, there may be errors such as typo in the URL, wrong Base URL or not paying attention to the file name size.


#### Blank page `HTTP Error 500`

This means that there is an error in your PHP, but unlike XAMPP, PHP by default will not raise an error on the website.

You have 2 options for viewing the error:
+ Via Webmin > Logs and Reports > Nginx Error Log
+ [Set in .user.ini](#fastcgi): `display_errors = On`

#### Nginx Error `502 Bad Gateway` page

It is possible that the file you uploaded is too large or the PHP script you are running is taking too long. You can fix this via [.user.ini](#fastcgi) file.

#### "Connection Refused" from server HTTP request

You need to turn off the firewall.
