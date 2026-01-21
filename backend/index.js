const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const categoryRoutes = require("./routes/category");
const brandRoutes = require("./routes/brand");
const productRoutes = require("./routes/product");
const customerRoutes = require("./routes/customer");
const authRoutes = require("./routes/auth");
const ordersRoutes = require("./routes/order");

const { verifyToken, isAdmin } = require("./middleware/auth-middleware");

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("server running");
});

app.use("/category", verifyToken, categoryRoutes);
app.use("/brand", verifyToken, brandRoutes);
app.use("/orders", verifyToken, ordersRoutes);
app.use("/product", verifyToken, productRoutes);
app.use("/customer", verifyToken, customerRoutes);
app.use("/auth", authRoutes);

// async function connectDb() {
//     await mongoose.connect("mongodb://localhost:27017/meanprojet2", {
//         dbName: "meanprojet2"
//     });
//     console.log("mongodb connected ..")
// }

mongoose.connect('mongodb://127.0.0.1:27017/meanprojet2').then(() => {
    console.log("db connected...")
}).catch((error) => { console.log("erreur :", error) })

// connectDb().catch((err) => {
//     console.error(err);
// });
app.listen(port, (err) => {
    console.log("server running on port", port);
});

// app.use("/category", verifyToken, isAdmin, categoryRoutes);
// app.use("/brand", verifyToken, isAdmin, brandRoutes);
// app.use("/product", verifyToken, isAdmin, productRoutes);
// app.use("/customer", verifyToken, isAdmin, customerRoutes);