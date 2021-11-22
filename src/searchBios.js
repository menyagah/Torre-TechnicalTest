/* eslint-disable no-loop-func */
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
    console.log(`you clicked: ${btns[i].id}`);
  });
}

const trigger = btnSearch.addEventListener('click', () => {
  if (buttonClicked === 'job') {
    const fetchData = async (searchTerm) => {
      const response = await axios.get(`http://localhost:3001/search?text=${searchTerm}`);
      console.log(response.data);
    };
    fetchData(inputSearch.value);
  } else if (buttonClicked === 'bio') {
    const fetchData = async (searchTerm) => {
      const response = await axios.get(`http://localhost:3001/username?username=${searchTerm}`);
      console.log(response.data);
    };
    fetchData(inputSearch.value);
  } else {
    const fetchData = async (searchTerm) => {
      const response = await axios.get(`http://localhost:3001/people?username=${searchTerm}`);
      console.log(response.data);
    };
    fetchData(inputSearch.value);
  }
});

export default trigger;