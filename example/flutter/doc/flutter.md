## Flutter入门


[TOC]



## 目标

- 认识Flutter
- 掌握Flutter的环境搭建
- 认识Flutter的构成



## 认识Flutter


###什么是Flutter

​	Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。 Flutter可以与现有的代码一起工作。在全世界，Flutter正在被越来越多的开发者和组织使用，并且Flutter是完全免费、开源的。

口号：

**Beautiful native apps in record time**



### 里程碑节点

- 2014.10 - Flutter的前身Sky在GitHub上开源

- 2015.10 - 经过一年的开源，Sky正式改名为Flutter

  Flutter第一次亮相于2015年5月Dart开发者峰会上，初始名字叫做“Sky”，后更名为Flutter，Flutter使用Dart语言开发，Dart是Google于2011年推出的新的计算机编程语言。

- 2017.5 - Google I/O正式向外界公布了Flutter，这个时候Flutter才正式进去大家的视野

- 2018年2月，Flutter推出了第一个Beta版本

- 在2018年12月5日，Flutter1.0版本发布

  2018.6.21 - Google发布Flutter首个release预览版

![img](https://img2.mukewang.com/5b6a663e00012dbe06660494.jpg)

- 2019.2 - Flutter1.2发布主要增加对web的支持

- 2019.5.7 - Flutter 也发布了 1.5 版。此版本的最大更新是新加入对 Web 端的支持，即 Flutter for Web。(2019.05.10 Hummingbird 项目已改名为 Flutter for Web，将 Flutter 的 Dart 代码直接编译为 JavaScript，在底层使用 HTML/CSS/Canvas 等实现了一个新的引擎，使得 Flutter 项目可以输出为 Web 应用，案例：https://flutter.github.io/samples/)




  **Flutter正式成为了一个全平台框架**







  Flutter 桌面端也在开发中，虽然还不适用于生产环境，但底层引擎已基本成型，有待进一步整合

  Flutter 也可以嵌入智能设备，通过构建自定义的 [Flutter Engine 4](https://github.com/flutter/flutter/wiki/Custom-Flutter-Engine-Embedders)，Flutter 应用可以运行在智能显示屏等现代智能设备中，Google 自己的硬件产品 Google Home Hub 等就是通过这种方式使用 Flutter





## 热门问答

### Flutter和React-Native有什么不同？

- **多平台支持**

  RN目前支持iOS和Android两个平台

  flutter早期支持iOS和Android，desktop的支持目前尚不完善。近期的更新支持了web,Embedded

  从多平台支持的角度看，两边差距挺大，但目前都是不怎么可用状态。

- **工具链**

  RN在打包发布方面有被前端广泛使用的webpack支持，官方自己提供了基于浏览器的debug工具，与前端同学管用的调试方式并无二致。

  flutter基于iOS和Android已有的打包工具添加了flutter产物打包功能，同样debug工具也由官方自己提供，除了刚发布的基于浏览器的调试工具外，flutter团队提供的调试工具可以直接在Android Studio或者VScode这类IDE上直接使用。

- **热更新**

  RN支持且有多套热更新方案

  Flutter目前还没有，不过code push方案正在研发当中，相信不久以后就会出来？？？？？

- **调试便利性**

  JS的调试方式已经很成熟了，这里不多做展开。

  flutter在debug阶段可以使用集成于IDE插件中的hot reload功能做到亚秒级的新代码加载速度，十分适合与设计师坐在一起结(ya)对(li)编(tiao)程(shi) ：）

- **第三方库**

  在RN上你可以使用JS的大部分库，平台相关的plugin也相对丰富。

  flutter在这方面稍显欠缺，库的数量上无法与JS生态相比较。flutter/plugins项目提供了大量的平台相关插件供开发者使用，倒也是满足了日常开发的需求，另外dart pubs上的公开库数量也日趋上升。

  在混合开发和大型app业务框架上，闲鱼技术开源的flutter_boost提供了与native混合开发的可能，而fish_redux使得大型app中的复杂页面的开发在flutter中变得更加容易。

- **发展趋势**

  RN是个很好的项目，在发布之初给移动开发带来了一阵旋风。但不得不说，Airbnb宣布放弃使用RN技术栈对于整个社区有不小的打击，18年下半年也对外官宣了准备大的改革。

  flutter在1.0发布之后趋于成熟，被钦定为Google Fuchsia系统的应用层框架。从团队2019 roadmap中可以看到，flutter当前重点在于完善一些现有功能上的细节与bugfix，另外对于广受期待的动态化特性，flutter团队也在开发code push功能。从flutter团队目前的方向和笔者在闲鱼开发中实际使用的flutter的感受来看，整体上flutter在框架层面目前已经基本上稳定。



### Flutter用什么语言开发？

我们研究了很多语言和运行时，最终采用了Dart作为开发框架和widget的语言。底层图形框架和Dart虚拟机在C /C++中实现。





### 学习Flutter需要哪些必备知识？

- Dart语言基础

- Flutter对熟悉面向对象概念（类、方法、变量等）和命令式编程概念（循环、条件等）的程序员来说是很容易入门的。学习和使用Flutter，无需事先具有移动开发经验。 我们已经看到了一些不怎么有编程经验的人学习并使用Flutter进行原型设计和应用程序开发。
- Java和android相关开发经验(非必须，有的话更好)



### 我在哪里可以获得Flutter学习资源？

- [Flutter中文网](https://flutterchina.club/)
- 掘金社区：<https://juejin.im/tag/Flutter>
- stackoverflow：<https://stackoverflow.com/questions/tagged/flutter>
- Flutter Codelabs: https://codelabs.flutter-io.cn/codelabs/#codelabs
- 案例学习：在安卓FlutterSDK的目录里，就有Flutter官方准备的精美案例，可以打开观看源码学习
- 云社区：https://cloud.tencent.com/developer/column/6114



### Dart语言好学吗?

如果你有编程经验，尤其是了解Java或Javascript, 那么你回发现Dart学习起来非常容易



###我在哪里可以获得Dart学习资源

- Dart官网:<https://www.dartlang.org/>
- Dart中文官网：<http://dart.goodev.org/>
- [Flutter中文网](https://flutterchina.club/)
- 掘金社区Dart专栏：https://juejin.im/search?query=Dart&type=all
- 优质博客：https://juejin.im/post/5c44727df265da611c274087
- 新闻资讯：https://www.dart-china.org/



## Flutter特点

- 快速开发

由于Flutter选用了Dart作为其开发语言，Dart既可以是AOT（Ahead Of Time）编译，也可以是JIT（Just In Time）编译，其JIT编译的特性使Flutter在开发阶段可以达到亚秒级有状态热重载，从而大大提升了开发效率。

- 性能优越

使用自带的高性能渲染引擎（Skia）进行自绘，渲染速度和用户体验堪比原生。

- 富有表现力的精美UI

Flutter内置众多精美的Material Design和Cupertino（iOS风格）小部件，开发者可快速构建精美的用户界面，以提供更好的用户体验。

- Everything is Widget

在Flutter中用Widget来描述界面，Widget只是View的“配置信息”，编写的时候利用Dart语言一些声明式特性来得到类似结构化标记语言的可读性。Widget根据布局形成一个层次结构。每个widget嵌入其中，并继承其父项的属性。没有单独的“应用程序”对象，相反，根widget扮演着这个角色。在Flutter中，一切皆为Widget，甚至包括css样式。



## Flutter框架

Flutter系统架构图



如上图所示为Flutter官方给出的系统架构图，可以看出Flutter框架分为三层：Framework层、Engine层和Embedder层。

- Framework层：由Dart来实现，包含众多安卓Material风格和iOS Cupertino风格的Widgets小部件，还有渲染、动画、绘图和手势等。Framework包含日常开发所需要的大量API，普通应用开发熟悉这些API的使用基本OK了，不过很多特殊场景的控件需要自己根据实际情况进行自定义。Framework层的源码地址：<https://github.com/flutter/flutter/tree/master/packages/flutter/lib>
- Engine层：由C/C++实现，是Flutter的核心引擎，主要包括Skia图形引擎、Dart运行时环境Dart VM、Text文本渲染引擎等；如果想深入了解Flutter原理，建议阅读该层的源代码。源代码地址：<https://github.com/flutter/engine>
- Embedder层：主要处理一些平台相关的操作，如渲染Surface设置、本地插件、打包、线程设置等。



## Flutter原理

无论是iOS还是安卓都是提供一个平台的View给Flutter层，页面内容渲染交由Flutter层自身来完成，所以其相对React Native等框架性能更好。Flutter中图形渲染流程：



大致流程如下：

1. GPU的Vsync信号同步到UI线程
2. UI线程使用Dart来构建抽象的视图结构
3. 视图结构在GPU线程中进行图层合成
4. 合成后的视图数据提供给Skia图形引擎处理成GPU数据
5. 数据再通过OpenGL或Vulkan提供给GPU进行渲染



### Flutter for Web

Flutter 之所以能够在移动平台上运行，主要是依赖的 Flutter Engine，就是 Flutter 所依赖的运行环境。这就导致在移动平台，只要你使用了 Flutter，哪怕只用混合开发的模式写了一个页面，这也将为你的 App 增大大约 4MB 的体积。

而 Flutter for Web，完全是一种全新的模式，它可以将 Dart 编写的现有 Flutter 代码，编译成可嵌入浏览器并部署到任何 Web 服务器的代码。

编译后的代码，完全是基于 HTML、CSS 和 JavaScript 这些标准的 Web 技术，所以它也不需要任何浏览器插件的支持。

早期微软的 Silverlight 和 Adobe 的 Flash 都证明了，一切需要插件才能支持的 Web 应用，都是纸老虎，最终都会被基础的 HTML 技术所替代。

我想这也是 Flutter for Web 选择这种支持方式的一个考量因素。


1. Flutter_web 的插件还不完善，暂时只提供了最基础的 `dart:html`、`dart:js`、`dart:svg`、`dart:indexed_db`，可以通过他们访问绝大多数浏览器的 API。
2. 并非所有的 Flutter 都在 Flutter_web 上实现了。
3. Flutter_web 编译还很慢。
4. 在桌面浏览器上运行，还有一些不足，大部分是基于移动应用的操作特性，而没有对桌面系统的操作习惯进行特殊的优化。
5. 开发流程目前仅支持 Chrome，Safari。



## 环境搭建

参考Flutter中文网站教程

​	Mac:https://flutterchina.club/setup-macos/

​	Windows:https://flutterchina.club/setup-windows/

​	Linux:https://flutterchina.club/setup-linux/



## 开发工具配置

参考Flutter中文网站教程

​	Android Studio:https://flutterchina.club/get-started/editor/#androidsstudio

​	Vs Code: https://flutterchina.club/get-started/editor/#vscode



## 项目搭建

- 执行flutter doctor，检测环境



  

- 命令行方式创建项目

```
flutter create appName
```

- 打开模拟器

```
open -a Simulator//ios模拟器

//安卓模拟器可以通过AS工具打开
```



- 启动项目：进入项目根目录，执行flutter run




- 编辑器工具创建启动项目
  - Android Studio
  - Vs code



- 项目启动成功后的界面










## Flutter 入门

### 体验Flutter

```Java
import "package:flutter/material.dart";

//void main() => runApp(MyApp()); (=>)符号, 这是Dart中单行函数或方法的简写

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title:'test----',
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            "欢迎来到开课吧"
          )
        ),
        body: Center(
          child:Text(
            "hello Flutter"
          ),
        ),
      ),
    );
  }
}
```

- import引入
- main()，Dart程序需要一个入口函数 就是main
- void 定义不需要返回值
- runApp: Flutter程序的入口函数，接受一个部件widget作为参数
- StatelessWidget是指无状态的部件
- @override 注解，重写Widget build ,返回一个新的widget
- title:该标题出现在
  Android：任务管理器的程序快照之上
  IOS: 程序切换管理器中



## Widget

在**Flutter**程序里，一切皆是Widget，**Flutter 是一套平台无关的 UI 框架**，**Flutter** 开发中一般是通过继承 **无状态 StatelessWidget** 控件或者 **有状态 StatefulWidget 控件**  来实现页面，然后在对应的 **Widget build(BuildContext context) 方法内实现布局，利用不同 Widget 的 child / children 去做嵌套，通过控件的构造方法传递参数，最后对布局里的每个控件设置样式等**



### Widget分类

### 按状态

- StatelessWidget 无状态部件
- StatefulWidget 有状态部件

### 按功能

- 基础类

- 布局类
- 容器类
- ...





### 基础Widget

- Text
  - String 文本内容
  - textAlign
    - TextAlign 对齐方式
  - maxLines 显示几行
  - overflow
    - TextOverflow 文本溢出处理方式
  - style
    - TextStyle
      - fontSize
      - color
      - decoration
        - TextDecoration
      - decorationStyle
        - TextDecorationStyle



### 布局类Widget

布局类Widget都会包含一个或多个子widget，不同的布局类Widget对子widget排版(layout)方式不同

- Row : Row可以在水平方向排列其子widget

  ```Java
  Row({
    ...  
    TextDirection textDirection,    
    MainAxisSize mainAxisSize = MainAxisSize.max,    
    MainAxisAlignment mainAxisAlignment = MainAxisAlignment.start,
    VerticalDirection verticalDirection = VerticalDirection.down,  
    CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.center,
    List<Widget> children = const <Widget>[],
  })
  ```

  

- Column : Column可以在垂直方向排列其子widget





###容器类Widget

```Java
Container({
  this.alignment,
  this.padding, //容器内补白，属于decoration的装饰范围
  Color color, // 背景色
  Decoration decoration, // 背景装饰
  Decoration foregroundDecoration, //前景装饰
  double width,//容器的宽度
  double height, //容器的高度
  BoxConstraints constraints, //容器大小的限制条件
  this.margin,//容器外补白，不属于decoration的装饰范围
  this.transform, //变换
  this.child,
})
```



案例：

```Java
Container(
  margin: EdgeInsets.only(top: 50.0, left: 120.0), //容器外补白
  constraints: BoxConstraints.tightFor(width: 200.0, height: 150.0), //卡片大小
  decoration: BoxDecoration(//背景装饰
      gradient: RadialGradient( //背景径向渐变
          colors: [Colors.red, Colors.orange],
          center: Alignment.topLeft,
          radius: .98
      ),
      boxShadow: [ //阴影
        BoxShadow(
            color: Colors.black54,
            offset: Offset(2.0, 2.0),
            blurRadius: 4.0
        )
      ]
  ),
  transform: Matrix4.rotationZ(.2), //倾斜变换
  alignment: Alignment.center, //文字居中
  child: Text( //文字
    "5.20", style: TextStyle(color: Colors.white, fontSize: 40.0),
  ),
);
```



- Padding:可以给其子节点添加补白（填充)
  - `fromLTRB(double left, double top, double right, double bottom)`：分别指定四个方向的补白。
  - `all(double value)` : 所有方向均使用相同数值的补白。
  - `only({left, top, right ,bottom })`：可以设置具体某个方向的补白(可以同时指定多个方向)。
  - `symmetric({ vertical, horizontal })`：用于设置对称方向的补白，vertical指top和bottom，horizontal指left和right。









### 无状态:StatelessWidget

```dart
import 'package:flutter/material.dart';

///StatelessWidget与基础组件
class LessGroupPage extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    TextStyle textStyle = TextStyle(fontSize: 20);
    return MaterialApp(
      title: 'StatelessWidget与基础组件',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text('StatelessWidget与基础组件'),
          leading: GestureDetector(
            onTap: () {
              Navigator.pop(context);
            },
            child: Icon(Icons.arrow_back),
          ),
        ),
        body: Container(
          decoration: BoxDecoration(color: Colors.white),
          alignment: Alignment.center,
          child: Column(
            children: <Widget>[
              Text(
                'I am Text',
                style: textStyle,
              ),
              Icon(
                Icons.android,
                size: 50,
                color: Colors.red,
              ),
              CloseButton(),
              BackButton(),
              Chip(
                //材料设计中一个非常有趣的小部件，什么是Chip@https://material.io/design/components/chips.html
                avatar: Icon(Icons.people),
                label: Text('StatelessWidget与基组件'),
              ),
              Divider(
                height: 10, //容器高度，不是线的高度
                indent: 10, //左侧间距
                color: Colors.orange,
              ),
              Card(
                //带有圆角，阴影，边框等效果的卡片
                color: Colors.blue,
                elevation: 5,
                margin: EdgeInsets.all(10),
                child: Container(
                  padding: EdgeInsets.all(10),
                  child: Text(
                    'I am Card',
                    style: textStyle,
                  ),
                ),
              ),
              AlertDialog(
                title: Text('开课吧'),
                content: Text('Flutter'),
              )
            ],
          ),
        ),
      ),
    );
  }
}
```



### 有状态：StatefulWidget与基础组件

```dart
import 'package:flutter/material.dart';

///StatefulWidget与基础组件

void main()=> runApp(StatefulGroup());



class StatefulGroup extends StatefulWidget {
  @override
  _StatefulGroupState createState() => _StatefulGroupState();
}

class _StatefulGroupState extends State<StatefulGroup> {
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    TextStyle textStyle = TextStyle(fontSize: 20);
    return MaterialApp(
      title: 'StatefulWidget与基础组件',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text('StatefulWidget与基础组件'),
          leading: GestureDetector(
            onTap: () {
              Navigator.pop(context);
            },
            child: Icon(Icons.arrow_back),
          ),
        ),
        bottomNavigationBar: BottomNavigationBar(
            currentIndex: _currentIndex,
            onTap: (index) {
              setState(() {
                _currentIndex = index;
              });
            },
            items: [
              BottomNavigationBarItem(
                  icon: Icon(
                    Icons.home,
                    color: Colors.grey,
                  ),
                  activeIcon: Icon(
                    Icons.home,
                    color: Colors.blue,
                  ),
                  title: Text('首页')),
              BottomNavigationBarItem(
                  icon: Icon(
                    Icons.list,
                    color: Colors.grey,
                  ),
                  activeIcon: Icon(
                    Icons.list,
                    color: Colors.blue,
                  ),
                  title: Text('列表'))
            ]),
        floatingActionButton: FloatingActionButton(
          onPressed: null,
          child: Text('点我'),
        ),
        body: _currentIndex == 0
            ? RefreshIndicator(
                child: ListView(
                  children: <Widget>[
                    Container(
                      decoration: BoxDecoration(color: Colors.white),
                      alignment: Alignment.center,
                      child: Column(
                        children: <Widget>[
                          Image.network(
                            'http://www.devio.org/img/avatar.png',
                            width: 100,
                            height: 100,
                          ),
                          TextField(
                            //输入文本的样式
                            decoration: InputDecoration(
                                contentPadding: EdgeInsets.fromLTRB(5, 0, 0, 0),
                                hintText: '请输入',
                                hintStyle: TextStyle(fontSize: 15)),
                          ),
                          Container(
                            height: 100,
                            margin: EdgeInsets.only(top: 10),
                            decoration:
                                BoxDecoration(color: Colors.lightBlueAccent),
                            child: PageView(
                              children: <Widget>[
                                _item('Page1', Colors.deepPurple),
                                _item('Page2', Colors.green),
                                _item('Page3', Colors.red)
                              ],
                            ),
                          )
                        ],
                      ),
                    ),
                  ],
                ),
                onRefresh: _handleRefresh)
            : Text('列表'),
      ),
    );
  }

  Future<Null> _handleRefresh() async {
    await Future.delayed(Duration(milliseconds: 200));
    return null;
  }

  _item(String title, Color color) {
    return Container(
      alignment: Alignment.center,
      decoration: BoxDecoration(color: color),
      child: Text(
        title,
        style: TextStyle(fontSize: 22, color: Colors.white),
      ),
    );
  }
}

```





## flutter_web环境搭建

github仓库地址：https://github.com/flutter/flutter_web



搭建步骤：

####克隆Flutter Web代码仓库

```
git clone https://github.com/flutter/flutter_web.git
```



#### 安装Flutter Web构建工具

```
flutter pub global activate webdev
```

上述信息中可能有一个 Warning 提示需要配置环境变量，按提示配置环境变量即可



```
open ~/.bash_profile //检查变量是否写入
```



#### 执行官方案例

flutter_web 目录下有 examples 几个 demo 项目，比如：hello_world

```
cd hello_world

//安装依赖
flutter pub upgrade
或
flutter pub get


//启动
flutter pub global run webdev serve
```



#### 创建项目

1.使用 Visual Studio Code，前提是安装了Flutter,dart插件，使用命令面板 Flutter: New Web Project，需要dart拓展，activate stagehand，按照提示安装下就行了



2.命令行创建 web 项目，也需要activate stagehand工具

```
//安装
flutter pub global activate stagehand

//执行命令查看帮助，可以看到提供了7种模板用来创建项目
flutter pub global run stagehand


//以flutter-web-preview为例创建目录，进入目录,再执行以下命令

flutter pub global run stagehand flutter-web-preview


//安装依赖
flutter pub get
或
flutter pub upgrade



```



#### 环境问题解决方案

```
$ export PATH=$PATH:$HOME/${syname}/flutter/bin
$ export PATH=$PATH:$HOME/${syname}/flutter/bin/cache/dart-sdk/bin
$ export PATH=$PATH:$HOME/${syname}/flutter/.pub-cache/bin
```









## 如何使用Flutter包和插件

flutter官方包管理平台：<https://pub.dartlang.org/>  或 https://pub.dev/

比如：插件：flutter_color_plugin插件







# 新闻

#### Facebook 正在重构 React Native，将重写大量底层

https://www.oschina.net/news/97129/state-of-react-native-2018



#### Flutter 最新进展与未来展望

https://mp.weixin.qq.com/s/dC2C1jpDrQSsip6wjiejBw



#### 庖丁解牛！深入剖析 React Native 下一代架构重构

https://www.infoq.cn/article/EJYNuQ2s1XZ88lLa*2XT



##交流讨论

听小伙伴们反馈，最近面试环节中，已经有公司出现Flutter相关的面试题了。。。好慌！！！！

https://material.io/