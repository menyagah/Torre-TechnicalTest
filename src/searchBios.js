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

const renderBio = () => {
  document.getElementById('data').innerText = '';

  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${data.person.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted"></h6>
        <p class="card-text">${data.person.professionalHeadline}</p>
      </div>
    
          `;
  document.getElementById('data').appendChild(div);
};

const renderPeople = () => {
  document.getElementById('data').innerText = '';
  data.results.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('col-xl-12');
    div.classList.add('col-sm-18');
    div.classList.add('mb-3');
    div.innerHTML = `
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="${item.picture}" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
        <h5 class="mb-0">${item.name}</h5><span class="small text-uppercase text-muted">${item.professionalHeadline}</span><br>
        <span class="small text-uppercase text-muted">amount: ${item.compensations.employee.amount}</span><br>
        <span class="small text-uppercase text-muted">currency: ${item.compensations.employee.currency}</span><br>
        <span class="small text-uppercase text-muted">minHourlyUSD: ${item.compensations.employee.minHourlyUSD}</span><br>
        <span class="small text-uppercase text-muted">periodicity: ${item.compensations.employee.periodicity}</span><br>
        <span class="small text-uppercase text-muted">privacy: ${item.compensations.employee.privacy}</span>
        <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
        </ul>
    </div>
        `;
    document.getElementById('data').appendChild(div);
  });
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