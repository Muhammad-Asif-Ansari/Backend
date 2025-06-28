import express from "express";
import multer from "multer";

const storeFile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname + '-' + uniqueSuffix)
  }
})

const uploadFile = multer({ storage :storeFile})

const router = express.Router()
router.post('/', uploadFile.single("file"), function (req, res, next) {
res.send({message:"file uploaded Successfully"})
})

export default router