import Campground from "@models/campground";
import User from "@models/user";
import { body, param } from "express-validator";
import mongoose from "mongoose";

export const campgroundIdValidator = param("id")
  .notEmpty()
  .withMessage("Campground ID should not be empty.")
  .isString()
  .withMessage("Campground ID should be a string.")
  .custom(async (val: string) => {
    if (!mongoose.isValidObjectId(val)) {
      throw new Error("Please provide a valid User ID.");
    }
    const campground = await Campground.findById(val);
    if (!campground) {
      throw new Error("User does not exists.");
    }
    // const campground = await User.findById(val);
    // if (!campground) {
    //   throw new Error("User does not exists.");
    // }
    return true;
  });

export const campgroundValidator = [
  body("name")
    .notEmpty()
    .withMessage("Camp name should not be empty.")
    .isString()
    .withMessage("Camp name should be a string.")
    .custom(async (val: string) => {
      const queryCampground = await Campground.find({ name: val });

      if (queryCampground) throw new Error(`Campground ${val} already exists.`);
      return true;
    }),
  body("location")
    .notEmpty()
    .withMessage("Camp location should not be empty.")
    .isString()
    .withMessage("Camp location should be a string."),

  // TODO: Do we want to add camp type here such as PUBLIC , PRIVATE?
  body("owner")
    .notEmpty()
    .withMessage("Camp owner should not be empty.")
    .isString()
    .withMessage("Camp owner should be a string in a form of id.")
    .custom(async (val: string) => {
      const queryUser = await User.findById(val);

      if (!queryUser) throw new Error("User does not exists");
      return true;
    }),

  body("images")
    .notEmpty()
    .withMessage("Camp images should not be empty.")
    .isArray()
    .withMessage("Camp images should be an array of images referring to their respective links."),
  body("amenities")
    .notEmpty()
    .withMessage("Camp amenities should not be empty.")
    .isArray()
    .withMessage("Camp amenities should be an array of string."),
  body("activities")
    .notEmpty()
    .withMessage("Camp activities should not be empty.")
    .isArray()
    .withMessage("Camp activities should be an array of string."),
];
