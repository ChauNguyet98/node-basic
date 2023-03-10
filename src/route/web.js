import express from "express";
import multer from "multer";
import path from "path";
import homeController from "../controller/homeController";
import uploadController from "../controller/uploadController";

var appRoot = require("app-root-path");
let router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, appRoot + "/src/public/images/");
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

let upload = multer({
  storage: storage,
  fileFilter: imageFilter,
});

let uploadMulti = multer({
  storage: storage,
  fileFilter: imageFilter,
}).array("files", 3);

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/users/detail/:id", homeController.detailUser);

  router.post("/users/create", homeController.createNewUser);

  router.post("/users/update/:id", homeController.updateUser);

  router.post("/users/delete", homeController.deleteUser);

  router.get("/upload", uploadController.getUploadFilePage);

  router.post(
    "/upload-file",
    upload.single("file"),
    uploadController.uploadFile
  );

  router.post(
    "/upload-files",
    (req, res, next) => {
      uploadMulti(req, res, (error) => {
        if (
          error instanceof multer.MulterError &&
          error.code === "LIMIT_UNEXPECTED_FILE"
        ) {
          // handle multer file limit error
          res.send("LIMIT_UNEXPECTED_FILE");
        } else if (error) {
          res.send(error);
        } else {
          next();
        }
      });
    },
    uploadController.uploadFiles
  );

  return app.use("/api/v1", router);
};

export default initWebRoute;
