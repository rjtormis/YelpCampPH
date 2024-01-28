import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

const DB = process.env.DB;
/**
 * @param fn
 * @description a function that wraps async/await error
 * @returns function
 */

export async function ConnectMongoDB() {
  if (DB !== undefined) {
    try {
      await mongoose.connect(DB);
    } catch (e) {
      console.log("Failed to set up connection.", e);
    }
  } else {
    throw Error("Database connection missing.");
  }
}

export function wrapper(fn: Function) {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      fn(req, res, next);
    } catch (e) {
      next(e);
    }
  };
}

/**
 * A Custom Error class.
 */
export class CustomError extends Error {
  status: number;
  field?: string;
  constructor(message: string, status: number, field?: string) {
    super();
    this.field = field || "";
    this.status = status;
    this.message = message;
  }
}

// Cross Origin Resource Options
export const CORS_Options = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};
