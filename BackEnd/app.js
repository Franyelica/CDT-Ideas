const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/errors');
const bodyparser = require('body-parser');
const fileUpload = require('express-fileupload')
const path = require('path');
const dotenv = require('dotenv')


//Configuran la subida del archivo de conf

dotenv.config({ path: 'backend/config/config.env'})

app.use(express.json({limit: '100mb'}));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());


//Import all routes patents
const patents = require('./routes/patent');
//Import all routes auth
const auth = require('./routes/auth');

//Use the route in postman, patents table
app.use('/api', patents)
//Use the route in postman, auth table
app.use('/api', auth)

if(process.env.NODE_ENV === 'PRODUCTION'){
    app.use(express.static(path.join(__dirname,'../frontend/dist')))
    app.get('*',(req,res) =>{
        res.sendFile(path.resolve(__dirname,'../frontend/dist/index.html'))
    })
}

//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app