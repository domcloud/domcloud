/*! For license information please see 6d880888.45040b67.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[315],{2461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(5893),i=t(1151);const r={title:"Go",sidebar_position:6,format:"mdx"},a="Deploy Go Apps",s={unversionedId:"deployment/go",id:"deployment/go",title:"Go",description:"Go is a popular programming language for backend development. Go is served as a compiled language, which means you need to compile your code before running it. This is different from interpreted languages like PHP, Python, and Ruby.",source:"@site/docs/deployment/go.md",sourceDirName:"deployment",slug:"/deployment/go",permalink:"/docs/deployment/go",draft:!1,unlisted:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/deployment/go.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Go",sidebar_position:6,format:"mdx"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/deployment/ruby"},next:{title:"Rust",permalink:"/docs/deployment/rust"}},l={},c=[{value:"Recipes",id:"recipes",level:2},{value:"Init",id:"init",level:3},{value:"Init",id:"init-1",level:3},{value:"Go Environment",id:"go-environment",level:2}];function d(e){const n=Object.assign({p:"p",h1:"h1",a:"a",h2:"h2",tabs:"tabs",tabitem:"tabitem",h3:"h3",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';"}),"\n",(0,o.jsx)(n.h1,{id:"deploy-go-apps",children:"Deploy Go Apps"}),"\n",(0,o.jsx)(n.p,{children:"Go is a popular programming language for backend development. Go is served as a compiled language, which means you need to compile your code before running it. This is different from interpreted languages like PHP, Python, and Ruby."}),"\n",(0,o.jsxs)(n.p,{children:["Popular Go recipes include ",(0,o.jsx)(n.a,{href:"https://gin-gonic.com/",children:"Gin"})," and ",(0,o.jsx)(n.a,{href:"https://echo.labstack.com/",children:"Echo"}),". Please read our ",(0,o.jsx)(n.a,{href:"/docs/features/runner",children:"Runner's Guide"})," first if you haven't."]}),"\n",(0,o.jsx)(n.h2,{id:"recipes",children:"Recipes"}),"\n",(0,o.jsxs)(n.tabs,{children:["\n  ",(0,o.jsxs)(n.tabitem,{value:"gin",label:"Gin",default:!0,children:["\n",(0,o.jsx)(n.h3,{id:"init",children:"Init"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'source: clear\nfeatures:\n  - go latest\nnginx:\n    root: public_html/public\n    passenger:\n        enabled: on\n        app_start_command: env PORT=$PORT ./app\ncommands:\n    - go mod init app\n    - go get github.com/gin-gonic/gin\n    - echo "package main\\n\\nimport \\"github.com/gin-gonic/gin\\"\\n\\nfunc main() {\\n\\tapp := gin.Default()\\n\\tapp.GET(\\"/\\", func(c *gin.Context) {\\n\\t\\tc.String(200, \\"Hello, World!\\")\\n\\t})\\n\\tapp.Run()\\n}" > app.go\n    - go build -o app\n'})}),"\n",(0,o.jsxs)(n.p,{children:["A simple Go website with ",(0,o.jsx)(n.a,{href:"https://gin-gonic.com/",children:"Gin"})," for development."]}),"\n  "]}),"\n  ",(0,o.jsxs)(n.tabitem,{value:"echo",label:"Echo",children:["\n",(0,o.jsx)(n.h3,{id:"init-1",children:"Init"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'source: clear\nfeatures:\n  - go latest\nnginx:\n    root: public_html/public\n    passenger:\n        enabled: on\n        app_start_command: env PORT=$PORT ./app\ncommands:\n    - go mod init app\n    - go get github.com/labstack/echo/v4\n    - echo "package main\\n\\nimport (\\n\\t\\"net/http\\"\\n\\n\\t\\"github.com/labstack/echo/v4\\"\\n\\t\\"github.com/labstack/echo/v4/middleware\\"\\n)\\n\\nfunc main() {\\n\\te := echo.New()\\n\\te.Use(middleware.Logger())\\n\\te.Use(middleware.Recover())\\n\\te.GET(\\"/\\", func(c echo.Context) error {\\n\\t\\treturn c.String(http.StatusOK, \\"Hello, World!\\")\\n\\t})\\n\\te.Logger.Fatal(e.Start(\\":$PORT\\"))\\n}" > app.go\n    - go build -o app\n'})}),"\n",(0,o.jsxs)(n.p,{children:["A simple Go website with ",(0,o.jsx)(n.a,{href:"https://echo.labstack.com/",children:"Echo"})," for development."]}),"\n  "]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"go-environment",children:"Go Environment"}),"\n",(0,o.jsxs)(n.p,{children:["You can specify the Go version in the ",(0,o.jsx)(n.code,{children:"features"})," section. For example, ",(0,o.jsx)(n.code,{children:"go 1.16.5"})," will install Go 1.16.5. You can also use ",(0,o.jsx)(n.code,{children:"go latest"})," to install the latest version of Go."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"features:\n  - go latest\n"})}),"\n",(0,o.jsx)(n.p,{children:"There are no builtin Go compiler in system files. You need to install Go first before using it."})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}},5251:(e,n,t)=>{t(7418);var o=t(7294),i=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;i=r("react.element"),n.Fragment=r("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var o,r={},c=null,d=null;for(o in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,o)&&!l.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:a.current}}n.jsx=c,n.jsxs=c},5893:(e,n,t)=>{e.exports=t(5251)},1151:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>r});var o=t(7294);const i=o.createContext({});function r(e){const n=o.useContext(i);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||a:r(e),o.createElement(i.Provider,{value:s},n)}}}]);