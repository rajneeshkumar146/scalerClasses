const userModel = require("../model/userModel");

/**
 "name":"siri",
 "email":"siri@apple.com",
 "password":"steve",
 "isAdmin":false
 */
const getCurrentUser = async (req, res) => {


}

const login = async (req, res) => {

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