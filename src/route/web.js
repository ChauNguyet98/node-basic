import express from "express";
import homeController from "../controller/homeController";
import aboutController from "../controller/aboutController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/users/detail/:id", homeController.detailUser);

  router.post("/users/create", homeController.createNewUser);

  router.post("/users/update/:id", homeController.updateUser);

  router.post("/users/delete", homeController.deleteUser);

  router.get("/about", aboutController.getAboutPage);

  return app.use("/api/v1", router);
};

export default initWebRoute;
