import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  paymentMethod: String,
  upiId: String,
  cardNumber: String,
  expiryDate: String,
  cvv: String,
  totalAmount: Number,
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
