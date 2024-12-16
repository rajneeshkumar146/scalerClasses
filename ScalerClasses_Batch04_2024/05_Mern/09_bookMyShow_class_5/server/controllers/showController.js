const Show = require("../model/showModel");

// POST
const addShow = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error from theatre controller" + err.message,
        });
    }
}

// PUT
const updateShow = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error from theatre controller" + err.message,
        });
    }
}

// DELETE
const deleteShow = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error from theatre controller" + err.message,
        });
    }

}

// GET



module.exports = { addShow, updateShow, deleteShow };




