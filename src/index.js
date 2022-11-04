const express = require('express');
const bodyParser = require('body-parser');
const talkDB = require('./db/talkDB');

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
