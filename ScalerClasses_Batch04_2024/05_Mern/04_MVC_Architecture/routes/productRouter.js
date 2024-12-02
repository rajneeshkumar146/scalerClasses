const express = require("express");


const { getAllProducts, getProductById, createProduct, updateProductById, deleteProductById } = require("../controllers/productController");
const productRouter = express.Router();


// Prefix of router: /api/products

// GET
productRouter.get("/", getAllProducts); // Example: /api/products/
productRouter.get("/:id", getProductById);   // Example: /api/products/123

// PUT
productRouter.put("/:id", updateProductById); // Example: /api/products/123

// DELETE
productRouter.delete("/:id", deleteProductById); // Example: /api/products/123

// POST
productRouter.post("/", createProduct);  // Example: /api/products/

module.exports = productRouter;