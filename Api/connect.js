let mySql = require('mysql')


var mainConnection = mySql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        database: 'newmk'
    }
)

mainConnection.connect(() => {
    // if (err) throw err;
    console.log("Connected!");
})



module.exports = mainConnection;