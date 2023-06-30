let deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  function deleteTour() {
    fetch(`http://localhost:3000/products/${tour.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: null,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});

// let deleteBtn = document.getElementById("deleteBtn");
// deleteBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   fetch(`http://localhost:3000/products`, {
//     method: "GET",
//   })
//     .then((raw) => raw.json())
//     .then((data) => {
//       let tourCmp = `
//     <h2 style="max-width:400px">${tour.title}</h2>
//     <img src="${tour.imageUrl}" class="img-fluid my-5" style="max-width: 400px">
//     <p class="text-start" style="max-width:400px">${tour.desc}</p>
// `;

//       document.getElementById("details").innerHTML = tourCmp;
//       document.querySelectorAll("[data-delete").forEach((deleteBtn) => {
//         deleteBtn.addEventListener("click", (e) => {
//           e.preventDefault();
//           fetch(`http://localhost:3000/products/${e.target.dataset.delete}`, {
//             method: "DELETE",
//           })
//             .then((raw) => raw.json())
//             .then((data) => console.log(data));
//         });
//       });
//     });
// });
