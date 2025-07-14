import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const newOrder = new Order({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      paymentMethod: req.body.paymentMethod,
      upiId: req.body.upiId,
      cardNumber: req.body.cardNumber,
      expiryDate: req.body.expiryDate,
      cvv: req.body.cvv,
      totalAmount: req.body.totalAmount,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully" });
  } catch (err) {
    console.error("❌ Error saving order:", err);
    res.status(500).json({ message: "Error saving order" });
  }
});

export default router;
