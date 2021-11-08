---
layout: docs
---

# Welcome to DOM Cloud Documentation

We use GitHub for [Issue Tracking](https://github.com/domcloud/domcloud-io/issues) and [Discussions](https://github.com/domcloud/domcloud-io/discussions). For private inquiries please send an email to [support@domcloud.id](mailto:support@domcloud.id).

## What is DOM Cloud? And why?

It's a platform-as-a-service to host your content to the internet using shared virtual machine. Basically, DOM Cloud is similar like hosting providers out in the wild, but very customizable to modern apps.

DOM Cloud servers is available in NYC (New York City), SGA (Singapore), JPN (Japan). All servers have default domain to `*.domcloud.io`.

For an overview, DOM Cloud let's you to:

+ Host PHP or Non-PHP web apps
+ Manage MySQL or PostgreSQL Database
+ Run an existing web apps using script deployments
+ Sync your deployed web app with GitHub

To understand why DOM Cloud exist, we need to compare with existing hosting solutions...


### Comparing with shared hosting providers

Existing shared hosting solutions commonly uses Apache (or \[Open\]LiteSpeed). Apache thrives in hosting businesses because the portability of configuration files in form of `.htaccess` files. It was true that Apache was a common choice, but nowadays, it has been surpassed with NginX.

NginX delivers better performance and simplicity of configuration for modern websites. In Apache era, PHP was the obvious choice to go with website development, especially with WordPress which what powers 37% of the internet. But today, we have things build with variety of languages like Node.JS, Ruby, Go or Python. NginX now is go to for these, and around 2019, NginX surpasses global usage over Apache.

Unlike common hosting providers, DOM Cloud uses NginX and can host your non-PHP apps even for free. Even better, you can also use Postgres over MariaDB (MySQL) if you prefer that (we support both).

### Comparing with serverless hosting providers

[Serverless hosting](https://en.wikipedia.org/wiki/Serverless_computing) providers is superior in web performance because it can be replicated across the globe. However with those replication ability, the web server has to be "stateless" or "immutable", which means you can't use local files for anything and persistent connection like WebSocket is simply impossible. Also, serverless deployments from AWS has a moderate server size limit of 256 MB.

This is mostly fine for modern languages, but for old languages which very reliant with file operations like PHP, it's very tricky to get to work. Essentially you also have to rely on external solutions to store database or even data sessions. Depending on the scale of your project, serverless maybe the right choice, or maybe not.

DOM Cloud is a shared hosting solution and *statelessness* or *immutability* is not a requirement. You can examine and edit files in place, setup a cron job, or perform quick debug with SSH in production.

## Getting Started

You can start hosting websites from [the portal](https://portal.domcloud.id/en/login). Then:

1. Create an account or login
2. Click "New Order", this will open a form to create a new host.
3. Choose Username, this will also be used on the default domain name with postfix `.domcloud.io`
4. Choose Server location, choose the closest location from your target audience
5. Choose template. You can leave it an empty project, start from template (like WordPress) or other frameworks.
6. If you okay with free plan, skip ahead to step 9, otherwise continue read on...
7. Select plan. Plan other than free will give you choice to choose custom domain
8. Select domain type, either leave default, use existing domain or buy new one.
9. Check the total price, then click "Order Now".
10. Your hosting will be started right away or after payment.

