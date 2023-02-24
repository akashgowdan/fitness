"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[253],{5581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return C},contentTitle:function(){return O},default:function(){return P},frontMatter:function(){return x},metadata:function(){return S},toc:function(){return E}});var a=n(3117),r=n(7294),i=n(3905),o=n(6010),l=n(3735),s=n(6775),u=n(4423),c=n(636),p=n(9200);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=f({queryString:n,groupId:a}),[c,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),k=(()=>{const e=s??c;return g({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),d(e)}),[u,d,i]),tabValues:i}}var h=n(5730),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}var T={tabItem:"tabItem_Ymn6"};function I(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(T.tabItem,a),hidden:n},t)}const x={id:"getting-started",sidebar_position:1},O="Getting started",S={unversionedId:"fundamentals/getting-started",id:"fundamentals/getting-started",title:"Getting started",description:"Minimum requirements",source:"@site/docs/fundamentals/getting-started.md",sourceDirName:"fundamentals",slug:"/fundamentals/getting-started",permalink:"/rn-fitness-tracker/docs/fundamentals/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"getting-started",sidebar_position:1},sidebar:"visionSidebar",next:{title:"Usage instructions",permalink:"/rn-fitness-tracker/docs/fundamentals/usage-instructions"}},C={},E=[{value:"Minimum requirements",id:"minimum-requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Install peer dependencies",id:"install-peer-dependencies",level:3},{value:"Install cocoapods",id:"install-cocoapods",level:3},{value:"Setup",id:"setup",level:2},{value:"iOS",id:"ios",level:2},{value:"Adding usage descriptions",id:"adding-usage-descriptions",level:3},{value:"Android",id:"android",level:2},{value:"Adding permissions",id:"adding-permissions",level:3},{value:"Setting up Google Fit API permissions",id:"setting-up-google-fit-api-permissions",level:3}],j={toc:E},A="wrapper";function P(e){let{components:t,...n}=e;return(0,i.kt)(A,(0,a.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("h2",{id:"minimum-requirements"},"Minimum requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react-native")," >= 0.63.0")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"@kilohealth/rn-fitness-tracker")," to your dependencies list by running command:"),(0,i.kt)(w,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(I,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @kilohealth/rn-fitness-tracker\n"))),(0,i.kt)(I,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @kilohealth/rn-fitness-tracker\n")))),(0,i.kt)("h3",{id:"install-peer-dependencies"},"Install peer dependencies"),(0,i.kt)("p",null,"These dependencies are needed for checking and requesting android permissions."),(0,i.kt)(w,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(I,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-device-info react-native-permissions\n"))),(0,i.kt)(I,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-device-info react-native-permissions\n")))),(0,i.kt)("h3",{id:"install-cocoapods"},"Install cocoapods"),(0,i.kt)("p",null,"Now in the terminal go to the iOS folder and run the following command to install pods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pod install\n")),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To use HealthKit and Google fit you must first specify that your app requires access to HealthKit and Google Fit."),(0,i.kt)("h2",{id:"ios"},"iOS"),(0,i.kt)("h3",{id:"adding-usage-descriptions"},"Adding usage descriptions"),(0,i.kt)("p",null,"Open your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"Info.plist")," and add the following lines inside the outermost ",(0,i.kt)("inlineCode",{parentName:"p"},"<dict>")," tag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dict>\n    \x3c!-- ... --\x3e\n\n    \x3c!-- Fitness tracker --\x3e\n    <key>NSMotionUsageDescription</key>\n    <string>Reason string goes here</string>\n\n    \x3c!-- Health tracker --\x3e\n    <key>NSHealthUpdateUsageDescription</key>\n    <string>Reason string goes here</string>\n    <key>NSHealthShareUsageDescription</key>\n    <string>Reason string goes here</string>\n\n    \x3c!-- ... --\x3e\n</dict>\n")),(0,i.kt)("h2",{id:"android"},"Android"),(0,i.kt)("h3",{id:"adding-permissions"},"Adding permissions"),(0,i.kt)("p",null,"Open your project's AndroidManifest.xml and add the following lines inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"<manifest>")," tag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'\n<uses-permission android:name="android.permission.ACTIVITY_RECOGNITION"/>\n')),(0,i.kt)("h3",{id:"setting-up-google-fit-api-permissions"},"Setting up Google Fit API permissions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure your Google account has access to app Firebase project.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/credentials/consent"},"Create an OAuth screen")," for your project.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"User Type: External")," and fill out the form. Add ",(0,i.kt)("inlineCode",{parentName:"p"},"../auth/fitness.activity.read")," to\n",(0,i.kt)("strong",{parentName:"p"},"Scopes for Google APIs"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill out next popup forms with a brief explanation why you're using the activity tracker (no need to write much).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://console.developers.google.com/flows/enableapi?apiid=fitness&pli=1"},"Google console")," (note: select the\ncorrect project at the top)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select your app's project, ",(0,i.kt)("inlineCode",{parentName:"p"},"Continue"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Go to Credentials"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Where will you be calling the API from? Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Android"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"What data will you be accessing? Select ",(0,i.kt)("inlineCode",{parentName:"p"},"User data")," and click next.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Signing-certificate fingerprint")," generation command must be pointed to your app release / staging keystore\nfile.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save and submit everything. If you haven't got your google services config inside your app - download\nyour ",(0,i.kt)("inlineCode",{parentName:"p"},"google-services.json")," file from ",(0,i.kt)("a",{parentName:"p",href:"https://console.firebase.google.com"},"Firebase console")," and place it\ninside ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app")," directory within your project."))),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"For authorization to work in ",(0,i.kt)("strong",{parentName:"p"},"debug")," mode(locally), you must add credentials to Google Console with SHA-1 key from\ndebug.keystore.",(0,i.kt)("br",{parentName:"p"}),"\n","For ",(0,i.kt)("strong",{parentName:"p"},"production")," build to work, you must add credentials to Google Console with SHA-1 key from release.keystore.")),(0,i.kt)("admonition",{title:"Google Fit Authorization Error Codes",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"10 - Developer error")," - The application is misconfigured, usually meaning the credential setup is incorrect.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"12500 - Sign in failed")," - The sign in attempt didn't succeed with the current account. This may also occur with the\nincorrect credentials, for example the credentials are deleted from Google Console. But this error code may indicate\nother problems.")))}P.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);