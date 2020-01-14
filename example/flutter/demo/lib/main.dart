import 'package:flutter/material.dart';

// void main() => runApp(MyApp());
void main() => runApp(StatefulGroup());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            '欢迎来到flutter'
          ),
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
                style: TextStyle(
                  fontSize: 30
                ),
              ),
              Icon(
                Icons.person_add,
                size: 50,
                color: Colors.red
              ),
              CloseButton(),
              BackButton(),
              Chip(
                avatar: Icon(Icons.people),
                label: Text('StatelessWidget与基组件'),
              ),
              Divider(
                height: 10,
                indent: 10,
                color: Colors.orange,
              ),
              Card(
                color: Colors.blue,
                elevation: 5,
                margin: EdgeInsets.all(10),
                child: Container(
                  padding: EdgeInsets.all(10),
                  child: Text(
                    'I am Card',
                    style: TextStyle(
                      fontSize: 24
                    )
                  ),
                ),
              ),
              AlertDialog(
                title: Text('Dialog'),
                content: Text('Flutter'),
              )
            ],
          ),
        ),
      ),
    );
  }
}


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
        primarySwatch: Colors.blue
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
                color: Colors.grey
              ),
              activeIcon: Icon(
                Icons.home,
                color: Colors.blue
              ),
              title: Text(
                '⾸页'
              ),
            ),
            BottomNavigationBarItem(
              icon: Icon(
                Icons.list,
                color: Colors.grey
              ),
              activeIcon: Icon(
                Icons.list,
                color: Colors.blue
              ),
              title: Text(
                '列表'
              ),
            )
          ],
        ),
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
                        'https://www.devio.org/img/avatar.png',
                        width: 100,
                        height: 100,
                      ),
                      TextField(
                        decoration: InputDecoration(
                          contentPadding: EdgeInsets.fromLTRB(5, 0, 0, 0),
                          hintText: '请输入',
                          hintStyle: TextStyle(
                            fontSize: 15,
                          ),
                        ),
                      ),
                      Container(
                        height: 100,
                        margin: EdgeInsets.only(top: 10),
                        decoration: BoxDecoration(
                          color: Colors.lightBlueAccent
                        ),
                        child: PageView(
                          children: <Widget>[
                            _item('Page1', Colors.deepPurple), 
                            _item('Page2', Colors.green), 
                            _item('Page3', Colors.red)
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            onRefresh: _handleRefresh,
          )
          : Text('列表'),
      ),
    );
  }
}

Future<Null> _handleRefresh() async{
  await Future.delayed(Duration(microseconds: 200));
  return null;
}

_item(String title, Color color) {
  return Container(
    alignment: Alignment.center,
    decoration: BoxDecoration(color: color),
    child: Text(
      title,
      style: TextStyle(
        fontSize: 22,
        color: Colors.white,
      ),
    ),
  );
}