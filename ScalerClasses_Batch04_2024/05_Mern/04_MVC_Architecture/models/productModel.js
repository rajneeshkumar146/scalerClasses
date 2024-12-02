const mongoose = require("mongoose");

/**
   "product_name":"iPhone 19",
   "product_price":"$2000",
   "isInStock":true,
   "category":"Phone",
   "password":"123456789",
   "confirmPassword":"123456789"
 */

// Create a schema:
const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    product_price: {
        type: String,
        required: true,
    },
    isInStock: {
        type: Boolean,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    confirm_password: {
        type: String,
        required: true,
        minLength: 8,
        validate: {
            validator: function () {
                return this.password === this.confirm_password;
            },
            message: "Password and confirm password should be same."
        }
    }
});

const productModel = mongoose.model("Products", productSchema);
module.exports = productModel;


