const userModels = require("../models/userModels")

const listAll = async (req, res) => {
    const user = await userModels.listAll();
    return res.status(200).json({user});
};

module.exports = {
    listAll,
};