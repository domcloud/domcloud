# Services

This page is discussing about tools and services that we provide and some tips you can leverage. 

## Linux tools

These popular system-wide linux tools are available out of the box:

| | | | | |
| :-- | :-- | :-- | :-- | :-- |
| cmake | convert | curl | gcc | git |
| go | gpg2 | make | mysql | nano | 
| openssl | node | perl | phar | php | 
| pip | postgres | python2 | python3 | ruby | 
| sed | ssh | sqlite3 | tar | unzip | 
| vi | vim | wget | yarn | zip |

:::info

Don't rely on their version as it's OS wide and can be changed anytime though system updates.

:::

## VSCode SSH Remote

You can use [VSCode](https://code.visualstudio.com/) to edit your files and code remotely. It's a great tool quickly edit files just like you're editing locally.

To use it, you need to install the [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) extension. Then, you can launch a session from the Manage tab.

:::tip

To avoid clutter, you can open the VSCode SSH Remote session inside a subdirectory. Open using the dropdown right next to the `Visual Studio Code` button in manage tab.

:::

## HMR (Hot Module Replacement)

HMR is a feature that allows you to edit your code and see the changes immediately without reloading the website. 

While DOM Cloud primary usage is for hosting production websites, it doesn't stop you from using it for development. Some recipes in [deployment section](../deploying/index.md) can make HMR works out of the box, those are includes:

+ Laravel (with Laravel UI)
+ Create React App
+ Vite
+ Next.js
+ SvelteKit

Combined with [VSCode SSH Remote](#vscode-ssh-remote), it can function as close to local development in the cloud (like CodeSandbox or Github's Codespaces).

## Ephemeral Ports

Most ports are blocked except ephemeral ports (32768 - 65535). You can use them for local development inside the server, including running a local dev server without going though NginX.

Please note that long running processes are not allowed in the server. It will be killed automatically.

:::caution

DOM Cloud is a shared hosting in nature, so other people might stumble across your randomly assigned ports (incoming traffic from ports can't be divided by domain name unlike if it's going through NginX). Never put any sensitive data if it's mean for development.

:::

:::tip

To automatically run with server public IP and random ports, use syntax like this:

```bash
npm run dev -- --host `hostname -I | cut -d " " -f1` --port `shuf -n 1 -i 49152-65535`
```

:::

## Memory Sharing

Any application run through Passenger will be spawned into multiple processes. If you save data through memory (i.e. saving some data into global variables) it won't work consistently, you have to save it either in file or database.

If you want performant cache storage, look for other platform. Some of them may grant free Redis storage. Just make sure the cluster is in same region with what you use in DOM Cloud.


