import './style/styles.css';

const { default: axios } = require('axios');

const fetchData = async (searchTerm) => {
  // const response = await axios.get(`http://localhost:3001/people?username=${searchTerm}`); people route
  const response = await axios.get(`http://localhost:3001/username?username=${searchTerm}`);

  console.log(response.data);
};

const input = document.querySelector('input');

const debounce = (func, delay = 500) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const onInput = (event) => {
  fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput));