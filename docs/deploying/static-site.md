---
title: Static Sites
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploying Static Sites

Static sites are websites that doesn't require server processing (e.g. connecting with database), so it only consist of HTML, CSS, JS files that sent as-is to the browser.

While static sites are works out of the box, nowadays static sites needed to build from many kinds of frontend tooling.

Most people built static sites with Node-based frontend tooling which includes [Create React App](https://create-react-app.dev/), [`Gatsby`](https://www.gatsbyjs.com/) and [`Vite`](https://vitejs.dev/). There are also other popular static site generators like [`Hugo`](https://gohugo.io/) and [`Jekyll`](https://jekyllrb.com/).

Please read our [Runner's Guide](../features/runner.md) first if you haven't.

## Recipes

<Tabs>
  <TabItem value="express" label="Express" default>

```yaml
source: clear
features: ['node lts']
root: public_html/public
nginx:
  passenger:
    enabled: on
    app_start_command: env PORT=$PORT npm start
commands:
- npx express-generator .
- npm i
```

A simple express website that outputs "Hello Express!"

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
