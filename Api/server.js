let express = require('express')
let userRoute = require('./routes/user')
let authRoute = require('./routes/auth')
let app = express()


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(authRoute)
app.use(userRoute)


app.get('/', (req, res) => {
    res.status(200).json(
        {
            status: 'success',
            data: 'Done'
        }
    )
})


app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json(
        {
            status: 'success',
            data: req.body
        }
    )
})


app.listen(3000, () => {
    console.log(`Gonna run`);
})