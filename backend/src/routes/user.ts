import { createUser } from "@controllers/user";
import { generalErrorHandlerMiddleware } from "@middlewares/error";
import { userValidator } from "@middlewares/user";
import { Router } from "express";

const userRoutes = Router();

userRoutes.route("/").post(userValidator, generalErrorHandlerMiddleware, createUser);
userRoutes.route("/:id");

export default userRoutes;
