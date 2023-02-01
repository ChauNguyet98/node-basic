import express from "express";
import apiController from "../controller/apiController";

let router = express.Router();

const initApiRoute = (app) => {
  router.get("/users", apiController.getAllUsers);

  router.post("/users", apiController.addUser);

  router.get("/users/:id", apiController.detailUser);

  router.put("/users/:id", apiController.updateUser);

  router.delete("/users/:id", apiController.deleteUser);

  return app.use("/api/v1", router);
};

export default initApiRoute;
