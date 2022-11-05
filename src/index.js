const express = require('express');
const bodyParser = require('body-parser');
const talkDB = require('./db/talkDB');
const generateToken = require('./generateTokens');
const is = require('./middleware/validation');
const tokenAuth = require('./middleware/credentials');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funciona
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker/search', tokenAuth, async (req, res) => {
  const { q } = req.query;
  const got = await talkDB.nameQuery(q);
  res.status(200).send(got);
});

app.get('/talker', async (req, res) => {
  const got = await talkDB.getting();
  res.status(200).send(got);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const got = await talkDB.gettingID(id);
  if (got.length === 0) {
    return res
      .status(404).send({ message: 'Pessoa palestrante não encontrada' }); 
    }
  res.status(200).send(got[0]);
});

app.post('/login', is.login, (req, res) => {
  res.status(200).send({ token: generateToken() });
});

app.post('/talker', tokenAuth, is.talkerBodyAuth, is.idade, is.talk,
is.watchedAt, is.rate, async (req, res) => {
  const b = req.body;
  const completeJSON = await talkDB.getting();
  const lastId = completeJSON.at(-1).id;
  b.id = lastId + 1;
  await completeJSON.push(b);
  talkDB.writing(completeJSON);
  res.status(201).send(b);
});

app.put('/talker/:id', tokenAuth, is.talkerBodyAuth, is.idade, is.talk,
is.watchedAt, is.rate, async (req, res) => {
  const { id } = req.params;
  const b = req.body;
  const completeJSON = await talkDB.getting();
  const index = completeJSON.findIndex((ele) => +ele.id === +id);
  b.id = completeJSON[index].id;
  completeJSON.splice(index, 1, b);
  talkDB.writing(completeJSON);
  res.status(200).send(b);
});

app.delete('/talker/:id', tokenAuth, async (req, res) => {
  const { id } = req.params;
  const completeJSON = await talkDB.getting();
  const index = completeJSON.findIndex((ele) => +ele.id === +id);
  completeJSON.splice(index, 1);
  talkDB.writing(completeJSON);
  res.status(204).end();
});
