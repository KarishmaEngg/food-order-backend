import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected for seeding"))
  .catch(err => console.log(err));

const seedProducts = async () => {
  await Product.deleteMany({});
  
  const sampleProducts = [
    {
      name: "Cheese Pizza",
      image: "https://source.unsplash.com/400x300/?pizza",
      price: 299,
      category: "Pizza"
    },
    {
      name: "Paneer Butter Masala",
      image: "https://source.unsplash.com/400x300/?paneer",
      price: 250,
      category: "Indian"
    },
    {
      name: "Butter Chicken",
      image: "https://source.unsplash.com/400x300/?butter-chicken",
      price: 320,
      category: "Indian"
    },
    {
      name: "Veg Burger",
      image: "https://source.unsplash.com/400x300/?burger",
      price: 150,
      category: "Burger"
    }
  ];

  await Product.insertMany(sampleProducts);
  console.log("Sample products inserted");
  process.exit();
};

seedProducts();
