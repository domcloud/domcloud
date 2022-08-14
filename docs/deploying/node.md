---
title: Node.js
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploying Node.js Apps with DOM Cloud

Node.js is a highly-efficient JavaScript runtime environment that executes JavaScript code as a server.
Node.js is served using Phusion Passenger inside NginX.

Popular Node.js recipes include `Express`, `Vite`, `Next.js`, `Strapi`. Please read our [Runner's Guide](../features/runner.md) first if you haven't.

:::caution

This guide only covers running a Node.js server, not about statically rendered pages like from `Create React App`, `Webpack`, `Parcel` or `Gatsby`.
If your application is intented to be as a static site, you should read our [Static Site Guide](./static-site.md) instead.

:::

## Recipes

<Tabs>
  <TabItem value="express" label="Express" default>

```yaml
source: clear
features: ['node lts']
nginx:
  passenger:
    enabled: on
    app_start_command: env PORT=$PORT npm start
commands:
- npx express-generator .
- 
```

A simple PHP that outputs "Hello, World!"

  </TabItem>
  <TabItem value="vite" label="Vite" default>

```yaml
source: clear
features: ['node lts']
nginx:
  passenger:
    enabled: on
    app_start_command: env PORT=$PORT npm start
commands:
- npx express-generator .
```

A simple PHP that outputs "Hello, World!"

  </TabItem>
  <TabItem value="next" label="Next.js" default>

```yaml
source: clear
features: ['node lts']
nginx:
  fastcgi: on
commands:
- echo "Hello, World!" > index.php
```

A simple PHP that outputs "Hello, World!"

  </TabItem>
  <TabItem value="strapi" label="Strapi" default>

```yaml
source: clear
features: ['node lts']
nginx:
  fastcgi: on
commands:
- echo "Hello, World!" > index.php
```

A simple PHP that outputs "Hello, World!"

  </TabItem>
</Tabs>

Let's extract those recipes meaning individually.

## Node environment

The default Node version is `14.x`, which is the default provided from the OS.

To change Node version used to the latest (LTS) one, put this in runner:

```yaml
features:
- node lts
```

You can also install other or specific version of Node.js e.g. `node latest`,  `node beta`,  `node 16.3.2`. This action will install Node.js in userland with the help of [webi script](https://webinstall.dev/node/) and [enabling Corepack](https://nodejs.org/dist/latest/docs/api/corepack.html) so package managers (npm & yarn & pnpm) can be used alongside userland node.

## NginX Setup 

Binding Node.js through NginX is done by Passenger. To make the binding work, you need to make sure that your app can open port number using given environment variable (.e.g. `PORT`), and you point the root of your public file to a `public` directory.

```yaml
root: public_html/public
nginx:
  passenger:
    enabled: on
    app_start_command: env PORT=$PORT npm start
```

If your setup is complex (e.g. using multiple websites in a domain) you can tell which exactly the `app_root` directory your app is serving from. Just make sure your root directory is outside of your app directory.

```yaml
root: public_html/client/dist
nginx:
  locations: 
  - match: /api
    passenger:
      enabled: on
      app_start_command: env PORT=$PORT npm start
      app_root: public_html/server
```

Some frameworks like `Next.js` likes to serve a hidden static directory e.g. `/_next`. We can reduce server load by creating an extra `/_next` location so those files is directly handled (and properly cached) by NginX.

```yaml 

```

### WebSocket/WebRTC usage

If your app is using WebSocket or WebRTC for persistent connection, it may creates confusion when passenger runs your app in multiple processes. You can set `sticky_sessions` to `on` to solve this.

```yaml
root: public_html/public
nginx:
  passenger:
    enabled: on
    app_start_command: env PORT=$PORT npm start
    sticky_sessions: on
```

The sticky sessions works by writing a cookie to identify the process where it's initiated. You can read more at [their documentation source](https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_sticky_sessions).

## Package Install

Package installs can be done just like usual `npm/yarn install` command. For a little advice, using these extra options is recommended in production:

```
npm ci
yarn install --immutable
```

### Clear packager cache

In meantime if your development has stable enough, you may want to clear the packager cache to save space.

```
npm cache clean --force
yarn cache clean --force
```

## Node.js Error Logs

When your Node.js crashed during startup, a helpful error will be displayed in the browser. This aids you to diagnose if some configuration is wrong.

(TODO) Unfortunately, we haven't found a way to capture Node.js error logs yet. You can (should?) do error logging to files using [builtin Node.js Console API](https://melvingeorge.me/blog/save-logs-to-files-nodejs) or use [Winston](https://www.npmjs.com/package/winston).


## Restart Node.js

To restart Node.js (e.g. after modifying the script). You can call the following command:

```
passenger-config restart-app /
```

The `/` means to restart all apps that you own. If you found warnings like `Permission denied` [it's a harmless warning](https://github.com/phusion/passenger/issues/2367).

