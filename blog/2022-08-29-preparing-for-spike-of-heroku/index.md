---
slug: preparing-for-spike-of-heroku
title: Preparing for spike because of Heroku
authors: [willnode]
tags: [service, update]
image: stat.png
---

In few days ago Heroku announced it [will no longer provide free plans](https://techcrunch.com/2022/08/25/heroku-announces-plans-to-eliminate-free-plans-blaming-fraud-and-abuse/), which is also means a free marketing for us. I tell people people about this service in [dev.to](https://dev.to/willnode/comment/219m2) and [free-for.dev](https://github.com/ripienaar/free-for-dev/pull/2570) and the result is a recent spike of traffic.

![Traffic stat increased dramatically](stat.png)

To get prepared for this spike, I need to adjust a few things:

+ The New York server just been upgraded to 2 GB RAM and 2 vCPU immediately. This capacity is equal with what I use in Singapore server. Later if spike of usage still continue, I will use a separate mount drive for `/home` directory.
+ I will continue to complete writing the documentation, but there will be few changes: We'll remove the optional tools we've had installed (Ruby, Go, etc.) and the only things that preinstalled will be `php` (all major/version supported), `node` and `python` with specific version provided from OS. This will make our documentation clear and removing the dangerous depedency with OS environment which can change at anytime.

There's also a few improvements in features and security that I would like to talk for the next month:

+ The home directory will change into some random unique string rather than what you provided from the UI. This is because anybody can do `ls /home` and get all username list from the server. This might need take time because it may break existing scripts. Another option is to use *jailkit* but I'm not so sure it will not break anything.
+ we will provide a way to pipe the logs from server into portal UI. Right now the only way to open logs is from the Webmin UI.
+ The documentation, again.

So that's it, see you next month!

