import { SK, wrapper } from "utilities/general";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "@models/user";

export const authenticate = wrapper(async (req: Request, res: Response) => {
  const { emailAddress, password } = req.body;
  const user = await User.findOne({ emailAddress: emailAddress });

  const signedJWT = jwt.sign({ emailAddress: user!.emailAddress }, SK, { expiresIn: "1hr" });

  return res.status(200).json({ user: user, token: signedJWT });
});
