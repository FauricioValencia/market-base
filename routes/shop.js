const express = require("express");
const productsController = require('../controller/products.js');
const router = express.Router();

router.get("/", productsController.getProducts);

module.exports = router;
