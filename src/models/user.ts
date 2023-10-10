import { model, Schema} from "mongoose";

const UserSchema = new Schema(
  {
    name: {type: String},
    email: {type: String},
    password: {type: String}
  }, 
  {
    timestamps: true,
  }
);

export const UserModel = model("User", UserSchema)