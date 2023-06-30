const form = document.getElementById("create-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  createTour(Object.fromEntries(formData.entries()));
});

function createTour(payload) {
  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((res) => {
      console.log("Success:", res);
      window.open("/details.html?id=" + res.id, "_self");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
