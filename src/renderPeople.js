const renderPeople = (data) => {
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

export default renderPeople;