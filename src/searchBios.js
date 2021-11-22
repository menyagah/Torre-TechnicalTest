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

const comp = (element, classes = '', id = '', text = '') => {
  const el = document.createElement(element);
  if (classes !== '') el.classList = classes;
  if (id !== '') el.id = id;
  if (text !== '') el.innerText = text;
  return el;
};

let data = {
  results: [],
};

const renderData = () => {
  document.getElementById('data').innerText = '';
  data.results.forEach((item) => {
    const div = comp('div', 'card mb-1');
    const cardBody = comp('div', 'card-body');
    const cardTitle = comp('h5', 'card-title', '', item.objective);
    const cardSub = comp('h6', 'card-subtitle mb-2 text-muted', '', item.skills[1].name, item.skills[1].name);
    const cardText = comp('p', 'card-text', '', item.tagline);
    const cardLink = comp('a', 'card-link');
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSub);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);
    div.appendChild(cardBody);

    document.getElementById('data').appendChild(div);
  });
};

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
    };
    fetchData(inputSearch.value);
  } else {
    const fetchData = async (searchTerm) => {
      const response = await axios.get(`http://localhost:3001/people?username=${searchTerm}`);
      data = response.data;
    };
    fetchData(inputSearch.value);
  }
});

export default trigger;