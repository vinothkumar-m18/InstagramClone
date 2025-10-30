import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits:{fileSize:10*1024*1024},
    fileFilter:(req, file, cb)=>{
        const fileTypes = /jpeg|jpg|png|mp4/;
        const extNames = fileTypes.test(file.originalname.toLowerCase());
        const mimeTypes = fileTypes.test(file.mimetype);
        if(extNames && mimeTypes) return cb(null, true);
        cb(new Error('only images and mp4 videos allowed'));
    }
})
export default upload;