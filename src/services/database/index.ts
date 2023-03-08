import Mongoose from "mongoose";
import { RoomSchema } from "./schemas/room";
import { UserSchema } from "./schemas/user";

if (!process.env.MONGOOSE_URI) {
  throw new Error('Invalid environment variable: "MONGOOSE_URI"');
}

const databaseUrl = process.env.MONGOOSE_URI;

Mongoose.connect(databaseUrl, {});

export const User = Mongoose.model("User", UserSchema);
export const Room = Mongoose.model("Room", RoomSchema);
