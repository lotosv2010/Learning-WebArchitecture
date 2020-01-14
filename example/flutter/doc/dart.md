

# Flutter学习之Dart语法特性



## Dart一些概念

- 在Dart中，一切都是对象，所有的对象都是继承`Object`，也就是所有能够使用变量引用的都是对象，每个对象都是一个了类的实例。在Dart中甚至数字、方法和null都是对象。
- 没有赋初值的变量都会有默认值`null`
- 标识符可以以字母或者`_`下划线开头，后面可以是其他字符和数字的组合。
- Dart支持顶级方法，如`main`方法，同时还支持在类中定义函数(静态函数和实例函数)，还可以在方法中定义方法，Dart支持顶层变量，也支持类变量或对象变量。
- Dart没有`public`、`protected`、`private`关键字。如果某个变量以下划线`_`开头，代表这个变量是在库中是私有的。
- Dart中的类和接口都是统一的，类即是接口，你可以继承一个类，也可以实现一个类，自然也包含了良好的面向对象和并发编程的支持。
- `final`的值只能被设定一次。`const`是一个编译时的常量，可以通过`const`来创建常量值，`var n = const[]`,这里n还是一个变量，只是被赋值了一个常量值，它还是可以符其他值。实例变量可以是final,但不能是const。
- Dart是强类型语言，但可以用`var`或者`dynamic`来声明一个变量，Dart会自动推断其数据类型，`dynamic`类似C#
- 使用静态类型可以更清晰表面你的意图，并且可以让静态分析工具来分析你的代码。
- Dart在运行之前会先解析你的代码。你可以通过使用类型或者编译时常量来帮助Dart去捕获异常以及让代码运行的更高效。
- Dart工具可以指出两种问题：警告和错误。警告只是说你的代码可能有问题，但是并不会阻止你的代码执行。错误可以是编译时错误也可以是运行时错误。遇到编译时错时，代码将无法执行；运行时错误将会在运行代码的时候导致一个异常。

## Dart语法

### 1.关键字

下表是Dart语言的关键字

|  const   |   null   |   class    |   new    |  this   |
| :------: | :------: | :--------: | :------: | :-----: |
|    as    | default  |   final    | continue |  throw  |
|  assert  | deferred |  finally   | operator |  true   |
|  async   |    do    |    for     |   part   |   try   |
|  async*  | dynamic  |    get     | rethrow  | typedef |
|  await   |   else   |     if     |  return  |   var   |
|  break   |   enum   | implements |   set    |  void   |
|   case   |  export  |   import   |  static  |  while  |
|  catch   | external |     in     |  super   |  with   |
|  false   | extends  |     is     |  switch  |  yield  |
| abstract | factory  |  library   |  sync*   | yield*  |

### 2.一个最基本的Dart程序

```
//定义打印数字方法
printNumber(num Number){
  print('The number is $Number');
}

//执行程序入口
void main(){
  //定义初始化一个变量
  var number = 6.76;
  //调用打印数字方法
  printNumber(number);
}
复制代码
```

上面是一个简单基本的`Dart`程序，虽然简单但是用到了`Dart`很多特性：

- `//`这是注释符号，还可以用`/*...*/`这是很多语言的注释符号
- `num`这是数值型，`String`，`int`，`bool`是另外其他几种类型。注意：数值型`num`包含整形`int`和浮点型`double`。
- 6.76是一个数字常量，数字常量是编译时常量。
- `print()`打印内容的方法
- `"..."`或者是`'...'`表示字符串常量
- `$variableName`或者是`${expression}`是字符串插值：在字符串常量中引用变量或者表达式
- `var`一种不指定类型声明变量的方式
- `main()`是Dart程序的入口方法，每个程序都需要一个这样得分方法

### 3.Variables变量

`var name = 'knight';` 上面是声明变量并赋值的示例，变量是一个引用，上面的名字为`name`的变量引用一个内容为`"knight"`的String对象。

### 4.Default value(默认值)

没有初始化的变量自动获取一个默认值为`null`。类型为数字的变量如果没有初始化那么默认的值也是`null`，因为数字类型也是对象，上面直接上代码：

```
//定义打印数字方法
printNumber(num Number){
  print("The number is $Number");
}

//执行程序入口
void main(){
  //定义初始化一个变量
  var number;

  //调用打印数字方法
  printNumber(number);
}
复制代码
```

上面打印的结果是`The number is null`。

### 5.Optional types（可选的类型）

声明变量的时候，可以选择加上具体类型,如下面：

```
  //定义初始化一个变量
  double number = 6.666;
复制代码
```

添加类型可以更加清晰表达你的意图。IDE编译器等工具有可以使用类型来更好的帮助，提供提示代码补全，提前发现bug等功能。

### 6.Final and const

如果以后不打算修改一个变量，使用`final`或者`const`。一个`final`变量只能赋值一次；一个`const`变量是编译时常量。注意：`const`变量同时也是`final`变量，实例变量可以为`final`但不能是`const`。直接上例子：

```
//定义初始化一个变量
  final double number = 6.666;
  number = 6.667;
  //调用打印数字方法
  printNumber(number);
复制代码
```

上面例子用`final`修饰`number`并赋值，但`number = 6.67`的时候，想重新给`number`再赋值的时候，编译错报错：`number,a final variable,can only be set once.`，意思和上面所说的一样就是`final`变量只能赋值一次！下面改为定义为`const`来修饰`number`:

```
  //定义初始化一个变量
  const double number = 6.666;
  number = 6.667;
  //调用打印数字方法
  printNumber(number);
复制代码
```

同样`number = 6.667`编译器会报错`Constant variables can not be assigned a value`意思是常量值不能赋值，上面也说了，因为`const`变量同时也是`final`变量。如果`const`变量在类中，请定义为`static const`。可以直接定义`const`和旗初始值，也可以定义一个`const`变量使用其他`const`变量的值来初始化其值，如下面：

```
  //定义初始化一个变量
  const double number = 6.66;
  const double number1 = 2 * number;
复制代码
```

上面例子的`number1`就是用了`number`来将自己初始化值，`const`关键字不仅仅只用来定义常量。有可以用来创建不变的值，还能定义构造函数为`const`类型 ，这中类型的构造函数创建的对象是不可改变的，任何变量都可以有一个不变的值。

### 7.Built-in types(内置的类型)

在Dart有几种内置的数据类型：数值型-Number、布尔型-boolean、键值对-Map、字符串-String、列表-List、其他类型-Runes、Symbols

#### 7.1数值型-Number

Dart中提供了两种类型：



