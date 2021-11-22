import debounce from './debounce.js';

const { default: axios } = require('axios');

const fetchData = async (searchTerm) => {
  const response = await axios.get(`http://localhost:3001/people?username=${searchTerm}`);
  if (response.data.Error) {
    console.log([]);
  }
  console.log(response.data);
};

const input = document.querySelector('input');

const onInput = (event) => {
  fetchData(event.target.value);
};

const people = input.addEventListener('input', debounce(onInput));

export default people;