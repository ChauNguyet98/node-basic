let getUploadFilePage = (req, res) => {
  return res.render("upload-file.ejs");
};

let uploadFile = (req, res) => {
  try {
    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } else if (!req.file) {
      return res.send("Please select an image to upload");
    }
  } catch (error) {
    return res.send(error);
  }

  // Display uploaded image for user validation
  res.send(
    `You have uploaded this image: <hr/><img src="/images/${req.file.filename}" width="500"><hr /><a href="/api/v1/upload">Upload another image</a>`
  );
};

let uploadFiles = (req, res) => {
  try {
    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } else if (!req.files) {
      return res.send("Please select an image to upload");
    }
  } catch (error) {
    return res.send(error);
  }

  let result = "You have uploaded these images: <hr />";
  const files = req.files;
  console.log(">> check files", files);

  // Loop through all the uploaded images and display them on frontend
  for (let index = 0; index < files.length; ++index) {
    result += `<img src="/images/${files[index].filename}" width="300" style="margin-right: 20px;">`;
  }
  result += '<hr/><a href="/api/v1/upload">Upload more images</a>';
  res.send(result);
};

module.exports = {
  getUploadFilePage,
  uploadFile,
  uploadFiles,
};
