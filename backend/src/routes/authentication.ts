import { authenticate } from "@controllers/authentication";
import { authenticationValidator } from "@middlewares/authenticate";
import { Router } from "express";

const authRouter = Router();

authRouter.route("/").post(authenticationValidator, authenticate);

export default authRouter;