![数值类型](https://user-gold-cdn.xitu.io/2019/1/27/1688ea8376b5ebdb?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



```
//执行程序入口
void main(){


  //整形，其取值通常位于-2的53次方到2的53之间。
  num x = 777;
  //浮点数 64位
  x = 777.7;

  int y = 777;
  y = 777.7;       //这一行编译器会报错，因为将int型的数据转为double型

  double n = 77,7;
  d = 77;          //这个地方会报错，因为将double型的数据转为int型

  int x1 = 7;
  int x2 = 77;
  int x3 = 777;
  int x4 = 7777;

  print('${x1.bitLength}'); //占了3个bit 相当于00000000 00000111
  print('${x2.bitLength}'); //占了7个bit 相当于00000000 01001101
  print('${x3.bitLength}'); //占了10个bit 相当于00000011 00001001
  print('${x4.bitLength}'); //占了13个bit 相当于00011110 01100001


}
复制代码
```

上面例子可以看到三个点：

- 使用`num`声明的变量，可以随意的转换类型，如果使用`int`或者`double`明确的声明,那就不能转换了
- 判断一个`int`值需要多少位时，可以使用`bitLength`

### 8.数值型的操作

运算符：+、-、*、/、~/、% 常用属性：isNaN、isEven、isOdd 常用方法：abs()、round()、floor()、ceil()、toInt()、toDouble()

```
//执行程序入口
void main(){


  int i =7;
  double d = 10.1;

  print(i / d);               //0.6930693069306931
  print(i ~/ d);              //0   这个操作是取整 就是得出商

  print(i.isOdd);             // 判断是奇数
  print(i.isEven);            // 判断是偶数


  //String -> int
  var x1 = int.parse("7");
  print(x1 == 7);              //输出true

  //Sting -> double
  var x2 = double.parse("7.7");
  print(x2 == 7.7);             //输出true

  //int -> String
  var x3 = 7.toString();
  print(x3 == '7');             //输出true

  //double -> String
  var x4 = 7.1234.toStringAsFixed(2);
  print(x4 == '7.12');          //输出true

  //求绝对值
  var x5 = (-7).abs();
  print(x5 == 7);

  //四舍五入1
  var x6 = (7.7).round();
  print(x6);                   //输出8

  //四舍五入2
  var x7 = (7.3).round();
  print(x7);                   //输出7

  //求小于它的最大整数
  var x8 = (7.7).floor();
  print(x8);                   //输出7

  //求大于它的最小整数
  var x9 = (7.7).ceil();
  print(x9);                   //输出8

  double num1 = 7.77;
  print(num1);                //结果是7.77
  double num2 = 7;
  print(num2);                //结果是7.0
  int num3 = 7;
  print(num3.toDouble());     //int 转 double 结果是7.0
  double num4 = 7.77;
  print(num4.toInt());        //double 转 int 结果是7
  
}
复制代码
```

上面列出了一些平时遇到最多的操作，如求余，求整，类型转换等。

### 9.Strings(字符串)

Dart字符串是UTF-16编码的字符序列，可以使用单引号或者双引号来创建字符串：

```
//执行程序入口
void main(){

  String m_str1 = '单引号字符串';
  String m_str2 = "双引号字符串";

  print(m_str1);        //输出：单引号字符串
  print(m_str2);        //输出：双引号字符串

}
复制代码
```

String中单、双引号互相嵌套情况

```
//执行程序入口
void main(){

  String m_str1 = '单引号中的"双引号"字符串';
  String m_str2 = "双引号中的'单引号'字符串";

  print(m_str1);        //输出：单引号中的"双引号"字符串
  print(m_str2);        //输出：双引号中的'单引号'字符串

  //单引号里面有单引号，必须在前面加反斜杠
  String m_str3 = '单引号中的\'单引号\'';
  String m_str4 = "双引号里面有双引号,\"双引号\"";
  print(m_str3);        //输出：单引号中的'单引号'
  print(m_str4);        //输出：双引号里面有双引号,"双引号"

}
复制代码
```

单引号嵌套单引号之间不允许出现空串（不是空格），双引号嵌套双引号之间不允许出现空串：

```
 //String m_str5 = '单引号''''单引号'; //报错
  String m_str6 = '单引号'' ''单引号';
  print(m_str6);        //输出： 单引号 单引号

  String m_str7 = '单引号''*''单引号';
  print(m_str7);        //输出： 单引号*单引号

  //String m_str8 = "双引号""""双引号"；   //报错

  String m_str9 = "双引号"" ""双引号";
  print(m_str9);        //输出： 双引号 双引号

  String m_str10 = "双引号""*""双引号";
  print(m_str10);       //输出： 双引号*双引号
复制代码
```

单双引号混合嵌套空串是可以的，如下：

```
 String m_str11 = '单引号""""单引号';
  print(m_str11);       //输出： 单引号""""单引号

  String m_str12 = '单引号"" ""单引号';
  print(m_str12);       //输出： 单引号"" ""单引号

  String m_str13 = '单引号""*"""单引号';
  print(m_str13);       //输出： 单引号""*"""单引号

  String m_str14 = "双引号''''双引号";
  print(m_str14);       //输出:  双引号''''双引号

  String m_str15 = "双引号'' ''双引号";
  print(m_str15);       //输出：  双引号'' ''双引号

  String m_str16 = "双引号''*''双引号";
  print(m_str16);       //输出：  双引号''*''双引号
复制代码
```

字符串拼接方式，如下：

```
//使用空格拼接，多个空格也是可以地
  String m_str1 = '单引号字符串' '拼接'     '---';
  print(m_str1);       //输出：单引号字符串拼接---

  //使用换行符和空格
  String m_str2 = '单引号字符串'
    '换行''加空格' '';
  print(m_str2);       //输出： 单引号字符串换行加空格

  //单双引号 空格拼接
  String m_str3 = "单双引号字符串加空格" '拼接'      "----";
  print(m_str3);      //输出： 双引号字符串加空格拼接----

  //单双引号 换行 空格
  String m_str4 = "单双引号字符串"
    '换行' '加空格' '***';
  print(m_str4);      //输出： 单双引号字符串换行加空格***

  //使用三个单引号创建多行字符串
  String m_str5 = '''
     三个单引号+
     拼接
     ''';
  print(m_str5);      /*输出    三个单引号+
                                拼接
                                */

  //使用三个双引号创建多行字符串
  String m_str6 = """
    三个双引号+
    拼接
    """;
  print(m_str6);      /*输出    三个双引号+
                                拼接
                                */

  String m_str7 = "正常拼接"+",用加号了来拼接";
  print(m_str7);      //输出： 正常拼接,用加号了来拼接
复制代码
```

通过提供一个`r`前缀可以创建"原始raw"字符串，在字符串加字符，或者在`\`前面再加一个`\`，可以避免`\`的转义作用，如下：

```
  String m_str1 = r"sdsdsds";
  print(m_str1);  //输出  sdsdsds

  print("换行：\n"); //输出：换行

  print(r"换行：\n"); //输出：换行：\n

  print("换行：\\n"); //输出：换行：\n
复制代码
```

`${表达式的使用}`，类似JS中ES6的表达式使用，使用`$`可以获取字符串的内容，用`${表达式}`可以将表达式的值放入字符串中，使用`${表达式}`也可以使用字符串拼接。下面也是直接上例子：

```
bool flag = true;
  String m_str1 = "字符串";
  print("看看这个值：${m_str1} ""看看这个值flag：${flag}"); //输出：字符串：字符串 看看这个值flag：true

  //使用$+字符串
  String name = "knight";
  print("$name" + "CTO");     //输出：knightCTO；

  //使用字符串拼接，运用了String类中的toUpperCase函数，把字母变成大写 
  String m_str = "Android";
  assert('${m_str.toUpperCase()} is very good' ==       
        'ANDROID is very good');
  
复制代码
```

==操作符判断两个对象的内容是否一样，如果了；两个字符串包含一样的字符编码序列，则他们是相等的。在生产模式 `assert()` 语句被忽略了。在检查模式`assert(condition)` 会执行，如果条件不为 true 则会抛出一个异常。

### 10.Boolean（布尔值）

Dart中以`bool`代表布尔值，只有两个对象是布尔类型的，那就是`true`和`false`所创建的对象，这两个对象都是编译时常量。当Dart需要一个布尔值，只有`true`对象才被认为是true，所有其他值都是false。看下下面的例子：

```
  String name ="knight";
  //报错 因为name不是bool类型
  if(name){
    print(name);

  }
复制代码
```

上面代码会抛出异常，提示`name`不是布尔值，Dart使用的是先式的检查值，如下图：

```
  // 检查是否为空字符串
  var fullName = '';
  assert(fullName.isEmpty);

  // 检查是否小于等于0
  var hitPoints = 0;
  assert(hitPoints <= 0);

  // 检查是否为 null.
  var unicorn;
  assert(unicorn == null);

  // 检查是否为 NaN.
  var iMeantToDoThis = 0 / 0;
  assert(iMeantToDoThis.isNaN);
复制代码
```

`assert`是语言内置的断言的函数，仅在检查模式有效，在开发过程中，除非条件为真，否则会引发异常。（断言失败则程序立刻终止）

### 11.Lists列表

`array`是编程语言中最常见的集合类型，我相信身为开发者，都用过。在`Dart`中数组就是`List`对象，所以一般称为`lists`,下面直接上Dart list的示例：

```
//创建一个int类型的list 并赋值为0，1，2，3，4
  List list =  [0,1,2,3,4];

  //使用构建的方式创建list
  List list1 = new List();

  //创建一个常量的List，不可以改变的List
  List list2 = const[0,1,2,3];

  //增加泛型
  List list3 = new List<String>();

  //创建固定的长度的数组列表，不能移除或者增加
  List list4 = new List(5);

  //创建包含所有以下元素的可改变的长度列表
  List list5 = new List.from([0,1,2,3]);

  //创建在固定范围内改变长度的列表
  List list6 = new List()..length = 10;

  //创建包含所有元素的固定长度列表
  List list7 = new List.unmodifiable([0,1,2]);

  //用生成器给所有元素赋初始值
  List list8 = new List<int>.generate(5, (int i){
    return i + i;

  });

复制代码
```

List常用的一些api：

```
 //在列表中存放不同类型的对象
  List list = [1,2,3,false,"Kinght"];
  print(list);          //输出：[1, 2, 3, false, Kinght]

  //在列表中添加元素
  list.add(7);
  print(list);          //输出：[1, 2, 3, false, Kinght, 7]

  //修改列表下标为1的值
  list[1] = "paul";
  print(list);          //输出：[1, paul, 3, false, Kinght, 7]

  //移除列表的指定值得的元素
  list.remove("paul");
  print(list);          //输出：[1, 3, false, Kinght, 7]

  //移除列表指定下标下的元素
  list.removeAt(0);
  print(list);          //输出：[3, false, Kinght, 7]

  //获取列表的长度
  print(list.length);   //输出：4

  //向列表中的指定位置添加元素 在第0的位置上插入Android
  list.insert(0, "Android");
  print(list);          //输出：[Android, 3, false, Kinght, 7]

  //判断数组中是否有某元素
  print(list.indexOf("Android")); //这里存在，输出对应的下标，如果没有则输出-1

  //排序
  List list1 = [3,1,2,6,7];
  // 根据语法提示： List.sort([(int, int) → int compare]) → void
  list1.sort((a,b) => a.compareTo(b));
  print(list1);           //输出：[1, 2, 3, 6, 7]
复制代码
```

简单总结：

1. 下标索引从0开始。
2. 可以直接打印List的元素，List也是一个对象。

### 12.Maps

通常来讲，Map是一个键值对相关的对象，键和值可以是任何类型的对象。每个键只出现一次，而一个值则可以出现多次。上面直接上Map集合的创建方式：

```
  //1.通过构建器来创建Map
  Map map1 = new Map();
  //添加值 赋值
  map1["one"] = 'Android';
  map1["two"] = 'IOS';
  map1["three"] = 'Flutter';
  print(map1);              //输出：{one: Android, two: IOS, three: Flutter}

  //2.通过复制的形式
  Map map2 = Map.of(map1);
  print(map2);              //输出：{one: Android, two: IOS, three: Flutter}

  //3.跟上面形式一样  Object.fromEntries() 函数传入一个键值对的列表，并返回一个带有这些键值对的新对象。
  // 这个迭代参数应该是一个能够实现@iterator方法的的对象，返回一个迭代器对象。它
  // 生成一个具有两个元素的类似数组的对象，第一个元素是将用作属性键的值，第二个元素是与该属性键关联的值。
  Map map3 = Map.fromEntries(map1.entries);
  print(map3);

  //4.直接声明，直接赋值key为String类型的map
  Map map4 = {'one':'Android',
    'two':'IOS',
    'three':'Flutter'};
  print(map4);              //输出：{one: Android, two: IOS, three: Flutter}

  //5.创建一个空的Map
  Map map5 = Map.identity();
  print(map5);              //输出：{}


  //6.创建不可变的Map
  Map map6 = const {'one':'Android','two':'IOS','three':'flutter'};
  print(map6);              //输出：{one: Android, two: IOS, three: flutter}

  //7.在目标的map6创建(复制)新的不可修改map7
  Map map7 = Map.unmodifiable(map6);
  print(map7);              //输出：{one: Android, two: IOS, three: flutter}

  //8.创建key为int值得map
  Map map8 = {1:'Android',
    2:'IOS',
    3:'Flutter'};
  print(map8);              //输出：{1: Android, 2: IOS, 3: Flutter}

  //9.根据list所提供的key value来创建map
  List<String> keys = ['one','two'];
  List<String> values = ['Android','IOS'];
  Map map9 = Map.fromIterables(keys, values);
  print(map9);               //输出：{one: Android, two: IOS}
  
   //通过构建器来创建Map
   Map map10 = new Map();
   //添加值 赋值 赋值不同类型的Map
   map10["one"] = 'Android';
   map10["two"] = 'IOS';
   map10["three"] = 'Flutter';
   map10[4] = 'RN';
   print(map10);              //输出：{one: Android, two: IOS, three: Flutter, 4: RN}
复制代码
```

Map常用的一些api：

```
 //创建Map key是int类型，value是String类型
   var  map1 = new Map<int,String>();

   //对Map第一个位置赋值，中括号是key
   map1[0] = 'Android';
   //对Map第二个位置赋值
   map1[1] = 'IOS';
   //对Map第三个值赋值
   map1[2] = 'flutter';
   //对Map赋空值
   map1[3] = null;
   //因为Map中的键值是唯一的，当第二次输入的key如果存在，Value会覆盖之前
   map1[2] = 'RN';
   print(map1);                //{0: Android, 1: IOS, 2: RN, 3: null}

   //获取Map的长度
   print(map1.length);         //输出：4

   //判断Map是否为空
   print(map1.isNotEmpty);     //输出结果：true

   //判断Map是否不为空
   print(map1.isEmpty);        //输出结果：false

   //检索Map是否含有某个Key
   print(map1.containsKey(1)); //输出：true

   //检索Map是否包含某个Value
   print(map1.containsValue('Android'));  //输出：true

   //删除某个键值对
   map1.remove(0);
   print(map1);                //输出：{1: IOS, 2: RN, 3: null}

   //获取所有的key
   print(map1.keys);           //输出：(1, 2, 3)

   //获取所有的values
   print(map1.values);         //输出：(IOS, RN, null)

   //循环打印
   /*
     key:1, value:IOS
     key:2, value:RN
     key:3, value:null

    */
     map1.forEach((key,value) {
     print("key:${key}, value:${value}");
   });

复制代码
```

简单总结：

1. 当Map的Key没有指定类型时，Key类型不一致也不会报错。
2. Map里面的key不能相同。但是value可以相同,value可以为空字符串或者为null。
3. 创建Map有两种方式：通过构造器(new)和直接赋值。

### 13.Runes

在Dart中，runes代表字符串的UTF-32 code points。Unicode为每一个字符、标点符号、表情符号等都定义了一个唯一的数值。什么意思呢？也就是在书写系统中，每一个字母，数字都是有唯一的数值。由于在Dart字符串是UTF-16 code units字符序列，所以在字符串表达32-bit Unicode值就需要新的语法，通常用`\uXXXX`的方式表示Unicode code point，这里的XXXX是4个16进制的数。如：心形符号💗是`\u2665`。对于非4个数值的情况，把编号放到大括号即可。例如，笑脸(😁)是`\u{1f600}`。`String`类有一些属性可以提取`rune`信息。`codeUnitAt`和`codeUnit`属性返回16-bit code units。使用`runes`属性来获取字符串的`runes`信息。下面示例演示了`runes`、`16-bit code units`、和32-bit code points之间的关系：

```
//执行程序入口
void main(){

  var clapp = '\u{1f44f}';
  print(clapp);                  //输出：👏

  print(clapp.codeUnits);        //输出： [55357, 56399]
  print(clapp.runes.toList());   //输出：  [128079]

  //使用String. fromCharCodes方法显示字符图形
  Runes input = new Runes(
      '\u2665  \u{1f605}  \u{1f60e}  \u{1f47b}  \u{1f596}  \u{1f44d}');
  print(new String.fromCharCodes(input));   //输出：♥  😅  😎  👻  🖖  👍

}
复制代码
```

### 14.Symbols

一个`Symbol`object代表Dart程序声明的操作符或者标识符。你也许从来不会用到Symbol，但是该功能对于通过名字来引用标识符的情况是非常有价值的，特别是混淆后的代码，标识符的名字被混淆了，但是`Symbol`的名字不会改变，下面列下例子：

```
  //使用 Symbol 字面量来获取标识符的 symbol 对象，也就是在标识符 前面添加一个 # 符号：
  //#radix
  //#bar

  print(#n == new Symbol('n'));  //输出：true

  var name = 'knight';
  Symbol symbol = #name;
  print(symbol);                //输出：Symbol("name")
  print(#name);                 //输出：Symbol("name")
复制代码
```

### 15.function方法

Dart是一个真正的面向对象语言，方法也是对象并且具有一种类型，`Function`。这意味着，方法可以赋值给变量，也可以当做其他方法的参数。也可以把Dart类的实例当做方法来调用，下面是定义方法的示例：

```
//定义一个方法 判断列表对应下标是否为null
bool isNoble(int atomicNumber) {
  return list[atomicNumber] != null;
}
复制代码
```

虽然在Effective Dart推荐在公开的APIs上使用静态类型，当然也可以选择忽略类型定义：

```
//定义一个方法 判断列表对应下标是否为null 忽略类型定义
isNoble(int atomicNumber) {
  return list[atomicNumber] != null;
}
复制代码
```

对于只有一个表达式的方法，可以选择使用缩写语法来定义：

```
//定义一个方法 判断列表对应下标是否为null 缩写写法
bool isNoble(int atomicNumber) => list[atomicNumber] != null;
复制代码
```

`=> expr`是语法`{return expr;}`形式的缩写。`=>`形式也称为胖箭头语法。注意：在箭头(=>)和冒号(;)之间只能使用一个表达式，不能使用语句。方法可以有两种类型的参数：必需和可选的。必需的参数在参数列表前面，后面是可选参数。

#### 15.1.Optional parameters(可选参数)

什么是可选参数么？定义一个函数时，形参可以定义为可选参数，当调用这个方法时，**可以不传这个可选参数**。可选参数可以是**命名参数**或者**基于位置的参数**，但是这两种参数不能**同时当做可选参数**。

##### 15.1.1.Optional named parameters(可选命名参数)

调用方法的时候，可以使用这种形式`paramName:value`来指定命名参数。例如：

```
enableFlags(bold: true, hidden: false);
复制代码
```

定义方法时，使用`{param1,param2,...}`的形式来指定可选命名参数：

```
enableFlags({bool bold, bool hidden}) {
  // ...
}
复制代码
```

##### 15.1.2.Optional positional parameters(可选位置参数)

把一些方法的参数放到[]中就变成可选位置参数了，例子如下：

```
//定义一个方法 [String device]是可选位置参数 也就是调用这个方法可以不传这个参数
String say(String from, String msg, [String device]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }
  return result;
}

//不使用可选参数调用方法
assert(say('Bob', 'Howdy') == 'Bob says Howdy');

//使用可选参数调用方法
assert(say('Bob', 'Howdy', 'smoke signal') ==
'Bob says Howdy with a smoke signal');
复制代码
```

##### 15.1.3.Default parameter value(默认参数值)

在定义方法的时候，可以使用`=`来定义可选参数的默认值。默认值只能是编译时常量。如果没有提供默认值，则默认值为`null`。下面是设置可选参数默认值的示例：

```
//定义一个返回类型为空的方法 方法中hidden默认值为false
void enableFlags({bool bold = false,bool hidden = false}){

}

//调用方法 没有传hidden的值，那默认值就是false
enableFlags(bold:true);
复制代码
```

下面的示例显示了如何设置位置参数的默认值：

```
//定义一个方法 这个方法位置可选位置参数device的默认参数是carrier pigon
//也就是当调用这个方法，没有传这个参数时，这个参数会取默认值
String say(String from, String msg,
    [String device = 'carrier pigeon', String mood]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }
  if (mood != null) {
    result = '$result (in a $mood mood)';
  }
  return result;
}

//调用上面的方法
assert(say('Bob', 'Howdy') ==
'Bob says Howdy with a carrier pigeon');
复制代码
```

还可以使用`list`或者`map`作为默认值，下面的示例定义一个方法`doStuff()`，并分别为`list`和`gifts`参数指定默认值：

```
//执行程序入口
void main(){

  //调用判断对应小标的值是否为空
 // print(isNoble(1));    //输出：true


  doStuff();    //输出：list:  [1, 2, 3]
                //输出：gifts: {first: paper, second: cotton, third: leather}


}

//List和Map都取了默认值
void doStuff(
    {List<int> list = const [1, 2, 3],
      Map<String, String> gifts = const {
        'first': 'paper',
        'second': 'cotton',
        'third': 'leather'
      }}) {
  print('list:  $list');
  print('gifts: $gifts');
}
复制代码
```

#### 15.2.The main() function(入口函数)

每个应用都需要有个顶级的`main()`入口方法才能执行。`main()`方法的返回值为`void`并且有个可选的`List<String>`参数，下面是一个web应用的`main()`方法：

```
void main() {
  querySelector("#sample_text_id")
    ..text = "Click me!"
    ..onClick.listen(reverseText);
}
复制代码
```

在上面代码中`..`y语法是级联调用。使用级联调用，**可以在一个对象上执行多个操作**。下面是一个命令行应用的`main()`方法，并且使用方法参数作为输入参数：

```
// Run the app like this: dart args.dart 1 test
void main(List<String> arguments) {
  print(arguments);

  assert(arguments.length == 2);
  assert(int.parse(arguments[0]) == 1);
  assert(arguments[1] == 'test');
}
复制代码
```

#### 15.3.Functions as first-class objects(一等方法对象)

可以把方法当做参数调用另外一个方法。如：

```
printElement(element) {
  print(element);
}

var list = [1, 2, 3];

// 遍历集合
list.forEach(printElement);
复制代码
```

方法也可以赋值给一个变量：

```
var loudify = (msg) => '!!! ${msg.toUpperCase()} !!!';
assert(loudify('hello') == '!!! HELLO !!!');
复制代码
```

#### 15.4.Anonymous functions(匿名方法)

大部分方法都带有名字，例如`main()`或者`printElement()`。也可以创建没有名字的方法，称为匿名方法，有时候也被称为`lambda`或者`clourse`闭包。可以把匿名方法赋值给一个变量，然后可以使用这个方法，比如添加集合或者从集合中删除。匿名函数和命名函数类似，在括号之间可以定义一些参数·，参数使用逗号分割，也可以是可选参数。后面大括号中的代码为函数体：

```
([[Type] param1[, …]]) { 
  codeBlock; 
}; 
复制代码
```

下面的代码定义了一个参数为`i`的匿名函数。list中的每个元素都会调用这个函数来打印出来，同时来计算了每个元素在list中的索引位置。

```
var list = ['apples', 'oranges', 'grapes', 'bananas', 'plums'];
list.forEach((i) {
  print(list.indexOf(i).toString() + ': ' + i);
});
//输出：

0: apples
1: oranges
2: grapes
3: bananas
4: plums
复制代码
```

上面说到如果方法只包含一个语句，可以使用胖箭头语法缩写，把上面的代码改成下面同样的意思：

```
list.forEach((i) => print(list.indexOf(i).toString() + ': ' + i));
复制代码
```

#### 15.5.静态作用域

Dart是静态作用域语言，变量的作用域在写代码的时候就缺的过了。基本上大括号里面定义的变量就只能在大括号里面访问，和java作用域类似。

```
var topLevel = true;

main() {
  var insideMain = true;

  myFunction() {
    var insideFunction = true;

    nestedFunction() {
      var insideNestedFunction = true;

      assert(topLevel);
      assert(insideMain);
      assert(insideFunction);
      assert(insideNestedFunction);
    }
  }
}
复制代码
```

注意`nestedFunction`可以访问所有的变量，包含顶级变量。

#### 15.6.Lexical closures(词法闭包)

一个闭包是一个方法对象，不管该对象在何处被调用，该对象都可以访问其作用域内的变量，方法可以封闭定义到其作用域内的变量。方法可以封闭定义到其作用域内的变量。下面示例中，`makeAdder()`捕获到了变量`addBy`。不管在哪里执行`makeAdder()`所返回的函数，都可以使用`addBy`参数：

```
Function makeAdder(num addBy) {
  return (num i) => addBy + i;
}

main() {
  // Create a function that adds 2.
  var add2 = makeAdder(2);

  // Create a function that adds 4.
  var add4 = makeAdder(4);

  assert(add2(3) == 5);
  assert(add4(3) == 7);
}
复制代码
```

#### 15.7.Testing functions for equality(测试函数是否相等)

下面是测试顶级方法、静态函数和实例函数相等的示例：

```
foo() {}               // 顶级方法

class A {
  static void bar() {} // 静态方法
  void baz() {}        // 实例方法
}

void main() {
  var x;

  // 比较顶级函数
  x = foo;
  print(foo == x);    //输出：true

  // 比较静态方法
  x = A.bar;
  print(A.bar == x);  //输出：true

  // 比较实例方法
  var v = new A(); // 实例1
  var w = new A(); // 实例2
  var y = w;
  x = w.baz;

  //这些闭包引用相同的实例
  //所有相等
  print(y.baz == x);   //输出：true

  // 闭包引用不同的实例，所以不相等`
  print(v.baz != w.baz);   //输出：true
}
复制代码
```

#### 15.8.Return values (返回值)

所有的函数都返回一个值。如果没有指定返回值，则默认把语句`return null;`作为函数的最后☝一个语句执行。

### 16.Operators 操作符



![操作符](https://user-gold-cdn.xitu.io/2019/2/6/168c0df7407daeb7?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

上面列了操作符和一些例子，在操作符表格所列的操作符都是按照优先级顺序从左到右，从上倒下的方式来排列，上面和左边的操作符优先级要高于下面和右边的。例如

```
%
```

操作符优先高于

```
==
```

，而等号高于

```
&&
```

,下面的代码结果是一样的：



```
void main() {
   var n = 2;
   var i = 2;
   var d = 7;
   if((n % i == 0) && (d % i == 0)){
     print('符合条件');
   }else{
     print('不符合条件');       //进入这里
   }

   if(n % i == 0 && d % i == 0){
     print('符合条件');
   }else{
     print('不符合条件');       //进入这里
   }
}
复制代码
```

#### 16.1.算术操作符



![算术操作符](https://user-gold-cdn.xitu.io/2019/2/6/168c1b8dede2c0a0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



#### 16.2.相等相关的操作符



![相等相关的操作符](https://user-gold-cdn.xitu.io/2019/2/6/168c1bff002e4710?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



#### 16.3.类型判定操作符



![类型判定操作符](https://user-gold-cdn.xitu.io/2019/2/6/168c1c680e78737b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

只有

```
obj
```

实现了

```
T
```

的接口，

```
obj is T
```

才是true。例如

```
obj is Object
```

总是true。使用

```
as
```

操作符吧对象转换为特定的类型。一般情况下，可以把它当做

```
is
```

判定类型然后调用所判定对象的函数缩写形式，如下面的示例：



```
if (emp is Person) { // Type check
  emp.firstName = 'Bob';
}
复制代码
```

使用`as`操作符可以简化上面的代码：

```
(emp as Person).firstName = 'Bob';
复制代码
```

注意：上面的这两个代码效果是有区别的。如果`emp`是null或者不是`person`类型，则第一个示例使用`is`则不会执行条件里面的代码，而第二个情况使用`as`则会抛出一个异常。

#### 16.4.赋值操作符

使用`=`操作符赋值。但是还有一个`??=`操作符来指定值为null的变量值。

```
a = value;   // 给 a 变量赋值
b ??= value; // 如果 b 是 null，则赋值给 b；
             // 如果不是 null，则 b 的值保持不变
复制代码
```

还有复合赋值符`+=`等可以赋值：



![复合赋值操作符](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="882" height="166"></svg>)

下面的代码使用赋值操作符符合复合赋值操作符：



```
var a = 2;           // Assign using =
a *= 3;              // Assign and multiply: a = a * 3
assert(a == 6);
复制代码
```

下面是复合赋值操作符工作原理解释：

![复合赋值操作符解释](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="890" height="338"></svg>)



#### 16.5.逻辑操作符



![逻辑操作符](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="878" height="388"></svg>)



#### 16.6.位和移位操作符

在Dart中可以单独操作数字的某一位，下面操作符同样应用于整数：



![位与移位操作符](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="902" height="624"></svg>)



#### 16.7.条件表达式

Dart有两个特殊的操作符可以用来替代`if-else`语句： `condition ? expr1 : expr2` 如果condition是true，执行expr1(并返回执行的结果)；否则执行expr2并返回结果。 `expr1 ?? expr2`如果expr1是non-null，返回其值；否则执行expr2并返回其结果。如果是基于布尔表达式的值来赋值，考虑使用`?:`

```
var finalStatus = m.isFinal ? 'final' : 'not final';
复制代码
```

如果是基于布尔表达式是测试值是否为null，考虑使用`??`

```
String toString() => msg ?? super.toString();

//上面代码可以用下面代码来表示，意思效果是一样的，代码易懂但是不简洁
String toString() => msg == null ? super.toString() : msg;

String toString() {
  if (msg == null) {
    return super.toString();
  } else {
    return msg;
  }
}
复制代码
```

#### 16.8.级联操作符

级联操作符(..)可以在同一对象上连续调用多个函数以及访问成员变量。使用级联操作符可以避免创建临时变量，并且写出来的代码看起来更加流畅，如：

```
querySelector('#button') // Get an object.
  ..text = 'Confirm'   // Use its members.
  ..classes.add('important')
  ..onClick.listen((e) => window.alert('Confirmed!'));
复制代码
```

第一个方法`quertSelector`返回一个selector对象。后面的级联操作符都是调用这个对象的成员，并忽略每个操作所返回的值。上面代码和下面的代码功能一样：

```
var button = querySelector('#button');
button.text = 'Confirm';
button.classes.add('important');
button.onClick.listen((e) => window.alert('Confirmed!'));
复制代码
```

级联调用也可以嵌套：

```
final addressBook = (new AddressBookBuilder()
      ..name = 'jenny'
      ..email = 'jenny@example.com'
      ..phone = (new PhoneNumberBuilder()
            ..number = '415-555-0100'
            ..label = 'home')
          .build())
    .build();
复制代码
```

在方法上使用级联操作符需要非常小心，例如下面代码是不合法的：

```
var sb = new StringBuffer();
sb.write('foo')..write('bar');
复制代码
```

`sb.write`函数返回一个void，无法再`void`上使用级联操作符。注意级联语法不是操作符，只是语法！

### 17.Control flow statements(流程控制语句)

Dart中的控制流程语句和java语言很像，可以说是差不多的：

#### 17.1.if else

```
if (isRaining()) {//条件语句
  you.bringRainCoat();//内容体
} else if (isSnowing()) {//条件语句
  you.wearJacket();//内容体
} else {
  car.putTopDown();//内容体
}
复制代码
```

#### 17.2.for循环

可以使用标准的`for`循环：

```
var message = new StringBuffer("Dart is fun");
for (var i = 0; i < 5; i++) {
  message.write('!');
}

//使用foreach循环 list 和 Set都可以用这种方式
List numbers = [1,2,3,4,5,6,7,8,9，10];
numbers.foreach((number)=> print(number));

//使用for in循环，一般List和Set都是用这种方式
List numbers = [1,2,3,4,5,6,7,8,9，10];
for(var number in numbers){
     print(number);
}
复制代码
```

#### 17.3.While and do-while

`while`循环在执行循环之前先判断条件是否满足：

```
//判断条件
while (!isDone()) {
  //内容
  doSomething();
}

//例子
var i = 0;
while(i > 5){
    i++;
}
复制代码
```

而`do-while`循环是先执行循环代码再判断条件：

```
do {
  printLine();//内容体
} while (!atEndOfPage());//条件判断
//例子
var i = 0;
do{
    i++;
}while(i > 7);
复制代码
```

#### 17.4.Break and continue

使用`break`来终止循环：

```
while (true) {
  if (shutDownRequested()) break;
  processIncomingRequests();
}
复制代码
```

使用`continue`来开始下一次循环：

```
for (int i = 0; i < candidates.length; i++) {
  var candidate = candidates[i];
  if (candidate.yearsExperience < 5) {
    continue;
  }
  candidate.interview();
}
复制代码
```

上面代码在实现`Iterable`接口对象(List和Map)可以使用下面写法：

```
candidates.where((c) => c.yearsExperience >= 5)
          .forEach((c) => c.interview());
复制代码
```

#### 17.5.Switch and case

Dart中的Switch语句使用`==`比较integer、String、或者编译时常量。比较的兑现必须都是同一个类的实例（并且不是其之类），calss必须没有覆写`==`操作符，每个非空的`case`语句都必须有一个`break`语句。另外还可以通过`continue`、`throw`、`return`来介绍非空`case`语句。当没有`case`语句匹配时，可以使用`default`语句来匹配这种默认情况。

```
var command = 'OPEN';
switch (command) {
  case 'CLOSED':
    executeClosed();
    break;
  case 'PENDING':
    executePending();
    break;
  case 'APPROVED':
    executeApproved();
    break;
  case 'DENIED':
    executeDenied();
    break;
  case 'OPEN':
    executeOpen();
    break;
  default:
    executeUnknown();
}
复制代码
```

下面的示例代码再`case`省略了`break`语句，编译的时候会出现一个错误：

```
void main() {

  var number = 1;
  var i = 0;
  switch(number){
    case 1;
    i++;
    case 2:
      i--;
      break;

  }

}
复制代码
```

在Dart中的空`case`语句中可以不要break语句：

```
void main() {

  var number = 1;
  var i = 0;
  switch(number){
    case 1;
    i++;
    case 2:
      i--;
      break;

  }

}
复制代码
```

如果需要实现这种继续到下一个`case`语句中继续执行，则可以使用`continue`语句跳转对应的标签处继续执行：

```
void main() {

  var number = 1;
  var i = 0;
  switch(number){
    case 1;
    i++;
    case 2:
      i--;
      break;

  }

}
复制代码
```

每个`case`语句可以有局部变量，局部变量只有在这个语句内可见。

#### 17.6.Assert(断言)

如果条件表达式结果不满足需要，则可以使用`assert`语句俩打断代码的执行。示例如下：

```
// 确保变量是非空值 
assert(text != null);
// 确保值是小于100
assert(number < 100);
// 确保这是一个 https 地址
assert(urlString.startsWith('https'));
复制代码
```

`assert`上面也说过了，`assert`方法参数可以为任何布尔值的表达式或者方法。如果返回的值为true，断言执行通过，执行结束。如果返回值为false，断言执行失败，会抛出异常，断言只有在检查模式运行有效，如果生产模式运行，则断言不会执行。

### 18.Exceptions(异常)

代码中可以出现异常和捕获异常。异常表示一些未知的错误情况。如果异常没有捕获，则异常会抛出，导致抛出异常的代码终止执行。和java不同的是，所有的Dart异常是非检查异常。方法不一定声明·来看他们所抛出的异常，并且你不要求捕获异常，Dart提供了`Exception`和`Error`类型，以及一些子类型。还可以自己定义异常类型。但是，Dart代码可以抛出任何非null对象为异常，不仅仅是实现了`Exception`和`Error`对象。

#### 18.1.Throw

下面是抛出或者扔出一个异常的示例：

```
thow new FormatException('Expected at least 1 section');
复制代码
```

还可以抛出任意对象：

```
throw 'Out of llamas!';
复制代码
```

由于抛出异常时一个表达式，所以可以在=>语句中使用，也可以在其他能使用表达式的地方抛出异常。

```
distanceTo(Point other) =>
    throw new UnimplementedError();
复制代码
```

#### 18.2.Catch

捕获异常可以避免异常继续传递(重新抛出rethrow)异常除外。捕获异常给你一个处理该异常的机会：

```
try {
  breedMoreLlamas();
} on OutOfLlamasException {
  buyMoreLlamas();
}
复制代码
```

对于可以抛出多种类型异常的代码，你可以指定多个捕获语句。每个语句分别对应一个异常类型，如果捕获语句没有指定异常类型，则该可以捕获任何异常类型：

```
try {
  breedMoreLlamas();
} on OutOfLlamasException {
  // A specific exception
  buyMoreLlamas();
} on Exception catch (e) {
  // Anything else that is an exception
  print('Unknown exception: $e');
} catch (e) {
  // No specified type, handles all
  print('Something really unknown: $e');
}
复制代码
```

如之前代码所示，可以使用`on`或者`catch`来声明捕获语句，也可以同时使用。使用`on`来指定异常类型，使用`catch`来捕获异常对象。函数`catch()`可以带有一个或者两个参数，第一个参数为抛出的异常对象，第二个为堆栈信息。

```
  ...
} on Exception catch (e) {
  print('Exception details:\n $e');
} catch (e, s) {
  print('Exception details:\n $e');
  print('Stack trace:\n $s');
}
复制代码
```

使用`rethrow`关键字可以把捕获的异常重新抛出：

```
final foo = '';

