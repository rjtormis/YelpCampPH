import User from "@models/user";
import { Request, Response, NextFunction } from "express";
import { wrapper } from "utilities/general";

/**
 * Creates new User
 */
export const createUser = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  //TODO: Handle Providers here.
  const { emailAddress, password, provider } = req.body;

  await new User({ emailAddress, password, provider }).save();

  return res.status(201).json({ message: "Account successfully created.", status: 200 });
});

export const updateUser = wrapper(async (req: Request, res: Response, next: NextFunction) => {});
