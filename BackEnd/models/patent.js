const mongoose = require('mongoose')


const patentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor ingrese el nombre de la patente'],
        trim: true,
        maxLength: [150, 'El nombre de la patente excede los 150 caracteres.']
    },
    description: {
        type: String,
        required: [true, 'Por favor ingrese la descripción del producto'],
        maxLength: [200, 'Excede los 200 caracteres.'],


    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Seleccione la categoría para esta patente.'],
        enum: {
            values: [
                'Patente de invención',
                'Patente de modelo de utilidad',
            ],
            message: 'Selecciona una categoría correcta para la patente.'
        }
    },
    Headlines:
    {
        type: String,
        required: true
    },
    Filing: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    inventors: {
        type: String,
        required: true
    },
    pct: {
        type: String,
        required: true
    },
    nationalstage: {
        type: String,
        required: true
    },
    projectcode: {
        type: String
    },
    yearoffiling: {
        type: String
    },
    facult: {
        type: String
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('Patent', patentSchema);