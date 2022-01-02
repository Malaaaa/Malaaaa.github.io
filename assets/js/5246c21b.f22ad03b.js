"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[423],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,u=c["".concat(s,".").concat(h)]||c[h]||m[h]||l;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2893:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),o=["components"],r={},s=void 0,p={unversionedId:"Flutter/Flutterapp",id:"Flutter/Flutterapp",title:"Flutterapp",description:"Flutter code structure",source:"@site/docs/Flutter/Flutterapp.md",sourceDirName:"Flutter",slug:"/Flutter/Flutterapp",permalink:"/docs/Flutter/Flutterapp",editUrl:"https://github.com/Malaaaa/blog-sample/main/docs/Flutter/Flutterapp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Debugging Flutter applications",permalink:"/docs/Flutter/Dartanalysis"},next:{title:"\u5305\u7ba1\u7406",permalink:"/docs/Flutter/Package"}},d=[{value:"Flutter code structure",id:"flutter-code-structure",children:[],level:2},{value:"Basic framework",id:"basic-framework",children:[],level:2},{value:"Home page component",id:"home-page-component",children:[{value:"State class",id:"state-class",children:[{value:"Why put the build method in State and not in StatefulWidget?",id:"why-put-the-build-method-in-state-and-not-in-statefulwidget",children:[],level:4}],level:3}],level:2}],m={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"flutter-code-structure"},"Flutter code structure"),(0,l.kt)("h2",{id:"basic-framework"},"Basic framework"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Import packages."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:flutter/material.dart';\n")),(0,l.kt)("p",{parentName:"li"},"This line of code acts as an import of the Material UI component library. ",(0,l.kt)("a",{parentName:"p",href:"https://material.io/guidelines"},"Material")," is a standard visual design language for mobile and web, and Flutter provides a rich set of Material style UI components by default. 2.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"application portal."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"void main() => runApp(MyApp());\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Similar to C/C++, Java, ",(0,l.kt)("inlineCode",{parentName:"li"},"main")," function in Flutter application is the entry point of the application. The ",(0,l.kt)("inlineCode",{parentName:"li"},"main")," function calls the ",(0,l.kt)("inlineCode",{parentName:"li"},"runApp")," method, whose function is to start the Flutter application. ",(0,l.kt)("inlineCode",{parentName:"li"},"runApp")," takes a ",(0,l.kt)("inlineCode",{parentName:"li"},"Widget")," parameter, which in this case is a ",(0,l.kt)("inlineCode",{parentName:"li"},"MyApp")," object, and ",(0,l.kt)("inlineCode",{parentName:"li"},"MyApp()")," is the root component of the Flutter application."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"main")," function uses the (",(0,l.kt)("inlineCode",{parentName:"li"},"=>"),") notation, which is shorthand for a one-line function or method in Dart."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Application structure."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"class MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return new MaterialApp(\n      //application name  \n      title: 'Flutter Demo', \n      theme: new ThemeData(\n        //blue theme  \n        primarySwatch: Colors.blue,\n      ),\n      //application home page route  \n      home: new MyHomePage(title: 'Flutter Demo Home Page'),\n    );\n  }\n}\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"MyApp")," class represents a Flutter application that inherits from the ",(0,l.kt)("inlineCode",{parentName:"p"},"StatelessWidget")," class, which means that the application itself is also a widget.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'In Flutter, most things are widgets (later "components" or "widgets"), including alignment, padding, layout, etc., which are all are provided in the form of widgets.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Flutter calls the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method of a component when building a page. The main job of a widget is to provide a build() method to describe how to build the UI interface (usually by combining and assembling other base widgets).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"MaterialApp")," is the Flutter APP framework provided in the Material library, through which you can set the name, theme, language, home page and routing list of the application. ",(0,l.kt)("inlineCode",{parentName:"p"},"MaterialApp")," is also a widget.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"home")," is the home page of the Flutter app, it is also a widget."))))),(0,l.kt)("h2",{id:"home-page-component"},"Home page component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"class MyHomePage extends StatefulWidget {\n  MyHomePage({Key key, this.title}) : super(key: key);\n  final String title;\n  @override\n  _MyHomePageState createState() => new _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MyHomePage")," is the home page of the Flutter application, it inherits from the ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget")," class, which means it is a ",(0,l.kt)("strong",{parentName:"p"},"stateful widget")," (a stateful component). For now, let's just briefly consider that a stateful widget is different from a stateless widget in two ways."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Stateful widgets can have states that are mutable during the widget lifecycle, while Stateless widgets are immutable.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Stateful widget consists of at least two classes."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"StatefulWidget")," class."),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"State")," class; the ",(0,l.kt)("inlineCode",{parentName:"li"},"StatefulWidget")," class itself is immutable, but the state held in the ",(0,l.kt)("inlineCode",{parentName:"li"},"State")," class may change during the widget's lifecycle.")),(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"_MyHomePageState")," class is the state class corresponding to the ",(0,l.kt)("inlineCode",{parentName:"p"},"MyHomePage")," class. Here, the reader may have noticed: Unlike the ",(0,l.kt)("inlineCode",{parentName:"p"},"MyApp")," class, there is no ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method in the ",(0,l.kt)("inlineCode",{parentName:"p"},"MyHomePage")," class, instead, the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method has been moved to the ",(0,l.kt)("inlineCode",{parentName:"p"},"_MyHomePageState")," method."))),(0,l.kt)("h3",{id:"state-class"},"State class"),(0,l.kt)("p",null,"Next, let's see what is contained in ",(0,l.kt)("inlineCode",{parentName:"p"},"_MyHomePageState"),"."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"the state of the component. Since we only need to maintain a click counter, define a ",(0,l.kt)("inlineCode",{parentName:"p"},"_counter")," state."),(0,l.kt)("p",{parentName:"li"},"``dart\nint _counter = 0; // used to record the total number of button clicks"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'\n`_counter` is the state that holds the number of button clicks with a "+" sign in the bottom right corner of the screen.\n\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set the self-increment function for the status."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"void _incrementCounter() {\n  setState(() {\n     _counter++;\n  });\n}\n")),(0,l.kt)("p",{parentName:"li"},"This function is called when the button is clicked. The function works by first self-incrementing ",(0,l.kt)("inlineCode",{parentName:"p"},"_counter")," and then calling the ",(0,l.kt)("inlineCode",{parentName:"p"},"setState")," method. The purpose of the ",(0,l.kt)("inlineCode",{parentName:"p"},"setState")," method is to notify the Flutter framework that a state has changed. When the Flutter framework receives the notification, it will execute the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method to rebuild the interface based on the new state. so you can rebuild anything that needs to be updated without having to modify individual widgets.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Build UI interface"),(0,l.kt)("p",{parentName:"li"},"The logic for building the UI interface is in the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method. When ",(0,l.kt)("inlineCode",{parentName:"p"},"MyHomePage")," is created for the first time, the ",(0,l.kt)("inlineCode",{parentName:"p"},"_MyHomePageState")," class will be created, and when the initialization is complete, the Flutter framework will call the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method of the widget to build the widget tree, and finally render the widget tree to the device screen . So, let's see what is done in the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method of ",(0,l.kt)("inlineCode",{parentName:"p"},"_MyHomePageState"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"  Widget build(BuildContext context) {\n    return new Scaffold(\n      appBar: new AppBar(\n        title: new Text(widget.title),\n      ),\n      body: new Center(\n        child: new Column(\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: <Widget>[\n            new Text(\n              'You have pushed the button this many times:',\n            ),\n            new Text(\n              '$_counter',\n              style: Theme.of(context).textTheme.headline4,\n            ),\n          ],\n        ),\n      ),\n      floatingActionButton: new FloatingActionButton(\n        onPressed: _incrementCounter,\n        tooltip: 'Increment',\n        child: new Icon(Icons.add),\n      ),\n    );\n  }\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Scaffold")," is a page scaffold provided in the Material library that provides a default navigation bar, a header, and a ",(0,l.kt)("inlineCode",{parentName:"li"},"body"),' property containing the main screen widget tree (later referred to as the "component tree" or "widget tree"). Component trees can be very complex. In the examples later in this book, routes are created via ',(0,l.kt)("inlineCode",{parentName:"li"},"Scaffold")," by default."),(0,l.kt)("li",{parentName:"ul"},"The component tree of ",(0,l.kt)("inlineCode",{parentName:"li"},"body")," contains a ",(0,l.kt)("inlineCode",{parentName:"li"},"Center")," component, and ",(0,l.kt)("inlineCode",{parentName:"li"},"Center")," can align its child component trees to the center of the screen. In this case, the ",(0,l.kt)("inlineCode",{parentName:"li"},"Center")," subcomponent is a ",(0,l.kt)("inlineCode",{parentName:"li"},"Column")," component, and the role of ",(0,l.kt)("inlineCode",{parentName:"li"},"Column")," is to align all its subcomponents vertically along the screen; in this case, the ",(0,l.kt)("inlineCode",{parentName:"li"},"Column")," subcomponent is two ",(0,l.kt)("inlineCode",{parentName:"li"},"Text"),"s, and the first ",(0,l.kt)("inlineCode",{parentName:"li"},"Text"),' displays the fixed text "You have pushed the button this many times:", and the second ',(0,l.kt)("inlineCode",{parentName:"li"},"Text")," displays the value of the ",(0,l.kt)("inlineCode",{parentName:"li"},"_counter")," state."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"floatingActionButton")," is the hover button with ",(0,l.kt)("inlineCode",{parentName:"li"},"+")," in the bottom right corner of the page, its ",(0,l.kt)("inlineCode",{parentName:"li"},"onPressed")," property accepts a callback function that represents its handler when it is clicked, in this case the ",(0,l.kt)("inlineCode",{parentName:"li"},"_incrementCounter")," method is directly used as its handler function.")))),(0,l.kt)("p",null,"Now, let's string together the entire counter execution flow: when the ",(0,l.kt)("inlineCode",{parentName:"p"},"floatingActionButton")," button in the bottom-right corner is clicked, the ",(0,l.kt)("inlineCode",{parentName:"p"},"_incrementCounter")," method is called. In the ",(0,l.kt)("inlineCode",{parentName:"p"},"_incrementCounter")," method, first the ",(0,l.kt)("inlineCode",{parentName:"p"},"_counter")," counter (state) will be self-incremented, then ",(0,l.kt)("inlineCode",{parentName:"p"},"setState")," will notify the Flutter framework that the state has changed, then the Flutter framework will call the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method to rebuild the UI with the new state and finally display it on the device screen."),(0,l.kt)("h4",{id:"why-put-the-build-method-in-state-and-not-in-statefulwidget"},"Why put the build method in State and not in StatefulWidget?"),(0,l.kt)("p",null,"Now, let's answer the question raised earlier, why is the ",(0,l.kt)("inlineCode",{parentName:"p"},"build()")," method placed in State (instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget"),") ? This is mainly to increase the flexibility of development. If the ",(0,l.kt)("inlineCode",{parentName:"p"},"build()")," method is placed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget")," there are two problems."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Inconvenient state access"),(0,l.kt)("p",{parentName:"li"},"Imagine if our ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget")," has many states, and each time the state changes, we have to call the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method, since the state is stored in State, if the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method is in ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget"),", then the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method and the state are in two separate classes, so it will be very inconvenient to read the state when building! would be very inconvenient! Imagine if you actually put the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method in a StatefulWidget, since the process of building the UI depends on the State, the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method would have to have a ",(0,l.kt)("inlineCode",{parentName:"p"},"State")," parameter, something like the following."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"  Widget build(BuildContext context, State state){\n      //state.counter\n      ...\n  }\n")),(0,l.kt)("p",{parentName:"li"},"In this case, you can only declare all the state of the State as public, so that you can access the state outside the State class! However, by making the state public, the state will no longer be private, which means that modifications to the state will become uncontrollable. But if you put the ",(0,l.kt)("inlineCode",{parentName:"p"},"build()")," method in the State, the build process not only has direct access to the state, but also does not need to expose the private state, which is very convenient.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Inheriting ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget")," is inconvenient"),(0,l.kt)("p",{parentName:"li"},"For example, Flutter has a base class ",(0,l.kt)("inlineCode",{parentName:"p"},"AnimatedWidget")," for animated widgets, which inherits from the ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget")," class. An abstract method ",(0,l.kt)("inlineCode",{parentName:"p"},"build(BuildContext context)")," is introduced in ",(0,l.kt)("inlineCode",{parentName:"p"},"AnimatedWidget"),", and all animated widgets that inherit from ",(0,l.kt)("inlineCode",{parentName:"p"},"AnimatedWidget")," have to implement this ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method. Now imagine that if the ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget")," class already has a ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method, as described above, the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method needs to receive a state object, which means that the ",(0,l.kt)("inlineCode",{parentName:"p"},"AnimatedWidget")," has to pass its own State object (noted as _ animatedWidgetState) to its child class, because the child class needs to call the parent class's ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method in its ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method, and the code might look like this."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"class MyAnimationWidget extends AnimatedWidget{\n    @override\n    Widget build(BuildContext context, State state){\n      //since the subclass is going to use the AnimatedWidget's state object _animatedWidgetState.\n      //so the AnimatedWidget must somehow expose its state object _animatedWidgetState\n      // Expose it to its subclasses   \n      super.build(context, _animatedWidgetState)\n    }\n}\n")),(0,l.kt)("p",{parentName:"li"},"This obviously doesn't make sense, because"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"the state object of ",(0,l.kt)("inlineCode",{parentName:"li"},"AnimatedWidget")," is an internal implementation detail of ",(0,l.kt)("inlineCode",{parentName:"li"},"AnimatedWidget")," and should not be exposed to the outside."),(0,l.kt)("li",{parentName:"ol"},"if the parent class state is to be exposed to the child class, then there must be a passing mechanism, and it is pointless to do this set of passing mechanism, because the passing of state between parent and child classes is irrelevant to the logic of the child class itself.")))),(0,l.kt)("p",null,"To sum up, it can be found that for ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget"),", putting the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," method in State can bring a lot of flexibility to the development."))}c.isMDXComponent=!0}}]);