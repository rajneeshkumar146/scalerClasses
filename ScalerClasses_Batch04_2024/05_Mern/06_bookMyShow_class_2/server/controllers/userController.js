const userModel = require("../model/userModel");
const jwt = require('jsonwebtoken');

/**
 "name":"siri",
 "email":"siri@apple.com",
 "password":"steve",
 "isAdmin":false
 */
const getCurrentUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.findById(id).select("-password");
        console.log("found user", id, user);
        return res.status(200).send({
            success: true,
            data: user,
            message: "You are authorized person!",
        });
    } catch (err) {
        return res.status(500).json({ message: "Error fetching user:", err });
    }
}

const login = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User does not exist. Please register",
            });
        }

        // simplified password validation.
        if (req.body.password !== user.password) {
            return res.status(401).send({
                success: false,
                message: "Sorry, Invalid password entered! Please try again.",
            });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "10d"
        });

        console.log("\nPrinting token for debugging purpose, in user Controller:", token, "\n");

        res.status(200).send({
            success: true,
            message: "you've successfully logged in!",
            data: token,
        });

    } catch (err) {
        console.log("Error encounterd at the login endpoint:", err)
        res.status(500).send({
            success: false,
            message: "An error occurred. Please try again later." + err,
        });
    }

}


const register = async (req, res) => {
    try {
        const isUserExist = await userModel.findOne({ email: req.body.email });

        if (isUserExist) {
            return res.send({
                success: false,
                message: "User already registered."
            });
        }

        const newUser = await userModel.create(req.body);

        return res.send({
            success: true,
            message: "Registraion successfuly. Please login."
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

}


module.exports = {
    register,
    login,
    getCurrentUser,
};