---
layout: docs
---

# Welcome to DOM Cloud Documentation

You found our documentation site! It's a place where you can find all the information you need to get started with DOM Cloud. We've tried to make it as easy as possible, but if you have any questions, please don't hesitate to contact us.

We use GitHub for [Issue Tracking](https://github.com/domcloud/domcloud-io/issues) and [Discussions](https://github.com/domcloud/domcloud-io/discussions). For private questions please send an email to [support@domcloud.id](mailto:support@domcloud.id).

## What is DOM Cloud? And why?

DOM Cloud is a cloud hosting solution that allows you to host your website on our servers. We have a range of servers location and software customization options, so you can choose the best fit for your software needs.

Let's sump up the benefits of DOM Cloud:

+ **Free**: We don't charge you for small hosting requirements, even for SSL and SSH Access, you also get a free domain under `*.domcloud.io`.
+ **Range of Servers Locations**: Our servers are available in NYC (New York City), SGA (Singapore), JPN (Japan).
+ **Database**: We provide MySQL and PostgreSQL database available on each host for free.
+ **Virtualmin**: We use Virtualmin as our control panel, which means you can easily manage your website with easy to use UI.
+ **NginX**: We use NginX as our web server, which means it's faster and more secure than Apache, which most hosting service are currently use.
+ **Non-PHP**: We also offer a non-PHP hosting option powered by Phusion Passenger. Any HTTP server that can be run on your localhost can also be run on Phusion Passenger.
+ **SSH Access**: We provide SSH access to your server, so you can automate a lot of stuff than just uploading files manually.
+ **GitHub Syncronization**: Add a Webhook to your GitHub repository to automatically sync your website with your GitHub repository.

We would be lying if we only said good stuff. But we also have a lot of bad stuff. Here's a quick list of some of the bad stuff:

+ **Cheap**: We don't understand a good price for everyone, so we smack the price as low as we can offer yet.
+ **No Redudancy**: Except for the DNS server integrated, we don't setup any secondary server yet, so if we have a sudden maintenance, that's a bad luck.
+ **No Automatic Backup**: Except for wide-server backup which run monthly, we don't setup any automatic backup yet. You can still do it manually with Virtualmin, but that's also takes your web storage used.
+ **No Email Server**: Email is hard to setup and maintain, we recommend third party services like ForwardEmail or SendInBlue.
+ **Not Apache**: NginX fast and event-driven. But you maybe not getting used with it and still like the old-school `.htaccess` file. Believe me, the learning curve is easy, you will get used with NginX configuration real quick.
+ **It "maybe" feels slower**: You share your bandwidth with other users in one server. We could increasing server capacity if we decide to do so.
+ **Locked to Specific Version**: You might be forced to use the available software versions, but some maybe configurable by installing additional software like `nvm` for Node.js. Remember this because you won't get access to `sudo` anyway.
+ **Not Popular yet**: Yea we honest we don't have a lot of users yet, but we're still improving this service until a lot of people notice how smooth this service is.

## Getting Started

You can start hosting websites from [the portal](https://my.domcloud.co/login). Then:

1. Create an account or login
2. Click "New Order", this will open a form to create a new host. ![](/assets/images/new-purchase.png){:width="100%" alt="New Order"}
3. Choose Username, this will also be used on the default domain name with postfix `.domcloud.io`
4. Choose Server location, choose the closest location from your target audience
5. Choose template. You can leave it an empty project, start from template (like WordPress) or other frameworks.
6. If you okay with free plan, skip ahead to step 9, otherwise continue read on...
7. Select plan. Plan other than free will give you choice to choose custom domain
8. Select domain type, either leave default, use existing domain or buy new one.
9. Check the total price, then click "Order Now".
10. Your hosting will be started right away or after payment.

## Choosing Domain

If you're in other than Free plan and want to use your own domain name, you can do so by choosing `Custom Domain` in host creation and then enter your domain name. You can also buy the domain from there and your domain will be registered with us.

## Managing Hosts

After creating a new host, you will greeted with a dashboard. You can manage your hosting from there with these menus.

![](/assets/images/menu.png){:width="500px" style="max-width:100%" alt="Menu"}

Here are menus available:

+ **Info**: Basic information and stats about the host (showing host IP, storage and bandwidth used)
+ **Manage**: Authentication page to manage host data (opening gate to Virtualmin/DB/SSH/VSCode/etc)
+ **Deploy**: Deploy management and script runner (for automating instalation and other tasks)
+ **Check**:
  + **Invoice**: Check payment status and remaining grace time
  + **DNS**: Check and Identify common problems with DNS
  + **Firewall**: Check firewall option
  + **Nginx**: Check and change NginX configuration
  + **Logs**: Check Logs (coming soon)
+ **Admin**:
  + **Change Username**
  + **Change Domain**
  + **Upgrade**
  + **Extend**
  + **Transfer**
  + **Delete**

## Virtualmin

The Virtualmin portal gives you ability to manage files, subservers and databases.

The [Virtualmin page](/docs/virtualmin) explains things you can do with it.

## SSH

SSH access is available for all plans and you can either use your local SSH client or use WebSSH. SSH is useful you want to execute certain software using CLI or Bash interface.

You can also use [the runner script](/docs/runner) to automate certain tasks that you usually do with SSH.