void misbehave() {
  try {
    foo = "You can't change a final variable's value.";
  } catch (e) {
    print('misbehave() partially handled ${e.runtimeType}.');
    rethrow; // Allow callers to see the exception.
  }
}

void main() {
  try {
    misbehave();
  } catch (e) {
    print('main() finished handling ${e.runtimeType}.');
  }
}
复制代码
```

#### 18.3.Finally

无论是否抛出异常，要确保某些代码都要执行，可以使用`finally`语句来实现。如果没有`catch`语句来捕获异常，则在执行完`finally`语句后，异常被抛出了：

```
try {
  breedMoreLlamas();
} finally {
  // 即使抛出异常也会执行
  cleanLlamaStalls();
}
复制代码
```

定义的`finally`语句在任何匹配的`catch`语句之后执行：

```
try {
  breedMoreLlamas();
} catch(e) {
  print('Error: $e');  // 优先处理异常
} finally {
  cleanLlamaStalls();  // 然后再执行
}
复制代码
```

### 19.Classes

Dart是一个面向对象编程语言，同时支持基于mixin的继承机制。每个对象都是一个类的实例，所有的类都继承于`object`。基于Mixin的继承意味着每个类(Object除外)都只有一个超类，一个类的代码可以在其他多个类继承中重复使用·。使用`new`关键字和构造函数来创建新的对象。构造函数名字可以为`ClassName`或者`ClassName.identifier`。例如：

```
var jsonData = JSON.decode('{"x":1, "y":2}');

