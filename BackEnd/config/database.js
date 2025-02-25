const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const connectDatabase = () => {

    mongoose.connect(process.env.BD_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase