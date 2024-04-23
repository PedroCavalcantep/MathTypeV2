const userModels = require("../models/userModels")

const listAll = async (req, res) => {
    try{
        const user = await userModels.listAll();
        return res.status(200).json({user}); 
    }
    catch(err) {res.status(400).json({err})};
};

const createUser = async (req, res)  => {
    try{
        const user = await userModels.createUser(req.body);
        return res.status(200).json({user});
    }
    catch(err) {
        res.status(401).json({message: "usuario já existe"}); 
        console.log(err);
    };
}

const deleteUser = async (req, res) => {
    try{
        const user = await userModels.deleteUser(req.params.id);
        return res.status(200).json("usuario deletado com sucesso");
    }
    catch(err) {
        res.status(404).json({message: "usuario não existe"});
        console.log(err);
    }
}

const getUser = async (req, res) => {
    try {
        const user = await userModels.getUser(req.params.id);
        if(!user){ return res.status(404).json({message: "usuario não encontrado"})};
        return res.status(200).json({user});    
    } 
    catch (err) {
        res.status(404).json({message: "usuario não encontrado"});
    }
}

module.exports = {
    listAll,
    createUser,
    deleteUser,
    getUser,
};