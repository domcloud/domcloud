---
title: NGINX and App Daemon
---

import ThemedImage from '@theme/ThemedImage';

Our server serves HTTP and HTTPS traffic using NGINX. NGINX is used to serve static files and proxy requests to the app daemon. Because it operates for all users on the server, only a limited set of features are configurable. It's only configurable using the [runner](./runner.md#nginx).

If you don't familiar with NGINX, you can read some of good resorces here: 
+ [Official documentation](https://nginx.org/en/docs/)
+ [The NGINX Handbook](https://www.freecodecamp.org/news/the-nginx-handbook/)

## Check current configuration

You can check the current configuration by going to Check -> NGINX.

<ThemedImage
    sources={{
        dark: "/assets/ss/check-nginx-b.png",
        light: "/assets/ss/check-nginx-w.png"
    }}
    alt=""
    className="img-fluid border rounded-3 shadow--md mb-4"
    width="700"
    height="500"
    loading="lazy"
/>
