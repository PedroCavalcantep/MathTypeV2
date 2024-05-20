const scoreModel = require("../models/scoreModels");

const listAll = async (req, res) => {
    try {
      const score = await scoreModel.listAll();
      return res.status(200).json({score});
    } catch (error) {
      return res.status(500).json({message: "Internal server error"})
    }   
}

const bestScores = async (req, res) => {
  const id = req.params.id
  try {
    const score = await scoreModel.bestScores(id)
    if (score == "") {
      return res.status(404).json("Usuário não encontrado.")
    } else {
      return res.status(200).json({score})
    }
  } catch (error) {
    return res.status(404).json(error)
  }
}

const topScores = async (req, res) => {
  const id = req.params.id
  try {
    const score = await scoreModel.topScores(id);
    if (score == "") {
      return res.status(404).json("Gamemode não encontrado.")
    } else {
      return res.status(200).json({score})
    }
  } catch (error) {
    return res.status(404).json(error)
  }
}

const findScore = async (id) => {
  try {
    const score = await scoreModel.findScore(id);
    return score;
  } catch (error) {
    console.log(error);
  }
}

const createScore = async (req, res) => {
  try {
    const createdScore = await scoreModel.createScore(req.body);
    return res.status(201).json({ createdScore });
  } catch (error) {
    return res.status(400).json(error);
  }
}

const deleteScore = async (req, res) => {
  const id = req.params.id;
  try {
    const score = await findScore(id);
    if (score == "") {      
      return res.status(404).json({ error: "Pontuação não encontrada." });
    } else {
      const deletedScore = await scoreModel.deleteScore(id)
      return res.status(200).json({ deletedScore })
    }    
  } catch (error) {
    return res.status(404).json(error)
  }
}

module.exports = {
    listAll,
    bestScores,
    topScores,
    findScore,
    createScore,
    deleteScore
}