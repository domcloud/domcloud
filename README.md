# DOM Cloud

Welcome to the DOM Cloud! Innovative hosting provider that you can start for free.

We use GitHub for [Issue Tracking](https://github.com/domcloud/domcloud-io/issues) and [Discussions](https://github.com/domcloud/domcloud-io/discussions). For private inquiries please send an email to [support@domcloud.id](mailto:support@domcloud.id).

## Service FAQ

### Who is the person behind DOM Cloud?

[I, myself](https://github.com/willnode).

### Using what server and where?

DOM Cloud uses servers from [Digital Ocean](https://m.do.co/c/facab6f3ac67) and currently serves servers located:

+ New York City [nyc.domcloud.id] with the default domain *.domcloud.io
+ Singapore [sga.domcloud.id] with the default domain *.dom.my.id

### Is it really free?

Yes. The Freedom package is a free plan, has a capacity of 256 MB and bandwidth of 1 GB per month. Your free website will not expire as long as you renew the expiration period at least once every 2 months.

If you want more, you can [subscribe to another plan](https://domcloud.io/price), it applies per hosting or website:

| Feature | Freedom | Lite | Pro | Super | Ultimate |
|---|:-:|:-:|:-:|:-:|:-:|
| Storage | 256 MB | 1 GB | 4 GB | 7 GB | 10 GB |
| Bandwidth | 12 GB | 45 GB | 150 GB | 450 GB | 1500 GB |
| Database | 1 | 3 | 10 | 25 | 50 |
| Custom Domain | ⛔ | ✅ | ✅ | ✅ | ✅ |
| Subserver Max | ⛔ | ⛔ | 8 | 25 | 50 |
| Multi Account | ⛔ | ⛔ | ⛔ | 25 | 50 |

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

### What is the difference between DOM Cloud and Other Hosting Providers?

DOM Cloud uses NGINX as a webserver, Virtualmin as a panel manager, supports two types of databases (MySQL / MariaDB or PostgreSQL), supports PHP and other languages (Python, Node.JS, Ruby, Go) via Phusion Passenger, uses optimal configuration by default ( HTTP / 2.0, GZip, TLS v1.3, HTTP Etag Cache), supports FTP and SSH as well as online interfaces (Webmin File Manager, PhpMyAdmin / PhpPgAdmin and Web SSH), minimum marketing and can be used for free for anyone.

Compared to other hosting providers, most of them still use Apache, only support MySQL, only support PHP, raw web configuration, don't support SSH, lots of advertising or marketing elements and have no free or trial options before buying.

Although serving domain purchases, DOM Cloud does not serve email, because email itself is at high risk of being exposed to spam or blacklists. You can use [ForwardEmail](https://forwardemail.net) or [SendinBlue](https://sendinblue.com) as an alternative to free email services.

### Why is it so cheap?

DOM Cloud does not have permanent staff, and does not have a dedicated server, so all the benefits taken from the DOM Cloud are only used to replace the costs of the servers used.

Because it is only handled by one person, all services are carried out automatically, including the registration process, transfers, reminders, payments, and even deletion of accounts. You should be able to do all of this independently on the portal.

### Is my data safe?

Your data will be safe on the server as long as you do not tell your hosting password to others. Even though you are on a shared server hosting, one account cannot open other account data because of the way Linux file permissions work at the kernel level.

Then what about us? We have explained earlier, DOM Cloud does not have special staff. Nobody can access the server under root access except myself, and I myself have no interest in searching the contents of the server unless a fatal or emergency occurs (eg a DoS attack or ToS breach).

Then what about the security of your own website? It is your duty to make your website safe from internet attacks. However, if you have already been hit by an attack that has damaged your server data (for example, RCE or SQL Injection) you can still ask for help to restore the server to the backup point before the fatal incident occurred.

### GDPR Compliance

You can delete all your hosting and account data right away if you want to. The only thing that leaves trail is your purchase information (if you ever happen to purchase anything from this service, anyway). Please see the [privacy section](https://domcloud.io/privacy) if you concerns what data is shared for third parties.

Unfornatunely, I don't have lawyers, I can't make sure if this 100% "GDPR Compliance". Please avoid this service if you're an european and want to doing serious business.

## Technical Tutorial FAQ

### How to Edit a Website?

You can log in via [portal](https://portal.domcloud.id/en/) and then open the "Login" tab. There you can see several types of login credentials to access:

+ **Webmin** to access the main hosting settings, including upload files, manage database access and DNS.
+ **FTP** to access files using an FTP application (such as FileZilla Client or WinScpy).
+ **Database** for database access using MySQL or PostgreSQL applications. You can also use the online editor PhpMyAdmin or PhpPgAdmin.
+ **SSH** for terminal access using SSH applications (such as OpenSSH Client or PuTTY) or SSH Online (using Web SSH).

### Is there any requirements need to considered when purchasing domain?

As with usual terms when you bought a domain, you need to provide a public information of your contact info or whoever is accountable with. This includes name, email, phone number and physical address. This is required in comply with WHOIS requirements that basically enforced during purchasing domains. 

For security reason your login email address will always be send as the owner of the domain. Because of this, you must make sure that your login email is active, as you need it later for confirming your email address as the owner for the first time.

During confirming your email for domain purchase, if you've been asked for Indonesian Citizen Number (NIK) along the way, you can leave it empty.

If you're not feeling safe purchasing domain from here, feel free to buy it from somewhere else instead.

### How to point a custom domain here?

You can add an CNAME record of your domain to `sga.domcloud.id` or `nyc.domcloud.id` (depending which server you're choosing).

### Can I change a server location of existing Hosting?

No, you can't do that. You have to manually migrate things using Webmin portal.

### What is the Deployment Feature?

This feature is used to adjust aspects that are not in Virtualmin. Among them:

+ Turn on SSL features or MySQL / PostgreSQL databases.
+ Set up NGINX Server including Document Root Address.
+ Installation of server applications via the bash script command.

You can learn about deployment syntax in the [dom-templates](https://github.com/domcloud/dom-templates/#readme) repo.

### How to renew SSL?

You can deploy `features: ['ssl']` and it will be updated very soon.

You can also do this via Webmin > Server Configuration > SSL Configuration.

### How to change PHP Version?

You can change it in Webmin > Server Configuration > PHP Options.

Available PHP versions: `5.6`,` 7.4` (default), `8.0`.

There are 2 PHP mode options namely `FastCGI` and `PHP-FPM` (default) but it is highly recommended that you do not change these default settings.

### How to install PHP Framework?

Nginx does not use `.htaccess` files.

Usually you need to install dependency composer `composer install` via SSH (if any) then center server on` index.php` in the root folder and set up the root folder accordingly.

```yml
root: public_html/public
nginx:
  locations:
  - match: /
    try_files: $uri $uri/ /index.php$is_args$args
```

The root path depends on the respective framework. For example WordPress or CI 3 uses `public_html` only while Laravel or CI 4 uses `public_html / public`.

Don't forget to delete the default `index.html`.

### How do I set PHP settings (php.ini)?

You can override PHP settings via the `.user.ini` file in the document root. Once changed it will not change immediately due to cache, but usually takes no more than 5 minutes.

### How do I install non-PHP applications?

After you have installed the required dependencies (eg `npm i` for Node.JS, `pip install` for Python, etc.), you can configure Nginx to load the application by:

```yml
root: public_html/public
nginx:
  passenger:
    enabled: on
```

From here Passenger will find a startup file like `app.js`,` passenger_wsgi.py` or `config_ru` inside` public_html`. If your project structure is not like this you can also use Passenger Generic Support Language (GLS) as follows:

```yml
root: public_html/public
nginx:
  passenger:
    enabled: on
    app_start_command: node app.js --port $PORT
    # here $PORT is a free port number,
    # set automatically by Passenger GLS
```

Runtime supported on DOM Cloud server:

| Applications | Description |
|---|---|
| `php` / `php74` / `composer` | PHP 7.4 |
| `php56` | PHP 5.6 |
| `php80` | PHP 8.0 |
| `python` / `pip` <br> `python3.8` / `pip3.8` | Python 3.8 |
| `python3` / `pip3` <br>  `python3.6` / `pip3.6` | Python 3.6 |
| `node` / `npm` | NodeJS 14 |
| `ruby` | Ruby 2.5 |
| `go` | Go 1.14 |
| `rustc` / `cargo` | Rust 1.47 |


Applications run through Passenger will continue to run until inactivated in 5 minutes. If you want to restart the server directly you can restart it via SSH:

```bash
passenger-config restart-app /
```

Learn more about Passenger settings at [official docs](https://www.phusionpassenger.com/docs/references/config_reference/nginx/).

### How do I add Environment Variables?
you can write it in `~ / .env` then write it like this:

```bash
export ENVIRONMENT='development'
export FOO='bar'
```
## Troubleshooting FAQ

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

+ If this happens for all page URLs, chances are you forgot to set NGINX to [setup index.php](#how-to-install-php-framework) or [turn on passenger mode](#how-do-i-install-non-php-applications) for non-PHP.
+ If this happens for only a few files, there may be errors such as typo in the URL, wrong Base URL or not paying attention to the file name size.


### Blank page `HTTP Error 500`

This means that there is an error in your PHP, but unlike XAMPP, PHP by default will not raise an error on the website.

You have 2 options for viewing the error:
+ Via Webmin > Logs and Reports > Nginx Error Log
+ [Set in .user.ini](#how-do-i-set-php-settings-phpini): `display_errors = On`

### Nginx Error `502 Bad Gateway` page

It is possible that the file you uploaded is too large or the PHP script you are running is taking too long. You can fix this via [.user.ini](#how-do-i-set-php-settings-phpini) file.

## Other Questions

Please use the [discussions page](https://github.com/domcloud/domcloud-io/discussions) :)
