const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(cors());

app.get('/username', async (req, res) => {
  const endpoint = `https://torre.bio/api/bios/${req.query.username}`;
  let response;
  try {
    const { data } = await axios.get(endpoint);
    response = data;
  } catch (error) {
    console.log(error);
  }
  res.json(response);
});

app.get('/people', async (req, res) => {
  const endpoint = 'https://search.torre.co/people/_search';

  let response;
  try {
    const { data } = await axios.post(endpoint,
      { 'skill/role': { text: req.query.username, experience: '1-plus-year' } });

    response = data;
  } catch (error) {
    console.log(error);
  }
  res.json(response);
});

app.listen(3001, () => {
});