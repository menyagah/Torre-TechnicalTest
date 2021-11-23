/* eslint-disable no-unused-vars */
const comp = (element, classes = '', id = '', text = '') => {
  const el = document.createElement(element);
  if (classes !== '') el.classList = classes;
  if (id !== '') el.id = id;
  if (text !== '') el.innerText = text;
  return el;
};

const renderData = (data) => {
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

export default renderData;