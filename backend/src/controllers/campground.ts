import Campground from "@models/campground";
import { Request, Response, query } from "express";
import { wrapper } from "utilities/general";

/**
 * Queries all campgrounds.
 */
export const getAllCampground = wrapper(async (req: Request, res: Response) => {
  const getAllCampground = await Campground.find({});
  return res.status(200).json({ campgrounds: getAllCampground });
});

/**
 * TODO:
 * Create middleware to check if campground exists (id)
 */
export const createCampground = wrapper(async (req: Request, res: Response) => {
  const campgroundExists = await Campground.findOne({});

  if (campgroundExists) throw Error("Campground already exists");

  await new Campground({ ...req.body }).save();

  return res.status(201).json({ message: "Campground created successfully. " });
});

// ==================================== Campground with ID ====================================

export const getSpecificCampground = wrapper(async (req: Request, res: Response) => {
  const { id } = req.params;

  const queryCampground = await Campground.findById(id);
  return res.status(200).json({ message: queryCampground });
});

export const updateSpecificCampground = wrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, location, owner, images, amenities, activities } = req.body;
  const queryCampground = await Campground.findById({ id });

  if (!queryCampground) throw Error("Campground does not exists");

  const updateCampground = await Campground.findByIdAndUpdate(id, {
    name,
    location,
    owner,
    images,
    amenities,
    activities,
  });

  return res
    .status(200)
    .json({ message: "Campground updated successfully.", campground: updateCampground });
});

export const deleteSpecificCampground = wrapper(async (req: Request, res: Response) => {
  const { id } = req.params;

  const queryCampground = await Campground.findById({ id });

  if (!queryCampground) throw Error("Campground does not exists");

  await Campground.findByIdAndDelete({ id });

  return res.status(200).json({ message: "Campground deleted successfully." });
});
