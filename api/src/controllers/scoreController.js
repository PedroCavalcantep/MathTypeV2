const scoreModels = require("../models/scoreModels");

const listAll = async (req, res) => {
    const score = await scoreModels.listAll();
    return res.status(200).json({score});
};

module.exports = {
    listAll
};