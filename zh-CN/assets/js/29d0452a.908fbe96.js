"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[556],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,f=m["".concat(o,".").concat(c)]||m[c]||s[c]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8838:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],p={},o="\u8c03\u8bd5Flutter\u5e94\u7528",u={unversionedId:"Flutter/Dartanalysis",id:"Flutter/Dartanalysis",title:"\u8c03\u8bd5Flutter\u5e94\u7528",description:"Dart \u5206\u6790\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/Flutter/Dartanalysis.md",sourceDirName:"Flutter",slug:"/Flutter/Dartanalysis",permalink:"/zh-CN/docs/Flutter/Dartanalysis",draft:!1,editUrl:"https://github.com/Malaaaa/blog-sample/tree/main/docs/Flutter/Dartanalysis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flutter",permalink:"/zh-CN/docs/Flutter/"},next:{title:"Flutter \u4ee3\u7801\u7ed3\u6784",permalink:"/zh-CN/docs/Flutter/Flutterapp"}},d={},s=[{value:"Dart \u5206\u6790\u5668",id:"dart-\u5206\u6790\u5668",level:3},{value:"Dart Observatory (\u8bed\u53e5\u7ea7\u7684\u5355\u6b65\u8c03\u8bd5\u548c\u5206\u6790\u5668)",id:"dart-observatory-\u8bed\u53e5\u7ea7\u7684\u5355\u6b65\u8c03\u8bd5\u548c\u5206\u6790\u5668",level:3},{value:"<code>debugger()</code> \u58f0\u660e",id:"debugger-\u58f0\u660e",level:3},{value:"<code>print</code>\u3001<code>debugPrint</code>\u3001<code>flutter logs</code>",id:"printdebugprintflutter-logs",level:3},{value:"\u8c03\u8bd5\u6a21\u5f0f\u65ad\u8a00",id:"\u8c03\u8bd5\u6a21\u5f0f\u65ad\u8a00",level:3},{value:"\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f\u5c42",id:"\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f\u5c42",level:3},{value:"Widget \u6811",id:"widget-\u6811",level:4},{value:"\u6e32\u67d3\u6811",id:"\u6e32\u67d3\u6811",level:4},{value:"Layer\u6811",id:"layer\u6811",level:4},{value:"\u8bed\u4e49",id:"\u8bed\u4e49",level:3},{value:"\u8c03\u5ea6",id:"\u8c03\u5ea6",level:3},{value:"\u53ef\u89c6\u5316\u8c03\u8bd5",id:"\u53ef\u89c6\u5316\u8c03\u8bd5",level:3},{value:"\u8c03\u8bd5\u52a8\u753b",id:"\u8c03\u8bd5\u52a8\u753b",level:3},{value:"\u8c03\u8bd5\u6027\u80fd\u95ee\u9898",id:"\u8c03\u8bd5\u6027\u80fd\u95ee\u9898",level:3},{value:"\u7edf\u8ba1\u5e94\u7528\u542f\u52a8\u65f6\u95f4",id:"\u7edf\u8ba1\u5e94\u7528\u542f\u52a8\u65f6\u95f4",level:3},{value:"\u8ddf\u8e2aDart\u4ee3\u7801\u6027\u80fd",id:"\u8ddf\u8e2adart\u4ee3\u7801\u6027\u80fd",level:3}],m={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u8c03\u8bd5flutter\u5e94\u7528"},"\u8c03\u8bd5Flutter\u5e94\u7528"),(0,l.kt)("h3",{id:"dart-\u5206\u6790\u5668"},"Dart \u5206\u6790\u5668"),(0,l.kt)("p",null,"\u5728\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u524d\uff0c\u8bf7\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"flutter analyze"),"\u6d4b\u8bd5\u4f60\u7684\u4ee3\u7801\u3002\u8fd9\u4e2a\u5de5\u5177\u662f\u4e00\u4e2a\u9759\u6001\u4ee3\u7801\u68c0\u67e5\u5de5\u5177\uff0c\u5b83\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"dartanalyzer"),"\u5de5\u5177\u7684\u4e00\u4e2a\u5305\u88c5\uff0c\u4e3b\u8981\u7528\u4e8e\u5206\u6790\u4ee3\u7801\u5e76\u5e2e\u52a9\u5f00\u53d1\u8005\u53d1\u73b0\u53ef\u80fd\u7684\u9519\u8bef\uff0c\u6bd4\u5982\uff0cDart\u5206\u6790\u5668\u5927\u91cf\u4f7f\u7528\u4e86\u4ee3\u7801\u4e2d\u7684\u7c7b\u578b\u6ce8\u91ca\u6765\u5e2e\u52a9\u8ffd\u8e2a\u95ee\u9898\uff0c\u907f\u514d",(0,l.kt)("inlineCode",{parentName:"p"},"var"),"\u3001\u65e0\u7c7b\u578b\u7684\u53c2\u6570\u3001\u65e0\u7c7b\u578b\u7684\u5217\u8868\u6587\u5b57\u7b49\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528IntelliJ\u7684Flutter\u63d2\u4ef6\uff0c\u90a3\u4e48\u5206\u6790\u5668\u5728\u6253\u5f00IDE\u65f6\u5c31\u5df2\u7ecf\u81ea\u52a8\u542f\u7528\u4e86\uff0c\u5982\u679c\u8bfb\u8005\u4f7f\u7528\u7684\u662f\u5176\u5b83IDE\uff0c\u5f3a\u70c8\u5efa\u8bae\u8bfb\u8005\u542f\u7528Dart \u5206\u6790\u5668\uff0c\u56e0\u4e3a\u5728\u5927\u591a\u6570\u65f6\u5019\uff0cDart \u5206\u6790\u5668\u53ef\u4ee5\u5728\u4ee3\u7801\u8fd0\u884c\u524d\u53d1\u73b0\u5927\u591a\u6570\u95ee\u9898\u3002"),(0,l.kt)("h3",{id:"dart-observatory-\u8bed\u53e5\u7ea7\u7684\u5355\u6b65\u8c03\u8bd5\u548c\u5206\u6790\u5668"},"Dart Observatory (\u8bed\u53e5\u7ea7\u7684\u5355\u6b65\u8c03\u8bd5\u548c\u5206\u6790\u5668)"),(0,l.kt)("p",null,"\u5982\u679c\u6211\u4eec\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"flutter run"),"\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\uff0c\u90a3\u4e48\u5f53\u5b83\u8fd0\u884c\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u6253\u5f00Observatory\u5de5\u5177\u7684Web\u9875\u9762\uff0c\u4f8b\u5982Observatory\u9ed8\u8ba4\u76d1\u542c",(0,l.kt)("a",{parentName:"p",href:"http://127.0.0.1:8100/%EF%BC%8C%E5%8F%AF%E4%BB%A5%E5%9C%A8%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%E8%AF%A5%E9%93%BE%E6%8E%A5%E3%80%82%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8%E8%AF%AD%E5%8F%A5%E7%BA%A7%E5%8D%95%E6%AD%A5%E8%B0%83%E8%AF%95%E5%99%A8%E8%BF%9E%E6%8E%A5%E5%88%B0%E6%82%A8%E7%9A%84%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E3%80%82%E5%A6%82%E6%9E%9C%E6%82%A8%E4%BD%BF%E7%94%A8%E7%9A%84%E6%98%AFIntelliJ%EF%BC%8C%E5%88%99%E8%BF%98%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%E5%85%B6%E5%86%85%E7%BD%AE%E7%9A%84%E8%B0%83%E8%AF%95%E5%99%A8%E6%9D%A5%E8%B0%83%E8%AF%95%E6%82%A8%E7%9A%84%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E3%80%82"},"http://127.0.0.1:8100/\uff0c\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u8be5\u94fe\u63a5\u3002\u76f4\u63a5\u4f7f\u7528\u8bed\u53e5\u7ea7\u5355\u6b65\u8c03\u8bd5\u5668\u8fde\u63a5\u5230\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662fIntelliJ\uff0c\u5219\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5176\u5185\u7f6e\u7684\u8c03\u8bd5\u5668\u6765\u8c03\u8bd5\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002")),(0,l.kt)("p",null,"Observatory \u540c\u65f6\u652f\u6301\u5206\u6790\u3001\u68c0\u67e5\u5806\u7b49\u3002\u6709\u5173Observatory\u7684\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://dart-lang.github.io/observatory/"},"Observatory \u6587\u6863"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528Observatory\u8fdb\u884c\u5206\u6790\uff0c\u8bf7\u786e\u4fdd\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"--profile"),"\u9009\u9879\u6765\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"flutter run"),"\u547d\u4ee4\u6765\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u3002 \u5426\u5219\uff0c\u914d\u7f6e\u6587\u4ef6\u4e2d\u5c06\u51fa\u73b0\u7684\u4e3b\u8981\u95ee\u9898\u5c06\u662f\u8c03\u8bd5\u65ad\u8a00\uff0c\u4ee5\u9a8c\u8bc1\u6846\u67b6\u7684\u5404\u79cd\u4e0d\u53d8\u91cf\uff08\u8bf7\u53c2\u9605\u4e0b\u9762\u7684\u201c\u8c03\u8bd5\u6a21\u5f0f\u65ad\u8a00\u201d\uff09\u3002"),(0,l.kt)("h3",{id:"debugger-\u58f0\u660e"},(0,l.kt)("inlineCode",{parentName:"h3"},"debugger()")," \u58f0\u660e"),(0,l.kt)("p",null,"\u5f53\u4f7f\u7528Dart Observatory\uff08\u6216\u53e6\u4e00\u4e2aDart\u8c03\u8bd5\u5668\uff0c\u4f8b\u5982IntelliJ IDE\u4e2d\u7684\u8c03\u8bd5\u5668\uff09\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u8be5",(0,l.kt)("inlineCode",{parentName:"p"},"debugger()"),"\u8bed\u53e5\u63d2\u5165\u7f16\u7a0b\u5f0f\u65ad\u70b9\u3002\u8981\u4f7f\u7528\u8fd9\u4e2a\uff0c\u4f60\u5fc5\u987b\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"import 'dart:developer';"),"\u5230\u76f8\u5173\u6587\u4ef6\u9876\u90e8\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"debugger()"),"\u8bed\u53e5\u91c7\u7528\u4e00\u4e2a\u53ef\u9009",(0,l.kt)("inlineCode",{parentName:"p"},"when"),"\u53c2\u6570\uff0c\u60a8\u53ef\u4ee5\u6307\u5b9a\u8be5\u53c2\u6570\u4ec5\u5728\u7279\u5b9a\u6761\u4ef6\u4e3a\u771f\u65f6\u4e2d\u65ad\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"void someFunction(double offset) {\n  debugger(when: offset > 30.0);\n  // ...\n}\n")),(0,l.kt)("h3",{id:"printdebugprintflutter-logs"},(0,l.kt)("inlineCode",{parentName:"h3"},"print"),"\u3001",(0,l.kt)("inlineCode",{parentName:"h3"},"debugPrint"),"\u3001",(0,l.kt)("inlineCode",{parentName:"h3"},"flutter logs")),(0,l.kt)("p",null,"Dart ",(0,l.kt)("inlineCode",{parentName:"p"},"print()"),"\u529f\u80fd\u5c06\u8f93\u51fa\u5230\u7cfb\u7edf\u63a7\u5236\u53f0\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"flutter logs"),"\u6765\u67e5\u770b\u5b83\uff08\u57fa\u672c\u4e0a\u662f\u4e00\u4e2a\u5305\u88c5",(0,l.kt)("inlineCode",{parentName:"p"},"adb logcat"),"\uff09\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4e00\u6b21\u8f93\u51fa\u592a\u591a\uff0c\u90a3\u4e48Android\u6709\u65f6\u4f1a\u4e22\u5f03\u4e00\u4e9b\u65e5\u5fd7\u884c\u3002\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528Flutter\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"foundation"),"\u5e93\u4e2d\u7684",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/foundation/debugPrint.html"},(0,l.kt)("inlineCode",{parentName:"a"},"debugPrint()")),"\u3002 \u8fd9\u662f\u4e00\u4e2a\u5c01\u88c5print\uff0c\u5b83\u5c06\u8f93\u51fa\u9650\u5236\u5728\u4e00\u4e2a\u7ea7\u522b\uff0c\u907f\u514d\u88abAndroid\u5185\u6838\u4e22\u5f03\u3002"),(0,l.kt)("p",null,"Flutter\u6846\u67b6\u4e2d\u7684\u8bb8\u591a\u7c7b\u90fd\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"toString"),"\u5b9e\u73b0\u3002\u6309\u7167\u60ef\u4f8b\uff0c\u8fd9\u4e9b\u8f93\u51fa\u901a\u5e38\u5305\u62ec\u5bf9\u8c61\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"runtimeType"),"\u5355\u884c\u8f93\u51fa\uff0c\u901a\u5e38\u5728\u8868\u5355\u4e2dClassName(more information about this instance\u2026)\u3002 \u6811\u4e2d\u4f7f\u7528\u7684\u4e00\u4e9b\u7c7b\u4e5f\u5177\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"toStringDeep"),"\uff0c\u4ece\u8be5\u70b9\u8fd4\u56de\u6574\u4e2a\u5b50\u6811\u7684\u591a\u884c\u63cf\u8ff0\u3002\u5df2\u4e00\u4e9b\u5177\u6709\u8be6\u7ec6\u4fe1\u606f",(0,l.kt)("inlineCode",{parentName:"p"},"toString"),"\u7684\u7c7b\u4f1a\u5b9e\u73b0\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"toStringShort"),"\uff0c\u5b83\u53ea\u8fd4\u56de\u5bf9\u8c61\u7684\u7c7b\u578b\u6216\u5176\u4ed6\u975e\u5e38\u7b80\u77ed\u7684\uff08\u4e00\u4e2a\u6216\u4e24\u4e2a\u5355\u8bcd\uff09\u63cf\u8ff0\u3002"),(0,l.kt)("h3",{id:"\u8c03\u8bd5\u6a21\u5f0f\u65ad\u8a00"},"\u8c03\u8bd5\u6a21\u5f0f\u65ad\u8a00"),(0,l.kt)("p",null,"\u5728Flutter\u5e94\u7528\u8c03\u8bd5\u8fc7\u7a0b\u4e2d\uff0cDart ",(0,l.kt)("inlineCode",{parentName:"p"},"assert"),"\u8bed\u53e5\u88ab\u542f\u7528\uff0c\u5e76\u4e14Flutter\u6846\u67b6\u4f7f\u7528\u5b83\u6765\u6267\u884c\u8bb8\u591a\u8fd0\u884c\u65f6\u68c0\u67e5\u6765\u9a8c\u8bc1\u662f\u5426\u8fdd\u53cd\u4e00\u4e9b\u4e0d\u53ef\u53d8\u7684\u89c4\u5219\u3002"),(0,l.kt)("p",null,"\u5f53\u4e00\u4e2a\u4e0d\u53ef\u53d8\u7684\u89c4\u5219\u88ab\u8fdd\u53cd\u65f6\uff0c\u5b83\u88ab\u62a5\u544a\u7ed9\u63a7\u5236\u53f0\uff0c\u5e76\u5e26\u6709\u4e00\u4e9b\u4e0a\u4e0b\u6587\u4fe1\u606f\u6765\u5e2e\u52a9\u8ffd\u8e2a\u95ee\u9898\u7684\u6839\u6e90\u3002"),(0,l.kt)("p",null,"\u8981\u5173\u95ed\u8c03\u8bd5\u6a21\u5f0f\u5e76\u4f7f\u7528\u53d1\u5e03\u6a21\u5f0f\uff0c\u8bf7\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"flutter run --release"),"\u8fd0\u884c\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002 \u8fd9\u4e5f\u5173\u95ed\u4e86Observatory\u8c03\u8bd5\u5668\u3002\u4e00\u4e2a\u4e2d\u95f4\u6a21\u5f0f\u53ef\u4ee5\u5173\u95ed\u9664Observatory\u4e4b\u5916\u6240\u6709\u8c03\u8bd5\u8f85\u52a9\u5de5\u5177\u7684\uff0c\u79f0\u4e3a\u201cprofile mode\u201d\uff0c\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"--profile"),"\u66ff\u4ee3",(0,l.kt)("inlineCode",{parentName:"p"},"--release"),"\u5373\u53ef\u3002"),(0,l.kt)("h3",{id:"\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f\u5c42"},"\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f\u5c42"),(0,l.kt)("p",null,"Flutter\u6846\u67b6\u7684\u6bcf\u4e00\u5c42\u90fd\u63d0\u4f9b\u4e86\u5c06\u5176\u5f53\u524d\u72b6\u6001\u6216\u4e8b\u4ef6\u8f6c\u50a8(dump)\u5230\u63a7\u5236\u53f0\uff08\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"debugPrint"),"\uff09\u7684\u529f\u80fd\u3002"),(0,l.kt)("h4",{id:"widget-\u6811"},"Widget \u6811"),(0,l.kt)("p",null,"\u8981\u8f6c\u50a8Widgets\u6811\u7684\u72b6\u6001\uff0c\u8bf7\u8c03\u7528",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/widgets/debugDumpApp.html"},(0,l.kt)("inlineCode",{parentName:"a"},"debugDumpApp()")),"\u3002 \u53ea\u8981\u5e94\u7528\u7a0b\u5e8f\u5df2\u7ecf\u6784\u5efa\u4e86\u81f3\u5c11\u4e00\u6b21\uff08\u5373\u5728\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"build()"),"\u4e4b\u540e\u7684\u4efb\u4f55\u65f6\u95f4\uff09\uff0c\u60a8\u53ef\u4ee5\u5728\u5e94\u7528\u7a0b\u5e8f\u672a\u5904\u4e8e\u6784\u5efa\u9636\u6bb5\uff08\u5373\uff0c\u4e0d\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"build()"),"\u65b9\u6cd5\u5185\u8c03\u7528 \uff09\u7684\u4efb\u4f55\u65f6\u95f4\u8c03\u7528\u6b64\u65b9\u6cd5\uff08\u5728\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"runApp()"),"\u4e4b\u540e\uff09\u3002"),(0,l.kt)("p",null,"\u5982, \u8fd9\u4e2a\u5e94\u7528\u7a0b\u5e8f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(\n    new MaterialApp(\n      home: new AppHome(),\n    ),\n  );\n}\n\nclass AppHome extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return new Material(\n      child: new Center(\n        child: new FlatButton(\n          onPressed: () {\n            debugDumpApp();\n          },\n          child: new Text('Dump App'),\n        ),\n      ),\n    );\n  }\n}\n")),(0,l.kt)("p",null,"\u2026\u4f1a\u8f93\u51fa\u8fd9\u6837\u7684\u5185\u5bb9\uff08\u7cbe\u786e\u7684\u7ec6\u8282\u4f1a\u6839\u636e\u6846\u67b6\u7684\u7248\u672c\u3001\u8bbe\u5907\u7684\u5927\u5c0f\u7b49\u7b49\u800c\u53d8\u5316\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'I/flutter ( 6559): WidgetsFlutterBinding - CHECKED MODE\nI/flutter ( 6559): RenderObjectToWidgetAdapter<RenderBox>([GlobalObjectKey RenderView(497039273)]; renderObject: RenderView)\nI/flutter ( 6559): \u2514MaterialApp(state: _MaterialAppState(1009803148))\nI/flutter ( 6559):  \u2514ScrollConfiguration()\nI/flutter ( 6559):   \u2514AnimatedTheme(duration: 200ms; state: _AnimatedThemeState(543295893; ticker inactive; ThemeDataTween(ThemeData(Brightness.light Color(0xff2196f3) etc...) \u2192 null)))\nI/flutter ( 6559):    \u2514Theme(ThemeData(Brightness.light Color(0xff2196f3) etc...))\nI/flutter ( 6559):     \u2514WidgetsApp([GlobalObjectKey _MaterialAppState(1009803148)]; state: _WidgetsAppState(552902158))\nI/flutter ( 6559):      \u2514CheckedModeBanner()\nI/flutter ( 6559):       \u2514Banner()\nI/flutter ( 6559):        \u2514CustomPaint(renderObject: RenderCustomPaint)\nI/flutter ( 6559):         \u2514DefaultTextStyle(inherit: true; color: Color(0xd0ff0000); family: "monospace"; size: 48.0; weight: 900; decoration: double Color(0xffffff00) TextDecoration.underline)\nI/flutter ( 6559):          \u2514MediaQuery(MediaQueryData(size: Size(411.4, 683.4), devicePixelRatio: 2.625, textScaleFactor: 1.0, padding: EdgeInsets(0.0, 24.0, 0.0, 0.0)))\nI/flutter ( 6559):           \u2514LocaleQuery(null)\nI/flutter ( 6559):            \u2514Title(color: Color(0xff2196f3))\n... #\u7701\u7565\u5269\u4f59\u5185\u5bb9\n')),(0,l.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u201c\u6241\u5e73\u5316\u201d\u7684\u6811\uff0c\u663e\u793a\u4e86\u901a\u8fc7\u5404\u79cd\u6784\u5efa\u51fd\u6570\u6295\u5f71\u7684\u6240\u6709widget\uff08\u5982\u679c\u4f60\u5728widget\u6811\u7684\u6839\u4e2d\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"toStringDeepwidget"),"\uff0c\u8fd9\u662f\u4f60\u83b7\u5f97\u7684\u6811\uff09\u3002 \u4f60\u4f1a\u770b\u5230\u5f88\u591a\u5728\u4f60\u7684\u5e94\u7528\u6e90\u4ee3\u7801\u4e2d\u6ca1\u6709\u51fa\u73b0\u7684widget\uff0c\u56e0\u4e3a\u5b83\u4eec\u662f\u88ab\u6846\u67b6\u4e2dwidget\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"build()"),"\u51fd\u6570\u63d2\u5165\u7684\u3002\u4f8b\u5982\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/material/InkFeature-class.html"},(0,l.kt)("inlineCode",{parentName:"a"},"InkFeature")),"\u662fMaterial widget\u7684\u4e00\u4e2a\u5b9e\u73b0\u7ec6\u8282 \u3002"),(0,l.kt)("p",null,"\u5f53\u6309\u94ae\u4ece\u88ab\u6309\u4e0b\u53d8\u4e3a\u88ab\u91ca\u653e\u65f6debugDumpApp()\u88ab\u8c03\u7528\uff0cFlatButton\u5bf9\u8c61\u540c\u65f6\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"setState()"),'\uff0c\u5e76\u5c06\u81ea\u5df1\u6807\u8bb0\u4e3a"dirty"\u3002 \u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u5982\u679c\u4f60\u770b\u8f6c\u50a8\uff0c\u4f60\u4f1a\u770b\u5230\u7279\u5b9a\u7684\u5bf9\u8c61\u6807\u8bb0\u4e3a\u201cdirty\u201d\u3002\u60a8\u8fd8\u53ef\u4ee5\u67e5\u770b\u5df2\u6ce8\u518c\u4e86\u54ea\u4e9b\u624b\u52bf\u76d1\u542c\u5668; \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a\u5355\u4e00\u7684GestureDetector\u88ab\u5217\u51fa\uff0c\u5e76\u4e14\u76d1\u542c\u201ctap\u201d\u624b\u52bf\uff08\u201ctap\u201d\u662f',(0,l.kt)("inlineCode",{parentName:"p"},"TapGestureDetector"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"toStringShort"),"\u51fd\u6570\u8f93\u51fa\u7684\uff09"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u7f16\u5199\u81ea\u5df1\u7684widget\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u8986\u76d6",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/widgets/Widget/debugFillProperties.html"},(0,l.kt)("inlineCode",{parentName:"a"},"debugFillProperties()")),"\u6765\u6dfb\u52a0\u4fe1\u606f\u3002 \u5c06",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/foundation/DiagnosticsProperty-class.html"},"DiagnosticsProperty"),"\u5bf9\u8c61\u4f5c\u4e3a\u65b9\u6cd5\u53c2\u6570\uff0c\u5e76\u8c03\u7528\u7236\u7c7b\u65b9\u6cd5\u3002 \u8be5\u51fd\u6570\u662f\u8be5",(0,l.kt)("inlineCode",{parentName:"p"},"toString"),"\u65b9\u6cd5\u7528\u6765\u586b\u5145\u5c0f\u90e8\u4ef6\u63cf\u8ff0\u4fe1\u606f\u7684\u3002"),(0,l.kt)("h4",{id:"\u6e32\u67d3\u6811"},"\u6e32\u67d3\u6811"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5c1d\u8bd5\u8c03\u8bd5\u5e03\u5c40\u95ee\u9898\uff0c\u90a3\u4e48Widget\u6811\u53ef\u80fd\u4e0d\u591f\u8be6\u7ec6\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"debugDumpRenderTree()"),"\u8f6c\u50a8\u6e32\u67d3\u6811\u3002 \u6b63\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"debugDumpApp()"),"\uff0c\u9664\u5e03\u5c40\u6216\u7ed8\u5236\u9636\u6bb5\u5916\uff0c\u60a8\u53ef\u4ee5\u968f\u65f6\u8c03\u7528\u6b64\u51fd\u6570\u3002\u4f5c\u4e3a\u4e00\u822c\u89c4\u5219\uff0c\u4ece",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/scheduler/SchedulerBinding/addPersistentFrameCallback.html"},"frame \u56de\u8c03")," \u6216\u4e8b\u4ef6\u5904\u7406\u5668\u4e2d\u8c03\u7528\u5b83\u662f\u6700\u4f73\u89e3\u51b3\u65b9\u6848\u3002"),(0,l.kt)("p",null,"\u8981\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"debugDumpRenderTree()"),"\uff0c\u60a8\u9700\u8981\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"import'package:flutter/rendering.dart';"),"\u5230\u60a8\u7684\u6e90\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u4e0a\u9762\u8fd9\u4e2a\u5c0f\u4f8b\u5b50\u7684\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"I/flutter ( 6559): RenderView\nI/flutter ( 6559):  \u2502 debug mode enabled - android\nI/flutter ( 6559):  \u2502 window size: Size(1080.0, 1794.0) (in physical pixels)\nI/flutter ( 6559):  \u2502 device pixel ratio: 2.625 (physical pixels per logical pixel)\nI/flutter ( 6559):  \u2502 configuration: Size(411.4, 683.4) at 2.625x (in logical pixels)\nI/flutter ( 6559):  \u2502\nI/flutter ( 6559):  \u2514\u2500child: RenderCustomPaint\nI/flutter ( 6559):    \u2502 creator: CustomPaint \u2190 Banner \u2190 CheckedModeBanner \u2190\nI/flutter ( 6559):    \u2502   WidgetsApp-[GlobalObjectKey _MaterialAppState(1009803148)] \u2190\nI/flutter ( 6559):    \u2502   Theme \u2190 AnimatedTheme \u2190 ScrollConfiguration \u2190 MaterialApp \u2190\nI/flutter ( 6559):    \u2502   [root]\nI/flutter ( 6559):    \u2502 parentData: <none>\nI/flutter ( 6559):    \u2502 constraints: BoxConstraints(w=411.4, h=683.4)\nI/flutter ( 6559):    \u2502 size: Size(411.4, 683.4)\n... # \u7701\u7565\n")),(0,l.kt)("p",null,"\u8fd9\u662f\u6839",(0,l.kt)("inlineCode",{parentName:"p"},"RenderObject"),"\u5bf9\u8c61\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"toStringDeep"),"\u51fd\u6570\u7684\u8f93\u51fa\u3002"),(0,l.kt)("p",null,"\u5f53\u8c03\u8bd5\u5e03\u5c40\u95ee\u9898\u65f6\uff0c\u5173\u952e\u8981\u770b\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"size"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"constraints"),"\u5b57\u6bb5\u3002\u7ea6\u675f\u6cbf\u7740\u6811\u5411\u4e0b\u4f20\u9012\uff0c\u5c3a\u5bf8\u5411\u4e0a\u4f20\u9012\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u7f16\u5199\u81ea\u5df1\u7684\u6e32\u67d3\u5bf9\u8c61\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u8986\u76d6",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/rendering/Layer/debugFillProperties.html"},(0,l.kt)("inlineCode",{parentName:"a"},"debugFillProperties()")),"\u5c06\u4fe1\u606f\u6dfb\u52a0\u5230\u8f6c\u50a8\u3002 \u5c06",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/foundation/DiagnosticsProperty-class.html"},"DiagnosticsProperty"),"\u5bf9\u8c61\u4f5c\u4e3a\u65b9\u6cd5\u7684\u53c2\u6570\uff0c\u5e76\u8c03\u7528\u7236\u7c7b\u65b9\u6cd5\u3002"),(0,l.kt)("h4",{id:"layer\u6811"},"Layer\u6811"),(0,l.kt)("p",null,"\u8bfb\u8005\u53ef\u4ee5\u7406\u89e3\u4e3a\u6e32\u67d3\u6811\u662f\u53ef\u4ee5\u5206\u5c42\u7684\uff0c\u800c\u6700\u7ec8\u7ed8\u5236\u9700\u8981\u5c06\u4e0d\u540c\u7684\u5c42\u5408\u6210\u8d77\u6765\uff0c\u800cLayer\u5219\u662f\u7ed8\u5236\u65f6\u9700\u8981\u5408\u6210\u7684\u5c42\uff0c\u5982\u679c\u60a8\u5c1d\u8bd5\u8c03\u8bd5\u5408\u6210\u95ee\u9898\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/rendering/debugDumpLayerTree.html"},(0,l.kt)("inlineCode",{parentName:"a"},"debugDumpLayerTree()")),"\u3002\u5bf9\u4e8e\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u5b83\u4f1a\u8f93\u51fa\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"I/flutter : TransformLayer\nI/flutter :  \u2502 creator: [root]\nI/flutter :  \u2502 offset: Offset(0.0, 0.0)\nI/flutter :  \u2502 transform:\nI/flutter :  \u2502   [0] 3.5,0.0,0.0,0.0\nI/flutter :  \u2502   [1] 0.0,3.5,0.0,0.0\nI/flutter :  \u2502   [2] 0.0,0.0,1.0,0.0\nI/flutter :  \u2502   [3] 0.0,0.0,0.0,1.0\nI/flutter :  \u2502\nI/flutter :  \u251c\u2500child 1: OffsetLayer\nI/flutter :  \u2502 \u2502 creator: RepaintBoundary \u2190 _FocusScope \u2190 Semantics \u2190 Focus-[GlobalObjectKey MaterialPageRoute(560156430)] \u2190 _ModalScope-[GlobalKey 328026813] \u2190 _OverlayEntry-[GlobalKey 388965355] \u2190 Stack \u2190 Overlay-[GlobalKey 625702218] \u2190 Navigator-[GlobalObjectKey _MaterialAppState(859106034)] \u2190 Title \u2190 \u22ef\nI/flutter :  \u2502 \u2502 offset: Offset(0.0, 0.0)\nI/flutter :  \u2502 \u2502\nI/flutter :  \u2502 \u2514\u2500child 1: PictureLayer\nI/flutter :  \u2502\nI/flutter :  \u2514\u2500child 2: PictureLayer\n")),(0,l.kt)("p",null,"\u8fd9\u662f\u6839",(0,l.kt)("inlineCode",{parentName:"p"},"Layer"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"toStringDeep"),"\u8f93\u51fa\u7684\u3002"),(0,l.kt)("p",null,"\u6839\u90e8\u7684\u53d8\u6362\u662f\u5e94\u7528\u8bbe\u5907\u50cf\u7d20\u6bd4\u7684\u53d8\u6362; \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e2a\u903b\u8f91\u50cf\u7d20\u4ee3\u88683.5\u4e2a\u8bbe\u5907\u50cf\u7d20\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RepaintBoundary")," widget\u5728\u6e32\u67d3\u6811\u7684\u5c42\u4e2d\u521b\u5efa\u4e86\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"RenderRepaintBoundary"),"\u3002\u8fd9\u7528\u4e8e\u51cf\u5c11\u9700\u8981\u91cd\u7ed8\u7684\u9700\u6c42\u91cf\u3002"),(0,l.kt)("h3",{id:"\u8bed\u4e49"},"\u8bed\u4e49"),(0,l.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u8c03\u7528",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/rendering/debugDumpSemanticsTree.html"},(0,l.kt)("inlineCode",{parentName:"a"},"debugDumpSemanticsTree()")),"\u83b7\u53d6\u8bed\u4e49\u6811\uff08\u5448\u73b0\u7ed9\u7cfb\u7edf\u53ef\u8bbf\u95ee\u6027API\u7684\u6811\uff09\u7684\u8f6c\u50a8\u3002 \u8981\u4f7f\u7528\u6b64\u529f\u80fd\uff0c\u5fc5\u987b\u9996\u5148\u542f\u7528\u8f85\u52a9\u529f\u80fd\uff0c\u4f8b\u5982\u542f\u7528\u7cfb\u7edf\u8f85\u52a9\u5de5\u5177\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"SemanticsDebugger")," \uff08\u4e0b\u9762\u8ba8\u8bba\uff09\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u5b83\u4f1a\u8f93\u51fa:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'I/flutter : SemanticsNode(0; Rect.fromLTRB(0.0, 0.0, 411.4, 683.4))\nI/flutter :  \u251cSemanticsNode(1; Rect.fromLTRB(0.0, 0.0, 411.4, 683.4))\nI/flutter :  \u2502 \u2514SemanticsNode(2; Rect.fromLTRB(0.0, 0.0, 411.4, 683.4); canBeTapped)\nI/flutter :  \u2514SemanticsNode(3; Rect.fromLTRB(0.0, 0.0, 411.4, 683.4))\nI/flutter :    \u2514SemanticsNode(4; Rect.fromLTRB(0.0, 0.0, 82.0, 36.0); canBeTapped; "Dump App")\n')),(0,l.kt)("h3",{id:"\u8c03\u5ea6"},"\u8c03\u5ea6"),(0,l.kt)("p",null,"\u8981\u627e\u51fa\u76f8\u5bf9\u4e8e\u5e27\u7684\u5f00\u59cb/\u7ed3\u675f\u4e8b\u4ef6\u53d1\u751f\u7684\u4f4d\u7f6e\uff0c\u53ef\u4ee5\u5207\u6362",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/scheduler/debugPrintBeginFrameBanner.html"},(0,l.kt)("inlineCode",{parentName:"a"},"debugPrintBeginFrameBanner")),"\u548c",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/scheduler/debugPrintEndFrameBanner.html"},(0,l.kt)("inlineCode",{parentName:"a"},"debugPrintEndFrameBanner")),"\u5e03\u5c14\u503c\u4ee5\u5c06\u5e27\u7684\u5f00\u59cb\u548c\u7ed3\u675f\u6253\u5370\u5230\u63a7\u5236\u53f0\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"I/flutter : \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584 Frame 12         30s 437.086ms \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\nI/flutter : Debug print: Am I performing this work more than once per frame?\nI/flutter : Debug print: Am I performing this work more than once per frame?\nI/flutter : \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/scheduler/debugPrintScheduleFrameStacks.html"},(0,l.kt)("inlineCode",{parentName:"a"},"debugPrintScheduleFrameStacks")),"\u8fd8\u53ef\u4ee5\u7528\u6765\u6253\u5370\u5bfc\u81f4\u5f53\u524d\u5e27\u88ab\u8c03\u5ea6\u7684\u8c03\u7528\u5806\u6808\u3002"),(0,l.kt)("h3",{id:"\u53ef\u89c6\u5316\u8c03\u8bd5"},"\u53ef\u89c6\u5316\u8c03\u8bd5"),(0,l.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"debugPaintSizeEnabled"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u4ee5\u53ef\u89c6\u65b9\u5f0f\u8c03\u8bd5\u5e03\u5c40\u95ee\u9898\u3002 \u8fd9\u662f\u6765\u81ea",(0,l.kt)("inlineCode",{parentName:"p"},"rendering"),"\u5e93\u7684\u5e03\u5c14\u503c\u3002\u5b83\u53ef\u4ee5\u5728\u4efb\u4f55\u65f6\u5019\u542f\u7528\uff0c\u5e76\u5728\u4e3atrue\u65f6\u5f71\u54cd\u7ed8\u5236\u3002 \u8bbe\u7f6e\u5b83\u7684\u6700\u7b80\u5355\u65b9\u6cd5\u662f\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"void main()"),"\u7684\u9876\u90e8\u8bbe\u7f6e\u3002"),(0,l.kt)("p",null,"\u5f53\u5b83\u88ab\u542f\u7528\u65f6\uff0c\u6240\u6709\u7684\u76d2\u5b50\u90fd\u4f1a\u5f97\u5230\u4e00\u4e2a\u660e\u4eae\u7684\u6df1\u9752\u8272\u8fb9\u6846\uff0cpadding\uff08\u6765\u81eawidget\u5982Padding\uff09\u663e\u793a\u4e3a\u6d45\u84dd\u8272\uff0c\u5b50widget\u5468\u56f4\u6709\u4e00\u4e2a\u6df1\u84dd\u8272\u6846\uff0c \u5bf9\u9f50\u65b9\u5f0f\uff08\u6765\u81eawidget\u5982Center\u548cAlign\uff09\u663e\u793a\u4e3a\u9ec4\u8272\u7bad\u5934. \u7a7a\u767d\uff08\u5982\u6ca1\u6709\u4efb\u4f55\u5b50\u8282\u70b9\u7684Container\uff09\u4ee5\u7070\u8272\u663e\u793a\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/rendering/debugPaintBaselinesEnabled.html"},(0,l.kt)("inlineCode",{parentName:"a"},"debugPaintBaselinesEnabled")),"\u505a\u4e86\u7c7b\u4f3c\u7684\u4e8b\u60c5\uff0c\u4f46\u5bf9\u4e8e\u5177\u6709\u57fa\u7ebf\u7684\u5bf9\u8c61\uff0c\u6587\u5b57\u57fa\u7ebf\u4ee5\u7eff\u8272\u663e\u793a\uff0c\u8868\u610f(ideographic)\u57fa\u7ebf\u4ee5\u6a59\u8272\u663e\u793a\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/rendering/debugPaintPointersEnabled.html"},(0,l.kt)("inlineCode",{parentName:"a"},"debugPaintPointersEnabled")),"\u6807\u5fd7\u6253\u5f00\u4e00\u4e2a\u7279\u6b8a\u6a21\u5f0f\uff0c\u4efb\u4f55\u6b63\u5728\u70b9\u51fb\u7684\u5bf9\u8c61\u90fd\u4f1a\u4ee5\u6df1\u9752\u8272\u7a81\u51fa\u663e\u793a\u3002 \u8fd9\u53ef\u4ee5\u5e2e\u52a9\u60a8\u786e\u5b9a\u67d0\u4e2a\u5bf9\u8c61\u662f\u5426\u4ee5\u67d0\u79cd\u4e0d\u6b63\u786e\u7684\u65b9\u5f0f\u8fdb\u884chit\u6d4b\u8bd5\uff08Flutter\u68c0\u6d4b\u70b9\u51fb\u7684\u4f4d\u7f6e\u662f\u5426\u6709\u80fd\u54cd\u5e94\u7528\u6237\u64cd\u4f5c\u7684widget\uff09,\u4f8b\u5982\uff0c\u5982\u679c\u5b83\u5b9e\u9645\u4e0a\u8d85\u51fa\u4e86\u5176\u7236\u9879\u7684\u8303\u56f4\uff0c\u9996\u5148\u4e0d\u4f1a\u8003\u8651\u901a\u8fc7hit\u6d4b\u8bd5\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5c1d\u8bd5\u8c03\u8bd5\u5408\u6210\u56fe\u5c42\uff0c\u4f8b\u5982\u4ee5\u786e\u5b9a\u662f\u5426\u4ee5\u53ca\u5728\u4f55\u5904\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"RepaintBoundary")," widget\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/rendering/debugPaintLayerBordersEnabled.html"},(0,l.kt)("inlineCode",{parentName:"a"},"debugPaintLayerBordersEnabled"))," \u6807\u5fd7\uff0c \u8be5\u6807\u5fd7\u7528\u6a59\u8272\u6216\u8f6e\u5ed3\u7ebf\u6807\u51fa\u6bcf\u4e2a\u5c42\u7684\u8fb9\u754c\uff0c\u6216\u8005\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/rendering/debugRepaintRainbowEnabled.html"},(0,l.kt)("inlineCode",{parentName:"a"},"debugRepaintRainbowEnabled")),"\u6807\u5fd7\uff0c \u53ea\u8981\u4ed6\u4eec\u91cd\u7ed8\u65f6\uff0c\u8fd9\u4f1a\u4f7f\u8be5\u5c42\u88ab\u4e00\u7ec4\u65cb\u8f6c\u8272\u6240\u8986\u76d6\u3002"),(0,l.kt)("p",null,"\u6240\u6709\u8fd9\u4e9b\u6807\u5fd7\u53ea\u80fd\u5728\u8c03\u8bd5\u6a21\u5f0f\u4e0b\u5de5\u4f5c\u3002\u901a\u5e38\uff0cFlutter\u6846\u67b6\u4e2d\u4ee5\u201c",(0,l.kt)("inlineCode",{parentName:"p"},"debug..."),"\u201d \u5f00\u5934\u7684\u4efb\u4f55\u5185\u5bb9\u90fd\u53ea\u80fd\u5728\u8c03\u8bd5\u6a21\u5f0f\u4e0b\u5de5\u4f5c\u3002"),(0,l.kt)("h3",{id:"\u8c03\u8bd5\u52a8\u753b"},"\u8c03\u8bd5\u52a8\u753b"),(0,l.kt)("p",null,"\u8c03\u8bd5\u52a8\u753b\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u51cf\u6162\u5b83\u4eec\u7684\u901f\u5ea6\u3002\u4e3a\u6b64\uff0c\u8bf7\u5c06",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/scheduler/timeDilation.html"},(0,l.kt)("inlineCode",{parentName:"a"},"timeDilation")),"\u53d8\u91cf\uff08\u5728scheduler\u5e93\u4e2d\uff09\u8bbe\u7f6e\u4e3a\u5927\u4e8e1.0\u7684\u6570\u5b57\uff0c\u4f8b\u598250.0\u3002 \u6700\u597d\u5728\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u65f6\u53ea\u8bbe\u7f6e\u4e00\u6b21\u3002\u5982\u679c\u60a8\u5728\u8fd0\u884c\u4e2d\u66f4\u6539\u5b83\uff0c\u5c24\u5176\u662f\u5728\u52a8\u753b\u8fd0\u884c\u65f6\u5c06\u5176\u503c\u6539\u5c0f\uff0c\u5219\u5728\u89c2\u5bdf\u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0\u5012\u9000\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u65ad\u8a00\u547d\u4e2d\uff0c\u5e76\u4e14\u8fd9\u901a\u5e38\u4f1a\u5e72\u6270\u6211\u4eec\u7684\u5f00\u53d1\u5de5\u4f5c\u3002"),(0,l.kt)("h3",{id:"\u8c03\u8bd5\u6027\u80fd\u95ee\u9898"},"\u8c03\u8bd5\u6027\u80fd\u95ee\u9898"),(0,l.kt)("p",null,"\u8981\u4e86\u89e3\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u5bfc\u81f4\u91cd\u65b0\u5e03\u5c40\u6216\u91cd\u65b0\u7ed8\u5236\u7684\u539f\u56e0\uff0c\u60a8\u53ef\u4ee5\u5206\u522b\u8bbe\u7f6e",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/rendering/debugPrintMarkNeedsLayoutStacks.html"},(0,l.kt)("inlineCode",{parentName:"a"},"debugPrintMarkNeedsLayoutStacks")),"\u548c ",(0,l.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/rendering/debugPrintMarkNeedsPaintStacks.html"},(0,l.kt)("inlineCode",{parentName:"a"},"debugPrintMarkNeedsPaintStacks")),"\u6807\u5fd7\u3002 \u6bcf\u5f53\u6e32\u67d3\u76d2\u88ab\u8981\u6c42\u91cd\u65b0\u5e03\u5c40\u548c\u91cd\u65b0\u7ed8\u5236\u65f6\uff0c\u8fd9\u4e9b\u90fd\u4f1a\u5c06\u5806\u6808\u8ddf\u8e2a\u8bb0\u5f55\u5230\u63a7\u5236\u53f0\u3002\u5982\u679c\u8fd9\u79cd\u65b9\u6cd5\u5bf9\u60a8\u6709\u7528\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"services"),"\u5e93\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"debugPrintStack()"),"\u65b9\u6cd5\u6309\u9700\u6253\u5370\u5806\u6808\u75d5\u8ff9\u3002"),(0,l.kt)("h3",{id:"\u7edf\u8ba1\u5e94\u7528\u542f\u52a8\u65f6\u95f4"},"\u7edf\u8ba1\u5e94\u7528\u542f\u52a8\u65f6\u95f4"),(0,l.kt)("p",null,"\u8981\u6536\u96c6\u6709\u5173Flutter\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u6240\u9700\u65f6\u95f4\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u53ef\u4ee5\u5728\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"flutter run"),"\u65f6\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"trace-startup"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"profile"),"\u9009\u9879\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ flutter run --trace-startup --profile\n")),(0,l.kt)("p",null,"\u8ddf\u8e2a\u8f93\u51fa\u4fdd\u5b58\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"start_up_info.json"),"\uff0c\u5728Flutter\u5de5\u7a0b\u76ee\u5f55\u5728build\u76ee\u5f55\u4e0b\u3002\u8f93\u51fa\u5217\u51fa\u4e86\u4ece\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u5230\u8fd9\u4e9b\u8ddf\u8e2a\u4e8b\u4ef6\uff08\u4ee5\u5fae\u79d2\u6355\u83b7\uff09\u6240\u7528\u7684\u65f6\u95f4\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fdb\u5165Flutter\u5f15\u64ce\u65f6."),(0,l.kt)("li",{parentName:"ul"},"\u5c55\u793a\u5e94\u7528\u7b2c\u4e00\u5e27\u65f6."),(0,l.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316Flutter\u6846\u67b6\u65f6."),(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u6210Flutter\u6846\u67b6\u521d\u59cb\u5316\u65f6.")),(0,l.kt)("p",null,"\u5982 :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "engineEnterTimestampMicros": 96025565262,\n  "timeToFirstFrameMicros": 2171978,\n  "timeToFrameworkInitMicros": 514585,\n  "timeAfterFrameworkInitMicros": 1657393\n}\n')),(0,l.kt)("h3",{id:"\u8ddf\u8e2adart\u4ee3\u7801\u6027\u80fd"},"\u8ddf\u8e2aDart\u4ee3\u7801\u6027\u80fd"),(0,l.kt)("p",null,"\u8981\u6267\u884c\u81ea\u5b9a\u4e49\u6027\u80fd\u8ddf\u8e2a\u548c\u6d4b\u91cfDart\u4efb\u610f\u4ee3\u7801\u6bb5\u7684wall/CPU\u65f6\u95f4\uff08\u7c7b\u4f3c\u4e8e\u5728Android\u4e0a\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/profile/systrace.html"},"systrace"),"\uff09\u3002 \u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"dart:developer"),"\u7684",(0,l.kt)("a",{parentName:"p",href:"https://api.dartlang.org/stable/dart-developer/Timeline-class.html"},"Timeline"),"\u5de5\u5177\u6765\u5305\u542b\u4f60\u60f3\u6d4b\u8bd5\u7684\u4ee3\u7801\u5757\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Timeline.startSync('interesting function');\n// iWonderHowLongThisTakes();\nTimeline.finishSync();\n")),(0,l.kt)("p",null,"\u7136\u540e\u6253\u5f00\u4f60\u5e94\u7528\u7a0b\u5e8f\u7684Observatory timeline\u9875\u9762\uff0c\u5728\u201cRecorded Streams\u201d\u4e2d\u9009\u62e9\u2018Dart\u2019\u590d\u9009\u6846\uff0c\u5e76\u6267\u884c\u4f60\u60f3\u6d4b\u91cf\u7684\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u5237\u65b0\u9875\u9762\u5c06\u5728Chrome\u7684",(0,l.kt)("a",{parentName:"p",href:"https://www.chromium.org/developers/how-tos/trace-event-profiling-tool"},"\u8ddf\u8e2a\u5de5\u5177"),"\u4e2d\u663e\u793a\u5e94\u7528\u6309\u65f6\u95f4\u987a\u5e8f\u6392\u5217\u7684timeline\u8bb0\u5f55\u3002"),(0,l.kt)("p",null,"\u8bf7\u786e\u4fdd\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"flutter run"),"\u65f6\u5e26\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"--profile"),"\u6807\u5fd7\uff0c\u4ee5\u786e\u4fdd\u8fd0\u884c\u65f6\u6027\u80fd\u7279\u5f81\u4e0e\u60a8\u7684\u6700\u7ec8\u4ea7\u54c1\u5dee\u5f02\u6700\u5c0f\u3002"))}c.isMDXComponent=!0}}]);