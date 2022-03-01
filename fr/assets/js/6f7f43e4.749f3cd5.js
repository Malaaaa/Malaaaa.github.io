"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[644],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3983:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={},u="Flutter Route Management",s={unversionedId:"Flutter/Route",id:"Flutter/Route",title:"Flutter Route Management",description:"Route in mobile development usually refers to a Page, which is the same as the concept of Route in web development for single page applications. The route management in Flutter is similar to the native development, both Android and iOS, the navigation management will maintain a route stack, the route into the stack (push) operation corresponds to open a new page, the route out of the stack (pop) operation corresponds to the page close operation, and the route management is mainly refers to how to manage the route stack.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Flutter/Route.md",sourceDirName:"Flutter",slug:"/Flutter/Route",permalink:"/fr/docs/Flutter/Route",editUrl:"https://github.com/Malaaaa/blog-sample/tree/main/docs/Flutter/Route.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resource Management",permalink:"/fr/docs/Flutter/ResourceM"},next:{title:"Useful Javascript exmaple",permalink:"/fr/docs/JavaScript/"}},p=[{value:"MaterialPageRoute",id:"materialpageroute",children:[],level:2},{value:"Navigator",id:"navigator",children:[{value:"Future push(BuildContext context, Route route)",id:"future-pushbuildcontext-context-route-route",children:[],level:3},{value:"bool pop(BuildContext context,  result )",id:"bool-popbuildcontext-context--result-",children:[],level:3},{value:"Instance methods",id:"instance-methods",children:[],level:3}],level:2},{value:"Route Passing",id:"route-passing",children:[{value:"Example",id:"example",children:[],level:3}],level:2},{value:"Named routes",id:"named-routes",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flutter-route-management"},"Flutter Route Management"),(0,r.kt)("p",null,"Route in mobile development usually refers to a Page, which is the same as the concept of Route in web development for single page applications. The route management in Flutter is similar to the native development, both Android and iOS, the navigation management will maintain a route stack, the route into the stack (push) operation corresponds to open a new page, the route out of the stack (pop) operation corresponds to the page close operation, and the route management is mainly refers to how to manage the route stack."),(0,r.kt)("p",null,"New routing is the same level as homepage, and is a new stateless component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"class NewRoute extends StatelessWidget \n``` The\n\nThe Botton component calls the\n\n```dart\n         onPressed: () {\n          // Navigate to the new route   \n          Navigator.push( context,\n           MaterialPageRoute(builder: (context) {\n              return NewRoute();\n           }));\n")),(0,r.kt)("h2",{id:"materialpageroute"},"MaterialPageRoute"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MaterialPageRoute")," class inherits from the ",(0,r.kt)("inlineCode",{parentName:"p"},"PageRoute")," class. The ",(0,r.kt)("inlineCode",{parentName:"p"},"PageRoute")," class is an abstract class that represents a modal route page that occupies the entire screen space, and it also defines the interface and properties related to route construction and transition animations when switching. ",(0,r.kt)("inlineCode",{parentName:"p"},"MaterialPageRoute")," is a component provided by the Material component library, which can achieve the same style of routing switching animation as the platform page switching animation for different platforms."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Android, when opening a new page, the new page will slide from the bottom to the top of the screen; when closing a page, the current page will slide from the top to the bottom of the screen and disappear, while the previous page will be displayed on the screen."),(0,r.kt)("li",{parentName:"ul"},"For iOS, when opening a page, the new page will slide consistently from the right edge of the screen to the left side of the screen until the new page is all displayed on the screen, while the previous page will disappear by sliding from the current screen to the left side of the screen; when closing a page, it is just the opposite, the current page will slide out from the right side of the screen, while the previous page will slide in from the left side of the screen.")),(0,r.kt)("p",null,"Here we introduce the meaning of each parameter of the ",(0,r.kt)("inlineCode",{parentName:"p"},"MaterialPageRoute")," constructor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"  MaterialPageRoute({\n    WidgetBuilder builder,\n    RouteSettings settings,\n    bool maintainState = true,\n    bool fullscreenDialog = false,\n  })\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"builder")," is a callback function of type WidgetBuilder, which is used to build the specifics of the route page, the return value is a widget. we usually have to implement this callback to return an instance of the new route."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"settings")," contains the configuration information of the route, such as the route name, whether the initial route (home page)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maintainState"),": by default, when a new route is stacked, the original route is still stored in memory, if you want to release all the resources occupied by the route when it is not used, you can set ",(0,r.kt)("inlineCode",{parentName:"li"},"maintainState")," to false."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fullscreenDialog")," indicates whether the new routing page is a full-screen modal dialog. In iOS, if ",(0,r.kt)("inlineCode",{parentName:"li"},"fullscreenDialog")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", the new page will slide in from the bottom of the screen (instead of horizontally).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you want to customize the routing switch animation, you can inherit PageRoute to implement it yourself, and we will implement a custom routing component later when we introduce the animation.")),(0,r.kt)("h2",{id:"navigator"},"Navigator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Navigator")," is a route management component that provides methods to open and exit route pages. ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator")," manages a collection of active routes through a stack. Usually the page currently displayed on the screen is the route at the top of the stack. ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator")," provides a series of methods to manage the routing stack, here we only describe its two most commonly used methods."),(0,r.kt)("h3",{id:"future-pushbuildcontext-context-route-route"},"Future push(BuildContext context, Route route)"),(0,r.kt)("p",null,"The return value is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Future")," object that receives the return data when the new route leaves the stack (i.e. is closed)."),(0,r.kt)("h3",{id:"bool-popbuildcontext-context--result-"},"bool pop(BuildContext context, ","[ result ]",")"),(0,r.kt)("p",null,"Route the top of the stack out of the stack, ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," is the data returned to the previous page when the page is closed."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Navigator")," has many other methods, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator.replace"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator.popUntil"),', etc. Please refer to the API documentation or SDK source code comments for details, so we will not repeat them here. Here we also need to introduce another concept related to routing, "named routes".'),(0,r.kt)("h3",{id:"instance-methods"},"Instance methods"),(0,r.kt)("p",null,"Navigator class ",(0,r.kt)("strong",{parentName:"p"},"static methods")," with context as the first parameter correspond to a Navigator ",(0,r.kt)("strong",{parentName:"p"},"instance method"),", for example ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator.push(BuildContext context, Route route)")," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator.of( context).push(Route route)")," , and the following named route-related methods are the same."),(0,r.kt)("h2",{id:"route-passing"},"Route Passing"),(0,r.kt)("p",null,"Very often, we need to take some parameters when routing jumps, for example, when opening the product details page, we need to take a product id, so that the product details page to know which product information to display; another example is that we need to select the delivery address when filling an order, after opening the address selection page and selecting the address, you can return the user-selected address to the order page and so on. The following is a simple example to demonstrate how to pass the old and new routes."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"We create a ",(0,r.kt)("inlineCode",{parentName:"p"},"TipRoute")," route, which accepts a prompt text parameter and is responsible for displaying the text passed to it on the page, in addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"TipRoute"),' we add a "Back" button, which when clicked will take a return parameter while returning to the previous route, let\'s look at the implementation code.'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TipRoute")," implementation code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'class TipRoute extends StatelessWidget {\n  TipRoute({\n    Key key,\n    @required this.text, // receive a text parameter\n  }) : super(key: key);\n  final String text;\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text("Tip"),\n      ),\n      body: Padding(\n        padding: EdgeInsets.all(18),\n        child: Center(\n          child: Column(\n            children: <Widget>[\n              Text(text),\n              RaisedButton(\n                onPressed: () => Navigator.pop(context, "I am the return value"),\n                child: Text("return"),\n              )\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n')),(0,r.kt)("p",null,"Here is the code to open the new routing ",(0,r.kt)("inlineCode",{parentName:"p"},"TipRoute"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'class RouterTestRoute extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Center(\n      child: RaisedButton(\n        onPressed: () async {\n          // Open `TipRoute` and wait for the return result\n          var result = await Navigator.push(\n            context,\n            MaterialPageRoute(\n              builder: (context) {\n                return TipRoute(\n                  // Route parameters\n                  text: "I am tip xxxx",\n                );\n              },\n            ),\n          );\n          //output `TipRoute` route return result\n          print("Route return value: $result");\n        },\n        child: Text("Open prompt page"),\n      ),\n    );\n  }\n}\n')),(0,r.kt)("p",null,'Run the above code and click the "Open Tip Page" button on the ',(0,r.kt)("inlineCode",{parentName:"p"},"RouterTestRoute")," page, which will open the ",(0,r.kt)("inlineCode",{parentName:"p"},"TipRoute")," page and run as shown in Figure 2-4 below."),(0,r.kt)("p",null,"! ",(0,r.kt)("a",{parentName:"p",href:"https://pcdn.flutterchina.club/imgs/2-4.png"},"Figure 2-4")),(0,r.kt)("p",null,"Note: 1."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'the prompt text "I am prompting xxxx" is passed to the new routing page via the ',(0,r.kt)("inlineCode",{parentName:"p"},"text")," parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"TipRoute"),". We can wait for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Future")," returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator.push(...)")," to get the return data of the new route. 2.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"TipRoute"),' page, there are two ways to go back to the previous page; the first way is to click the back arrow in the navigation bar directly, and the second way is to click the "Back" button in the page. The difference between these two return methods is that the former does not return data to the previous route, while the latter does. The following is the output of the ',(0,r.kt)("inlineCode",{parentName:"p"},"print")," method in the ",(0,r.kt)("inlineCode",{parentName:"p"},"RouterTestRoute")," page on the console after clicking the back button and the navigation bar return arrow respectively."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"I/flutter (27896): route return value: I am the return value\nI/flutter (27896): route return value: null\n")))),(0,r.kt)("p",null,"The above describes the way to pass values for non-named routes. The way to pass values for named routes will be different, and we will cover it when we introduce named routes below."),(0,r.kt)("h2",{id:"named-routes"},"Named routes"))}d.isMDXComponent=!0}}]);