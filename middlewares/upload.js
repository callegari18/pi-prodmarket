const multer = require('multer');
const multerConfig = require('../config/multer');
const upload = multer(multerConfig);

module.exports = upload.single('photo');