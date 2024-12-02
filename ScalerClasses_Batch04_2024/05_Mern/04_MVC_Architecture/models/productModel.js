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
        type: [String],
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

const validCategories = ["electronics", "fashion", "appliances", "furniture"];
productSchema.pre("save", function(next){
    console.log("Pre save hook.", this.category);
    const invalidCateories = this.category.filter((cat) =>  validCategories.includes(cat));

    console.log("Test: ", invalidCateories);
    if (invalidCateories.length === 0) {
        return next(new Error(`Invalid category ${invalidCateories.join(",")}`));
    } else {
        next();
    }
});

productSchema.pre("save", function () {
    this.confirmPassword = undefined;
});


const productModel = mongoose.model("Products", productSchema);
module.exports = productModel;


