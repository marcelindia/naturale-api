const express = require("express");
const cors = require("cors");
const { connectDb } = require("./src/ConnectDb");
const PORT = process.env.PORT || 3000;

const { createUser, getUser, updateUser, getUserById } = require("./src/users");
const { getProductById, getProduct, updateProduct } = require("./src/Products");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/users", createUser);
app.get("/users", getUser);
app.get("/products", getProduct);
app.get("/users/:userId", getUserById);
app.get("/products/:productId", getProductById);
app.patch("/users/:userId", updateUser);
app.patch("/products/:productId", updateProduct);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
