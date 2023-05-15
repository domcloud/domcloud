---
title: CMS
format: mdx
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy Popular CMS Apps

CMS (Content Management System) is a software that allows you to create and manage content on a website without or with minimal coding experience. DOM Cloud supports many popular CMS apps.

## [WordPress](https://wordpress.org)

<Tabs>
  <TabItem value="wordpress-recipe" label="Recipe" default>

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

The script above downloads and extracts WordPress and setup the database.
Also blocks `/xmlrpc.php` because it's a common DoS attack.

To install `wp-cli`, a WordPress command line tool:

```yaml
commands:
- curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
- chmod +x wp-cli.phar
- mkdir -p ~/.local/bin/
- mv wp-cli.phar ~/.local/bin/wp
```

  </TabItem>
</Tabs>

## [Strapi](https://strapi.io) 


<Tabs>
  <TabItem value="strapi-recipe" label="Recipe" default>

```yaml
source: clear
features:
- ssl
- node lts
nginx:
  root: public_html/public
  passenger:
    enabled: 'on'
    app_env: development
    app_start_command: env PORT=$PORT yarn develop
  locations:
    - match: /admin/
      alias: public_html/build/
commands:
- yarn create strapi-app . --quickstart --no-run
- echo JWT_SECRET=`node -e "console.log(crypto.randomBytes(16).toString('base64'))"` > .env
- echo APP_KEYS=`node -e "console.log(crypto.randomBytes(16).toString('base64'))"` >> .env
- echo ADMIN_JWT_SECRET=`node -e "console.log(crypto.randomBytes(16).toString('base64'))"` >> .env
- echo API_TOKEN_SALT=`node -e "console.log(crypto.randomBytes(16).toString('base64'))"` >> .env
- echo STRAPI_ADMIN_BACKEND_URL=//${DOMAIN} >> .env
- STRAPI_ADMIN_BACKEND_URL=//${DOMAIN} yarn build
```
  </TabItem>
  <TabItem value="strapi-prod" label="Production Config" default>

```yaml
nginx:
  root: public_html/public
  passenger:
    enabled: 'on'
    app_start_command: env PORT=$PORT yarn start
  locations:
    - match: /admin/
      alias: public_html/build/
```

  </TabItem>
</Tabs>

## [Ghost](https://ghost.org)

<Tabs>
  <TabItem value="ghost-recipe" label="Recipe" default>

```yaml

source: https://github.com/TryGhost/Ghost/releases/download/v4.4.0/Ghost-4.4.0.zip
root: public_html/public
nginx:
  ssl: enforce
  fastcgi: off
  passenger:
    enabled: on
features:
- mysql
- ssl
commands:
- echo export PATH="$HOME/public_html/node_modules/.bin:$PATH" > ~/.bash_profile
- source ~/.bash_profile
- mkdir public
- echo "require('./index.js');" > app.js
- wget -q -O config.production.json https://gist.githubusercontent.com/willnode/45e722be156736ea3a08f29d37ad997c/raw/93dbbecc209ac9e6b9eb0a9d22ece1f14ab54e67/ghost-production-config.json
- 'sed -ri "s/username_here/${USERNAME}/g" config.production.json'
- 'sed -ri "s/password_here/${PASSWORD}/g" config.production.json'
- 'sed -ri "s/database_here/${DATABASE}/g" config.production.json'
- 'sed -ri "s/url_here/https:\/\/${DOMAIN}/g" config.production.json'
- yarn install --production --no-progress
- knex-migrator init
```

</TabItem>
</Tabs>
