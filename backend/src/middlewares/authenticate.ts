import { body } from "express-validator";
import bcrypt from "bcrypt";

import User from "@models/user";

export const authenticationValidator = [
  body("emailAddress")
    .notEmpty()
    .withMessage("Email field should not be empty.")
    .isEmail()
    .withMessage("Field should be a valid email address.")
    .custom(async (val: string) => {
      const user = await User.findOne({ emailAddress: val });

      if (!user) throw Error("User does not exists.");
      return true;
    }),
  body("password")
    .notEmpty()
    .withMessage("Please type your password")
    .isString()
    .withMessage("Password should be a string.")
    .custom(async (val: string, { req }) => {
      const { emailAddress } = req.body;

      const user = await User.findOne({ emailAddress });
      const hashed = await bcrypt.compare(val, user!.password);

      if (!hashed) throw Error("Account does not exists or invalid user name and password.");
      return true;
    }),
];

export const jwtAuthenticate = [];
