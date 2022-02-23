"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[474],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3061:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="Computer Systems",p={unversionedId:"CSAPP/CSAPPNOTE",id:"CSAPP/CSAPPNOTE",title:"Computer Systems",description:"A Tour of Computer Systems",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/CSAPP/CSAPPNOTE.md",sourceDirName:"CSAPP",slug:"/CSAPP/CSAPPNOTE",permalink:"/zh-CN/docs/CSAPP/CSAPPNOTE",editUrl:"https://github.com/Malaaaa/blog-sample/tree/main/docs/CSAPP/CSAPPNOTE.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Note",permalink:"/zh-CN/docs/note"},next:{title:"Exceptional Control Flow",permalink:"/zh-CN/docs/CSAPP/Exceptional Control Flow"}},c=[{value:"A Tour of Computer Systems",id:"a-tour-of-computer-systems",children:[],level:2}],u={toc:c};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"computer-systems"},"Computer Systems"),(0,a.kt)("h2",{id:"a-tour-of-computer-systems"},"A Tour of Computer Systems"),(0,a.kt)("p",null,"Even though we made a substantial improvement to a major part of the system, our net speed up was significantly less than the speedup for the one part."),(0,a.kt)("p",null,"Integer arithmetic, always follows a principle: the smaller extends to the larger.\nshort -> unsigned short -> int -> unsigned int  "),(0,a.kt)("p",null,"Float IEEE754 \uff1a",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/K346K346/article/details/50487127"},"https://blog.csdn.net/K346K346/article/details/50487127")),(0,a.kt)("p",null,"The file must contain a main function"),(0,a.kt)("p",null,"CF    (unsigned) t < (unsigned) aUnsigned overflow \\\nZF    (t == 0)Zero \\\nSF    (t < 0)Negative \\\nOF   (a<0==b<0)&&(t<0!=a<0)Signed overflow"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img.png",src:n(4014).Z,width:"1150",height:"146"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Original and optimized code to compute element i, k of matrix product for fixed-length arrays.The compiler performs these optimizations automatically.",src:n(1669).Z,width:"1400",height:"1106"}),"\nOriginal and optimized code to compute the element i, k of matrix product for fixed-length arrays.The compiler performs these optimizations automatically."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Understanding Pointers")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Every pointer has an associated type. The special void *type represents a generic pointer."),(0,a.kt)("li",{parentName:"ul"},"Every  pointer  has  a  value. This  value  is  an  address  of  some  object  of  the designated type. The specialNULL(0) value indicates that the pointer does not point anywhere."),(0,a.kt)("li",{parentName:"ul"},"Pointers are created with the \u2018&\u2019 operator.uses the leaq instruction to compute the expression value, since this instruction is designed to compute the addressof a memory reference."),(0,a.kt)("li",{parentName:"ul"},"Pointers are dereferenced with the \u2018*\u2019 operator. The result is a value having the type associated with the pointer."),(0,a.kt)("li",{parentName:"ul"},"Arrays and pointers are closely related. Array  referencing  (e.g.,a","[3]",") has the exact same effect as pointer arithmetic and dereferencing (e.g.,*(a+3)). "),(0,a.kt)("li",{parentName:"ul"},"Casting from one type of pointer to another changes its type but not its value."),(0,a.kt)("li",{parentName:"ul"},"Pointers can also point to functions.")))}m.isMDXComponent=!0},4014:function(e,t,n){t.Z=n.p+"assets/images/img-88de9aae833838b1cf936a1384e68dd3.png"},1669:function(e,t,n){t.Z=n.p+"assets/images/img_1-a42a370735304492336a8655ae4cd688.png"}}]);