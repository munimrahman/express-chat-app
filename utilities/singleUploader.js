const multer = require("multer");
const path = require("path");
const createError = require("http-errors");

const uploader = (
  subFolderPath,
  allowedFileTypes,
  maxFileSize,
  errorMessage
) => {
  // File upload folder
  const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subFolderPath}/`;

  // define the storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();

      cb(null, fileName + fileExt);
    },
  });

  // preapre the final multer upload object
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: maxFileSize,
    },
    fileFilter: (req, file, cb) => {
      if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(createError(errorMessage));
      }
    },
  });

  return upload;
};

module.exports = uploader;
