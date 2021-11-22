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

  export default renderBio;