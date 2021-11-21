import debounce from './debounce.js';


const { default: axios } = require('axios');

const fetchData = async (searchTerm) => {
  // const response = await axios.get(`http://localhost:3001/people?username=${searchTerm}`); people route
  const response = await axios.get(`http://localhost:3001/username?username=${searchTerm}`);

  console.log(response.data);
};

const input = document.querySelector('input');


const onInput = (event) => {
  fetchData(event.target.value);
};

const trigger = input.addEventListener('input', debounce(onInput));




export default trigger;