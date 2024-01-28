import User from "@models/user";
import { Request, Response, NextFunction } from "express";
import { wrapper } from "utilities/general";

/**
 * Creates new User
 */
export const createUser = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  //TODO: Handle Providers here.
  const { emailAddress, password } = req.body;

  const userExists = await User.findOne({ emailAddress: emailAddress });

  if (userExists) return res.status(409).json({ message: "Account already exists", status: 409 });

  const newUser = await new User({ emailAddress, password }).save();

  return res.status(201).json({ message: "Account successfully created.", status: 200 });
});