// 创建Point类型的对象
var p1 = new Point(2, 2);

// 根据json来创建Point对象
var p2 = new Point.fromJson(jsonData);
复制代码
```

对象的成员包括方法和数据(函数和示例变量)。当你调用一个函数的时候，你是在一个对象上调用：函数需要访问对象的方法和数据，使用(.)来引用对象的变量或者方法：

```
var p = new Point(2, 2);

// 对实例对象的变量y赋值
p.y = 3;

// 从成员变量得到值
assert(p.y == 3);

// 从p复制实例对象
num distance = p.distanceTo(new Point(4, 4));
复制代码
```

使用`?.`来替代，可以避免当左边对象为null时候抛出异常：

```
//如果P不是空对象，那么对其变量y赋值
p?.y = 4;
复制代码
```

有些类提供了常量构造函数。使用常量构造函数可以创建编译时常量，要使用常量构造函数只需要用`const`替代`new`即可：

```
var p = const ImmutablePoint(2, 2);
复制代码
```

两个一样的编译时常量其实是同一个对象：

```
var a = const ImmutablePoint(1, 1);
var b = const ImmutablePoint(1, 1);

print(identical(a, b)); // 它们是相同的实例，输出true
复制代码
```

可以使用Object的`runtimeType`属性来判断实例的类型，该属性返回一个`Type`对象。

```
print('The type of a is ${a.runtimeType}');
复制代码
```

#### 19.1.Instance variables

下面是如何定义实例变量的示例：

```
class Point{
  num x;//声明实例变量x，初始化为空
  num y;//声明实例变量y，舒适化为空
  num z = 0;//声明实例变量z，初始化为0
}
复制代码
```

所有没有初始化时变量值都是`null`。每个实例变量都会自动生成一个`getter`方法。`Non-final`实例变量还会自定生成一个`setter`方法：

```
class Point{
  num x;//声明实例变量x，初始化为空
  num y;//声明实例变量y，舒适化为空
  num z = 0;//声明实例变量z，初始化为0
}
void main() {
  var point = new Point();
  point.x = 4;              //使用setter方法对x变量赋值
  print(point.x == 4);      //输出true 使用getter获取x变量的值
  print(point.y == null);   //输出true

}
复制代码
```

如果在实例变量定义的时候初始化该变量(不是在构造函数或者其他方法中初始化)，改值是在实例对象的时候初始化的，也就是在构造函数和初始化参数列表执行之前。

#### 19.2.Constructors

定义一个和类名字一样的方法就定义一个构造函数还可以带有其他可选的标识符。常见的构造函数生一个对象的新实例：

```
class Point {
  num x;
  num y;

