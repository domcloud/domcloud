/*! For license information please see e30410b4.c4dd9efe.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1771],{27:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(5893),a=t(1151),o=t(4866),l=t(5162);const i={title:"Go",sidebar_position:6},s="Deploy Go Apps",c={unversionedId:"deployment/go",id:"deployment/go",title:"Go",description:"Go is a popular programming language for backend development. Go is served as a compiled language, which means you need to compile your code before running it. This is different from interpreted languages like PHP, Python, and Ruby.",source:"@site/docs/deployment/go.mdx",sourceDirName:"deployment",slug:"/deployment/go",permalink:"/docs/deployment/go",draft:!1,unlisted:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/deployment/go.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Go",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/deployment/ruby"},next:{title:"Rust",permalink:"/docs/deployment/rust"}},u={},d=[{value:"Recipes",id:"recipes",level:2},{value:"Init",id:"init",level:3},{value:"Init",id:"init-1",level:3},{value:"Go Environment",id:"go-environment",level:2}];function p(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"deploy-go-apps",children:"Deploy Go Apps"}),"\n",(0,r.jsx)(n.p,{children:"Go is a popular programming language for backend development. Go is served as a compiled language, which means you need to compile your code before running it. This is different from interpreted languages like PHP, Python, and Ruby."}),"\n",(0,r.jsxs)(n.p,{children:["Popular Go recipes include ",(0,r.jsx)(n.a,{href:"https://gin-gonic.com/",children:"Gin"})," and ",(0,r.jsx)(n.a,{href:"https://echo.labstack.com/",children:"Echo"}),". Please read our ",(0,r.jsx)(n.a,{href:"/docs/features/runner",children:"Runner's Guide"})," first if you haven't."]}),"\n",(0,r.jsx)(n.h2,{id:"recipes",children:"Recipes"}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(l.Z,{value:"gin",label:"Gin",default:!0,children:[(0,r.jsx)(n.h3,{id:"init",children:"Init"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'source: clear\nfeatures:\n  - go latest\nnginx:\n    root: public_html/public\n    passenger:\n        enabled: on\n        app_start_command: env PORT=$PORT ./app\ncommands:\n    - go mod init app\n    - go get github.com/gin-gonic/gin\n    - echo "package main\\n\\nimport \\"github.com/gin-gonic/gin\\"\\n\\nfunc main() {\\n\\tapp := gin.Default()\\n\\tapp.GET(\\"/\\", func(c *gin.Context) {\\n\\t\\tc.String(200, \\"Hello, World!\\")\\n\\t})\\n\\tapp.Run()\\n}" > app.go\n    - go build -o app\n'})}),(0,r.jsxs)(n.p,{children:["A simple Go website with ",(0,r.jsx)(n.a,{href:"https://gin-gonic.com/",children:"Gin"})," for development."]})]}),(0,r.jsxs)(l.Z,{value:"echo",label:"Echo",children:[(0,r.jsx)(n.h3,{id:"init-1",children:"Init"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'source: clear\nfeatures:\n  - go latest\nnginx:\n    root: public_html/public\n    passenger:\n        enabled: on\n        app_start_command: env PORT=$PORT ./app\ncommands:\n    - go mod init app\n    - go get github.com/labstack/echo/v4\n    - echo "package main\\n\\nimport (\\n\\t\\"net/http\\"\\n\\n\\t\\"github.com/labstack/echo/v4\\"\\n\\t\\"github.com/labstack/echo/v4/middleware\\"\\n)\\n\\nfunc main() {\\n\\te := echo.New()\\n\\te.Use(middleware.Logger())\\n\\te.Use(middleware.Recover())\\n\\te.GET(\\"/\\", func(c echo.Context) error {\\n\\t\\treturn c.String(http.StatusOK, \\"Hello, World!\\")\\n\\t})\\n\\te.Logger.Fatal(e.Start(\\":$PORT\\"))\\n}" > app.go\n    - go build -o app\n'})}),(0,r.jsxs)(n.p,{children:["A simple Go website with ",(0,r.jsx)(n.a,{href:"https://echo.labstack.com/",children:"Echo"})," for development."]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"go-environment",children:"Go Environment"}),"\n",(0,r.jsxs)(n.p,{children:["You can specify the Go version in the ",(0,r.jsx)(n.code,{children:"features"})," section. For example, ",(0,r.jsx)(n.code,{children:"go 1.16.5"})," will install Go 1.16.5. You can also use ",(0,r.jsx)(n.code,{children:"go latest"})," to install the latest version of Go."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"features:\n  - go latest\n"})}),"\n",(0,r.jsx)(n.p,{children:"There are no builtin Go compiler in system files. You need to install Go first before using it."})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),a=t(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(7462),a=t(7294),o=t(6010),l=t(2466),i=t(6550),s=t(1980),c=t(7392),u=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[s,c]=h({queryString:t,groupId:r}),[d,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var g=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),r=c[t].value;r!==i&&(d(n),s(r))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function x(e){const n=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(v,(0,r.Z)({},e,n)),a.createElement(y,(0,r.Z)({},e,n)))}function j(e){const n=(0,g.Z)();return a.createElement(x,(0,r.Z)({key:String(n)},e),d(e.children))}},5251:(e,n,t)=>{t(7418);var r=t(7294),a=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),n.Fragment=o("react.fragment")}var l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,o={},c=null,u=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,r)&&!s.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:l.current}}n.jsx=c,n.jsxs=c},5893:(e,n,t)=>{e.exports=t(5251)},1151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>o});var r=t(7294);const a=r.createContext({});function o(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||l:o(e),r.createElement(a.Provider,{value:i},n)}}}]);