import User from "@models/user";
import { Request, Response, NextFunction } from "express";
import { wrapper } from "utilities/general";

/**
 * TODO:
 * Create Middleware to handle if user exists.
 * Create middleware to handle session. Check if the current session == the updated user or deleted user entity.
 */

/**
 * Creates new User
 */
export const createUser = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  //TODO: Handle Providers here.
  const { emailAddress, password, provider } = req.body;

  await new User({ emailAddress, password, provider }).save();

  return res.status(201).json({ message: "Account successfully created.", status: 200 });
});

export const updateUser = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  // TODO: Handle multiple fields.

  const { id, name, emailAddress, password } = req.body;

  const existingUser = await User.findById(id);
  if (!existingUser) throw Error("User does not exists");

  const updateUser = await User.findByIdAndUpdate({
    name,
    emailAddress,
    password,
  });

  return res.status(200).json({ message: "User upated successfully", user: updateUser });
});

/**
 * Delete user
 */
export const deleteUser = wrapper(async (req: Request, res: Response) => {
  const { id } = req.body;

  const existingUser = await User.findById(id);

  if (existingUser) throw Error("User does not exists.");

  await User.findByIdAndDelete(id);

  return res.status(200).json({ message: "User successfully deleted." });
});
