"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[809],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3852:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],l={},o="Resource Management",p={unversionedId:"Flutter/ResourceM",id:"Flutter/ResourceM",title:"Resource Management",description:"The Flutter APP installer will contain both code and assets (resources). assets are packaged into the application installer and can be accessed at runtime. Common types of assets include static data (e.g. JSON files), configuration files, icons and images (JPEG, WebP, GIF, animated WebP / GIF, PNG, BMP and WBMP), etc.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/Flutter/ResourceM.md",sourceDirName:"Flutter",slug:"/Flutter/ResourceM",permalink:"/zh-CN/docs/Flutter/ResourceM",editUrl:"https://github.com/Malaaaa/blog-sample/tree/main/docs/Flutter/ResourceM.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Package Management",permalink:"/zh-CN/docs/Flutter/Package"},next:{title:"Flutter Route Management",permalink:"/zh-CN/docs/Flutter/Route"}},c=[{value:"Specifying assets",id:"specifying-assets",children:[],level:2},{value:"Asset variants",id:"asset-variants",children:[],level:2},{value:"Loading assets",id:"loading-assets",children:[{value:"Loading text assets",id:"loading-text-assets",children:[],level:3},{value:"Loading images",id:"loading-images",children:[{value:"declares resolution-dependent images assets",id:"declares-resolution-dependent-images-assets",children:[],level:4},{value:"Loading images",id:"loading-images-1",children:[],level:4},{value:"Resource images in dependency packages",id:"resource-images-in-dependency-packages",children:[{value:"hits the assets in the package",id:"hits-the-assets-in-the-package",children:[],level:5}],level:4}],level:3},{value:"Platform-specific assets",id:"platform-specific-assets",children:[{value:"set app icon",id:"set-app-icon",children:[],level:4},{value:"Update startup page",id:"update-startup-page",children:[{value:"Android",id:"android",children:[],level:5},{value:"iOS",id:"ios",children:[],level:5}],level:4}],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"resource-management"},"Resource Management"),(0,r.kt)("p",null,"The Flutter APP installer will contain both code and assets (resources). assets are packaged into the application installer and can be accessed at runtime. Common types of assets include static data (e.g. JSON files), configuration files, icons and images (JPEG, WebP, GIF, animated WebP / GIF, PNG, BMP and WBMP), etc."),(0,r.kt)("h2",{id:"specifying-assets"},"Specifying assets"),(0,r.kt)("p",null,"Like package management, Flutter uses the ",(0,r.kt)("a",{parentName:"p",href:"https://www.dartlang.org/tools/pub/pubspec"},(0,r.kt)("inlineCode",{parentName:"a"},"pubspec.yaml"))," file to manage the resources required by the application, as an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"flutter:\n  assets:\n    - assets/my_icon.png\n    - assets/background.png\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"assets")," specifies the files that should be included in the application, and each asset identifies its own path by the file system path relative to where the ",(0,r.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," file is located. The order in which the assets are declared is irrelevant, and the actual directory of the assets can be any folder (in this case, the assets folder)."),(0,r.kt)("p",null,"During the build, Flutter places assets into special archives called ",(0,r.kt)("em",{parentName:"p"},"asset bundles"),", which can be read (but not modified) by the application at runtime."),(0,r.kt)("h2",{id:"asset-variants"},"Asset variants"),(0,r.kt)("p",null,'The build process supports the concept of "asset variants": different versions of an asset may be displayed in different contexts. When specifying an asset path in the assets section of ',(0,r.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),", the build process looks for any files with the same name in adjacent subdirectories. These files are then included in the asset bundle along with the specified asset."),(0,r.kt)("p",null,"For example, if the application directory has the following files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},".../pubspec.yaml"),(0,r.kt)("li",{parentName:"ul"},".../graphics/my_icon.png"),(0,r.kt)("li",{parentName:"ul"},".../graphics/background.png"),(0,r.kt)("li",{parentName:"ul"},".../graphics/dark/background.png"),(0,r.kt)("li",{parentName:"ul"},"...etc.")),(0,r.kt)("p",null,"Then the ",(0,r.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," file should only contain :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flutter:\n  assets:\n    - graphics/background.png\n")),(0,r.kt)("p",null,"Then both ",(0,r.kt)("inlineCode",{parentName:"p"},"graphics/background.png")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"graphics/dark/background.png")," will be included in your asset bundle. The former is considered the ",(0,r.kt)("em",{parentName:"p"},"main asset")," and the latter is considered a variant."),(0,r.kt)("p",null,"Flutter uses asset variants when selecting images that match the current device resolution (see below), and in the future, Flutter may extend this mechanism to localization, reading tips, etc."),(0,r.kt)("h2",{id:"loading-assets"},"Loading assets"),(0,r.kt)("p",null,"Your application can access its assets via the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/services/AssetBundle-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"AssetBundle"))," object. There are two main methods that allow loading string or image (binary) files from the Asset bundle."),(0,r.kt)("h3",{id:"loading-text-assets"},"Loading text assets"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Loading via the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.flutter.io/flutter/services/rootBundle.html"},(0,r.kt)("inlineCode",{parentName:"a"},"rootBundle"))," object: Each Flutter application has a ","[",(0,r.kt)("inlineCode",{parentName:"li"},"rootBundle"),"]","(",(0,r.kt)("a",{parentName:"li",href:"https://docs"},"https://docs"),". flutter.io/flutter/services/rootBundle.html) object, through which you can easily access the main resource package and load the asset directly using the global static ",(0,r.kt)("inlineCode",{parentName:"li"},"rootBundle")," object in ",(0,r.kt)("inlineCode",{parentName:"li"},"package:flutter/services.dart"),"."),(0,r.kt)("li",{parentName:"ul"},"Loading via ",(0,r.kt)("a",{parentName:"li",href:"https://docs.flutter.io/flutter/widgets/DefaultAssetBundle-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"DefaultAssetBundle")),": It is recommended to use ",(0,r.kt)("a",{parentName:"li",href:"https://docs.flutter.io/flutter/widgets/DefaultAssetBundle-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"DefaultAssetBundle"))," to get the AssetBundle for the current BuildContext. Instead of using the default asset bundle built by the application, this method Instead, it makes a different AssetBundle that the parent widget dynamically replaces at runtime, which is useful for localization or testing scenarios.")),(0,r.kt)("p",null,"Typically, assets (e.g. JSON files) can be loaded indirectly at application runtime using ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultAssetBundle.of()`'', while they can be loaded directly using"),"rootBundle",(0,r.kt)("inlineCode",{parentName:"p"},"'' outside of the widget context, or when other ``AssetBundle"),"' handles are not available, e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'dart:async' show Future;\nimport 'package:flutter/services.dart' show rootBundle;\n\nFuture<String> loadAsset() async {\n  return await rootBundle.loadString('assets/config.json');\n}\n")),(0,r.kt)("h3",{id:"loading-images"},"Loading images"),(0,r.kt)("p",null,"Similar to native development, Flutter can load images for the current device at a resolution appropriate for it."),(0,r.kt)("h4",{id:"declares-resolution-dependent-images-assets"},"declares resolution-dependent images assets"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/painting/AssetImage-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"AssetImage"))," can logically map an asset's request to the asset closest to the current device's pixel ratio (dpi). For this mapping to work, it must Save the asset according to a specific directory structure."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},".../image.png"),(0,r.kt)("li",{parentName:"ul"},".../*M**x/image.png"),(0,r.kt)("li",{parentName:"ul"},".../*N**x/image.png"),(0,r.kt)("li",{parentName:"ul"},"...etc.")),(0,r.kt)("p",null,"where M and N are numeric identifiers that correspond to the resolution of the images contained therein, i.e. they specify images of different device pixel ratios."),(0,r.kt)("p",null,"The main resource corresponds by default to a 1.0x resolution image. Look at an example."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},".../my_icon.png"),(0,r.kt)("li",{parentName:"ul"},".../2.0x/my_icon.png"),(0,r.kt)("li",{parentName:"ul"},".../3.0x/my_icon.png")),(0,r.kt)("p",null,"On devices with a device pixel ratio of 1.8, ",(0,r.kt)("inlineCode",{parentName:"p"},"... /2.0x/my_icon.png")," will be selected. For a device pixel ratio of 2.7, ",(0,r.kt)("inlineCode",{parentName:"p"},"... /3.0x/my_icon.png")," will be selected."),(0,r.kt)("p",null,"If the width and height of the rendered image are not specified on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," widget, then the ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," widget will occupy the same screen space size as the main resource. That is, if ",(0,r.kt)("inlineCode",{parentName:"p"},"... /my_icon.png")," is 72px by 72px, then ",(0,r.kt)("inlineCode",{parentName:"p"},"... /3.0x/my_icon.png")," should be 216px by 216px; but if width and height are not specified, they will both render as 72 pixels by 72 pixels (in logical pixels)."),(0,r.kt)("p",null,"Each item in the asset section of ",(0,r.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," should correspond to the actual file, except for the main resource item. When a resource is missing from the main resource, it will be selected in descending order of resolution, i.e. if it is not in 1x, it will be found in 2x, and if it is not in 2x, it will be found in 3x."),(0,r.kt)("h4",{id:"loading-images-1"},"Loading images"),(0,r.kt)("p",null,"To load an image, you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/painting/AssetImage-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"AssetImage"))," class. For example, we can load a background image from the asset declaration above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Widget build(BuildContext context) {\n  return new DecoratedBox(\n    decoration: new BoxDecoration(\n      image: new DecorationImage(\n        image: new AssetImage('graphics/background.png'),\n      ),\n    ),\n  );\n}\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"AssetImage")," is not a widget, it's actually an ",(0,r.kt)("inlineCode",{parentName:"p"},"ImageProvider"),", and there are times when you might expect to get a widget that displays an image directly, then you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Image.asset()")," method, e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Widget build(BuildContext context) {\n  return Image.asset('graphics/background.png');\n}\n")),(0,r.kt)("p",null,"When loading resources using the default asset bundle, the resolution, etc. is automatically handled internally, and this handling is not perceptible to the developer. (If you use some lower-level classes like ",(0,r.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/painting/ImageStream-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ImageStream"))," or ","[",(0,r.kt)("inlineCode",{parentName:"p"},"ImageCache"),"]","(",(0,r.kt)("a",{parentName:"p",href:"https://docs"},"https://docs"),". flutter.io/flutter/painting/ImageCache-class.html) you will notice that there are parameters related to scaling)"),(0,r.kt)("h4",{id:"resource-images-in-dependency-packages"},"Resource images in dependency packages"),(0,r.kt)("p",null,"To load an image from a dependency package, you must give ",(0,r.kt)("inlineCode",{parentName:"p"},"AssetImage")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"package")," parameter."),(0,r.kt)("p",null,'For example, suppose your application depends on a package named "my_icons" with the following directory structure.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},".../pubspec.yaml"),(0,r.kt)("li",{parentName:"ul"},".../icons/heart.png"),(0,r.kt)("li",{parentName:"ul"},".../icons/1.5x/heart.png"),(0,r.kt)("li",{parentName:"ul"},".../icons/2.0x/heart.png"),(0,r.kt)("li",{parentName:"ul"},"...etc.")),(0,r.kt)("p",null,"Then load the image, using :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"}," new AssetImage('icons/heart.png', package: 'my_icons')\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"new Image.asset('icons/heart.png', package: 'my_icons')\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: package should also be obtained by adding the ",(0,r.kt)("inlineCode",{parentName:"strong"},"package")," parameter when using its own resources"),"."),(0,r.kt)("h5",{id:"hits-the-assets-in-the-package"},"hits the assets in the package"),(0,r.kt)("p",null,"If an expected resource is declared in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," file, it will be packed into the corresponding package. In particular, the resources used by the package itself must be specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),"."),(0,r.kt)("p",null,"Packages may also choose to include resources in their ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/")," folders that are not declared in their ",(0,r.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," files. In this case, for the images to be packaged, the application must specify in ",(0,r.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," which images to include. For example, a package named ",(0,r.kt)("inlineCode",{parentName:"p"},"fancy_backgrounds")," might contain the following files."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},".../lib/backgrounds/background1.png"),(0,r.kt)("li",{parentName:"ul"},".../lib/backgrounds/background2.png"),(0,r.kt)("li",{parentName:"ul"},".../lib/backgrounds/background3.png")),(0,r.kt)("p",null,"To include the first image, it must be declared in the assets section of ",(0,r.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flutter:\n  assets:\n    - packages/fancy_backgrounds/backgrounds/background1.png\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lib/")," is implicit, so it should not be included in the asset path."),(0,r.kt)("h3",{id:"platform-specific-assets"},"Platform-specific assets"),(0,r.kt)("p",null,"The above resources are all in the flutter application, these resources can only be used after the Flutter framework is running, if we want to set app icons or add startup images to our application, then we must use platform specific assets."),(0,r.kt)("h4",{id:"set-app-icon"},"set app icon"),(0,r.kt)("p",null,"Updating the Flutter app launch icon is done in the same way as updating the launch icon in a native Android or iOS app."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Android"),(0,r.kt)("p",{parentName:"li"},"In the root directory of the Flutter project, navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"... /android/app/src/main/res")," directory, which contains various resource folders (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"mipmap-hdpi"),' already contains the placeholder image "ic_launcher.png", see Figure 2-8). Just follow the instructions in the ',(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/practices/ui_guidelines/icon_design_launcher.html#size"},"Android Developer's Guide")," to replace them with the required resources, and observe recommended icon size standards for each screen density (dpi)."),(0,r.kt)("p",{parentName:"li"},"! ",(0,r.kt)("a",{parentName:"p",href:"https://pcdn.flutterchina.club/imgs/2-8.png"},"Figure 2-8")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," If you rename the .png file, the name must also be updated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"android:icon")," attribute of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<application>")," tag of your ",(0,r.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"iOS"),(0,r.kt)("p",{parentName:"li"},"In the root directory of your Flutter project, navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"... /ios/Runner"),". The directory ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets.xcassets/AppIcon.appiconset")," already contains placeholder images (see Figure 2-9), just replace them with appropriately sized images, keeping the original file names."),(0,r.kt)("p",{parentName:"li"},"! ",(0,r.kt)("a",{parentName:"p",href:"https://pcdn.flutterchina.club/imgs/2-9.png"},"Figure 2-9")))),(0,r.kt)("h4",{id:"update-startup-page"},"Update startup page"),(0,r.kt)("p",null,"! ",(0,r.kt)("a",{parentName:"p",href:"https://pcdn.flutterchina.club/imgs/2-10.png"},"Figure 2-10")),(0,r.kt)("p",null,"When the Flutter framework is loaded, Flutter draws the startup page using the native platform mechanism. This startup page will last until the first frame of the application is rendered by Flutter."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," This means that if you don't call the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/widgets/runApp.html"},"runApp")," function in the application's ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," method (or more specifically, if you don't call ","[",(0,r.kt)("inlineCode",{parentName:"p"},"window.render"),"]"," (",(0,r.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/dart-ui/Window/render.html"},"https://docs.flutter.io/flutter/dart-ui/Window/render.html"),") to respond to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/dart-ui/"},(0,r.kt)("inlineCode",{parentName:"a"},"window.onDrawFrame"))," Window/onDrawFrame.html)), the start screen will always be displayed.")),(0,r.kt)("h5",{id:"android"},"Android"),(0,r.kt)("p",null,"To add the splash screen to your Flutter application, navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"... /android/app/src/main"),". In ",(0,r.kt)("inlineCode",{parentName:"p"},"res/drawable/launch_background.xml"),", customize the launch screen with a custom drawable (you can also just change an image)."),(0,r.kt)("h5",{id:"ios"},"iOS"),(0,r.kt)("p",null,"To add an image to the center of the launch screen (splash screen), navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"... /ios/Runner"),". In ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets.xcassets/LaunchImage.imageset"),", drag in the image and name it ",(0,r.kt)("inlineCode",{parentName:"p"},"LaunchImage.png"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LaunchImage@2x.png"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LaunchImage@3x.png"),". If you use a different file name, then you must also update the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contents.json")," file in the same directory, and check Apple's official standards for the exact size of the image."),(0,r.kt)("p",null,"You can also fully customize the storyboard by opening Xcode, navigating to ",(0,r.kt)("inlineCode",{parentName:"p"},"Runner/Runner")," in Project Navigator and dragging in images by opening ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets.xcassets"),", or by using the Interface Builder for customization, as shown in Figure 2-11."),(0,r.kt)("p",null,"! ",(0,r.kt)("a",{parentName:"p",href:"https://pcdn.flutterchina.club/imgs/2-11.png"},"Figure 2-11")))}u.isMDXComponent=!0}}]);