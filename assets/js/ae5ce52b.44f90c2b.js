"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[253],{1034:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return b},default:function(){return j},frontMatter:function(){return y},metadata:function(){return N},toc:function(){return O}});var a=n(7462),r=n(3366),i=n(7294),o=n(3905),l=n(6010),s=n(5730),p=n(636),u=n(6602),c=n(3735),d="tabList__CuJ",m="tabItem_LNqP";function f(e){var t,n,r=e.lazy,o=e.block,s=e.defaultValue,f=e.values,g=e.groupId,v=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,p.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===s?s:null!=(t=null!=s?s:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),w=N.tabGroupChoices,O=N.setTabGroupChoices,T=(0,i.useState)(b),j=T[0],x=T[1],I=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var E=w[g];null!=E&&E!==j&&h.some((function(e){return e.value===E}))&&x(E)}var S=function(e){var t=e.currentTarget,n=I.indexOf(t),a=h[n].value;a!==j&&(C(t),x(a),null!=g&&O(g,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=I.indexOf(e.currentTarget)+1;n=null!=(a=I[r])?a:I[0];break;case"ArrowLeft":var i,o=I.indexOf(e.currentTarget)-1;n=null!=(i=I[o])?i:I[I.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},v)},h.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:S,onClick:S},r,{className:(0,l.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),r?(0,i.cloneElement)(k.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function g(e){var t=(0,s.Z)();return i.createElement(f,(0,a.Z)({key:String(t)},e))}var v="tabItem_Ymn6";function k(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",className:(0,l.Z)(v,a),hidden:n},t)}var h=["components"],y={id:"getting-started",sidebar_position:1},b="Getting started",N={unversionedId:"fundamentals/getting-started",id:"fundamentals/getting-started",title:"Getting started",description:"Minimum requirements",source:"@site/docs/fundamentals/getting-started.md",sourceDirName:"fundamentals",slug:"/fundamentals/getting-started",permalink:"/docs/fundamentals/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"getting-started",sidebar_position:1},sidebar:"visionSidebar",next:{title:"Overview",permalink:"/docs/api/"}},w={},O=[{value:"Minimum requirements",id:"minimum-requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Installing dependencies into a bare React Native project",id:"installing-dependencies-into-a-bare-react-native-project",level:2},{value:"Updating manifests",id:"updating-manifests",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Setting up Android Fit API permissions",id:"setting-up-android-fit-api-permissions",level:2}],T={toc:O};function j(e){var t=e.components,n=(0,r.Z)(e,h);return(0,o.kt)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("h2",{id:"minimum-requirements"},"Minimum requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"react-native")," >= 0.63.0")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install the required packages in your React Native project:"),(0,o.kt)(g,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(k,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @kilohealth/rn-fitness-tracker\nnpx pod-install\n"))),(0,o.kt)(k,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @kilohealth/rn-fitness-tracker\nnpx pod-install\n")))),(0,o.kt)("h2",{id:"installing-dependencies-into-a-bare-react-native-project"},"Installing dependencies into a bare React Native project"),(0,o.kt)("p",null,"In your project directory, run:"),(0,o.kt)(g,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(k,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-device-info react-native-permissions\n"))),(0,o.kt)(k,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-device-info react-native-permissions\n")))),(0,o.kt)("h2",{id:"updating-manifests"},"Updating manifests"),(0,o.kt)("p",null,"To use HealthKit and Google fit you must first specify that your app requires access to HealthKit and Google Fit."),(0,o.kt)("h3",{id:"ios"},"iOS"),(0,o.kt)("p",null,"Open your project's Info.plist and add the following lines inside the outermost ",(0,o.kt)("inlineCode",{parentName:"p"},"<dict>")," tag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\x3c!-- Fitness tracker --\x3e\n<key>NSMotionUsageDescription</key>\n<string>Reason string goes here</string>\n\n\x3c!-- Health tracker --\x3e\n<key>NSHealthUpdateUsageDescription</key>\n<string>Reason string goes here</string>\n<key>NSHealthShareUsageDescription</key>\n<string>Reason string goes here</string>\n")),(0,o.kt)("h3",{id:"android"},"Android"),(0,o.kt)("p",null,"Open your project's AndroidManifest.xml and add the following lines inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"<manifest>")," tag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<uses-permission android:name="android.permission.ACTIVITY_RECOGNITION"/>\n')),(0,o.kt)("h2",{id:"setting-up-android-fit-api-permissions"},"Setting up Android Fit API permissions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure your Google account has access to app firebase project.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/credentials/consent"},"Create an OAuth screen")," for your project.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"User Type: External")," and fill out the form. Add ",(0,o.kt)("inlineCode",{parentName:"p"},"../auth/fitness.activity.read")," to\n",(0,o.kt)("strong",{parentName:"p"},"Scopes for Google APIs"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill out next popup forms with a brief explanation why you're using the activity tracker (no need to write much).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://console.developers.google.com/flows/enableapi?apiid=fitness&pli=1"},"Google console")," (note: select the correct project at the top)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select your app's project, ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Go to Credentials"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Where will you be calling the API from? Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Android"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"What data will you be accessing? Select ",(0,o.kt)("inlineCode",{parentName:"p"},"User data")," and click next.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Signing-certificate fingerprint")," generation command must be pointed to your app release / staging keystore file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save and submit everything. If you haven't got your google services config inside your app - download your ",(0,o.kt)("inlineCode",{parentName:"p"},"google-services.json")," file from ",(0,o.kt)("a",{parentName:"p",href:"https://console.firebase.google.com"},"firebase console")," and place it inside ",(0,o.kt)("inlineCode",{parentName:"p"},"android/app")," directory within your project."))))}j.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);