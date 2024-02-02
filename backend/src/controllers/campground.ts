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

export const deleteCampground = wrapper(async (req: Request, res: Response) => {
  const { id } = req.body;
});
