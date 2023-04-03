"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2630],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6775),s=n(1980),p=n(7392),u=n(12);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:n,groupId:a}),[c,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),y(e)}),[p,y,o]),tabValues:o}}var f=n(2389);const g="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==i&&(c(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=y(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},2151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={title:"Python",sidebar_position:4},s="Deploy Python Apps",p={unversionedId:"deployment/python",id:"deployment/python",title:"Python",description:"Python is a beginner-friendly programming language popularly used for machine learning and other scientific projects. Python is served using Phusion Passenger inside NGINX.",source:"@site/docs/deployment/python.md",sourceDirName:"deployment",slug:"/deployment/python",permalink:"/docs/deployment/python",draft:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/deployment/python.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Python",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Node.js",permalink:"/docs/deployment/node"},next:{title:"Ruby",permalink:"/docs/deployment/ruby"}},u={},c=[{value:"Recipes",id:"recipes",level:2},{value:"Init",id:"init",level:3},{value:"Init in Development Mode",id:"init-in-development-mode",level:3},{value:"Python environment",id:"python-environment",level:2},{value:"NGINX Setup",id:"nginx-setup",level:2},{value:"Package Install",id:"package-install",level:2},{value:"Clear packager cache",id:"clear-packager-cache",level:3},{value:"Python Error Logs",id:"python-error-logs",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-python-apps"},"Deploy Python Apps"),(0,r.kt)("p",null,"Python is a beginner-friendly programming language popularly used for machine learning and other scientific projects. Python is served using Phusion Passenger inside NGINX."),(0,r.kt)("p",null,"Popular Python recipes include ",(0,r.kt)("a",{parentName:"p",href:"https://flask.palletsprojects.com/"},"Flask")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.djangoproject.com/"},"Django"),". Please read our ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/runner"},"Runner's Guide")," first if you haven't."),(0,r.kt)("h2",{id:"recipes"},"Recipes"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"flask",label:"Flask",default:!0,mdxType:"TabItem"},(0,r.kt)("h3",{id:"init"},"Init"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'source: clear\nfeatures:\n  - python latest\nnginx:\n  root: public_html/app/static\n  passenger:\n    enabled: on\n    app_env: development\n    app_root: public_html\n    python: .pyenv/shims/python\ncommands:\n  - pip install createflaskapp\n  - create-flask-app project\n  - mv project/* . ; rm -rf project\n  - cat requirements.txt | grep -v "pkg-resources" > requirements.txt || true\n  - pip install -r requirements.txt\n  - echo "from app import app as application" > passenger_wsgi.py\n')),(0,r.kt)("p",null,"A simple Flask website with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/isakal/create-flask-app"},"create-flask-app")," for development.")),(0,r.kt)(l.Z,{value:"django",label:"Django",mdxType:"TabItem"},(0,r.kt)("h3",{id:"init-in-development-mode"},"Init in Development Mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'source: clear\nfeatures:\n- python latest\nnginx:\n  root: public_html/public\n  passenger:\n    enabled: on\n    python: .pyenv/shims/python\ncommands:\n- pip install django\n- django-admin startproject app .\n- sed -i "s/ALLOWED_HOSTS = \\[\\]/ALLOWED_HOSTS = \\[\'${DOMAIN}\'\\]/g" app/settings.py\n- echo "from app.wsgi import application" > passenger_wsgi.py\n- python manage.py migrate\n- mkdir public\n')),(0,r.kt)("p",null,"A simple Flask website with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/isakal/create-flask-app"},"create-flask-app")," for development."))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's extract those recipes meaning individually."),(0,r.kt)("h2",{id:"python-environment"},"Python environment"),(0,r.kt)("p",null,"The default Python version is ",(0,r.kt)("inlineCode",{parentName:"p"},"3.9"),", which is the default provided from the OS."),(0,r.kt)("p",null,"To change Python version used to the latest  one, put this in runner:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"features:\n- python latest\n")),(0,r.kt)("p",null,"It will install python in userland and all binaries will use it instead of the default one."),(0,r.kt)("p",null,"You can also install other or specific version of Python e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"python 3.9"),",  ",(0,r.kt)("inlineCode",{parentName:"p"},"python 3.9.2"),". This action will install Python in userland with the help of ",(0,r.kt)("a",{parentName:"p",href:"https://webinstall.dev/python/"},"webi script"),"."),(0,r.kt)("h2",{id:"nginx-setup"},"NGINX Setup"),(0,r.kt)("p",null,"Binding Python through NGINX is done by Passenger. To make the binding work, you need to make sure that your app can open port number using given environment variable (.e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"PORT"),"), and you point the root of your public file to a ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"root: public_html/public\nnginx:\n  passenger:\n    enabled: on\n    app_start_command: env PORT=$PORT python main.py\n")),(0,r.kt)("p",null,"If your setup is complex (e.g. using multiple websites in a domain) you can tell which exactly the ",(0,r.kt)("inlineCode",{parentName:"p"},"app_root")," directory your app is serving from. Just make sure your root directory is outside of your app directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"root: public_html/client/dist\nnginx:\n  locations:\n  - match: /api\n    passenger:\n      enabled: on\n      app_start_command: env PORT=$PORT python main.py\n      app_root: public_html/server\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"There's so much more to cover about NGINX configuration! read more at ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/nginx#configure-nginx-for-general-apps"},"NGINX")," page.")),(0,r.kt)("h2",{id:"package-install"},"Package Install"),(0,r.kt)("p",null,"Package installs can be done just like usual ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install")," command. Because it's run in userland, you can install packages without issuing ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--user"),"."),(0,r.kt)("h3",{id:"clear-packager-cache"},"Clear packager cache"),(0,r.kt)("p",null,"In meantime if your development has stable enough, you may want to clear the packager cache to save space."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip cache purge\n")),(0,r.kt)("h2",{id:"python-error-logs"},"Python Error Logs"),(0,r.kt)("p",null,"When your Python crashed during startup, a helpful error will be displayed in the browser. This aids you to diagnose if some configuration is wrong."),(0,r.kt)("p",null,"(TODO) Unfortunately, we haven't found a way to capture Python error logs yet. You can utilize file-based log using ",(0,r.kt)("inlineCode",{parentName:"p"},"logging")," module to capture errors."))}m.isMDXComponent=!0}}]);