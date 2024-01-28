import { Request, Response, NextFunction, json, urlencoded } from "express";
import morgan from "morgan";
import app, { PORT } from "utilities/express";
import cors from "cors";
import { ConnectMongoDB } from "utilities/general";

// General Routes
import userRoutes from "@routes/user";

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

app.use("/user", userRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message, field } = err;

  if (field) {
    res.status(status).json({ status: status, field: field, message: message });
  } else {
    res.status(status).json({ status: status, message: message });
  }
});

app.listen(PORT, () => {
  console.log(`Actively listening on PORT ${PORT}`);
});
