const express = require("express");
const multer = require("multer");
const multerconfig = require("./config/multer");

const routes = express.Router();

const BoxController = require("./controllers/BoxController");
const FileController = require("./controllers/FileController");

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);

routes.post("/boxes/:id/files", multer(multerconfig).single("file"), FileController.store);

module.exports = routes;
