"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[152],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7380:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},p="Package Management",s={unversionedId:"Flutter/Package",id:"Flutter/Package",title:"Package Management",description:"YAML is an intuitive, highly readable and human-readable file format, it's syntax is simple and very easy to parse compared to xml or Json, so YAML is often used for configuration files, Flutter also uses yaml files as its configuration files. the default configuration file for Flutter projects is pubspec.yaml, let's look at a simple example.",source:"@site/docs/Flutter/Package.md",sourceDirName:"Flutter",slug:"/Flutter/Package",permalink:"/docs/Flutter/Package",editUrl:"https://github.com/Malaaaa/blog-sample/tree/main/docs/Flutter/Package.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flutterapp",permalink:"/docs/Flutter/Flutterapp"},next:{title:"Resource Management",permalink:"/docs/Flutter/ResourceM"}},d=[{value:"Pub repository",id:"pub-repository",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Other dependency methods",id:"other-dependency-methods",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2},{value:"Pub repository",id:"pub-repository-1",children:[],level:2},{value:"Example",id:"example-1",children:[],level:2},{value:"Other dependency methods",id:"other-dependency-methods-1",children:[],level:2},{value:"Summary",id:"summary-1",children:[],level:2}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"package-management"},"Package Management"),(0,i.kt)("p",null,"YAML is an intuitive, highly readable and human-readable file format, it's syntax is simple and very easy to parse compared to xml or Json, so YAML is often used for configuration files, Flutter also uses yaml files as its configuration files. the default configuration file for Flutter projects is ",(0,i.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),", let's look at a simple example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: flutter_in_action\ndescription: First Flutter application.\n\nversion: 1.0.0+1\n\ndependencies:\n  flutter:\n    sdk: flutter\n  cupertino_icons: ^0.1.2\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\nflutter:\n  uses-material-design: true\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": the name of the application or package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": description, introduction of the application or package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version"),": version number of the application or package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dependencies"),": other packages or plugins that the application or package depends on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dev_dependencies"),": the toolkits that the development environment depends on (not the packages that the flutter application itself depends on)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flutter"),": flutter-related configuration options.")),(0,i.kt)("p",null,"If our Flutter application itself depends on a package, we need to add the dependent package under ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),", next we will demonstrate how to add, download and use third-party packages with an example."),(0,i.kt)("h2",{id:"pub-repository"},"Pub repository"),(0,i.kt)("p",null,"Pub (",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/"},"https://pub.dev/")," ) is the official Google repository for ",(0,i.kt)("strong",{parentName:"p"},"Dart Packages"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,'Next, we implement a widget that displays random strings. there is an open source package called "english_words" that contains thousands of common English words and some useful functions. We first find the package "english_words" on pub (shown in Figure 2-5), determine its latest version number and whether it supports Flutter.'),(0,i.kt)("p",null,"! ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Malaaaa/cloudimage/master/2-5.png"},"Figure 2-5")),(0,i.kt)("p",null,'We see that the latest version of the "english_words" package is 3.1.3, and it supports flutter.'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'add "english_words" (version 3.1.3) to the list of dependencies, as follows.'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  flutter:\n    sdk: flutter\n\n  cupertino_icons: ^0.1.0\n  # New dependencies added\n  : ^3.1.3\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the package. When viewing pubspec.yaml in the editor view of Android Studio (Figure 2-6), click ",(0,i.kt)("strong",{parentName:"p"},"Packages get")," in the upper right corner."),(0,i.kt)("p",{parentName:"li"},"! ",(0,i.kt)("a",{parentName:"p",href:"https://pcdn.flutterchina.club/imgs/2-6.png"},"Figure 2-6")),(0,i.kt)("p",{parentName:"li"},"This will install the dependency packages to your project. We can see the following in the console."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'flutter packages get\nRunning "flutter packages get" in flutter_in_action...\nProcess finished with exit code 0\n')),(0,i.kt)("p",{parentName:"li"},"We can also download the dependencies from the console by locating the current project directory and running the ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter packages get")," command manually. Also, note the difference between ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dev_dependencies"),", the former dependencies will be compiled as part of the source code of the app to generate the final installer. The latter dependencies are only used as some toolkits in the development stage, mainly to help us improve the development and testing efficiency, such as flutter's automation test package, etc.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"introduce the ",(0,i.kt)("inlineCode",{parentName:"p"},"english_words")," package."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:english_words/english_words.dart';\n")),(0,i.kt)("p",{parentName:"li"},"On import, Android Studio will automatically provide suggested options for library import. The line of code will be grayed out after importing, indicating that the imported library is not used yet. 4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"english_words")," package to generate random strings."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class RandomWordsWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n   // Generate random strings\n    final wordPair = new WordPair.random();\n    return Padding(\n      padding: const EdgeInsets.all(8.0),\n      child: new Text(wordPair.toString()),\n    );\n  }\n}\n")),(0,i.kt)("p",{parentName:"li"},"We add ",(0,i.kt)("inlineCode",{parentName:"p"},"RandomWordsWidget")," to the child widget of ",(0,i.kt)("inlineCode",{parentName:"p"},"Column")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"_MyHomePageState.build"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"Column(\n  mainAxisAlignment: MainAxisAlignment.center,\n  children: <Widget>[\n    RandomWordsWidget(),\n  ],\n)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the application is running, use the Hot Reload button (\u26a1\ufe0f icon) to update the running application. Each time you click Hot Reload or Save Item, a different word pair is randomly selected in the running application. This is because the word pairs are generated inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," method. The ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," method is executed each time a hot update is performed, and runs as shown in Figure 2-7."),(0,i.kt)("p",{parentName:"li"},"! ",(0,i.kt)("a",{parentName:"p",href:"https://pcdn.flutterchina.club/imgs/2-7.png"},"Figure 2-7")))),(0,i.kt)("h2",{id:"other-dependency-methods"},"Other dependency methods"),(0,i.kt)("p",null,"The dependency methods described above rely on Pub repositories. However, we can also rely on local packages and git repositories."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Reliance on local packages"),(0,i.kt)("p",{parentName:"li"},"If we are developing a package locally, named pkg1, we can depend on it by doing the following."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n    pkg1:\n        path: ... /... /code/pkg1\n")),(0,i.kt)("p",{parentName:"li"},"Paths can be either relative or absolute.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dependency on Git: You can also depend on packages stored in a Git repository. If the package is located in the root of the repository, use the following syntax"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  pkg1:\n    git:\n      url: git://github.com/xxx/pkg1.git\n")),(0,i.kt)("p",{parentName:"li"},"The above assumes that the package is located in the root directory of the Git repository. If this is not the case, you can specify a relative location using the path parameter, e.g."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  package1:\n    git:\n      url: git://github.com/flutter/packages.git\n      path: packages/package1\n")))),(0,i.kt)("p",null,"These dependencies described above are commonly used in Flutter development, but there are some other dependencies, the complete content of which the reader can see for himself: ",(0,i.kt)("a",{parentName:"p",href:"https://www.dartlang.org/tools/pub/dependencies"},"https://www.dartlang.org/tools/pub/dependencies")," ."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This section describes the overall process of package management, referencing, and downloading in Flutter, and we will cover how to develop and distribute our own packages in later chapters.\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Translated with ",(0,i.kt)("a",{parentName:"em",href:"http://www.DeepL.com/Translator"},"www.DeepL.com/Translator")," (free version)"))),(0,i.kt)("h1",{id:"package-management-1"},"Package Management"),(0,i.kt)("p",null,"YAML is an intuitive, highly readable and human-readable file format, it's syntax is simple and very easy to parse compared to xml or Json, so YAML is often used for configuration files, Flutter also uses yaml files as its configuration files. the default configuration file for Flutter projects is ",(0,i.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),", let's look at a simple example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: flutter_in_action\ndescription: First Flutter application.\n\nversion: 1.0.0+1\n\ndependencies:\n  flutter:\n    sdk: flutter\n  cupertino_icons: ^0.1.2\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\nflutter:\n  uses-material-design: true\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": the name of the application or package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": description, introduction of the application or package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version"),": version number of the application or package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dependencies"),": other packages or plugins that the application or package depends on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dev_dependencies"),": the toolkits that the development environment depends on (not the packages that the flutter application itself depends on)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flutter"),": flutter-related configuration options.")),(0,i.kt)("p",null,"If our Flutter application itself depends on a package, we need to add the dependent package under ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),", next we will demonstrate how to add, download and use third-party packages with an example."),(0,i.kt)("h2",{id:"pub-repository-1"},"Pub repository"),(0,i.kt)("p",null,"Pub (",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/"},"https://pub.dev/")," ) is the official Google repository for ",(0,i.kt)("strong",{parentName:"p"},"Dart Packages"),"."),(0,i.kt)("h2",{id:"example-1"},"Example"),(0,i.kt)("p",null,'Next, we implement a widget that displays random strings. there is an open source package called "english_words" that contains thousands of common English words and some useful functions. We first find the package "english_words" on pub (shown in Figure 2-5), determine its latest version number and whether it supports Flutter.'),(0,i.kt)("p",null,"! ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Malaaaa/cloudimage/master/2-5.png"},"Figure 2-5")),(0,i.kt)("p",null,'We see that the latest version of the "english_words" package is 3.1.3, and it supports flutter.'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'add "english_words" (version 3.1.3) to the list of dependencies, as follows.'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  flutter:\n    sdk: flutter\n\n  cupertino_icons: ^0.1.0\n  # New dependencies added\n  : ^3.1.3\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the package. When viewing pubspec.yaml in the editor view of Android Studio (Figure 2-6), click ",(0,i.kt)("strong",{parentName:"p"},"Packages get")," in the upper right corner."),(0,i.kt)("p",{parentName:"li"},"! ",(0,i.kt)("a",{parentName:"p",href:"https://pcdn.flutterchina.club/imgs/2-6.png"},"Figure 2-6")),(0,i.kt)("p",{parentName:"li"},"This will install the dependency packages to your project. We can see the following in the console."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'flutter packages get\nRunning "flutter packages get" in flutter_in_action...\nProcess finished with exit code 0\n')),(0,i.kt)("p",{parentName:"li"},"We can also download the dependencies from the console by locating the current project directory and running the ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter packages get")," command manually. Also, note the difference between ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dev_dependencies"),", the former dependencies will be compiled as part of the source code of the app to generate the final installer. The latter dependencies are only used as some toolkits in the development stage, mainly to help us improve the development and testing efficiency, such as flutter's automation test package, etc.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"introduce the ",(0,i.kt)("inlineCode",{parentName:"p"},"english_words")," package."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:english_words/english_words.dart';\n")),(0,i.kt)("p",{parentName:"li"},"On import, Android Studio will automatically provide suggested options for library import. The line of code will be grayed out after importing, indicating that the imported library is not used yet. 4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"english_words")," package to generate random strings."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class RandomWordsWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n   // Generate random strings\n    final wordPair = new WordPair.random();\n    return Padding(\n      padding: const EdgeInsets.all(8.0),\n      child: new Text(wordPair.toString()),\n    );\n  }\n}\n")),(0,i.kt)("p",{parentName:"li"},"We add ",(0,i.kt)("inlineCode",{parentName:"p"},"RandomWordsWidget")," to the child widget of ",(0,i.kt)("inlineCode",{parentName:"p"},"Column")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"_MyHomePageState.build"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"Column(\n  mainAxisAlignment: MainAxisAlignment.center,\n  children: <Widget>[\n    RandomWordsWidget(),\n  ],\n)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the application is running, use the Hot Reload button (\u26a1\ufe0f icon) to update the running application. Each time you click Hot Reload or Save Item, a different word pair is randomly selected in the running application. This is because the word pairs are generated inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," method. The ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," method is executed each time a hot update is performed, and runs as shown in Figure 2-7."),(0,i.kt)("p",{parentName:"li"},"! ",(0,i.kt)("a",{parentName:"p",href:"https://pcdn.flutterchina.club/imgs/2-7.png"},"Figure 2-7")))),(0,i.kt)("h2",{id:"other-dependency-methods-1"},"Other dependency methods"),(0,i.kt)("p",null,"The dependency methods described above rely on Pub repositories. However, we can also rely on local packages and git repositories."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Reliance on local packages"),(0,i.kt)("p",{parentName:"li"},"If we are developing a package locally, named pkg1, we can depend on it by doing the following."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n    pkg1:\n        path: ... /... /code/pkg1\n")),(0,i.kt)("p",{parentName:"li"},"Paths can be either relative or absolute.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dependency on Git: You can also depend on packages stored in a Git repository. If the package is located in the root of the repository, use the following syntax"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  pkg1:\n    git:\n      url: git://github.com/xxx/pkg1.git\n")),(0,i.kt)("p",{parentName:"li"},"The above assumes that the package is located in the root directory of the Git repository. If this is not the case, you can specify a relative location using the path parameter, e.g."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  package1:\n    git:\n      url: git://github.com/flutter/packages.git\n      path: packages/package1\n")))),(0,i.kt)("p",null,"These dependencies described above are commonly used in Flutter development, but there are some other dependencies, the complete content of which the reader can see for himself: ",(0,i.kt)("a",{parentName:"p",href:"https://www.dartlang.org/tools/pub/dependencies"},"https://www.dartlang.org/tools/pub/dependencies")," ."),(0,i.kt)("h2",{id:"summary-1"},"Summary"),(0,i.kt)("p",null,"This section describes the overall process of package management, referencing, and downloading in Flutter, and we will cover how to develop and distribute our own packages in later chapters."))}m.isMDXComponent=!0}}]);