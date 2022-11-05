const login = (req, res, next) => {
  const { email, password } = req.body;
  if (!email) return res.status(400).send({ message: 'O campo "email" é obrigatório' });
  if (!password) return res.status(400).send({ message: 'O campo "password" é obrigatório' });
  if (password.length < 6) {
    return res
      .status(400).send({ message: 'O "password" deve ter pelo menos 6 caracteres' }); 
    }
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return res
      .status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' }); 
    }
  next();
};

const talkerBodyAuth = (req, res, next) => {
  const b = req.body;
  if (!b.name) {
    return res
      .status(400).send({ message: 'O campo "name" é obrigatório' }); 
    }
  if (b.name.length < 4) {
    return res
      .status(400).send({ message: 'O "name" deve ter pelo menos 3 caracteres' }); 
    }
  next();
};

const idade = (req, res, next) => {
  const { age } = req.body;
  if (!age) return res.status(400).send({ message: 'O campo "age" é obrigatório' });
  if (age < 19) {
    return res
      .status(400).send({ message: 'A pessoa palestrante deve ser maior de idade' }); 
    } 
  next();
};

const talk = (req, res, next) => {
  const { talk: talking } = req.body;
  if (!talking) return res.status(400).send({ message: 'O campo "talk" é obrigatório' });
  next();
};

const watchedAt = (req, res, next) => {
  const { talk: { watchedAt: watchedAtt } } = req.body;
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!watchedAtt) {
    return res
      .status(400).send({ message: 'O campo "watchedAt" é obrigatório' }); 
    }
  if (watchedAtt.match(regex) === null) {
    return res.status(400).send({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  } 
  next();
};

const checkWholeRateRange = (a) => a < 1 || a > 5 || a % 1 !== 0;

const rate = (req, res, next) => {
  const b = req.body;
  if (!b.talk.rate && b.talk.rate !== 0) { 
    return res.status(400).send({ message: 'O campo "rate" é obrigatório' }); 
  }
  if (checkWholeRateRange(b.talk.rate)) {
    return res
      .status(400).send({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' }); 
    }
  next();
};

module.exports = {
  login,
  talkerBodyAuth,
  idade,
  talk,
  watchedAt,
  rate,
};