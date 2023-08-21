/*! For license information please see d44e62d2.aff6e9df.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9883],{2146:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=r(5893),o=r(1151);const s={layout:"docs",title:"Troubleshooting",sidebar_position:4},t="Tips and Troubleshooting",l={unversionedId:"integration/troubleshoot",id:"integration/troubleshoot",title:"Troubleshooting",description:"Common Tips and Good Practices",source:"@site/docs/integration/troubleshoot.mdx",sourceDirName:"integration",slug:"/integration/troubleshoot",permalink:"/docs/integration/troubleshoot",draft:!1,unlisted:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/integration/troubleshoot.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{layout:"docs",title:"Troubleshooting",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"GitHub Integration",permalink:"/docs/integration/github"},next:{title:"Self-Hosting",permalink:"/docs/integration/self-host"}},a={},d=[{value:"Common Tips and Good Practices",id:"common-tips-and-good-practices",level:2},{value:"Portal",id:"portal",level:4},{value:"NGINX",id:"nginx",level:4},{value:"PHP-FPM",id:"php-fpm",level:4},{value:"Python",id:"python",level:4},{value:"Passenger Phusion",id:"passenger-phusion",level:4},{value:"Common Errors Troubleshooting",id:"common-errors-troubleshooting",level:2},{value:"Website down <code>ERR_NAME_NOT_RESOLVED</code>",id:"website-down-err_name_not_resolved",level:4},{value:"HTTPS Error <code>ERR_CERT_AUTHORITY_INVALID</code>",id:"https-error-err_cert_authority_invalid",level:4},{value:"NGINX Error <code>403 Forbidden</code> page",id:"nginx-error-403-forbidden-page",level:4},{value:"NGINX Error page <code>404 Found</code>",id:"nginx-error-page-404-found",level:4},{value:"Blank page <code>HTTP Error 500</code>",id:"blank-page-http-error-500",level:4},{value:"NGINX Error <code>502 Bad Gateway</code> page",id:"nginx-error-502-bad-gateway-page",level:4},{value:"&quot;Connection Refused&quot; from server HTTP request",id:"connection-refused-from-server-http-request",level:4}];function c(e){const n=Object.assign({h1:"h1",h2:"h2",h4:"h4",ul:"ul",li:"li",code:"code",p:"p",a:"a"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"tips-and-troubleshooting",children:"Tips and Troubleshooting"}),"\n",(0,i.jsx)(n.h2,{id:"common-tips-and-good-practices",children:"Common Tips and Good Practices"}),"\n",(0,i.jsx)(n.h4,{id:"portal",children:"Portal"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The runner script is available as the alternative way to manage things in Virtualmin, even for things that didn't available there, like configuring NGINX or Firewall."}),"\n",(0,i.jsx)(n.li,{children:"The runner script is capable to be triggered with GitHub Actions CI, useful for auto-syncing host code with GitHub repo."}),"\n",(0,i.jsx)(n.li,{children:"We don't serve email transactions, however you can use third-party"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"nginx",children:"NGINX"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"ssl: enforce"})," to redirect all insecure traffic to secure one."]}),"\n",(0,i.jsxs)(n.li,{children:["NGINX alone is capable of creating ",(0,i.jsx)(n.code,{children:"E-Tag"})," cache to speed up static files delivery."]}),"\n",(0,i.jsx)(n.li,{children:"If you use Cloudflare, and you happen to get infinite redirection, please turn off the SSL proxy in Cloudflare."}),"\n",(0,i.jsx)(n.li,{children:"We have built-in bursted rate-limit of 50 requests for 3 requests/seconds in each IP address."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"php-fpm",children:"PHP-FPM"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can choose PHP version either from Virtualmin or runner script."}),"\n",(0,i.jsxs)(n.li,{children:["To configure ",(0,i.jsx)(n.code,{children:"php.ini"}),", create ",(0,i.jsx)(n.code,{children:".user.ini"})," file in the public root path."]}),"\n",(0,i.jsxs)(n.li,{children:["Default upload size is ",(0,i.jsx)(n.code,{children:"8MB"}),", increase it by set ",(0,i.jsx)(n.code,{children:"upload_max_filesize"})," and ",(0,i.jsx)(n.code,{children:"post_max_size"})," in ",(0,i.jsx)(n.code,{children:"php.ini"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Any fatal error in PHP will result in blank ",(0,i.jsx)(n.code,{children:"500"})," error. You can enable error reporting by set ",(0,i.jsx)(n.code,{children:"display_errors"})," to 1 in ",(0,i.jsx)(n.code,{children:"php.ini"}),", but this is not recommended."]}),"\n",(0,i.jsxs)(n.li,{children:["When installing depedencies with composer, use ",(0,i.jsx)(n.code,{children:"--no-cache"})," to avoid wasted storage by caches."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"python",children:"Python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"python"})," and ",(0,i.jsx)(n.code,{children:"pip"})," is referred as latest Python 3. We have no support of Python 2."]}),"\n",(0,i.jsxs)(n.li,{children:["When installing depedencies with pip, always use ",(0,i.jsx)(n.code,{children:"--user"})," otherwise you will get install error because of sudo requirements."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"passenger-phusion",children:"Passenger Phusion"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Passenger Phusion Node.js looks for ",(0,i.jsx)(n.code,{children:"app.js"}),", ",(0,i.jsx)(n.code,{children:"passenger_wsgi.py"})," or ",(0,i.jsx)(n.code,{children:"config.ru"})," in parent of root path to start the app."]}),"\n",(0,i.jsxs)(n.li,{children:["The GLS feature from Passenger Phusion can start any app, even binary files, provided you pass ",(0,i.jsx)(n.code,{children:"$PORT"})," correctly."]}),"\n",(0,i.jsx)(n.li,{children:"Passenger Phusion Node.js works with CJS. If your project use ESM you need to use GLS."}),"\n",(0,i.jsxs)(n.li,{children:["Passenger Phusion will be activated if ",(0,i.jsx)(n.code,{children:"passenger_enabled on"})," and no files present in destination path."]}),"\n",(0,i.jsxs)(n.li,{children:["You can tell if Phusion is serving a file by checking ",(0,i.jsx)(n.code,{children:"server: nginx + Phusion Passenger"})," HTTP header."]}),"\n",(0,i.jsxs)(n.li,{children:["Static files is often better to be handled within NGINX alone to make use of ",(0,i.jsx)(n.code,{children:"E-Tag"})," cache."]}),"\n",(0,i.jsxs)(n.li,{children:["You can add environment variables by writing in ",(0,i.jsx)(n.code,{children:"~/.env"})," (and use commands like this: ",(0,i.jsx)(n.code,{children:"export NODE_ENV=production"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"common-errors-troubleshooting",children:"Common Errors Troubleshooting"}),"\n",(0,i.jsx)(n.p,{children:"For PHP, Error logs is available in error logs provided by Virtualmin."}),"\n",(0,i.jsx)(n.p,{children:"For Non-PHP (via Phusion Passenger), error logs is not available but if your app is failed to start up, a nice detailed explanation for the crash is available."}),"\n",(0,i.jsxs)(n.h4,{id:"website-down-err_name_not_resolved",children:["Website down ",(0,i.jsx)(n.code,{children:"ERR_NAME_NOT_RESOLVED"})]}),"\n",(0,i.jsx)(n.p,{children:"This means that there is a problem with the DNS system. If you are using DOM Cloud make sure:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Has fulfilled the requirements / required documents (including email confirmation) from the Registrar."}),"\n",(0,i.jsx)(n.li,{children:"Already pointing the Name Server correctly (scroll up if not already)."}),"\n",(0,i.jsx)(n.li,{children:"The DNS feature for the server is turned on (set up via webmin)."}),"\n",(0,i.jsx)(n.li,{children:"The A / CNAME records for the intended domain are correct."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can ",(0,i.jsx)(n.a,{href:"mailto:support@domcloud.id",children:"contact us"})," if it is still not correct."]}),"\n",(0,i.jsxs)(n.h4,{id:"https-error-err_cert_authority_invalid",children:["HTTPS Error ",(0,i.jsx)(n.code,{children:"ERR_CERT_AUTHORITY_INVALID"})]}),"\n",(0,i.jsxs)(n.p,{children:["This means that your SSL certificate has not been set or has expired. To update it please ",(0,i.jsx)(n.a,{href:"#how-to-renew-ssl",children:"scroll up"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you encounter ",(0,i.jsx)(n.code,{children:"ERR_CERTIFICATE_TRANSPARENCY_REQUIRED"})," after an SSL update, you don't need to panic because of an error due to cache and it will disappear in a few minutes."]}),"\n",(0,i.jsxs)(n.h4,{id:"nginx-error-403-forbidden-page",children:["NGINX Error ",(0,i.jsx)(n.code,{children:"403 Forbidden"})," page"]}),"\n",(0,i.jsx)(n.p,{children:"This means that NGINX cannot access the file due to a linux mode setting error in the file. In order to fix this easily you can run this on SSH:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"bash chmod -R 750 ~/"})}),"\n",(0,i.jsxs)(n.h4,{id:"nginx-error-page-404-found",children:["NGINX Error page ",(0,i.jsx)(n.code,{children:"404 Found"})]}),"\n",(0,i.jsx)(n.p,{children:"There are 2 possibilities:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If this happens for all page URLs, chances are you forgot to set NGINX to ",(0,i.jsx)(n.a,{href:"#how-to-install-php-framework",children:"setup index.php"})," or ",(0,i.jsx)(n.a,{href:"#passenger",children:"turn on passenger mode"})," for non-PHP."]}),"\n",(0,i.jsx)(n.li,{children:"If this happens for only a few files, there may be errors such as typo in the URL, wrong Base URL or not paying attention to the file name size."}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"blank-page-http-error-500",children:["Blank page ",(0,i.jsx)(n.code,{children:"HTTP Error 500"})]}),"\n",(0,i.jsx)(n.p,{children:"This means that there is an error in your PHP, but unlike XAMPP, PHP by default will not raise an error on the website."}),"\n",(0,i.jsx)(n.p,{children:"You have 2 options for viewing the error:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Via Webmin > Logs and Reports > NGINX Error Log"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#fastcgi",children:"Set in .user.ini"}),": ",(0,i.jsx)(n.code,{children:"display_errors = On"})]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"nginx-error-502-bad-gateway-page",children:["NGINX Error ",(0,i.jsx)(n.code,{children:"502 Bad Gateway"})," page"]}),"\n",(0,i.jsxs)(n.p,{children:["It is possible that the file you uploaded is too large or the PHP script you are running is taking too long. You can fix this via ",(0,i.jsx)(n.a,{href:"#fastcgi",children:".user.ini"})," file."]}),"\n",(0,i.jsx)(n.h4,{id:"connection-refused-from-server-http-request",children:'"Connection Refused" from server HTTP request'}),"\n",(0,i.jsx)(n.p,{children:"You need to turn off the firewall."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},5251:(e,n,r)=>{r(7418);var i=r(7294),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),n.Fragment=s("react.fragment")}var t=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var i,s={},d=null,c=null;for(i in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,i)&&!a.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:o,type:e,key:d,ref:c,props:s,_owner:t.current}}n.jsx=d,n.jsxs=d},5893:(e,n,r)=>{e.exports=r(5251)},1151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>s});var i=r(7294);const o=i.createContext({});function s(e){const n=i.useContext(o);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||t:s(e),i.createElement(o.Provider,{value:l},n)}}}]);