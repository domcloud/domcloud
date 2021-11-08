---
layout: docs
---
## Troubleshooting

For PHP, Error logs is available in error logs provided by Virtualmin.

For Non-PHP (via Phusion Passenger), error logs is not available but if your app is failed to start up, a nice detailed explanation for the crash is available.

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
