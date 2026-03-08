import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    type: String,
  },
  image: {
    type: String,
    default: null,
  },
});

export const userModel =
  mongoose.models.users ?? mongoose.model("users", userSchema);
