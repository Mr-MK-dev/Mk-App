let connection = require('../connect');

exports.getPosts = (req, res) => {
    sql = "SELECT * FROM posts;";
    connection.query(sql, function (err, rows, fileds) {
        if (err) throw err;
        res.send(rows)
    });
}
exports.postPost = (req, res) => {
    sql = "INSERT INTO posts values ('null',?)";

    theValues = req.body.content;
    connection.query(sql, [theValues], function (err, rows, fileds) {
        if (err) throw err;
        res.json(rows)
    });
}


exports.delPost = (req, res) => {

    sql = "Delete from posts where id = ?";
    thePost = req.query.id

    console.log(thePost);

    connection.query(sql, [thePost], (err, rows) => {
        if (err) throw err
        res.json(rows)
    });

}

exports.updatePost = (req, res) => {
    sql = "Update posts set content = ? where id = 1 ";
    
   let upadtedData = [req.body.content ]

    // console.log(thePost);

    connection.query(sql, [upadtedData], (err, rows) => {
        if (err) throw err
        res.json(rows)
    });
}
//     exports.updateSelectedPost = (req, res) => {
//         sql = "Update posts set content = ? where id =  ?";
//         thePost = req.query.id
//         thePost = req.query.id
    
//         console.log(thePost);
    
//         connection.query(sql, [thePost], (err, rows) => {
//             if (err) throw err
//             res.json(rows)
//         });
// }