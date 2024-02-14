import { Request, Response, NextFunction, json, urlencoded } from "express";
import morgan from "morgan";
import app, { PORT } from "utilities/express";
import cors from "cors";
import { ConnectMongoDB } from "utilities/general";

// General Routes
import userRoutes from "@routes/user";
import { generalErrorHandlerMiddleware } from "@middlewares/error";
import campgroundRouter from "@routes/campground";
import profileRouter from "@routes/profile";

ConnectMongoDB();

app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);

app.use("/users", userRoutes);
app.use("/campgrounds", campgroundRouter);
app.use("/profile", profileRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message, field } = err;

  if (field) {
    return res.status(status).json({ status: status, field: field, message: message });
  } else {
    return res.status(status).json({ status: status, message: message });
  }
});

app.listen(PORT, () => {
  console.log(`Actively listening on PORT ${PORT}`);
});
