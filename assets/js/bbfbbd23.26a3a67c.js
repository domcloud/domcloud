/*! For license information please see bbfbbd23.26a3a67c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1621],{9156:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=t(5893),a=t(1151),o=t(4866),s=t(5162);const l={title:"CMS"},c="Deploy Popular CMS Apps",i={unversionedId:"deployment/cms",id:"deployment/cms",title:"CMS",description:"CMS (Content Management System) is a software that allows you to create and manage content on a website without or with minimal coding experience. DOM Cloud supports many popular CMS apps.",source:"@site/docs/deployment/cms.mdx",sourceDirName:"deployment",slug:"/deployment/cms",permalink:"/docs/deployment/cms",draft:!1,unlisted:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/deployment/cms.mdx",tags:[],version:"current",frontMatter:{title:"CMS"},sidebar:"tutorialSidebar",previous:{title:"Zig",permalink:"/docs/deployment/zig"},next:{title:"Features",permalink:"/docs/features/"}},u={},d=[{value:"WordPress",id:"wordpress",level:2},{value:"Strapi",id:"strapi",level:2},{value:"Ghost",id:"ghost",level:2}];function p(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"deploy-popular-cms-apps",children:"Deploy Popular CMS Apps"}),"\n",(0,r.jsx)(n.p,{children:"CMS (Content Management System) is a software that allows you to create and manage content on a website without or with minimal coding experience. DOM Cloud supports many popular CMS apps."}),"\n",(0,r.jsx)(n.h2,{id:"wordpress",children:(0,r.jsx)(n.a,{href:"https://wordpress.org",children:"WordPress"})}),"\n",(0,r.jsx)(o.Z,{children:(0,r.jsxs)(s.Z,{value:"wordpress-recipe",label:"Recipe",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'source: https://wordpress.org/latest.zip\ndirectory: wordpress\nfeatures:\n- mysql\nnginx:\n  fastcgi: on\n  locations:\n  - match: /\n    try_files: $uri $uri/ /index.php$is_args$args\n  - match: ~ /xmlrpc\\.php$\n    deny: all\ncommands:\n- cp wp-config-sample.php wp-config.php\n- sed -i "s/database_name_here/${DATABASE}/g" wp-config.php\n- sed -i "s/username_here/${USERNAME}/g" wp-config.php\n- sed -i "s/password_here/${PASSWORD}/g" wp-config.php\n- sed -i "s/utf8/utf8mb4/g" wp-config.php\n'})}),(0,r.jsxs)(n.p,{children:["The script above downloads and extracts WordPress and setup the database.\nAlso blocks ",(0,r.jsx)(n.code,{children:"/xmlrpc.php"})," because it's a common DoS attack."]}),(0,r.jsxs)(n.p,{children:["To install ",(0,r.jsx)(n.code,{children:"wp-cli"}),", a WordPress command line tool:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"commands:\n- curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar\n- chmod +x wp-cli.phar\n- mkdir -p ~/.local/bin/\n- mv wp-cli.phar ~/.local/bin/wp\n"})})]})}),"\n",(0,r.jsx)(n.h2,{id:"strapi",children:(0,r.jsx)(n.a,{href:"https://strapi.io",children:"Strapi"})}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(s.Z,{value:"strapi-recipe",label:"Recipe",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"source: clear\nfeatures:\n- ssl\n- node lts\nnginx:\n  root: public_html/public\n  passenger:\n    enabled: 'on'\n    app_env: development\n    app_start_command: env PORT=$PORT yarn develop\n  locations:\n    - match: /admin/\n      alias: public_html/build/\ncommands:\n- yarn create strapi-app . --quickstart --no-run\n- echo JWT_SECRET=`node -e \"console.log(crypto.randomBytes(16).toString('base64'))\"` > .env\n- echo APP_KEYS=`node -e \"console.log(crypto.randomBytes(16).toString('base64'))\"` >> .env\n- echo ADMIN_JWT_SECRET=`node -e \"console.log(crypto.randomBytes(16).toString('base64'))\"` >> .env\n- echo API_TOKEN_SALT=`node -e \"console.log(crypto.randomBytes(16).toString('base64'))\"` >> .env\n- echo STRAPI_ADMIN_BACKEND_URL=//${DOMAIN} >> .env\n- STRAPI_ADMIN_BACKEND_URL=//${DOMAIN} yarn build\n"})})}),(0,r.jsx)(s.Z,{value:"strapi-prod",label:"Production Config",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"nginx:\n  root: public_html/public\n  passenger:\n    enabled: 'on'\n    app_start_command: env PORT=$PORT yarn start\n  locations:\n    - match: /admin/\n      alias: public_html/build/\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"ghost",children:(0,r.jsx)(n.a,{href:"https://ghost.org",children:"Ghost"})}),"\n",(0,r.jsx)(o.Z,{children:(0,r.jsx)(s.Z,{value:"ghost-recipe",label:"Recipe",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'\nsource: https://github.com/TryGhost/Ghost/releases/download/v4.4.0/Ghost-4.4.0.zip\nroot: public_html/public\nnginx:\n  ssl: enforce\n  fastcgi: off\n  passenger:\n    enabled: on\nfeatures:\n- mysql\n- ssl\ncommands:\n- echo export PATH="$HOME/public_html/node_modules/.bin:$PATH" > ~/.bash_profile\n- source ~/.bash_profile\n- mkdir public\n- echo "require(\'./index.js\');" > app.js\n- wget -q -O config.production.json https://gist.githubusercontent.com/willnode/45e722be156736ea3a08f29d37ad997c/raw/93dbbecc209ac9e6b9eb0a9d22ece1f14ab54e67/ghost-production-config.json\n- \'sed -ri "s/username_here/${USERNAME}/g" config.production.json\'\n- \'sed -ri "s/password_here/${PASSWORD}/g" config.production.json\'\n- \'sed -ri "s/database_here/${DATABASE}/g" config.production.json\'\n- \'sed -ri "s/url_here/https:\\/\\/${DOMAIN}/g" config.production.json\'\n- yarn install --production --no-progress\n- knex-migrator init\n'})})})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(7294),a=t(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:t,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>x});var r=t(7462),a=t(7294),o=t(6010),s=t(2466),l=t(6550),c=t(1980),i=t(7392),u=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,i]=m({queryString:t,groupId:r}),[d,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),b=(()=>{const e=c??d;return h({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),f(e)}),[i,f,o]),tabValues:o}}var b=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:t,selectedValue:l,selectValue:c,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),r=i[t].value;r!==l&&(d(n),c(r))},h=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},i.map((e=>{let{value:n,label:t,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>u.push(e),onKeyDown:h,onClick:p},s,{className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function w(e){const n=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(y,(0,r.Z)({},e,n)),a.createElement(v,(0,r.Z)({},e,n)))}function x(e){const n=(0,b.Z)();return a.createElement(w,(0,r.Z)({key:String(n)},e),d(e.children))}},5251:(e,n,t)=>{t(7418);var r=t(7294),a=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),n.Fragment=o("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var r,o={},i=null,u=null;for(r in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(u=n.ref),n)l.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:s.current}}n.jsx=i,n.jsxs=i},5893:(e,n,t)=>{e.exports=t(5251)},1151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>o});var r=t(7294);const a=r.createContext({});function o(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||s:o(e),r.createElement(a.Provider,{value:l},n)}}}]);