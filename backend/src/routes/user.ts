import { createUser } from "@controllers/user";
import { Router } from "express";

const userRoutes = Router();

userRoutes.route("/").post(createUser);

export default userRoutes;
