const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { connectDb } = require("./src/ConnectDb");
const PORT = process.env.PORT || 3000;

const { createUser, getUser, updateUser } = require("./src/users");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/users", createUser);
app.get("/users", getUser);
// app.get("/users/:userId", getUserById);
app.get("/products", getProduct);
app.patch("/products", updateProduct);
app.patch("/users/:userId", updateUser);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

exports.app = functions.https.onRequest(app);
