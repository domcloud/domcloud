---
title: CMS
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy Popular CMS Apps

CMS (Content Management System) is a software that allows you to create and manage content on a website without or with minimal coding experience. DOM Cloud supports many popular CMS apps.

## WordPress

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

  </TabItem>
</Tabs>

This downloads and extracts WordPress and setup the database.
Also blocks `/xmlrpc.php` because it's a common DoS attack.

## Strapi


<Tabs>
  <TabItem value="strapi-recipe" label="Recipe" default>

```yaml
source: clear
root: public_html/public
features:
- ssl
- node lts
nginx:
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
  passenger:
    enabled: 'on'
    app_start_command: env PORT=$PORT yarn start
  locations:
    - match: /admin/
      alias: public_html/build/
```

  </TabItem>
</Tabs>
