import express from "express";
import homeController from "../controller/homeController";
import aboutController from "../controller/aboutController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/about", aboutController.getAboutPage);

  return app.use("/api/v1", router);
};

export default initWebRoute;
