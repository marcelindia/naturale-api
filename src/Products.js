const { connectDb } = require("./ConnectDb");
const { response } = require("express");

exports.createProduct = (req, res) => {
  const newProduct = req.body;
  const db = connectDb();
  db.collection("products")
    .add(newProduct)
    .then((doc) => res.status(201).send(doc.id))
    .catch((err) => res.status(500).send(err));
};

exports.getProduct = (req, res) => {
  const db = connectDb();
  db.collection("products")
    .get()
    .then((snapshot) => {
      const productList = snapshot.docs.map((doc) => {
        let product = doc.data();
        product.id = doc.id;
        return product;
      });
      res.send(productList);
    })
    .catch((err) => res.status(500).send(err));
};

exports.getProductById = (req, res) => {
  const db = connectDb();
  db.collection("products")
    .get()
    .then((snapshot) => {})
    .catch((err) => res.status(500).send(err));
};

exports.updateProduct = (req, res) => {
  product.id = doc.id;
  const db = connectDb();
  db.collection("products")
    .doc(product.id)
    .update()
    .then((doc) => res.status(202).send(doc))
    .catch((err) => res.status(500).send(err));
};
