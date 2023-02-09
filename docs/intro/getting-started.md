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

Of course, some setup still requires root acccess. For instance, a proxy daemon (NginX) need to know "you" and your domain so it can forward internet traffic through your apps. This is done mainly through **Runner**, the core feature of our service.

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

You can also use your own domain name, but you need to configure it first. You can read more about it in the [Custom Domain](../integration/cname.md) page.

### Left side

TODO

## Managing Website

TODO

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

