const editForm = document.getElementById("edit-form");

const tourId = getTourId();

function getTourId() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("id");
}

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  editTour(Object.fromEntries(formData.entries()));
});

loadTour(tourId);

// const editBtn = document
//   .getElementById("editBtn")
//   .addEventListener("click", editTour);

function loadTour(tourId) {
  fetch("http://localhost:3000/products/" + tourId)
    .then((res) => res.json())
    .then((tour) => renderTour(tour));
}

function renderTour(tour) {
  document.getElementById("exampleInput1").value = tour.title;
  document.getElementById("exampleInput2").value = tour.desc;
  document.getElementById("exampleInput3").value = tour.imageUrl;
}

function editTour(payload) {
  // const editForm = document.getElementById("edit-form");
  // const payload = {
  //   title: document.getElementById("exampleInput1").value,
  //   desc: document.getElementById("exampleInput2").value,
  //   imageUrl: document.getElementById("exampleInput3").value,
  // };
  fetch(`http://localhost:3000/products/${tourId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    // .then((res) => {
    //   console.log("Success:", res);
    // })
    .then((res) => {
      window.open("/details.html?id=" + res.id, "_self");

    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
