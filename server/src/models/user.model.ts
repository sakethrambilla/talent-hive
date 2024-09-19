import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: String, require: true, unique: true },
    password_hash: { type: String, require: true },
    username: { type: String, require: true },
    phone_number: { type: String, require: true, unique: true },
    profile_id: { type: String },

    is_user_active: { type: Boolean, default: false },
    is_email_verified: { type: Boolean, default: false },
    is_phone_verified: { type: Boolean, default: false },

    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    profile_picture_url: { type: String },
    gender: { type: String, require: true },
    date_of_birth: { type: Date, require: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;
