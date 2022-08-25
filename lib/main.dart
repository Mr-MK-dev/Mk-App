import 'package:flutter/material.dart';

import 'package:test/counter.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        // home: Home(),
        initialRoute: '/',
        routes: {
          '/': (context) => FetchApi(),
          // '/result':
        });
  }
}
