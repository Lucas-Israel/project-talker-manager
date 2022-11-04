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

module.exports = {
  getting,
};
