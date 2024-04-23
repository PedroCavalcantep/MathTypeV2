const userModel = require("../models/userModels");

const listAll = async (req, res) => {
  try {
    const users = await userModel.listAll();
    return res.status(200).json({ users });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await userModel.createUser(req.body);
    return res.status(201).json({ user });
  } catch (err) {
    return res.status(500).json({ error: "nome ou email ja utilizado" });
  }
}

const findUser = async (x) => {
  id = x;
  try {
    const user = await userModel.findUser(id);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await findUser(id);
    console.log(user);
    if (user == "") {
      return res.status(404).json({ error: "usuario não encontrado" });
    } else {
      const deletedUser = await userModel.deleteUser(id);
      return res.status(200).json({ deletedUser });
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};

const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await findUser(id);
        console.log(user);

        if (user == ""){
            return res.status(404).json({error: "usuario não encontrado"});
        }
        else{
            const getUser = await userModel.getUser(id);
            return res.status(200).json({getUser});
        }
    } catch (err) {
        return res.status(404).json(error);
    }
}

module.exports = {
  listAll,
  createUser,
  deleteUser,
  findUser,
  getUser,
};
