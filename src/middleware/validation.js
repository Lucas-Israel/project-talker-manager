const login = (req, res, next) => {
  const b = req.body;
  if (!b.email) return res.status(400).send({ message: 'O campo "email" é obrigatório' });
  if (!b.password) return res.status(400).send({ message: 'O campo "password" é obrigatório' });
  if (b.password.length < 7) {
    return res
      .status(400).send({ message: 'O "password" deve ter pelo menos 6 caracteres' }); 
    }
  if (b.email !== /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) {
    return res
      .status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' }); 
    }
  next();
};

module.exports = {
  login,
};