import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();
export const PORT = parseInt(process.env.PORT as string);

export default app;
