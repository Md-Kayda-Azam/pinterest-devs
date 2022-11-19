import mongoose from "mongoose";

// create student schema
const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    sur_name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      trim: true,
      default: "",
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    mobile: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Custom"],
    },
    age: {
      type: String,
      trim: true,
      required: true,
    },
    profile_photo: {
      type: String,
      default: null,
    },
    about: {
      type: String,
      default: null,
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    block: {
      type: Array,
      default: [],
    },
    posts: {
      type: Array,
      default: [],
    },
    isActivate: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// export model
export default mongoose.model("User", userSchema);
