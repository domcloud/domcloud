/*! For license information please see 2c609d45.371e83e5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8223],{5513:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var o=s(5893),r=s(1151);const t={title:"Domain Name Server"},i=void 0,d={unversionedId:"features/dns",id:"features/dns",title:"Domain Name Server",description:"DNS is a service that translates domain names to IP addresses.",source:"@site/docs/features/dns.mdx",sourceDirName:"features",slug:"/features/dns",permalink:"/docs/features/dns",draft:!1,unlisted:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/features/dns.mdx",tags:[],version:"current",frontMatter:{title:"Domain Name Server"},sidebar:"tutorialSidebar",previous:{title:"Database Providers",permalink:"/docs/features/database"},next:{title:"Virtualmin and Webmin",permalink:"/docs/features/editor"}},a={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Directly add CNAME or A+AAAA record",id:"directly-add-cname-or-aaaaa-record",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Checking if DNS is working at server",id:"checking-if-dns-is-working-at-server",level:3},{value:"Checking if DNS is working at your end",id:"checking-if-dns-is-working-at-your-end",level:3},{value:"Temporarily skip DNS at your end",id:"temporarily-skip-dns-at-your-end",level:3}];function l(e){const n=Object.assign({p:"p",pre:"pre",code:"code",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",admonition:"admonition",img:"img"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"DNS is a service that translates domain names to IP addresses."}),"\n",(0,o.jsx)(n.p,{children:"If you host a website with a custom domain, you need to point the name server (in any registrar where you buy the domain) to these below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"nsp.domcloud.io\nnss.domcloud.io\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To add custom records to your domain, you can use the DNS Manager via Webmin -> DNS Records. You can also add or delete DNS records using ",(0,o.jsx)(n.a,{href:"/docs/features/deploy#dns",children:"the deployment script"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,o.jsxs)(n.p,{children:["When you create a website with custom domain (other than ",(0,o.jsx)(n.code,{children:"*.domcloud.io"}),"), a ",(0,o.jsx)(n.code,{children:"dns"})," service is activated from ",(0,o.jsx)(n.a,{href:"/docs/features/deploy#dns",children:"the deployment script"}),", it's activated automatically by our Portal UI."]}),"\n",(0,o.jsxs)(n.p,{children:["Any website where you buy a domain is called a registrar. We also sell domain, but you don't have to buy a domain from us, you just have to buy it from somewhere and set the nameserver to ",(0,o.jsx)(n.code,{children:"nsp.domcloud.io"})," and ",(0,o.jsx)(n.code,{children:"nss.domcloud.io"}),", which means that your domain DNS will be handled to us."]}),"\n",(0,o.jsx)(n.p,{children:"Usually changing a name server takes a hour to a day to propagate across internet."}),"\n",(0,o.jsx)(n.h3,{id:"directly-add-cname-or-aaaaa-record",children:"Directly add CNAME or A+AAAA record"}),"\n",(0,o.jsx)(n.p,{children:"If you don't want giving a whole DNS to us, for example because you only host a subdomain here or you want a to better DNS handles it for you (e.g. Cloudflare), then you can directly add CNAME or A+AAAA at your DNS provider."}),"\n",(0,o.jsx)(n.p,{children:"Firstly, go to Manage tab at your website portal. At top left you'll find these information:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Hostname: ",(0,o.jsx)(n.strong,{children:"sga.domcloud.id"})]}),"\n",(0,o.jsxs)(n.li,{children:["IPv4: ",(0,o.jsx)(n.strong,{children:"68.183.191.223"})]}),"\n",(0,o.jsxs)(n.li,{children:["IPv6: ",(0,o.jsx)(n.strong,{children:"2400:6180:0:d1::770:4001"})]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Different server location provides different hostname and IP address!"})}),"\n",(0,o.jsxs)(n.p,{children:["For example we'll hosting ",(0,o.jsx)(n.code,{children:"sub.yourdomain.com"})," at DOM Cloud but using Cloudflare DNS, then in Cloudflare, add these records:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(8495).Z+"",width:"1448",height:"518"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"CNAME"})," is recommended instead of providing ",(0,o.jsx)(n.code,{children:"A"})," and ",(0,o.jsx)(n.code,{children:"AAAA"})," records, which directly giving an IP address. But it may be preferable to give ",(0,o.jsx)(n.code,{children:"A"})," and ",(0,o.jsx)(n.code,{children:"AAAA"})," records if you need to add e.g. root/apex domain."]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.p,{children:"Go watch some YouTube related to DNS servers, examples:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.youtube.com/watch?v=GlZC4Jwf3xQ",children:"How DNS translates domain names to IP addresses"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.youtube.com/watch?v=Rck3BALhI5c",children:"DNS as Fast As Possible"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.youtube.com/watch?v=UVR9lhUGAyU",children:"DNS Explained in 100 Seconds"})}),"\n"]})]}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsxs)(n.p,{children:["DNS can be verified by using ",(0,o.jsx)(n.code,{children:"nslookup"})," from your local terminal."]}),"\n",(0,o.jsx)(n.h3,{id:"checking-if-dns-is-working-at-server",children:"Checking if DNS is working at server"}),"\n",(0,o.jsxs)(n.p,{children:["First, make sure that DNS is enabled, to do that enter ",(0,o.jsx)(n.code,{children:"nslookup <your-domain> <name-server>"}),", for example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",metastring:'title="$> nslookup sga.domcloud.id nsp.domcloud.io"',children:"Server:\t\tnsp.domcloud.io\nAddress:\t68.183.191.223#53\n\nNon-authoritative answer:\nName:\tsga.domcloud.id\nAddress: 68.183.191.223\n"})}),"\n",(0,o.jsx)(n.p,{children:"If the second address matches with IP address shown from manage tab, then DNS is enabled correctly. Any nonexistent domain is either returning wrong IP address or just refusing to answer depending on your local ISP settings:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",metastring:'title="$> nslookup nonexistantdomain.com nsp.domcloud.io"',children:"Server:\t\tnsp.domcloud.io\nAddress:\t68.183.191.223#53\n\n** server can't find nonexistantdomain.com: REFUSED\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If that's the case then you need to enable DNS ",(0,o.jsx)(n.a,{href:"/docs/features/deploy#dns",children:"via the deployment script"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"checking-if-dns-is-working-at-your-end",children:"Checking if DNS is working at your end"}),"\n",(0,o.jsxs)(n.p,{children:["Just type ",(0,o.jsx)(n.code,{children:"nslookup <your-domain>"})," at your terminal and it will use your local DNS. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",metastring:'title="$> nslookup sga.domcloud.id"',children:"Server:\t\t1.1.1.1\nAddress:\t1.1.1.1#53\n\nNon-authoritative answer:\nName:\tsga.domcloud.id\nAddress: 68.183.191.223\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In that case my device talks to ",(0,o.jsx)(n.a,{href:"https://1.1.1.1",children:"1.1.1.1"})," to find that ",(0,o.jsx)(n.code,{children:"sga.domcloud.id"})," points to ",(0,o.jsx)(n.code,{children:"68.183.191.223"}),", which is a correct answer."]}),"\n",(0,o.jsx)(n.p,{children:"A non existing DNS server may simply refuse to answer, or if not, gives incorrect IP address."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",metastring:'title="$> nslookup nonexistantdomain.com"',children:"Server:\t\t1.1.1.1\nAddress:\t1.1.1.1#53\n\n** server can't find nonexistantdomain.com: NXDOMAIN\n"})}),"\n",(0,o.jsx)(n.p,{children:"If that's the case try double checking the NS entries in your registrar, or wait until all caches invalidates."}),"\n",(0,o.jsx)(n.h3,{id:"temporarily-skip-dns-at-your-end",children:"Temporarily skip DNS at your end"}),"\n",(0,o.jsxs)(n.p,{children:["You can skip configuring DNS altogether by directly adding an IP record to ",(0,o.jsx)(n.code,{children:"/etc/hosts"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",metastring:'title="$> sudo nano /etc/hosts"',children:"68.183.191.223 nonexistantdomain.com\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This way your device will happily points ",(0,o.jsx)(n.code,{children:"nonexistantdomain.com"})," to ",(0,o.jsx)(n.code,{children:"68.183.191.223"})," without dealing with DNS servers. Save after editing and restart your browser."]}),"\n",(0,o.jsxs)(n.p,{children:["Note that modifying ",(0,o.jsx)(n.code,{children:"/etc/hosts"})," doesn't make the world care, at least your phone won't pickup that ",(0,o.jsx)(n.code,{children:"/etc/hosts"})," you edited. This is why you have to buy a domain from a registrar."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}},5251:(e,n,s)=>{s(7418);var o=s(7294),r=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var t=Symbol.for;r=t("react.element"),n.Fragment=t("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var o,t={},c=null,l=null;for(o in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)d.call(n,o)&&!a.hasOwnProperty(o)&&(t[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===t[o]&&(t[o]=n[o]);return{$$typeof:r,type:e,key:c,ref:l,props:t,_owner:i.current}}n.jsx=c,n.jsxs=c},5893:(e,n,s)=>{e.exports=s(5251)},8495:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/cloudflare-add-ae5391f7bcfe1d991ac6e0be5d55e4ff.png"},1151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>t});var o=s(7294);const r=o.createContext({});function t(e){const n=o.useContext(r);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||i:t(e),o.createElement(r.Provider,{value:d},n)}}}]);