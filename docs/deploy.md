---
layout: docs
---

# Deploying your Software

Here's the place you need to read for hands-on tutorial for deploying any software. You should also read this in accordance with the [Runner Script](/docs/runner) and [Troubleshoot](/docs/troubleshoot) in case you hit into problem later.

## Preliminary Setup

### The Runner Script or Template

When you create a new host, you will prompted with **Template** text box. That is the script that will be executed on the host. We use YAML format here, which defined on the [Runner Script](/docs/runner) page.

Remember we also provide a template repository for common templates. If you can't find what you're looking for, you can create your own template by reading below and much better, [share it with us](https://github.com/domcloud/domcloud-io/discussions/categories/show-and-tell).

### Cloning from Git Repo

If you have a Git repository, you can clone it with the following command:

```yml
source: https://github.com/your/repo
```

If your repository is private, or need to be able to push from server, you need to provide your username and password (for GitHub you need to create a [Personal Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) because plain password is no longer works).

```yml
source: https://myuser:ghp_token@github.com/your/repo
```

### Features to Use

The second thing you need to configure is the features to use. The features are defined on the [Features on Runner Script](/docs/runner#features) page. Commonly you need to use `mysql` (or `postgres` or no at all)  for the database and `ssl` to get SSL certs in order to enable HTTPS.

```yml
features: [mysql, ssl]
```

### Are you deploying for main domain or subdomain?

If you are deploying for subdomain, you have to specify the subdomain name in the `subdomain` field.

```yml
# ... other configs ...
subdomain: mysubdomain.mydomain.com
```

## Specific Deployment setup for PHP

### Selecting PHP Version

To switch PHP version, you can use the `php` feature. By default we're using `7.4` but you can change it to `8.0`, `8.1` or `5.6` if you need to. Unfortunately you can't ask any other version than the ones listed because PHP installation is always requires system-wide installation.

```yml
features:
- php 8.0
```

### Configuring for Root Folder

All sources will be placed under the `public_html` folder. Depending on framework you're using (e.g. Laravel or CodeIgniter 4), you might need to change the root folder to `public` inside it, so your PHP files don't get leaked.

```yml
root: public_html/public
```

### Composer Install

Many frameworks (e.g. Laravel) require you to install Composer dependencies. You can call `composer` to install Composer dependencies.

```yml
commands:
- composer install --no-dev --no-cache --optimize-autoloader
```

The additional options is recommended to save space and gain performance on the host.

### Index.php Redirection

Many frameworks also require you to put everything under a single `index.php` file so they can handle a custom error message or some dynamic URL. You can setup NginX configuration to do that:

```yml
nginx:
  fastcgi: on # Enable PHP processing (you need this)
  locations:
  - match: /
    try_files: $uri $uri/ /index.php?$args
```

### Subfolder Aliasing

If you happen to have a subfolder inside your source folder, you can alias it to a different name or root path. This allows you to have multiple website and still have a single host URL.

```yml
root: public_html/public # You should never leave this as `public_html` or subfolders will leaked
nginx:
  fastcgi: off # disable PHP processing on root
  locations:
  - match: /alpha/
    alias: public_html/alpha/public
    try_files: $uri $uri/ @alpha
    fastcgi: on  # enable PHP processing for this
  - match: "@alpha"
    rewrite: /alpha/(.*)$ /alpha/index.php?/$1 last
```

### `user.ini` Configuration

The `user.ini` file is a configuration file for PHP. You can use it to configure PHP settings like maximum upload file or maximum timeout limit. To customize this file, you can create `.user.ini` file in root folder of your source (which by default is `~/public_html/.user.ini`).

```yml
commands:
- rm -f .user.ini
- echo 'upload_max_filesize = 10M' > .user.ini
```

### Denying Hidden Files

Often times when using non-standard frameworks where you're not isolating the root folder in `public` directory, you might want to deny hidden files because you don't want to expose sensitive information (like `.git` or `.user.ini` or even `.env` files). You can do that by adding `deny` to the `nginx` locations section.

```yml
nginx:
  fastcgi: on
  locations:
  - match: ~ /\.(?!well-known).*
    deny: all
```

Note that `.well-known` must not be blocked because it's used by some services like verificating SSL certificates.

## Specific Deployment setup for Node.js


## Specific Deployment setup for Python
TODO
## Specific Deployment setup for Ruby
TODO

## Specific Deployment setup for Everything Else

TODO




