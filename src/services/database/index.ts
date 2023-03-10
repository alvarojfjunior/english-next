import Mongoose from "mongoose";
import { RoomSchema } from "./schemas/room";
import { UserSchema } from "./schemas/user";
import { PaymentSchema } from "./schemas/payment";
import { DossieSchema } from "./schemas/dossie";

if (!process.env.MONGOOSE_URI) {
  throw new Error('Invalid environment variable: "MONGOOSE_URI"');
}

const databaseUrl = process.env.MONGOOSE_URI;

Mongoose.connect(databaseUrl, {});

export const User = Mongoose.model("User", UserSchema);
export const Room = Mongoose.model("Room", RoomSchema);
export const Payment = Mongoose.model("Payment", PaymentSchema);
export const Dossie = Mongoose.model("Dossie", DossieSchema);
