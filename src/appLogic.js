/* eslint-disable no-loop-func */
import renderBio from './renderBio.js';
import renderData from './renederData.js';
import renderPeople from './renderPeople.js';

const { default: axios } = require('axios');


const btnBio = document.getElementById('bio');
const btnPeople = document.getElementById('people');
const btnJob = document.getElementById('job');
const btnSearch = document.getElementById('button-addon2');
const inputSearch = document.querySelector('.form-control');

const btns = [btnBio, btnPeople, btnJob];

let buttonClicked = 'job';

for (let i = 0; i < btns.length; i += 1) {
  btns[i].addEventListener('click', () => {
    buttonClicked = btns[i].id;
  });
}



const trigger = btnSearch.addEventListener('click', () => {
  if (buttonClicked === 'job') {
    const fetchData = async (searchTerm) => {
      const response = await axios.get(`http://localhost:3001/search?text=${searchTerm}`);
      data = response.data;
      renderData();
    };
    fetchData(inputSearch.value);
  } else if (buttonClicked === 'bio') {
    const fetchData = async (searchTerm) => {
      const response = await axios.get(`http://localhost:3001/username?username=${searchTerm}`);
      data = response.data;
      renderBio();
    };
    fetchData(inputSearch.value);
  } else {
    const fetchData = async (searchTerm) => {
      const response = await axios.get(`http://localhost:3001/people?username=${searchTerm}`);
      data = response.data;
      renderPeople();
    };
    fetchData(inputSearch.value);
  }
});

export default trigger;