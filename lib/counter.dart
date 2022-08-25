import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart';

class FetchApi extends StatefulWidget {
  const FetchApi({Key? key}) : super(key: key);

  @override
  State<FetchApi> createState() => _FetchApiState();
}

class _FetchApiState extends State<FetchApi> {
  final url = 'http://localhost:3000/post';
  var myList = [];
  void fetchData() async {
    final response = await get(Uri.parse(url));
    final jsonData = jsonDecode(response.body) as List;
    setState(() {
      myList = jsonData;
    });
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    fetchData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView.builder(
          itemCount: myList.length,
          itemBuilder: (context, i) {
            final post = myList[i];
            return Text(
                "My posts mk : ${post["content"]},\n The id: ${post["id"]}");
          }),
    );
  }
}
