import {
  createUser,
  deleteSpecificUser,
  getSpecificUser,
  updateSpecificUser,
} from "@controllers/user";
import { generalErrorHandlerMiddleware } from "@middlewares/error";
import { userIdValidator, userValidator } from "@middlewares/user";
import { Router } from "express";

const userRoutes = Router();

userRoutes.route("/").post(userValidator, generalErrorHandlerMiddleware, createUser);
userRoutes
  .route("/:id")
  .get(userIdValidator, getSpecificUser)
  .patch(userValidator, updateSpecificUser)
  .delete(userIdValidator, deleteSpecificUser);

export default userRoutes;
