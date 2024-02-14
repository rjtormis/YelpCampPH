import { Router } from "express";

const profileRouter = Router();

profileRouter.route("/:id").get();
