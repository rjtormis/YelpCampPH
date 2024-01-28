import { Schema, model } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: false,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    enum: ["EMAIL", "GOOGLE", "FACEBOOK"],
    required: [true, "Please input a provider."],
    validate: {
      validator: function (provider: string) {
        return ["EMAIL", "GOOGLE", "FACEBOOK"].includes(provider);
      },
      message: "Invalid provider.",
    },
  },
  password: { type: String, default: "Not Applicable" },
});

const User = model("User", userSchema);
export default User;
