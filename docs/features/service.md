---
title: Linux Utilities
---

# Services

This page is discussing about tools and services that we provide and some tips you can leverage.

## Linux tools

These popular system-wide linux tools are available out of the box:

| | | | | |
| :-- | :-- | :-- | :-- | :-- |
| cmake | convert | composer | curl | gcc |
| git | gpg2 | gzip | make | mysql |
| nano | openssl | ncdu | node | perl |
| phar | php | psql | python | ruby |
| sed | ssh | sqlite3 | tar | unzip |
| vi | vim | wget | yarn | zip |

:::info

Don't rely on their version as it's OS wide and can be changed anytime though system updates.

:::

## VSCode SSH Remote

You can use [VSCode](https://code.visualstudio.com/) to edit your files and code remotely. It's a great tool quickly edit files just like you're editing locally.

To use it, you need to install the [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) extension. Then, you can launch a session from the Manage tab.

:::tip

To avoid clutter, you can open the VSCode SSH Remote session inside a subdirectory. Open using the dropdown right next to the `Visual Studio Code` button in manage tab.

:::

## HMR (Hot Module Replacement)

HMR is a feature that allows you to edit your code and see the changes immediately without reloading the website.

While DOM Cloud primary usage is for hosting production websites, it doesn't stop you from using it for development. Some recipes in [deployment section](../deployment/index.md) can make HMR works out of the box, those are includes:

+ Laravel (with Laravel UI)
+ Create React App
+ Vite
+ Next.js
+ SvelteKit

Combined with [VSCode SSH Remote](#vscode-ssh-remote), it can function as close to local development in the cloud (like CodeSandbox or Github's Codespaces).

## Ephemeral Ports

Most ports are blocked except ephemeral ports (32768 - 65535). You can use them for local development inside the server, including running a custom TCP listener without going though NGINX.

Please note that long-running background processes are not allowed in the server. It will be killed automatically.

:::caution

DOM Cloud is a shared hosting in nature, so other people might stumble across your randomly assigned ports (incoming traffic from ports can't be divided by domain name unlike if it's going through NGINX). Never put any sensitive data if it's mean for development.

:::

:::tip

To automatically run with server public IP and random ports, use syntax like this:

```bash
npm run dev -- --host `hostname -I | cut -d " " -f1` --port `shuf -n 1 -i 49152-65535`
```

:::

## Memory Sharing

Any application run through Passenger will be spawned into multiple processes. If you save data through memory (i.e. saving some data into global variables) it won't work consistently, you have to save it either in file or database.

If you want performant cache storage, look for other platform. Some of them may grant free Redis storage. Just make sure the cluster is in same region with what you use in DOM Cloud.

### Managing File Storage

If you need to delete unnecessary files in one of your hosts, use [ncdu](https://en.wikipedia.org/wiki/Ncdu). It's a disk usage analyzer available in all servers.

![](https://upload.wikimedia.org/wikipedia/commons/d/d7/Ncdu_screenshot.png)

### Installed PHP Extensions

PHP are installed as system wide. It's installed as in these commands:

```
yum install {php74,php80,php81,php82}-php-{bcmath,cli,common,devel,fpm,gd,intl,mbstring,mysqlnd,opcache,pdo,pecl-mongodb,pecl-zip,pgsql,process,sodium,soap,xml}
```

Here's the list of extensions available:


|     |     |     |     |     |     |        |  |
| :--------: | :--------: | :--------: | :--------: | :--------: | :--------: | :-----------: | :-----: |
| bcmath     | bz2        | calendar   | Core       | ctype      | curl       | date          | dom     |
| exif       | fileinfo   | filter     | ftp        | gd         | gettext    | hash          | iconv   |
| intl       | json       | libxml     | mbstring   | mongodb    | mysqli     | mysqlnd       | openssl |
| pcntl      | pcre       | PDO        | pdo_mysql  | pdo_pgsql  | pdo_sqlite | pgsql         | Phar    |
| posix      | readline   | Reflection | session    | shmop      | SimpleXML  | soap          | sockets |
| sodium     | SPL        | sqlite3    | standard   | sysvmsg    | sysvsem    | sysvshm       | tokenizer |
| xml        | xmlreader  | xmlwriter  | xsl        | Zend OPcache | zip        | zlib          |         |

Custom extensions can't be installed as it's a shared hosting. However, you can download PHP yourself and attach it to Nginx via Passenger and FastCGI.
