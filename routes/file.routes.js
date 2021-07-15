const fileController =require('../controllers/file.controller.js');

const express=require('express');
const router=express.Router();

router.use('/path', fileController.returnDirInfo);

module.exports=router;