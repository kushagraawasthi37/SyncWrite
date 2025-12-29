import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
      lowercase: true,
    },

    password_hash: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      default: null,
    },

    last_login: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, minimize: false }
);

export const User = mongoose.model("User", userSchema);
