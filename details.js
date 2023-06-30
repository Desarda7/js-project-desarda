function init() {
  const tourId = getTourId();
  if (!tourId) {
    alert("Ju nuk keni nje tour id! Going back home!");
    window.open("/", "_self");
  }

  document.getElementById("edit-btn").href = 'editTour.html?id=' + tourId;

  loadTour(tourId);
}

init();

function getTourId() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("id");
}

function loadTour(tourId) {
  fetch("http://localhost:3000/products?id=" + tourId)
    .then((res) => res.json())
    .then((tour) => {
      if (tour[0]) {
        renderTour(tour[0]);
      } else {
        window.open("/", "_self");
      }
    });
}

function renderTour(tour) {
  let tourCmp = `
        <h2 style="max-width:400px">${tour.title}</h2>
        <img src="${tour.imageUrl}" class="img-fluid my-5" style="max-width: 400px">
        <p class="text-start" style="max-width:400px">${tour.desc}</p>
    `;

  document.getElementById("details").innerHTML = tourCmp;
}