  Point(num x, num y) {
    this.x = x;
    this.y = y;
  }
}
复制代码
```

`this`关键字指当前的实例。只有当名字冲突的时候才使用this。由于构造函数参数赋值给实例变量的场景太常见了，Dart提供一个语法糖来简化这个操作：

```
class Point {
  num x;
  num y;

  // 设置x和y的语法糖
  // 在构造函数主体运行之前
  Point(this.x, this.y);
}
复制代码
```

##### 19.2.1.Default copnstructors(默认构造函数)

如果没有定义构造函数，则会有个默认构造函数。默认构造函数没有参数，并且会调用超类的没有参数的构造函数

##### 19.2.2.Constructors aren’t inherited(构造函数不会继承)

子类不会继承超类的构造函数。子类如果没有定义构造函数，则只有一个默认构造函数。

##### 19.2.3.Named constructors(命名构造函数)

使用命名构造函数可以为一个类实现多个构造函数，或者使用命名构造函数来更清晰自己的意图：

```
class Point {
  num x;
  num y;

  Point(this.x, this.y);

  // 命名构造函数
  Point.fromJson(Map json) {
    x = json['x'];
    y = json['y'];
  }
}
复制代码
```

构造函数不能继承，所以超类的命名构造函数也不会被继承，如果子类也有超类一样命名构造函数，就必须在子类中自己实现该构造函数。

##### 19.2.4.Invoking a non-default superclass constructor(调用超类构造函数)

默认情况下，子类的构造函数会自动调用超类的无名无参数的默认构造函数。**超类的构造函数在子类构造函数体开始执行的位置调用**。如果提供了一个 initializer list（初始化参数列表） ，则初始化参数列表在超类构造函数执行之前执行。 下面是构造函数执行顺序：

1. initializer list（初始化参数列表）
2. superclass’s no-arg constructor（超类的无名构造函数）
3. main class’s no-arg constructor（主类的无名构造函数）

如果超类没有无名无参构造函数，则需要手动去调用超类的其他构造函数。在构造函数参数后使用冒号`:`可以调用超类构造函数，下面中，`Employee`类的构造函数调用超类`Person`的命名构造函数：

```
//定义Person类
class Person {
  String firstName;

