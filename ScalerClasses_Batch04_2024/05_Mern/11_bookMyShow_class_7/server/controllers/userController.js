const userModel = require("../model/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");


/**
 "name":"siri",
 "email":"siri@apple.com",
 "password":"steve",
 "isAdmin":false
 */
const getCurrentUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.body.userId).select("-password");
        return res.status(200).send({
            success: true,
            data: user,
            message: "You are authorized person to go on protceted route!",
        });
    } catch (err) {
        return res.status(500).json({ message: "Error fetching user:", err });
    }
}

async function hashPassword(password) {
    console.time("Time taken");

    const salt = await bcrypt.genSalt(20);
    console.log("Salt", salt);

    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("HashedPassword: ", hashedPassword);

    console.timeEnd("Time taken");

    console.log("*********************************************")
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

        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: "Sorry, Invalid password entered! Please try again.",
            });
        }

        // const password = "narsingRao@123";
        // hashPassword(password);

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

        // Hash the password.
        const saltRounds = 10; // The higher the number, the more secure but slower the hasing proccess.
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const newUser = new userModel({
            ...req.body,
            password: hashedPassword
        });

        await newUser.save();

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