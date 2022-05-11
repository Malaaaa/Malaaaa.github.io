"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[48],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},967:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],s={},o="Gestion des packages",p={unversionedId:"Flutter/Package",id:"Flutter/Package",title:"Gestion des packages",description:"YAML est un format de fichier intuitif, hautement lisible et lisible par l'homme, sa syntaxe est simple et tr\xe8s facile \xe0 analyser par rapport \xe0 xml ou Json, donc YAML est souvent utilis\xe9 pour les fichiers de configuration, Flutter utilise \xe9galement des fichiers yaml comme fichiers de configuration. le fichier de configuration par d\xe9faut pour les projets Flutter est pubspec.yaml, regardons un exemple simple.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Flutter/Package.md",sourceDirName:"Flutter",slug:"/Flutter/Package",permalink:"/fr/docs/Flutter/Package",draft:!1,editUrl:"https://github.com/Malaaaa/blog-sample/tree/main/docs/Flutter/Package.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flutterapp",permalink:"/fr/docs/Flutter/Flutterapp"},next:{title:"La gestion des ressources",permalink:"/fr/docs/Flutter/ResourceM"}},u={},d=[{value:"R\xe9f\xe9rentiel de pub",id:"r\xe9f\xe9rentiel-de-pub",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Autres m\xe9thodes de d\xe9pendance",id:"autres-m\xe9thodes-de-d\xe9pendance",level:2},{value:"Sommaire",id:"sommaire",level:2},{value:"R\xe9f\xe9rentiel de pub",id:"r\xe9f\xe9rentiel-de-pub-1",level:2},{value:"Exemple",id:"exemple-1",level:2},{value:"Autres m\xe9thodes de d\xe9pendance",id:"autres-m\xe9thodes-de-d\xe9pendance-1",level:2},{value:"Sommaire",id:"sommaire-1",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gestion-des-packages"},"Gestion des packages"),(0,i.kt)("p",null,"YAML est un format de fichier intuitif, hautement lisible et lisible par l'homme, sa syntaxe est simple et tr\xe8s facile \xe0 analyser par rapport \xe0 xml ou Json, donc YAML est souvent utilis\xe9 pour les fichiers de configuration, Flutter utilise \xe9galement des fichiers yaml comme fichiers de configuration. le fichier de configuration par d\xe9faut pour les projets Flutter est ",(0,i.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),", regardons un exemple simple."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"nom : flutter_in_action\ndescription : Premi\xe8re application Flutter.\n\nversion : 1.0.0+1\n\nd\xe9pendances :\n  flutter :\n    sdk : flutter\n  cupertino_icons : ^0.1.2\n\ndev_dependencies :\n  flutter_test :\n    sdk : flutter\n\nflutter :\n  uses-material-design : true\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nom"),": le nom de l'application ou du package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": description, pr\xe9sentation de l'application ou du package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version"),": num\xe9ro de version de l'application ou du package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"d\xe9pendances"),": autres packages ou plugins dont d\xe9pend l'application ou le package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dev_dependencies"),"\xa0: les kits d'outils dont d\xe9pend l'environnement de d\xe9veloppement (et non les packages dont d\xe9pend l'application flutter elle-m\xeame)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flutter"),": options de configuration li\xe9es au flutter.")),(0,i.kt)("p",null,"Si notre application Flutter elle-m\xeame d\xe9pend d'un package, nous devons ajouter le package d\xe9pendant sous ",(0,i.kt)("inlineCode",{parentName:"p"},"d\xe9pendances"),", nous montrerons ensuite comment ajouter, t\xe9l\xe9charger et utiliser des packages tiers avec un exemple."),(0,i.kt)("h2",{id:"r\xe9f\xe9rentiel-de-pub"},"R\xe9f\xe9rentiel de pub"),(0,i.kt)("p",null,"Pub (",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/"},"https://pub.dev/")," ) est le d\xe9p\xf4t officiel de Google pour ",(0,i.kt)("strong",{parentName:"p"},"Dart Packages"),"."),(0,i.kt)("h2",{id:"exemple"},"Exemple"),(0,i.kt)("p",null,'Ensuite, nous impl\xe9mentons un widget qui affiche des cha\xeenes al\xe9atoires. il existe un package open source appel\xe9 "english_words" qui contient des milliers de mots anglais courants et quelques fonctions utiles. Nous trouvons d\'abord le paquet "english_words" sur pub (illustr\xe9 \xe0 la figure 2-5), d\xe9terminons son dernier num\xe9ro de version et s\'il prend en charge Flutter.'),(0,i.kt)("p",null,"! ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Malaaaa/cloudimage/master/2-5.png"},"Illustration 2-5")),(0,i.kt)("p",null,'Nous voyons que la derni\xe8re version du package "english_words" est la 3.1.3 et qu\'elle prend en charge le flutter.'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'ajoutez "english_words" (version 3.1.3) \xe0 la liste des d\xe9pendances, comme suit.'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  flutter:\n    sdk: flutter\n\n  cupertino_icons: ^0.1.0\n  # Nouvelles d\xe9pendances ajout\xe9es\n  \xa0: ^3.1.3\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"T\xe9l\xe9chargez le package. Lorsque vous affichez pubspec.yaml dans la vue de l'\xe9diteur d'Android Studio (Figure 2-6), cliquez sur ",(0,i.kt)("strong",{parentName:"p"},"Packages get")," dans le coin sup\xe9rieur droit."),(0,i.kt)("p",{parentName:"li"},"! ",(0,i.kt)("a",{parentName:"p",href:"https://pcdn.flutterchina.club/imgs/2-6.png"},"Illustration 2-6")),(0,i.kt)("p",{parentName:"li"},"Cela installera les packages de d\xe9pendance sur votre projet. Nous pouvons voir ce qui suit dans la console."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'flutter packages get\nEx\xe9cution de "flutter packages get" dans flutter_in_action...\nProcessus termin\xe9 avec le code de sortie 0\n')),(0,i.kt)("p",{parentName:"li"},"Nous pouvons \xe9galement t\xe9l\xe9charger les d\xe9pendances \xe0 partir de la console en localisant le r\xe9pertoire du projet actuel et en ex\xe9cutant manuellement la commande ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter packages get"),". Notez \xe9galement la diff\xe9rence entre ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"dev_dependencies"),", les anciennes d\xe9pendances seront compil\xe9es dans le cadre du code source de l'application pour g\xe9n\xe9rer le programme d'installation final. Ces derni\xe8res d\xe9pendances ne sont utilis\xe9es que comme certaines bo\xeetes \xe0 outils dans la phase de d\xe9veloppement, principalement pour nous aider \xe0 am\xe9liorer l'efficacit\xe9 du d\xe9veloppement et des tests, comme le package de test d'automatisation de Flutter, etc.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"introduisez le package ",(0,i.kt)("inlineCode",{parentName:"p"},"english_words"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"importer 'paquet:mots_anglais/mots_anglais.dart'\xa0;\n")),(0,i.kt)("p",{parentName:"li"},"Lors de l'importation, Android Studio proposera automatiquement des options sugg\xe9r\xe9es pour l'importation de la biblioth\xe8que. La ligne de code sera gris\xe9e apr\xe8s l'importation, indiquant que la biblioth\xe8que import\xe9e n'est pas encore utilis\xe9e. 4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Utilisez le package ",(0,i.kt)("inlineCode",{parentName:"p"},"english_words")," pour g\xe9n\xe9rer des cha\xeenes al\xe9atoires."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class RandomWordsWidget extend StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n   // G\xe9n\xe9rer des cha\xeenes al\xe9atoires\n    final wordPair = new WordPair.random();\n    return Padding(\n      padding: const EdgeInsets.all(8.0),\n      child: new Text(wordPair.toString()),\n    );\n  }\n}\n")),(0,i.kt)("p",{parentName:"li"},"   Nous ajoutons ",(0,i.kt)("inlineCode",{parentName:"p"},"RandomWordsWidget")," au widget enfant de ",(0,i.kt)("inlineCode",{parentName:"p"},"Column")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"_MyHomePageState.build"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"Colonne(\n  mainAxisAlignment\xa0: MainAxisAlignment.center,\n  enfants\xa0: <Widget>[\n    RandomWordsWidget(),\n  ],\n)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Si l'application est en cours d'ex\xe9cution, utilisez le bouton Hot Reload (ic\xf4ne \u26a1\ufe0f) pour mettre \xe0 jour l'application en cours d'ex\xe9cution. Chaque fois que vous cliquez sur Hot Reload ou Save Item, une paire de mots diff\xe9rente est s\xe9lectionn\xe9e au hasard dans l'application en cours d'ex\xe9cution. En effet, les paires de mots sont g\xe9n\xe9r\xe9es dans la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"build"),". La m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," est ex\xe9cut\xe9e chaque fois qu'une mise \xe0 jour \xe0 chaud est effectu\xe9e et s'ex\xe9cute comme illustr\xe9 \xe0 la Figure 2-7."),(0,i.kt)("p",{parentName:"li"},"! ",(0,i.kt)("a",{parentName:"p",href:"https://pcdn.flutterchina.club/imgs/2-7.png"},"Illustration 2-7")))),(0,i.kt)("h2",{id:"autres-m\xe9thodes-de-d\xe9pendance"},"Autres m\xe9thodes de d\xe9pendance"),(0,i.kt)("p",null,"Les m\xe9thodes de d\xe9pendance d\xe9crites ci-dessus reposent sur des r\xe9f\xe9rentiels Pub. Cependant, nous pouvons \xe9galement compter sur des packages locaux et des r\xe9f\xe9rentiels git."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"D\xe9pendance aux forfaits locaux"),(0,i.kt)("p",{parentName:"li"},"Si nous d\xe9veloppons un package localement, nomm\xe9 pkg1, nous pouvons en d\xe9pendre en proc\xe9dant comme suit."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"d\xe9pendances :\n    pkg1 :\n        chemin : ... /... /code/pkg1\n")),(0,i.kt)("p",{parentName:"li"},"Les chemins peuvent \xeatre relatifs ou absolus.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"D\xe9pendance \xe0 Git\xa0: vous pouvez \xe9galement d\xe9pendre de packages stock\xe9s dans un r\xe9f\xe9rentiel Git. Si le package se trouve \xe0 la racine du r\xe9f\xe9rentiel, utilisez la syntaxe suivante"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"d\xe9pendances :\n  pkg1 :\n    git :\n      url : git://github.com/xxx/pkg1.git\n")),(0,i.kt)("p",{parentName:"li"},"Ce qui pr\xe9c\xe8de suppose que le package se trouve dans le r\xe9pertoire racine du r\xe9f\xe9rentiel Git. Si ce n'est pas le cas, vous pouvez sp\xe9cifier un emplacement relatif \xe0 l'aide du param\xe8tre path, par exemple"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"d\xe9pendances\xa0:\n  package1\xa0:\n    git\xa0:\n      url\xa0: git://github.com/flutter/packages.git\n      chemin\xa0: packages/package1\n")))),(0,i.kt)("p",null,"Ces d\xe9pendances d\xe9crites ci-dessus sont couramment utilis\xe9es dans le d\xe9veloppement Flutter, mais il existe d'autres d\xe9pendances, dont le lecteur peut voir le contenu complet par lui-m\xeame : ",(0,i.kt)("a",{parentName:"p",href:"https://www.dartlang.org/tools/pub/dependencies"},"https://www.dartlang.org/tools/pub/dependencies"),"."),(0,i.kt)("h2",{id:"sommaire"},"Sommaire"),(0,i.kt)("p",null,"Cette section d\xe9crit le processus global de gestion, de r\xe9f\xe9rencement et de t\xe9l\xe9chargement des packages dans Flutter, et nous expliquerons comment d\xe9velopper et distribuer nos propres packages dans les chapitres suivants. ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Traduit avec ",(0,i.kt)("a",{parentName:"em",href:"http://www.DeepL.com/Translator"},"www.DeepL.com/Translator")," (version gratuite)"))),(0,i.kt)("h1",{id:"gestion-des-packages-1"},"Gestion des packages"),(0,i.kt)("p",null,"YAML est un format de fichier intuitif, hautement lisible et lisible par l'homme, sa syntaxe est simple et tr\xe8s facile \xe0 analyser par rapport \xe0 xml ou Json, donc YAML est souvent utilis\xe9 pour les fichiers de configuration, Flutter utilise \xe9galement des fichiers yaml comme fichiers de configuration. le fichier de configuration par d\xe9faut pour les projets Flutter est ",(0,i.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),", regardons un exemple simple."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"nom : flutter_in_action\ndescription : Premi\xe8re application Flutter.\n\nversion : 1.0.0+1\n\nd\xe9pendances :\n  flutter :\n    sdk : flutter\n  cupertino_icons : ^0.1.2\n\ndev_dependencies :\n  flutter_test :\n    sdk : flutter\n\nflutter :\n  uses-material-design : true\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nom"),": le nom de l'application ou du package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": description, pr\xe9sentation de l'application ou du package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version"),": num\xe9ro de version de l'application ou du package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"d\xe9pendances"),": autres packages ou plugins dont d\xe9pend l'application ou le package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dev_dependencies"),"\xa0: les kits d'outils dont d\xe9pend l'environnement de d\xe9veloppement (et non les packages dont d\xe9pend l'application flutter elle-m\xeame)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flutter"),": options de configuration li\xe9es au flutter.")),(0,i.kt)("p",null,"Si notre application Flutter elle-m\xeame d\xe9pend d'un package, nous devons ajouter le package d\xe9pendant sous ",(0,i.kt)("inlineCode",{parentName:"p"},"d\xe9pendances"),", nous montrerons ensuite comment ajouter, t\xe9l\xe9charger et utiliser des packages tiers avec un exemple."),(0,i.kt)("h2",{id:"r\xe9f\xe9rentiel-de-pub-1"},"R\xe9f\xe9rentiel de pub"),(0,i.kt)("p",null,"Pub (",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/"},"https://pub.dev/")," ) est le d\xe9p\xf4t officiel de Google pour ",(0,i.kt)("strong",{parentName:"p"},"Dart Packages"),"."),(0,i.kt)("h2",{id:"exemple-1"},"Exemple"),(0,i.kt)("p",null,'Ensuite, nous impl\xe9mentons un widget qui affiche des cha\xeenes al\xe9atoires. il existe un package open source appel\xe9 "english_words" qui contient des milliers de mots anglais courants et quelques fonctions utiles. Nous trouvons d\'abord le paquet "english_words" sur pub (illustr\xe9 \xe0 la figure 2-5), d\xe9terminons son dernier num\xe9ro de version et s\'il prend en charge Flutter.'),(0,i.kt)("p",null,"! ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Malaaaa/cloudimage/master/2-5.png"},"Illustration 2-5")),(0,i.kt)("p",null,'Nous voyons que la derni\xe8re version du package "english_words" est la 3.1.3 et qu\'elle prend en charge le flutter.'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'ajoutez "english_words" (version 3.1.3) \xe0 la liste des d\xe9pendances, comme suit.'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  flutter:\n    sdk: flutter\n\n  cupertino_icons: ^0.1.0\n  # Nouvelles d\xe9pendances ajout\xe9es\n  \xa0: ^3.1.3\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"T\xe9l\xe9chargez le package. Lorsque vous affichez pubspec.yaml dans la vue de l'\xe9diteur d'Android Studio (Figure 2-6), cliquez sur ",(0,i.kt)("strong",{parentName:"p"},"Packages get")," dans le coin sup\xe9rieur droit."),(0,i.kt)("p",{parentName:"li"},"! ",(0,i.kt)("a",{parentName:"p",href:"https://pcdn.flutterchina.club/imgs/2-6.png"},"Figure 2-6")),(0,i.kt)("p",{parentName:"li"},"Cela installera les packages de d\xe9pendance sur votre projet. Nous pouvons voir ce qui suit dans la console."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'flutter packages get\nEx\xe9cution de "flutter packages get" dans flutter_in_action...\nProcessus termin\xe9 avec le code de sortie 0\n')),(0,i.kt)("p",{parentName:"li"},"Nous pouvons \xe9galement t\xe9l\xe9charger les d\xe9pendances \xe0 partir de la console en localisant le r\xe9pertoire du projet actuel et en ex\xe9cutant manuellement la commande ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter packages get"),". Notez \xe9galement la diff\xe9rence entre ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"dev_dependencies"),", les anciennes d\xe9pendances seront compil\xe9es dans le cadre du code source de l'application pour g\xe9n\xe9rer le programme d'installation final. Ces derni\xe8res d\xe9pendances ne sont utilis\xe9es que comme certaines bo\xeetes \xe0 outils dans la phase de d\xe9veloppement, principalement pour nous aider \xe0 am\xe9liorer l'efficacit\xe9 du d\xe9veloppement et des tests, comme le package de test d'automatisation de Flutter, etc.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"introduisez le package ",(0,i.kt)("inlineCode",{parentName:"p"},"english_words"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"importer 'paquet:mots_anglais/mots_anglais.dart'\xa0;\n")),(0,i.kt)("p",{parentName:"li"},"Lors de l'importation, Android Studio proposera automatiquement des options sugg\xe9r\xe9es pour l'importation de la biblioth\xe8que. La ligne de code sera gris\xe9e apr\xe8s l'importation, indiquant que la biblioth\xe8que import\xe9e n'est pas encore utilis\xe9e. 4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Utilisez le package ",(0,i.kt)("inlineCode",{parentName:"p"},"english_words")," pour g\xe9n\xe9rer des cha\xeenes al\xe9atoires."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class RandomWordsWidget extend StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n   // G\xe9n\xe9rer des cha\xeenes al\xe9atoires\n    final wordPair = new WordPair.random();\n    return Padding(\n      padding: const EdgeInsets.all(8.0),\n      child: new Text(wordPair.toString()),\n    );\n  }\n}\n")),(0,i.kt)("p",{parentName:"li"},"   Nous ajoutons ",(0,i.kt)("inlineCode",{parentName:"p"},"RandomWordsWidget")," au widget enfant de ",(0,i.kt)("inlineCode",{parentName:"p"},"Column")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"_MyHomePageState.build"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"Colonne(\n  mainAxisAlignment\xa0: MainAxisAlignment.center,\n  enfants\xa0: <Widget>[\n    RandomWordsWidget(),\n  ],\n)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Si l'application est en cours d'ex\xe9cution, utilisez le bouton Hot Reload (ic\xf4ne \u26a1\ufe0f) pour mettre \xe0 jour l'application en cours d'ex\xe9cution. Chaque fois que vous cliquez sur Hot Reload ou Save Item, une paire de mots diff\xe9rente est s\xe9lectionn\xe9e au hasard dans l'application en cours d'ex\xe9cution. En effet, les paires de mots sont g\xe9n\xe9r\xe9es dans la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"build"),". La m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," est ex\xe9cut\xe9e chaque fois qu'une mise \xe0 jour \xe0 chaud est effectu\xe9e et s'ex\xe9cute comme illustr\xe9 \xe0 la Figure 2-7."),(0,i.kt)("p",{parentName:"li"},"! ",(0,i.kt)("a",{parentName:"p",href:"https://pcdn.flutterchina.club/imgs/2-7.png"},"Illustration 2-7")))),(0,i.kt)("h2",{id:"autres-m\xe9thodes-de-d\xe9pendance-1"},"Autres m\xe9thodes de d\xe9pendance"),(0,i.kt)("p",null,"Les m\xe9thodes de d\xe9pendance d\xe9crites ci-dessus reposent sur des r\xe9f\xe9rentiels Pub. Cependant, nous pouvons \xe9galement compter sur des packages locaux et des r\xe9f\xe9rentiels git."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"D\xe9pendance aux forfaits locaux"),(0,i.kt)("p",{parentName:"li"},"Si nous d\xe9veloppons un package localement, nomm\xe9 pkg1, nous pouvons en d\xe9pendre en proc\xe9dant comme suit."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"d\xe9pendances :\n    pkg1 :\n        chemin : ... /... /code/pkg1\n")),(0,i.kt)("p",{parentName:"li"},"Les chemins peuvent \xeatre relatifs ou absolus.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"D\xe9pendance \xe0 Git\xa0: vous pouvez \xe9galement d\xe9pendre de packages stock\xe9s dans un r\xe9f\xe9rentiel Git. Si le package se trouve \xe0 la racine du r\xe9f\xe9rentiel, utilisez la syntaxe suivante"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"d\xe9pendances :\n  pkg1 :\n    git :\n      url : git://github.com/xxx/pkg1.git\n")),(0,i.kt)("p",{parentName:"li"},"Ce qui pr\xe9c\xe8de suppose que le package se trouve dans le r\xe9pertoire racine du r\xe9f\xe9rentiel Git. Si ce n'est pas le cas, vous pouvez sp\xe9cifier un emplacement relatif \xe0 l'aide du param\xe8tre path, par exemple"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"d\xe9pendances\xa0:\n  package1\xa0:\n    git\xa0:\n      url\xa0: git://github.com/flutter/packages.git\n      chemin\xa0: packages/package1\n")))),(0,i.kt)("p",null,"Ces d\xe9pendances d\xe9crites ci-dessus sont couramment utilis\xe9es dans le d\xe9veloppement Flutter, mais il existe d'autres d\xe9pendances, dont le lecteur peut voir le contenu complet par lui-m\xeame : ",(0,i.kt)("a",{parentName:"p",href:"https://www.dartlang.org/tools/pub/dependencies"},"https://www.dartlang.org/tools/pub/dependencies"),"."),(0,i.kt)("h2",{id:"sommaire-1"},"Sommaire"),(0,i.kt)("p",null,"Cette section d\xe9crit le processus global de gestion, de r\xe9f\xe9rencement et de t\xe9l\xe9chargement des packages dans Flutter, et nous expliquerons comment d\xe9velopper et distribuer nos propres packages dans les chapitres suivants."))}m.isMDXComponent=!0}}]);