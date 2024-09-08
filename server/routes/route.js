const express=require("express");
const router=express.Router();
const multer = require('multer');
const path = require('path');

const {rolesignup,rolesignin}=require("../controllers/rolesignup")
const {uploadImage,getAllUploads,getmyUploads}=require("../controllers/upload")

const {setprofile,getprofile,editprofile,getotherprofile}=require("../controllers/setprofile")
const {messages} =require('../controllers/messages')
const {myprofile} =require('../controllers/myprofile')
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        return cb(null,'./uploads/')
    }
    ,
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" +Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

router.post('/api/upload', upload.single('image'), uploadImage);




router.post("/api/signup",rolesignup);
router.post("/api/signin",rolesignin);
router.get('/api/alluploads', getAllUploads);
router.post('/api/myuploads', getmyUploads);
router.post('/api/getprofile', getprofile);
router.post('/api/getotherprofile', getotherprofile);
router.post('/api/editprofile',editprofile);
router.post('/api/message',messages);
router.post('/api/myprofile',myprofile);


router.post('/api/setprofile', upload.single('setimage'),setprofile);






module.exports= router; 