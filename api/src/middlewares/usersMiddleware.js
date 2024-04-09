const validadeBody = (req, res, next) => {
  const { body } = req;

  if (body.nome === undefined) {
    return res.status(400).json({ message: "O campo 'nome' é obrigatorio" });
  }
  if (body.nome === "") {
    return res.status(400).json({ message: "o campo 'nome' não pode estar vazio" });
  }
  if (body.email === undefined) {
    return res.status(400).json({ message: "O campo 'email' é obrigatorio" });
  }
  if (body.email === "") {
    return res.status(400).json({ message: "o campo 'email' não pode estar vazio" });
  }
  if (body.senha === undefined) {
    return res.status(400).json({ message: "O campo 'senha' é obrigatorio" });
  }
  if (body.senha === "") {
    return res.status(400).json({ message: "o campo 'senha' não pode estar vazio" });
  }
  next();
};

module.exports = {
  validadeBody,
};
