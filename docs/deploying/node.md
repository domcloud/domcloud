---
title: Node.js
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploying Node.js Application with DOM Cloud

Node.js is a highly-efficient JavaScript runtime environment that executes JavaScript code as a server.
Node.js is served using Phusion Passenger inside NginX.

Popular Node.js recipes include `Express`, `Vite`, `Next.js`, `Strapi`. Please read our [Runner's Guide](../runner.md) first if you haven't.

:::caution

This guide only covers running a Node.js server, not about statically rendered pages like from `Create React App`, `Webpack`, `Parcel` or `Gatsby`.
If your application is intented to be as a static site, you should read our [Static Site Guide](./static-site.md) instead.

:::

## Recipes

<Tabs>
  <TabItem value="express" label="Express" default>

```yaml
source: clear
nginx:
  fastcgi: on
commands:
- echo "Hello, World!" > index.php
```

A simple PHP that outputs "Hello, World!"

  </TabItem>
  <TabItem value="vite" label="Vite" default>

```yaml
source: clear
nginx:
  fastcgi: on
commands:
- echo "Hello, World!" > index.php
```

A simple PHP that outputs "Hello, World!"

  </TabItem>
  <TabItem value="next" label="Next.js" default>

```yaml
source: clear
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
nginx:
  fastcgi: on
commands:
- echo "Hello, World!" > index.php
```

A simple PHP that outputs "Hello, World!"

  </TabItem>
</Tabs>