const express = require('express');
const router = express.Router();
const { upload } = require('../middleware/imageupload');
const Image = require('../model/imagemodel');


router.post('/upload', upload.single('image'), (req, res) => {

    console.log(req.file);
    const img = new Image({
        image: req.file
    });
    res.json({
        success: "image uploaded successfully"

    });

})





module.exports = router;