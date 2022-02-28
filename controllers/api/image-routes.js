const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const { Image } = require('../../models');

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/assets/images/')     // './public/assets/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  });
  
  const upload = multer({
    storage: storage
  });

  // /api/images
router.post("/", upload.single('image'), (req, res) => {
    console.log(req.file);
    if (!req.file) {
        res.send("No file upload");
    } else {
        console.log(req.file.filename)
        res.send("Image uploaded")
    }
});

module.exports = router;