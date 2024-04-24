const scoreModels = require("../models/scoreModels");

const listAll = async (req, res) => {
    try {
        const score = await scoreModels.listAll();
        return res.status(200).json({score});
    } catch (err) {
        return res.status(500).json({message: "Internal server error"})
    }   
};

module.exports = {
    listAll
};