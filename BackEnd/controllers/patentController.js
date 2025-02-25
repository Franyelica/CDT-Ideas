const Patent = require('../models/patent')
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');
const cloudinary = require('cloudinary')

//create new patent => /api/admin/patent/new
exports.newPatent = catchAsyncErrors(async (req, res, next) => {

    let images = []
    if (typeof req.body.images === 'string') {
        images.push(req.body.images)
    } else {
        images = req.body.images
    }

    let imagesLinks = [];

    for (let i = 0; i < images?.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: 'patens'
        });

        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url
        })
    }

    req.body.images = imagesLinks

    req.body.user = req.user.id;

    const patent = await Patent.create(req.body);

    res.status(201).json({
        success: true,
        patent
    })
})

//Get all patents ------ /api/patents?keyword=cuadro

exports.getPatents = catchAsyncErrors(async (req, res, next) => {

    const resPerPage = 8;
    const patentsCount = await Patent.countDocuments()

    const apiFeatures = new APIFeatures(Patent.find(), req.query)
        .search()
        .filter()


    let patents = await apiFeatures.query;
    let filteredPatentsCount = patents.length;

    apiFeatures.pagination(resPerPage)
    patents = await apiFeatures.query.clone();


    if (patentsCount == 0) {
        return next(new ErrorHandler('No hay patentes', 404));

    }

    res.status(200).json({
        success: true,
        patentsCount,
        resPerPage,
        filteredPatentsCount,
        patents
    })



})


//Get all admin patents ------ /api/admin/patents

exports.getAdminPatents = catchAsyncErrors(async (req, res, next) => {

    const patents = await Patent.find();

    res.status(200).json({
        success: true,
        patents
    })



})


//Get single product details ------- /api/product/:id

exports.getSinglePatent = catchAsyncErrors(async (req, res, next) => {
    const patent = await Patent.findById(req.params.id);

    if (!patent) {
        return next(new ErrorHandler('Patente no encontrada', 404));
    }

    res.status(200).json({
        message: true,
        patent
    })
})

//Update product --------- /api/admin/product

exports.updatePatent = catchAsyncErrors(async (req, res, next) => {

    let patent = await Patent.findById(req.params.id);

    if (!patent) {
        return next(new ErrorHandler('Patente no encontrada', 404));

    }


    let images = []
    if (typeof req.body.images === 'string') {
        images.push(req.body.images)
    } else {
        images = req.body.images
    }

    if (images !== undefined) {
        
        for (let i = 0; i < patent.images.length; i++) {
            const result = await cloudinary.v2.uploader.destroy(patent.images[i].public_id)
        }

        let imagesLinks = [];

        for (let i = 0; i < images?.length; i++) {
            const result = await cloudinary.v2.uploader.upload(images[i], {
                folder: 'patens'
            });

            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url
            })
        }

        req.body.images = imagesLinks
    }




    patent = await Patent.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        patent
    })
})


//Delete product --------- /api/admin/product/:id

exports.deletePatent = catchAsyncErrors(async (req, res, next) => {

    const patent = await Patent.findById(req.params.id);

    if (!patent) {
        return next(new ErrorHandler('Producto no encontrado', 404));

    }

    //Eliminar imagenes asociadas con la patente

    for (let i = 0; i < patent.images.length; i++) {
        const result = await cloudinary.v2.uploader.destroy(patent.images[i].public_id)
    }

    await patent.remove();

    res.status(200).json({
        success: true,
        message: 'Patente eliminada'
    })
})