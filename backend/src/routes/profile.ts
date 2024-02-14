import { getSpecificProfile, updateSpecificProfile } from "@controllers/profile";
import { userIdValidator, userValidator } from "@middlewares/user";
import { Router } from "express";

const profileRouter = Router();

profileRouter
  .route("/:id")
  .get(userIdValidator, getSpecificProfile)
  .patch(userValidator, updateSpecificProfile);

export default profileRouter;
