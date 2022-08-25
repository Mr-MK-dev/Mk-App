let connection = require('../connect');
let utils = require('../utils/auth');



exports.signup = (req, res) => {

    const fisrt_name = req.body.fisrt_name
    const last_name = req.body.last_name
    const username = req.body.username
    const e_mail = req.body.e_mail
    const role_id = req.body.role_id
    const password = req.body.password
    const gender_id = req.body.gender_id

    let sql = 'INSERT into signup(id,fisrt_name,last_name,username,e_mail,password,role_id,gender_id) values (?,?,?,?,?,?,?,?);'
    // let newUser = new utils.UserRegister(fisrt_name, last_name, username, e_mail, password, role_id, gender_id)
    // newUser.signUp().
        // then(result => {
        //     res.json({
        //         result
        //     });
        // }).catch(
        //     error => {
        //         console.log(err);
        //     }
        // )
    connection.execute(sql, [null, fisrt_name, last_name, username, e_mail, password, role_id, gender_id])
        .then(result => {
            res.json({
                result
            });
        }).catch(
            error => {
                console.log(err);
            }
        )

    // let newUser = new UserRegister(fisrt_name, last_name, username, e_mail, password, role_id, gender_id)
    // newUser


}

