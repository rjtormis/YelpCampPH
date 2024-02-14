import User from "@models/user";
import { Request, Response } from "express";
import { wrapper } from "utilities/general";

/**
 * General rule of thumb that I considered to have this route is to have a more
 * scalabe application where we do not need to implement or create complex logic solutions
 * on the /users end route.
 */

export const getSpecificProfile = wrapper(async (req: Request, res: Response) => {
  const { id } = req.params;

  const queryUser = await User.findById(id);

  return res.status(200).json({ user: queryUser });
});

export const updateSpecificProfile = wrapper(async (req: Request, res: Response) => {
  const { id } = req.params;

  // TODO: Handle some logic here.
  const updateUser = await User.findByIdAndUpdate(id, {
    ...req.body,
  });

  return res.status(200).json({ message: "Profile updated successfully.", user: updateUser });
});
