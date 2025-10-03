const express = require("express");
const authRoutes = require("./routes/auth.route");
require("dotenv").config();
var cookieParser = require("cookie-parser");
var cors = require("cors");
const { connection } = require("./config/db");
const ProductsRoutes = require("./routes/product.route");
const addtocartRoutes = require("./routes/addtocart.route");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use("/api", ProductsRoutes);
app.use("/auth", authRoutes);
app.use("/addtocart", addtocartRoutes);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`Server is listening on port ${process.env.PORT}`);
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
});
