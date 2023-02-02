import multer from "multer";

let getUploadFilePage = (req, res) => {
  return res.render("upload-file.ejs");
};

// 'file' is the name of our file input field in the HTML form
const upload = multer().single("file");

let uploadFile = (req, res) => {
  upload(req, res, function (err) {
    // req.file contains information of uploaded file
    // req.body contains information of text fields, if there were any

    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } else if (!req.file) {
      return res.send("Please select an image to upload");
    } else if (err instanceof multer.MulterError) {
      return res.send(err);
    } else if (err) {
      return res.send(err);
    }

    // Display uploaded image for user validation
    res.send(
      `You have uploaded this image: <hr/><img src="/images/${req.file.filename}" width="500"><hr /><a href="/api/v1/upload">Upload another image</a>`
    );
  });
};

module.exports = {
  getUploadFilePage,
  uploadFile,
};
