import Mongoose from "mongoose";

export let PaymentSchema: Mongoose.Schema;
try {
  PaymentSchema = Mongoose.model("Payment").schema;
} catch (error) {
  PaymentSchema = new Mongoose.Schema(
    {
      userId: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
    { collection: "payment", timestamps: true }
  );
}
