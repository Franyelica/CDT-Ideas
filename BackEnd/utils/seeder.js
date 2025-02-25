const Patent = require('../models/patent');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const patents = require('../data/patents.json');

//Setting dotenv file

dotenv.config({ path: 'backend/config/config.env' })

connectDatabase();

const seedPatents = async () => {
    try {

        await Patent.deleteMany();
        console.log('Todas las patentes han sido eliminadas');

        await Patent.insertMany(patents)
        console.log('Todas las patentes han sido insertadas');

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedPatents();