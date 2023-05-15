---
title: Getting Started
sidebar_position: 2
---

import ThemedImage from '@theme/ThemedImage';


Here in this page we will take a basic understanding about how DOM Cloud works and how to set up your own website quickly.

## System Architecture

DOM Cloud system is based on a monolithic web server. Everything is managed under a Linux system that everyone have an access to through their own userland data. Let's talk about our system architecture starting from this diagram:

![Architecture](/assets/images/architecture.svg)

There's a lot to unpack! Don't worry, we'll get through that by reading below.

## System Daemon vs. Userland

If you have some experience with Linux you should understand this concept already. A system daemon is all system processes that run under `root` user, which has privilenges of controlling everything in the system. A userland is user processes that locked under a constraint of given Linux user.

You (as a admin of your own website) is only given a userland access. This mean you're able to upload files, databases, and apps under your own user, and that's it. We can't give you the full "system" daemon because the system is shared with other users. 

Of course, some setup still requires root acccess. For instance, a proxy daemon (NGINX) need to know "you" and your domain so it can forward internet traffic through your apps. This is done mainly through **Runner**, the core feature of our service.

## Runner

The Runner is the way to configure things in the system. It's a web-based tool that allows you to configure your website, like adding a domain, adding a database, and adding a web app. It's also the way to configure the system daemon, like adding a proxy, adding a firewall, and adding a DNS.

You can read more about Runner in the [Runner](../features/runner.md) page. For now, let's keep focus on how to setup your own website.

## Create a Website

Go to [create a website](https://my.domcloud.co/user/host/create) page. If you haven't logged in, you will be redirected to the login page. Below is the screenshot of that page.

<ThemedImage
    sources={{
        dark: "/assets/ss/new-purchase-b.png",
        light: "/assets/ss/new-purchase-w.png"
    }}
    alt=""
    className="img-fluid border rounded-3 shadow--md mb-4"
    width="700"
    height="500"
    loading="lazy"
/>

The left side is the template you want to start with, while the right side sets the domain name and the server where you want to host your website. You can choose a template, the domain name and a server, then click the "Add Host" button. We explain more below.

### Right side

It has three fields: Username, Region, and Domain. 

#### Username

This is the username you want to use to login to your website. You can use any username you want, but it must be unique. The username is invisible to the public, except if you choose a free domain.

#### Region

This is the server where you want to host your website. You can choose any server you want that is available, preferably close with your target audience.

#### Domain

This is the domain name you want to use for your website. By default, it will be `[username].domcloud.io`, which is part of a free domain name provided by us. 


:::info

You can also use your own domain name, but you need to configure it first. <br/> Read more about [Custom Domain](../integration/cname.md).

:::

### Left side

It's a template selector. It has three sections: Start From Template, Clone From GitHub, Custom Template.

#### Start From Template

The template is a pre-configured website that you can use as a starting point. It's mostly a preconfigured web apps that works out of the box.

#### Clone From GitHub

For some developers who already have the website code on GitHub, you can clone it directly to DOM Cloud. It will ask for GitHub access so it can clone your repository even if it's private.


:::info

If you plan to integrate our service with GitHub, there's so much more about it. <br/> Read more about [GitHub integration](../integration/github.md).

:::


#### Custom Template

This is the "template" that will be executed in the runner after the website has been created. When you choose option from **Start From Template** or **Clone From GitHub**, it will be automatically set to the template that is used by the selected option.

### Click "Add Host"

After clicking the "Add Host" button, you will be redirected to the runner page of the newly created website where you can watch the progress of the setup. Below is the screenshot of that page.

<ThemedImage
    sources={{
        dark: "/assets/ss/new-progress-b.png",
        light: "/assets/ss/new-progress-w.png"
    }}
    alt=""
    className="img-fluid border rounded-3 shadow--md mb-4"
    width="700"
    height="500"
    loading="lazy"
/>

If you keep watching the page there will be a message saying "Your website is ready!" and a button to open the website when it's ready.

## Managing Website

Every website has its own dashboard. Below is the screenshot of that page.

<ThemedImage
    sources={{
        dark: "/assets/ss/dash-b.png",
        light: "/assets/ss/dash-w.png"
    }}
    alt=""
    className="img-fluid border rounded-3 shadow--md mb-4"
    width="700"
    height="500"
    loading="lazy"
/>

One thing to note is that it has many tabs. One particular useful tab that you'll use often is the **Manage** tab. It contains links to edit your website and also credentials to access your website. Below is the screenshot of that page.


<ThemedImage
    sources={{
        dark: "/assets/ss/new-manage-b.png",
        light: "/assets/ss/new-manage-w.png"
    }}
    alt=""
    className="img-fluid border rounded-3 shadow--md mb-4"
    width="700"
    height="500"
    loading="lazy"
/>

Tools that you can use to manage your website are:

#### Webmin

Webmin is a web-based system management tool. It's mostly useful for managing files using a web interface. You can also use that to manage your databases (like adding new databases or importing from server files).

#### PhpMyAdmin / PhpPgAdmin

PhpMyAdmin and PhpPgAdmin is a web-based database management tool for MariaDB and PostgreSQL, respectively. During entry, you will be asked for the database username and password, which is the same as your website username and password (in Manage tab).


:::info

If you have problem accessing the database, you need to enable the database first through the Runner. <br/> Read more about [Configuring Databases](../features/database.md).

:::


#### 

#### WebSSH

WebSSH is a web-based SSH client. It's useful for advanced installation that requires CLI access.


:::warning

The WebSSH URL contains password in your URL for convenience. Don't open it on a shared computer. <br/> Open the link from the dropdown menu instead (which clears password in the URL).

:::

#### Visual Studio Code

This a link to [VS code](https://code.visualstudio.com/) to remotely edit the website via SSH. It's required to have the VS code installed on your computer. During entry, you will be asked for the SSH password, which is the same as your website password.

:::tip

You can open the website in VS code in a particular directory to avoid clutter by opening the link from the dropdown menu.

:::

## Other things to aware

This section covers advanced concepts that you need to know to use DOM Cloud. Refer back to our [architecture system diagram](#system-architecture) for overall overview.

- [Firewall Daemon and Ports](../features/firewall.md)
- [Proxy and App Daemon](../features/nginx.md)
- [Database Daemon](../features/database.md)
- [DNS Daemon](../features/dns.md)
- [System Runner](../features/runner.md)
- [Webmin and Virtualmin](../features/virtualmin.md)

There's also [a dedicated page](../deployment/) for configuring a website for specific code language such as [PHP](../deployment/php.md), [Node.JS](../deployment/node.md), [Python](../deployment/python.md) or with [many CMS platforms](../deployment/cms.md) or with [many static page generator](../deployment/static-site.md) and so on. And also [a dedicated page](../integration/) for integration with [GitHub](../integration/github.md), [VS Code](../integration/vscode.md), [third-party custom domain](../integration/cname.md), and soon.