  Person.fromJson(Map data) {
    print('in Person');
  }
}

class Employee extends Person {
  // Person 没有默认构造函数
  // you must call super.fromJson(data).
  Employee.fromJson(Map data) : super.fromJson(data) {
    print('in Employee');
  }
}

main() {
  var emp = new Employee.fromJson({});

  // 打印输出
  // in Person
  // in Employee

}
复制代码
```

由于超类构造函数的参数在构造函数执行之前执行，所以擦拭可以是一个表达式或者一个方法调用：

```
class Employee extends Person {
  // ...
  Employee() : super.fromJson(findDefaultData());
}
复制代码
```

如果在构造函数的初始化列表中使用 super()，需要把它放到最后。调用超类构造函数的参数无法访问 this。 例如，参数可以为静态函数但是不能是实例函数。

#### 19.3.Initializer list(初始化列表)

在构造函数体执行之前除了可以调用超类构造函数之外，还可以 初始化实例参数。 使用逗号分隔初始化表达式:

```
class Point {
  num x;
  num y;

  Point(this.x, this.y);

  // 初始化列表在构造函数体运行之前设置实例变量。
  Point.fromJson(Map jsonMap)
      : x = jsonMap['x'],
        y = jsonMap['y'] {
    print('In Point.fromJson(): ($x, $y)');
  }
}
复制代码
```

初始化表达式等号右边的部分不能访问 `this`。初始化列表非常适合用来设置 final 变量的值。 下面示例代码中初始化列表设置了三个 final 变量的值:

```
import 'dart:math';

export 'src/DartProject_base.dart';

// TODO: Export any libraries intended for clients of this package.


class Point {
 final num x;
 final num y;
 final num distanceFromOrigin;

 Point(x, y)
     : x = x,
       y = y,
       distanceFromOrigin = sqrt(x * x + y * y);
}

main() {
 var p = new Point(2, 3);
 print(p.distanceFromOrigin);//输出：3.605551275463989
}
复制代码
```

#### 19.4.Redirecting constructors(重定向构造函数)

有时候一个构造函数会调动类中的其他构造函数。一个重定向构造函数是没有代码的，在构造函数声明后，使用冒号调用其他构造函数。

```
class Point {
  num x;
  num y;

  // 主构造函数
  Point(this.x, this.y);

  // 调用主构造函数
  Point.alongXAxis(num x) : this(x, 0);
}
复制代码
```

#### 19.5.Constant constructors(常量构造函数)

如果你的类提供一个状态不变的对象，你可以把这些对象定义为编译时常量。要实现这个功能，需要定义一个`const`构造函数， 并且声明所有类的变量为`final`。

```
class ImmutablePoint {
  final num x;
  final num y;
  const ImmutablePoint(this.x, this.y);
  static final ImmutablePoint origin =
      const ImmutablePoint(0, 0);
}
复制代码
```

#### 19.6.Factory constructors(工厂方法构造函数)

如果一个构造函数并不总是返回一个新的对象，则使用`factory`来定义这个构造函数。例如，一个工厂构造函数可能从缓存中获取一个实例并返回，或者返回一个子类型的实例。例子：

```
class Logger {
  final String name;
  bool mute = false;

  static final Map<String, Logger> _cache =
      <String, Logger>{};

  factory Logger(String name) {
    if (_cache.containsKey(name)) {
      return _cache[name];
    } else {
      final logger = new Logger._internal(name);
      _cache[name] = logger;
      return logger;
    }
  }

  Logger._internal(this.name);

  void log(String msg) {
    if (!mute) {
      print(msg);
    }
  }
}
复制代码
```

使用`new`关键字来调用工厂构造函数

```
var logger = new Logger('UI');
logger.log('Button clicked');
复制代码
```

#### 19.7.函数

函数是类中定义的方法，是类对象的行为。

##### 19.7.1.Instance methods(实例函数)

对象的实例函数可以访问`this`，下面例子中`distanceTo`函数就是实例函数：

```
import 'dart:math';

class Point {
  num x;
  num y;
  Point(this.x, this.y);

  num distanceTo(Point other) {
    var dx = x - other.x;
    var dy = y - other.y;
    return sqrt(dx * dx + dy * dy);
  }
}
复制代码
```

`Getters` 和`setters`是用来设置和访问对象属性的特殊函数。每个实例变量都隐含的具有一个`getter`， 如果变量不是`final`的则还有一个`setter`。可以通过实行`getter`和`setter`来创建新的属性， 使用`get`和`set`关键字定义`getter`和`setter`：

```
class Rectangle {
  num left;
  num top;
  num width;
  num height;

  Rectangle(this.left, this.top, this.width, this.height);

  // 定义两个计算属性：右和下。
  num get right             => left + width;
      set right(num value)  => left = value - width;
  num get bottom            => top + height;
      set bottom(num value) => top = value - height;
}

main() {
  var rect = new Rectangle(3, 4, 20, 15);
  assert(rect.left == 3);
  rect.right = 12;
  assert(rect.left == -8);
}
复制代码
```

`getter`和`setter`的好处是，可以开始使用实例变量，后来可以把实例变量用函数包裹起来，而调用代码的地方不需要修改。

##### 19.7.2.Abstract methods(抽象函数)

实例函数、 `getter`、和`setter`函数可以为抽象函数，抽象函数是只定义函数接口但是没有实现的函数，由子类来实现该函数。如果用分号来替代函数体则这个函数就是抽象函数。

```
abstract class Doer {
  // ...定义实例变量和方法...

  void doSomething(); // 定义一个抽象方法.
}

class EffectiveDoer extends Doer {
  void doSomething() {
    // ...提供实现，因此此处的方法不是抽象的...
  }
}
复制代码
```

调用一个没实现的抽象函数会导致**运行时**异常。

#### 19.8.Overridable operators(可覆写的操作符)

下表中的操作符可以被覆写。 例如，如果你定义了一个 Vector 类， 你可以定义一个 + 函数来实现两个向量相加。



![可覆写的操作符](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="900" height="386"></svg>)

下面举了覆写

```
+
```

和

```
-
```

操作符的示例：



```
class Vector {
  final int x;
  final int y;
  const Vector(this.x, this.y);

  /// 覆写 + (a + b).
  Vector operator +(Vector v) {
    return new Vector(x + v.x, y + v.y);
  }

  /// 覆写 - (a - b).
  Vector operator -(Vector v) {
    return new Vector(x - v.x, y - v.y);
  }
}

main() {
  final v = new Vector(2, 3);
  final w = new Vector(2, 2);

  // v == (2, 3)
  assert(v.x == 2 && v.y == 3);

  // v + w == (4, 5)
  assert((v + w).x == 4 && (v + w).y == 5);

  // v - w == (0, 1)
  assert((v - w).x == 0 && (v - w).y == 1);
}
复制代码
```

#### 19.9.Abstract classer(抽象类)

使用`abstract`修饰符定义一个抽象类，一个不能被实例化的类。抽象类通常用来定义接口，以及部分实现，如果抽象类是可实例化的，则定义一个**工厂构造函数** 抽象类通常具有**抽象函数**，下面是定义具有抽象函数的抽象类：

```
// 这个类是抽象类，不能实例化
abstract class AbstractContainer {
  // ...定义构造函数, 变量, 方法...

  void updateChildren(); // 抽象方法.
}
复制代码
```

下面的类不是抽象的，但是定义了一个抽象函数，这样的列是可以被实例化：

```
class SpecializedContainer extends AbstractContainer {
  // ...定义更多的构造方法, 方法...

  void updateChildren() {
    // ...实现 updateChildren()...
  }

  //Abstract method causes a warning but doesn't prevent instantiation.
抽象方法导致警告，但不阻止实例化。
  void doSomething();
}
复制代码
```

#### 19.10.Implicit interfaces(隐式接口)

每个类都隐式的定义了一个包含所有实例成员的接口，并且这个类实现了这个接口。如果你想创建类A来支持类B的api，而不想继承 B 的实现， 则类A应该实现B的接口：

```
// A person. 隐式接口包含greet().
class Person {
  // 在接口中，但仅在此库中可见
  final _name;

  // 不在接口中，因为这是构造函数
  Person(this._name);

  // 在接口中
  String greet(who) => 'Hello, $who. I am $_name.';
}

// 实现Person 接口
class Imposter implements Person {
  // 我们必须定义这个，但我们不使用它。
  final _name = "";

  String greet(who) => 'Hi $who. Do you know who I am?';
}

greetBob(Person person) => person.greet('bob');

main() {
  print(greetBob(new Person('kathy')));
  print(greetBob(new Imposter()));
}
复制代码
```

下面是实现多个接口的示例：

```
class Point implements Comparable, Location {
  // ...
}
复制代码
```

#### 19.11.Extending a class(扩展类)

使用`extends`定义子类，`supper`引用超类：

```
class Television {
  void turnOn() {
    _illuminateDisplay();
    _activateIrSensor();
  }
  // ...
}

