"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6330],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(f,s(s({ref:t},d),{},{components:a})):n.createElement(f,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3707:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Database Daemon"},s="Databases",i={unversionedId:"features/database",id:"features/database",title:"Database Daemon",description:"Database is an integral part of any application. DOM Cloud provides a free, opt-in MariaDB and PostgreSQL database for every website in every tier.",source:"@site/docs/features/database.md",sourceDirName:"features",slug:"/features/database",permalink:"/docs/features/database",draft:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/features/database.md",tags:[],version:"current",frontMatter:{title:"Database Daemon"},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/docs/features/"},next:{title:"DNS Daemon",permalink:"/docs/features/dns"}},l={},p=[{value:"Using the Database",id:"using-the-database",level:3},{value:"Remote Access",id:"remote-access",level:3},{value:"Timestamp",id:"timestamp",level:3}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"databases"},"Databases"),(0,r.kt)("p",null,"Database is an integral part of any application. DOM Cloud provides a free, opt-in ",(0,r.kt)("inlineCode",{parentName:"p"},"MariaDB")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PostgreSQL")," database for every website in every tier. "),(0,r.kt)("p",null,"Use the ",(0,r.kt)("em",{parentName:"p"},"runner")," to add and use a database. See the section for enabling ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/runner#mysql"},"MariaDB")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/runner#postgresql"},"PostgreSQL"),"."),(0,r.kt)("p",null,"To view and edit the database using online tools, use PhpMyAdmin or PhpPgAdmin. Both available from manage tab."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You can't create or drop database from PhpMyAdmin or PhpPgAdmin. You have to do that from webmin or runner.")),(0,r.kt)("h3",{id:"using-the-database"},"Using the Database"),(0,r.kt)("p",null,"After enabling MySQL/Postgres from the runner. You can provide the database credentials like below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hostname: ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost")," (because the database always live in the same server)"),(0,r.kt)("li",{parentName:"ul"},"Username: Same username with server (see from manage tab)"),(0,r.kt)("li",{parentName:"ul"},"Password: Same password with server (see from manage tab)"),(0,r.kt)("li",{parentName:"ul"},"Database name: Usually username + ",(0,r.kt)("inlineCode",{parentName:"li"},"_db")," unless you've create another DB")),(0,r.kt)("h3",{id:"remote-access"},"Remote Access"),(0,r.kt)("p",null,"Remote Access is used to manage databases using your local software -- such as DBeaver, HeidiSQL or TablePlus."),(0,r.kt)("p",null,"PostgreSQL permits remote access by default."),(0,r.kt)("p",null,"MySQL is more grained and by default doesn't allow remote access by default, you need to change it by go to the Webmin > Databases > Remote access and add ",(0,r.kt)("inlineCode",{parentName:"p"},"%.%.%.%")," (next line above ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),") to allowed hosts list."),(0,r.kt)("h3",{id:"timestamp"},"Timestamp"),(0,r.kt)("p",null,"The whole server always sets the clock in ",(0,r.kt)("inlineCode",{parentName:"p"},"UTC"),"."),(0,r.kt)("p",null,"A good idea to handle timezone is done by client processing (Javascript), both after getting the data from database/AJAX and before sending data/Posts to server."),(0,r.kt)("p",null,"If you don't care about timezone and you think it's safe to assume that your website is only accessed in one timezone, you can set the timezone in the backend using ",(0,r.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/function.date-default-timezone-set.php"},"date_default_timezone_set")," for PHP or ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/developer-rants/time-zones-in-node-js-fc5a5b51906a"},(0,r.kt)("inlineCode",{parentName:"a"},"TZ")," env")," for non-PHP (set it to passenger's ",(0,r.kt)("inlineCode",{parentName:"p"},"env_var_list"),")."))}u.isMDXComponent=!0}}]);