import mongoose from "mongoose";
const IncomesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    financeType: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    transactionType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.models.Incomes ||
  mongoose.model("Incomes", IncomesSchema);