class SmartTelevision extends Television {
  void turnOn() {
    super.turnOn();
    _bootNetworkInterface();
    _initializeMemory();
    _upgradeApps();
  }
  // ...
}
复制代码
```

子类可以覆写实例函数，`getter`和`setter`。下面是覆写Object类的`noSuchMethod()`函数的例子， 如果调用了对象上不存在的函数，则就会触发`noSuchMethod()`函 数。

```
class A {
  //除非重写NoSuchMethod，否则使用不存在的函数将导致NoSuchMethodError。
  void noSuchMethod(Invocation mirror) {
    print('You tried to use a non-existent member:' +
          '${mirror.memberName}');
  }
}
复制代码
```

还可以使用`@override`注解来表明函数是想覆写超类的一个函数：

```
class A {
  @override
  void noSuchMethod(Invocation mirror) {
    // ...
  }
}
复制代码
```

如果使用`noSuchMethod`函数来实现每个可能的`getter`、setter、以及其他类型的函数，可以使用`@proxy`注解来避免警告信息：

```
@proxy
class A {
  void noSuchMethod(Invocation mirror) {
    // ...
  }
}
复制代码
```

如果要知道编译时的具体类型，可以实现这些类来避免警告，和使用`@proxy`效果一样:

```
class A implements SomeClass, SomeOtherClass {
  void noSuchMethod(Invocation mirror) {
    // ...
  }
}
复制代码
```

#### 19.12.Enumerated types(枚举类型)

枚举类型通常称为`enumerations`或者`enums`是一种特殊的类，用来表现一个固定数目的常量。使用`enum`关键字来定义枚举类型：

```
enum Color {
  red,
  green,
  blue
}
复制代码
```

枚举类型中的每个值都有一个`index`getter函数，该函数返回该值在枚举类型定义中的位置(从0开始)，例如，第一个枚举值的位置为0，第二个为1：

```
print(Color.red.index == 0); //输出：true
print(Color.green.index == 1);//输出：true
print(Color.blue.index == 2);//输出：true
复制代码
```

枚举`values`常量可以返回所有的枚举值

```
List<Color> colors = Color.values;
print(colors[2] == Color.blue);//输出：true
复制代码
```

可以在`switch语句`中使用枚举。如果在`switch(e)`中的`e`的类型为枚举类，如果没有处理所有该枚举类型的值的话，则会抛出一个警告：

```
enum Color {
  red,
  green,
  blue
}
// ...
Color aColor = Color.blue;
switch (aColor) {
  case Color.red:
    print('Red as roses!');
    break;
  case Color.green:
    print('Green as grass!');
    break;
  default: // 如果没有这个，你会看到一个警告
    print(aColor);  // 'Color.blue'
}
复制代码
```

枚举类型具有以下限制：

1. 无法继承枚举类型，无法使用`mixin`、无法实现一个枚举类型
2. 无法显示的初始化一个枚举类型

#### 19.13.Adding features to a class：mixins(为类添加新的功能)

Mixins是一种多类继承中重用一个类代码的方法，使用`with`关键字后面为一个或者多个mixin名字来使用mixin，上例子如何使用mixin：

```
class Musician extends Performer with Musical {
  // ...
}

class Maestro extends Person
    with Musical, Aggressive, Demented {
  Maestro(String maestroName) {
    name = maestroName;
    canConduct = true;
  }
}
复制代码
```

定义一个类继承`Object`，该类没有构造函数，不能调用`super`，则该类就是一个mixin。下面例子：

```
abstract class Musical {
  bool canPlayPiano = false;
  bool canCompose = false;
  bool canConduct = false;

  void entertainMe() {
    if (canPlayPiano) {
      print('Playing piano');
    } else if (canConduct) {
      print('Waving hands');
    } else {
      print('Humming to self');
    }
  }
}
复制代码
```

从Dart1.13开始，Mixins可以继承其他类，不再限制为继承`Object`，Mixins可以调用`super()`

#### 19.14.Class variables and methods(类变量和函数)

使用`static`关键字来实现级别的变量和函数。

##### 19.14.1.Static variables(静态变量)

静态变量对于类别的状态是非常有用的：

```
class Color {
  static const red =
      const Color('red'); // 静态构造变量.
  final String name;      // 静态实例变量.
  const Color(this.name); // 构造方法.
}

main() {
  print(Color.red.name == 'red'); //输出：true
}
复制代码
```

静态变量在第一次使用的时候才被初始化。

##### 19.14.2.Static methods(静态函数)

静态函数不再实例是执行，所以无法访问`this`:

```
import 'dart:math';

class Point {
  num x;
  num y;
  Point(this.x, this.y);

  static num distanceBetween(Point a, Point b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return sqrt(dx * dx + dy * dy);
  }
}

main() {
  var a = new Point(2, 2);
  var b = new Point(4, 4);
  var distance = Point.distanceBetween(a, b);
  assert(distance < 2.9 && distance > 2.8);
}
复制代码
```

对于通用的或者经常使用的静态函数，考虑使用顶级方法而不是静态函数，静态函数还可以当做编译时常量使用，如：把静态函数当做常量构造函数的参数来使用。

### 20.泛型

在查看`List`类型的API文档，可以看到实际的类型定义为`List<E>`。这个`<..>`声明list是一个泛型(或者参数化)类型。通常情况下，使用一个字母来代表类型参数，例如E，T，S，K和V等。

#### 20.1.Why use generics?(为何使用泛型)

在Dart中类型是可选的，你可以选择不用泛型。有很多情况都要使用类型表明自己的意图，不管是使用泛型还是具体类型。如，如果自己希望`List`只包含字符串对象。则可以定义为`List<String>`代表("list of string")。这样开发工具或者自己的同事可以帮助检查自己的代码是否把非字符串类型对象给放到这个`list`中，如下面：

```
main() {
   List Tech = new List<String>();
   Tech.addAll(['Android','IOS','Flutter']);
   Tech.add(42);//运行时报错
}
复制代码
```

另外使用泛型的原因是减少重复代码。泛型可以在多种类型之间定义同一个实现，同时还可以继续使用检查模式和静态分析工具提供的代码分析功能。例如：创建一个保存缓存对象的接口：

```
abstract class ObjectCache {
  Object getByKey(String key);
  setByKey(String key, Object value);
}
复制代码
```

后来发现需要一个用来缓存字符串的实现，那又要定义一个接口：

```
abstract class StringCache {
  String getByKey(String key);
  setByKey(String key, String value);
}
复制代码
```

然而，又需要用一个用来缓存数字的实现，在后来，又需要另外一个类型的缓存实现，等等。。。这时候，泛型的另一个作用体现出来了，泛型可以避免这种重复代码，例子上：

```
abstract class Cache<T> {
  T getByKey(String key);
  setByKey(String key, T value);
}
复制代码
```

在上面的代码中，`T`是一个备用类型，这是类型占位符，自己调用该接口的时候会指定具体类型。

#### 20.2.Using collection literals(使用集合字面量)

`List`和`Map`字面量也是可以参数化的。参数化定义list需要在中括号之间添加`<type>`，定义map需要在大括号之前添加<KeyType,valueType>。如果你需要更加安全的类型检查，则可以使用参数化定义。例子如下：

```
var names = <String>['Seth', 'Kathy', 'Lars'];
var pages = <String, String>{
  'index.html': 'Homepage',
  'robots.txt': 'Hints for web robots',
  'humans.txt': 'We are people, not machines'
};
复制代码
```

#### 20.3.Using parameterized types with constructors(构造函数中使用泛型)

在调用构造函数的时候，在类名字后面使用尖括号(<...>)来指定泛型类型。例如：

```
var names = new List<String>();
names.addAll(['Seth', 'Kathy', 'Lars']);
var nameSet = new Set<String>.from(names);
复制代码
```

下面代码创建了一个`key`为`integer`,`value`为`View`类型的map：

```
var views = new Map<int, View>();
复制代码
```

#### 20.4.Generic collections and the types they contain(泛型集合和包含的类型)

Dart的泛型类型是固化的，在运行时有也可以判断具体的类型，例如在运行时也可以检测集合里面的对象类型：

```
var names = new List<String>();
names.addAll(['Seth', 'Kathy', 'Lars']);
print(names is List<String>); // 输出：true
复制代码
```

`is`表达式只是判断集合的类型，而不是集合里面具体对象的类型。在成产模式，`List<String>`变量可以包含非字符串类型对象。对于这种情况，可以选择分包判断每个对象的类型或者处理类型转换异常，`java`中的泛型信息是编译时的，泛型信息在运行时是不纯在。在`java`中可以测试一个对象是否为`List`，但是无法测试一个对象是否为`List<String>`。

#### 20.5.Restricting the parameterrized type(限制泛型类型)

当使用泛型类型的时候，可能想限制泛型的具体类型，使用`extends`可以实现这个功能：

```
// T必须是SomebaseClass或其后代之一。
class Foo<T extends SomeBaseClass> {...}

class Extender extends SomeBaseClass {...}

void main() {
  // 可以在<>中使用somebaseclass或它的任何子类。
  var someBaseClassFoo = new Foo<SomeBaseClass>();
  var extenderFoo = new Foo<Extender>();

  //也可以使用no<>
  var foo = new Foo();



   //指定任何非SomeBaseClass类型将导致警告，在Debug检查模式，运行时错误。
  // var objectFoo = new Foo<Object>();
}
复制代码
```

#### 20.6.Using generic method(使用泛型函数)

一开始，泛型只能在`Dart`类中使用。新的语法也支持在函数和方法上使用泛型。

```
T first<T>(List<T> ts) {
  // ...做一些初始化工作或者错误检查...
  T tmp ?= ts[0];
  // ...做一些额外的检查或者处理...
  return tmp;
}
复制代码
```

这里`first(<T>)`泛型可以在如下地方使用参数`T`：

- 函数的返回值类型(`T`)
- 参数的类型(`List<T>`)
- 局部变量的类型(`T tmp`)

在Dart1.21开始使用泛型函数，如果需要使用泛型函数，需要设置SDK版本为1.21或者以上。

### 21.Libraries and visibility(库和可见性)

使用`import`和`library`指令可以帮助创建模块化的可分享代码。库不仅仅提供`API`，还是一个私有单元：以下划线`(_)`开头的标识符只有在库内部可见。每个`Dart app`都是一个库，即使没有使用`library`命令也是一个库。这里的库和Android所说的库有相似的地方，简单来讲就是用人家写好库中的`API`。例如：拍照库，网络请求库等。

#### 21.1.Using libraries(使用库)

使用`import`来指定一个库如何使用另外一个库，例如：`Dart web`应用通常使用`dart:html`库，然后可以这样导入库：

```
import 'dart:html';
复制代码
```

`import`必须参数为库的URL。对于内置的库，URI使用特殊的`dart:scheme`。对于其他的库，可以使用文件系统路径或者`package:scheme`。`package:scheme`指定的库通过包管理器来提供，如`pub`工具，如：

```
import 'dart:io';
import 'package:mylib/mylib.dart';
import 'package:utils/utils.dart';
复制代码
```

#### 21.2.Specifying a library prefix(指定库前缀)

如果导入的库具有冲突的标识符，这个经常遇到，则可以使用库的前缀来区分。例如：如果`library1`和`library2`都有一个名字为`Element`的类，可以这样使用：

```
import 'package:lib1/lib1.dart';
import 'package:lib2/lib2.dart' as lib2;
// ...
Element element1 = new Element();           // 使用 lib1 中的 Element .
lib2.Element element2 = new lib2.Element(); // 使用 lib2 中的 Element.
复制代码
```

#### 21.3.Importing only part of a library(导入库的一部分)

如果只使用库的一部分功能，可以选择需要导入的内容，例如：

```
// 仅导入foo
import 'package:lib1/lib1.dart' show foo;

