const fs = require('fs').promises;

const path = '../talker.json';
const { join } = require('path');

const getting = async () => {
  try {
    const info = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(info);
  } catch (error) {
    return error;
  }
};

const gettingID = async (rID) => {
  try {
    const info = await fs.readFile(join(__dirname, path), 'utf-8');
    const found = await JSON.parse(info).filter(({ id }) => +id === +rID);
    return found;
  } catch (error) {
    return error;
  }
};

const writing = async (ele) => {
  try {
    const elementToWrite = JSON.stringify(ele, null, 2);
    fs.writeFile(join(__dirname, path), elementToWrite);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getting,
  gettingID,
  writing,
};
