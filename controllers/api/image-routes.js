const router = require('express').Router();
const path = require('path');
const { uploadFile, getFileStream } = require('../../s3');
const { Image } = require('../../models');

const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);

const multer = require('multer');
const upload = multer({ dest: '../../public/assets/images'});

// const storage = multer.diskStorage({
//     destination: (req, file, callBack) => {
//         callBack(null, './public/assets/images/')     // './public/assets/images/' directory name where save the file
//     },
//     filename: (req, file, callBack) => {
//         callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
//   });
  
//   const upload = multer({
//     storage: storage
//   });

router.get('/', (req, res) => {
    Image.findAll().then(images => {
        console.log("images" + images);
        res.json(images);
    });
});

//display image
router.get('/:key', (req, res) => {
    const key = req.params.key;
    const readStream = getFileStream(key);

    readStream.pipe(res);
});

// /api/images
// Multer handles the images that are received by the server ( make sure the name of the input is the same as upload.single('image'))
router.post("/", upload.single('image'), async (req, res) => {
    // req.file gives you the file name of the image sent
    const file = req.file;
    console.log(file);
    // if no file was sent respond no file upload
    if (!file) {
        res.send("No file upload");
    // if file was sent, upload it to the AWS server
    } else {
        console.log(file.filename);
        const result = await uploadFile(file);
        await unlinkFile(file.path);
        console.log(result);
        Image.create({
            file_src: result.key
        });
        res.send({imagePath: `/images/${result.key}`});
    }
});


module.exports = router;