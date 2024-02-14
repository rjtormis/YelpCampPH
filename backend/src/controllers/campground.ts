import Campground from "@models/campground";
import { Request, Response } from "express";
import { wrapper } from "utilities/general";

/**
 * TODO:
 * Create middleware to check if campground exists (id)
 */
export const createCampground = wrapper(async (req: Request, res: Response) => {
  const campgroundExists = await Campground.findOne({
    name,
  });

  if (campgroundExists) throw Error("Campground already exists");

  await new Campground({ ...req.body }).save();

  return res.status(201).json({ message: "Campground created successfully. " });
});

// TODO: Handle modifications here.
export const updateCampground = wrapper(async (req: Request, res: Response) => {
  const { id, name, location, owner, images, amenities, activities } = req.body;
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

export const deleteCampground = wrapper(async (req: Request, res: Response) => {
  const { id } = req.body;

  const queryCampground = await Campground.findById({ id });

  if (!queryCampground) throw Error("Campground does not exists");

  await Campground.findByIdAndDelete({ id });

  return res.status(200).json({ message: "Campground deleted successfully." });
});
