import {
  createCampground,
  deleteSpecificCampground,
  getAllCampground,
  getSpecificCampground,
  updateSpecificCampground,
} from "@controllers/campground";
import { campgroundIdValidator, campgroundValidator } from "@middlewares/campground";
import { Router } from "express";

const campgroundRouter = Router();

campgroundRouter.route("/").get(getAllCampground).post(campgroundValidator, createCampground);
campgroundRouter
  .route("/:id")
  .get(campgroundIdValidator, getSpecificCampground)
  .patch(campgroundValidator, updateSpecificCampground)
  .delete(campgroundIdValidator, deleteSpecificCampground);

export default campgroundRouter;
