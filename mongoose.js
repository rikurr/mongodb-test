const mongoose = require('mongoose');

const Product = require('./models/product');

const url = `mongodb+srv://riku:uB8iCe181gB6L4Z3@cluster0.gddd0.gcp.mongodb.net/refresher?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then(() => 'Connected to database ')
  .catch(() => {
    console.log('Connected to failed');
  });

const createProduct = async (req, res, next) => {
  const createProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createProduct.save();
  res.json({ result });
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
