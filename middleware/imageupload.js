const express = require('express');
const multer = require('multer');
const path = require('path');

//storage engine
const storage = multer.diskStorage({
    destination: (req, fille, cb) => {
        cb(null, './upload/images')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)

    }
})

const upload = multer({
    storage
})


module.exports = {
    upload

}



