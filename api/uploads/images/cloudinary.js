require('dotenv').config()
const cloudinary = require('cloudinary').v2;


module.exports={
    cloudinaryUpload
}

function cloudinaryUpload(req, res, next){
    let uploads = {};
    cloudinary.uploader.unsigned_upload(`${req.name}`, {tags: 'sample'})
        .then(image => {
            console.log('image', image)
            next();
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: 'error uploading image',
                error
            })
        })
}