// 导入除foo以外的所有名称。
import 'package:lib2/lib2.dart' hide foo;
复制代码
```

#### 21.4.Lazily loading a library(延迟载入库)

`Deferred loading`可以让应用在需要的时候再加载库。这我就想到了App的开启时间，下面是一些使用延迟加载库的场景：

- 减少APP的启动时间
- 执行A/B测试，例如尝试各种算法的不同实现
- 加载很少使用的功能，例如可选的屏幕和对话框

延迟加载一个库，需要先使用`deferred as`来导入：

```
import 'package:deferred/hello.dart' deferred as hello;
复制代码
```

当需要使用的时候，使用库标识符调用`loadLibrary()`函数来加载库：

```
greet() async {
  await hello.loadLibrary();
  hello.printGreeting();
}
复制代码
```

在上面代码，使用`await`关键字暂停代码执行一直到库加载完成。在一个库上可以多次调用`loadLibrary()`函数。但是该库只是载入一次。在使用延迟加载库的时候，要注意：

- 延迟加载库的常量在导入的时候是不可用的。只有当库加载完毕的时候，库中常量才可以使用。
- 在导入文件的时候无法使用延迟库中的类型。如果需要使用类型，则考虑把接口类型移动到另外一个库中， 让两个库都分别导入这个接口库。
- Dart隐含的把`loadLibrary()`函数导入到使用`deferred as 命名空间`。`loadLibrary()`方法返回一个`Future`。

### 22.Asynchrony support(异步支持)

Dart有一些语言特性来支持异步编程。最常见的特性是`async`方法和`await`表达式。Dart库中有很多返回Future或者Stream对象的方法。这些方法是异步：这些函数在设置完基本的操作后就返回了，而无需等待执行完成。例如读取一个文件，在打开文件后就返回了。有两种方式可以使用Future对象中的数据：

- 使用`async`和`await`
- 使用Future API

同样，从Stream中获取数据也有两种方式：

- 使用`async`和一个异步for循环(`await for`)
- 使用Stream API

使用`async`和`await`的代码是异步的，但是看起来有点像同步代码。如：下面是使用`await`来等待异步方法返回的示例：

```
await lookUpVersion()
复制代码
```

要使用`await`，其方法必须带有`async`关键字：

```
checkVersion() async {
  var version = await lookUpVersion();
  if (version == expectedVersion) {
    // 主体内容.
  } else {
    // 主体内容.
  }
}
复制代码
```

可以使用`try`,`catch`和`finally`来处理使用`await`的异常：

```
try {
  server = await HttpServer.bind(InternetAddress.LOOPBACK_IP_V4, 4044);
} catch (e) {
  // 对无法绑定到端口作出反应...
}
复制代码
```

#### 22.1.Declaring async functions(声明异步方法)

一个`async`方法是函数体被标记为`async`的方法。虽然异步方法的执行可能需要一定时间，但是异步方法立刻返回-在方法体还没执行之前就返回了。

```
checkVersion() async {
  // ...
}

lookUpVersion() async => /* ... */;
复制代码
```

在一个方法上添加`async`关键字，则这个方法返回值为Future。例如，下面是一个返回字符串的同步方法：

```
String lookUpVersionSync() => '1.0.0';
复制代码
```

如果使用`async`关键字，则该方法返回一个Future，并且认为该函数是一个耗时操作。

```
Future<String> lookUpVersion() async => '1.0.0';
复制代码
```

注意，方法的函数体并并不需要使用FutureAPI。Dart自动在需要的时候创建Future对象。

#### 22.2.Using await expressions with Futures(使用await表达式)

await表达式具有如下的形式：

```
await expression
复制代码
```

在一个异步方法内可以使用多次`await`表达水。例如，下面的示例使用三次`await`表达式来执行相关的功能：

```
var entrypoint = await findEntrypoint();
var exitCode = await runExecutable(entrypoint, args);
await flushThenExit(exitCode);
复制代码
```

在`await expression`中，`expression`的返回值通常是一个Future；如果返回的值不是Future，则Dart会自动把该值放到Future中返回。Future对象代表返回一个对象的承诺。`await expression`执行的结果为这个返回的对象。`await expression`会阻塞主，直到需要的对象返回为止。如果`await`无法正常使用，请确保是在一个`async`方法中。例如要在`main()`方法中使用`await`，则`main()`方法的函数体必须标记为`async`:

```
main() async {
  checkVersion();
  print('In main: version is ${await lookUpVersion()}');
}
复制代码
```

#### 22.3.Using asynchronous for loops with Stream(在循环中使用异步)

异步for循环具有以下形式：

```
await for (variable declaration in expression) {
  // 每次流发出时会执行.
}
复制代码
```

上面的`expression`返回的值必须是Stream类型。执行流程如下：

1. 等待直到stream返回一个数据
2. 使用stream返回的参数执行for循环代码
3. 重复执行1和2直到stream数据返回完毕

使用`break`或者`return`语句可以停止接收stream数据，这样就挑出了for循环并且从stream上取消注册了。如果**异步for循环不能正常工作，确保是在一个async方法中使用。**如：要想在`main()`方法中使用异步for循环，则需要把`main()`方法的函数体标记为`async`：

```
main() async {
  ...
  await for (var request in requestServer) {
    handleRequest(request);
  }
  ...
}
复制代码
```

### 23.Callable classes(可调用的类)

如果Dart类实现`call()`函数则可以当做方法来调用，下面例子中，`wannabeFunction`类定义了一个`call()`方法，该方法有三个字符串参数，并且返回三个字符串串联起来的结果:

```
class WannabeFunction {
  call(String a, String b, String c) => '$a $b $c!';
}

main() {
  var wf = new WannabeFunction();
  var out = wf("Hi","there,","gang");
  print('$out');   //输出:Hi there, gang!
}
复制代码
```

### 24.Isolates

现代的浏览器和移动浏览器运行在多核CPU系统上。要充分利用这些CPU，开发者一般使用共享内存数据来爆炸多线程的正确运行。然而，多线程共享数据通常会导致很多潜在的问题，并导致代码运行出错，结果不是预期。所有的Dart代码在`isolates`中运行而不是线程，每个`isolate`都有自己的堆内存，并且确保每个`isolate`的状态都不能被其他`isolate`访问。

### 25.Typedefs

在Dart语言中，方法也是对象。使用`typedef`或者`function-type-alias`来为方法类型命名，然后可使用命名的方法，当把方法类型赋值给一个变量的时候，`typedef`保留类型信息。下面代码没有使用`typedef`:

```
class SortedCollection {
  Function compare;

  SortedCollection(int f(Object a, Object b)) {
    compare = f;
  }
}

 // Initial, broken implementation.
 int sort(Object a, Object b) => 0;

main() {
  SortedCollection coll = new SortedCollection(sort);

  // 我们只知道 compare 是一个 Function 类型，
  // 但是不知道具体是何种 Function 类型？
  assert(coll.compare is Function);
}
复制代码
```

当把`f`赋值给`compare`的时候，类型信息丢失了，`f`的类型是`(object,object)->int`当然该类型是一个`Function`。如果使用显式的名字并保留类型信息，开发者和工具可以使用这些信息：

```
typedef int Compare(Object a, Object b);

class SortedCollection {
  Compare compare;

  SortedCollection(this.compare);
}

 // Initial, broken implementation.
 int sort(Object a, Object b) => 0;

main() {
  SortedCollection coll = new SortedCollection(sort);
  assert(coll.compare is Function);
  assert(coll.compare is Compare);
}
复制代码
```

### 26.Metadata(元数据)

使用元数据给代码添加额外信息，元数据注解是以`@`字符开头，后面是一个编译时常量或者调用一个常量构造函数。有三个注解所有的Dart代码都可使用：`@deprecated`、`@override`，`@proxy`,下面直接上`@deprecated`的示例：

```
class Television {
  /// 已经弃用，请改用[打开]
  @deprecated
  void activate() {
    turnOn();
  }

  /// 打开电视.
  void turnOn() {
    print('on!');
  }
}
复制代码
```

可以定义自己的元数据注解。下面的示例定义一个带有两个参数的`@todo`注解：

```
library todo;

class todo {
  final String who;
  final String what;

  const todo(this.who, this.what);
}

复制代码
```

使用`@todo`注解的示例：

```
import 'todo.dart';

@todo('seth', 'make this do something')
void doSomething() {
  print('do something');
}
复制代码
```

元数据可以在`library`、`typedef`、`type parameter`、`constructor`、`factory`、`function`、`field`、`parameter`、或者`variable`声明之前使用，也可以在`import`或者`export`指令之前使用，使用反射可以再运行时获取元数据信息。

## 五、总结

Dart语法和Java语法很像，很容易上手，理解很简单，用一天就把语法整理了一遍，我为什么要学习`Dart`语法呢？一开始解释很清楚了，无非就是把根基打稳。学什么一定要带有目的性去学，下面直接上一张图：



![带有目的性去学](https://user-gold-cdn.xitu.io/2019/2/7/168c7c1a7db222fa?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



学习资源：

1. [起步-Dart](https://link.juejin.im/?target=http%3A%2F%2Fdart.goodev.org%2Fguides%2Fget-started)
2. [为java开发人员准备的Dart教程](https://link.juejin.im/?target=https%3A%2F%2Fcodelabs.flutter-io.cn%2Fcodelabs%2Ffrom-java-to-dart-cn%2Findex.html%236)

## 六、额外知识

Flutter有四种运行模式：Debug、Release、Profile和test。

1. Debug：Debug模式可以在真机和模拟器上同时运行：会打开所有的断言，包括debugging信息、debugger aids（比如observatory）和服务扩展。
2. Release：Release模式只能在真机上运行，不能在模拟器上运行：会关闭所有断言和debugging信息，关闭所有debugger工具。
3. Profile：Profile模式只能在真机上运行，不能在模拟器上运行：基本和Release模式一致。
4. test： headless test模式只能在桌面上运行：基本和Debug模式一致。

[Flutter四种运行方式](https://link.juejin.im/?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2F4db65478aaa3)