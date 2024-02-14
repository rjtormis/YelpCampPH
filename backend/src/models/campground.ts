import { Schema, model } from "mongoose";

const campgroundSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Please provide a campground name"],
    },
    location: {
      type: String,
      required: [true, "Please provide campground location"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    images: {
      type: [String],
      required: [true, "Please provide atleast 5 images in the campground."],
    },
    amenities: {
      type: [String],
      required: [true, "Please provide atleast one amenities in the campground."],
    },
    activities: {
      type: [String],
      required: [true, "Please provide atleast one activities in the campground."],
    },
  },
  { timestamps: true }
);

const Campground = model("Campground", campgroundSchema);
export default Campground;
