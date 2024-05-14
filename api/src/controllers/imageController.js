const createImage = require('../models/imageModels')
const { getImageFromDB } = require('../models/imageModels')

const uploadImage = async (req, res) => {
    const file = req.file

    if(!file){
        return res.status(400).json({message : "Nenhuma foto enviada"})
    }

    const image = file.buffer

    try {
        const createdImage = await createImage(image)
        
        return res.status(201).json({message : "Foto enviada com sucesso", id : createdImage.id})
    } 
    
    catch (error) {
        return res.status(500).json({message: "Não consegui enviar"})
    }
}

const getImage = async (req, res) => {
    const id = req.params.id

    try {
        const image = await getImageFromDB(id)

        const result = image.imagem

        res.setHeader('Content-Type', 'image/png')

        res.send(result)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({message: "errou ai patrão"})
    }
}

module.exports = {
    uploadImage,
    getImage,
}