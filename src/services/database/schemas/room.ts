import Mongoose from "mongoose";

export let RoomSchema: Mongoose.Schema;
try {
  RoomSchema = Mongoose.model("Room").schema;
} catch (error) {
  RoomSchema = new Mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      capacity: {
        type: Number,
        required: true,
        default: 4,
      },
      status: {
        type: Number,
        required: true,
        default: 1,
      },
    },
    { collection: "rooms", timestamps: true }
  );
}
