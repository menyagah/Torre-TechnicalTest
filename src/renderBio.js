const data = {
  results: [],
};

const renderBio = (data) => {
  document.getElementById('data').innerText = '';

  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
        <div class="card" >
        <img src="${data.person.picture}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${data.person.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <p class="card-text">${data.person.professionalHeadline}</p>
        </div>
        <span class="small text-uppercase text-muted">Education: ${data.stats.education}</span><br>
          <span class="small text-uppercase text-muted">Interests: ${data.stats.interests}</span><br>
          <span class="small text-uppercase text-muted">Education: ${data.stats.education}</span><br>
          <span class="small text-uppercase text-muted">Jobs: ${data.stats.jobs}</span><br>
          <span class="small text-uppercase text-muted">Strengths: ${data.stats.strengths}</span>
        </div>
      
            `;
  document.getElementById('data').appendChild(div);
};

export default renderBio;