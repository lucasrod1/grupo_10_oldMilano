const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images/users'));
    },
    filename: function (req, file, cb) {
        cb(null, "foto" + "-" + Date.now() + path.extname(file.originalname));
    }
})

const uploadFile = multer({ storage })

module.exports = uploadFile;