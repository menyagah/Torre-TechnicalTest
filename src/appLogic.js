/* eslint-disable no-loop-func */
import renderBio from './renderBio.js';
import renderData from './renderData.js';
import renderPeople from './renderPeople.js';

const { default: axios } = require('axios');

const btnBio = document.getElementById('bio');
const btnPeople = document.getElementById('people');
const btnJob = document.getElementById('job');
const btnSearch = document.getElementById('button-addon2');
const inputSearch = document.querySelector('.form-control');

let buttonClicked = 'job';

btnJob.addEventListener('click', () => {
  buttonClicked = btnJob.id;
  btnJob.classList.add('btn-primary');
  btnJob.classList.remove('btn-light');

  btnBio.classList.remove('btn-primary');
  btnBio.classList.add('btn-light');
  btnPeople.classList.remove('btn-primary');
  btnPeople.classList.add('btn-light');
});

btnPeople.addEventListener('click', () => {
  buttonClicked = btnPeople.id;
  btnPeople.classList.add('btn-primary');
  btnPeople.classList.remove('btn-light');

  btnBio.classList.remove('btn-primary');
  btnBio.classList.add('btn-light');
  btnJob.classList.remove('btn-primary');
  btnJob.classList.add('btn-light');
});

btnBio.addEventListener('click', () => {
  buttonClicked = btnBio.id;
  btnBio.classList.add('btn-primary');
  btnBio.classList.remove('btn-light');

  btnJob.classList.remove('btn-primary');
  btnJob.classList.add('btn-light');
  btnPeople.classList.remove('btn-primary');
  btnPeople.classList.add('btn-light');
});

let data = {
  results: [],
};
const trigger = btnSearch.addEventListener('click', () => {
  if (buttonClicked === 'job') {
    document.getElementById('data').innerHTML = '<div class="loader-cont"><div class="loader"></div></div>';
    const fetchData = async (searchTerm) => {
      const response = await axios.get(`http://localhost:3001/search?text=${searchTerm}`);
      data = response.data;
      renderData(data);
    };
    fetchData(inputSearch.value);
  } else if (buttonClicked === 'bio') {
    document.getElementById('data').innerHTML = '<div class="loader-cont"><div class="loader"></div></div>';
    const fetchData = async (searchTerm) => {
      const response = await axios.get(`http://localhost:3001/username?username=${searchTerm}`);
      data = response.data;
      renderBio(data);
    };
    fetchData(inputSearch.value);
  } else {
    document.getElementById('data').innerHTML = '<div class="loader-cont"><div class="loader"></div></div>';
    const fetchData = async (searchTerm) => {
      const response = await axios.get(`http://localhost:3001/people?username=${searchTerm}`);
      data = response.data;
      renderPeople(data);
    };
    fetchData(inputSearch.value);
  }
});

export default trigger;