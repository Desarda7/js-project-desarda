function getData(searchInput) {
  fetch("http://localhost:3000/products")
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .then((data) => {
      console.log(data);
      if (searchInput) {
        data = data.filter(function (a) {
          if (a.title?.toLowerCase().includes(searchInput)) {
            return a;
          }
        });
        // alert("Nuk u gjet asnje rezultat");
        return data;
      } else {
        return data;
      }
    })
    .then((totaldata) => {
      let data1 = "";
      totaldata.map((products) => {
        data1 += `<div class="card" style="width: 18rem">
      <img src=${products.imageUrl} class="card-img-top" alt="img" />
      <div class="card-body">
        <h5 class="card-title">${products.title}</h5>
       <a href="details.html?id=${products.id}"${products.desc}" class="btn btn-primary me-4" id="readMore" onclick="readBtn">Read more</a>
        <a href="#" class="btn btn-success">Favorite</a>
      </div>
    </div>`;
      });
      document.getElementById("cards").innerHTML = data1;
    })
    .catch((err) => {
      console.log(err);
    });
}

getData();

//Search Products
let productsArray = [];
const searchBtn = document
  .getElementById("button")
  .addEventListener("click", () => {
    const searchInput = document.getElementById("search").value.toLowerCase();
    getData(searchInput);
  });

// Pagination
// let cardsDiv = document.querySelector("cards");
// const pagination = document.getElementById("pagination");

// let currentPage = 1;
// let totalProducts = 3;

// function DisplayProducts(items, wrapper, rowsPerPage, page) {
//   wrapper.innerHTML = "";
//   page--;

//   let start = rowsPerPage * page;
//   let end = start + rowsPerPage;
//   let paginatedItems = items.slice(start, end);
//   // console.log(paginatedItems);
//   for (let i = 0; i < paginatedItems.length; i++) {
//     let item = paginatedItems[i];
//   }
// }

// DisplayProducts(cardsDiv, rows, 3);

//Pagination prove
// const paginationEl = {
//   totalProducts: 12,
//   pageSize: 4,
//   currentPage: 1,
//   url: "http://localhost:3000/products",
// };
// // getData(paginationEl);

// function totalPages() {
//   let numOfPages = totalProducts / pageSize;
//   if (totalProducts % pageSize > 0) {
//     numOfPages += 1;
//   }
//   return Math.ceil.apply(totalProducts / pageSize);
// }
// // console.log(numOfPages);

// function displayPagination(totalProducts, pageSize, currentPage) {
//   // let start = (currentPage - 1) * pageSize;
//   // let end = start + pageSize;
//   return totalPages.slice((currentPage - 1) * pageSize, currentPage * pageSize);
// }
// let page = numOfPages[currentPage];
// function nextPage() {
//   if (numOfPages.length > currentPage) page = currentPage + 1;
// }

// function prevPage() {
//   if (currentPage < numOfPages.length && currentPage != 0)
//     page = currentPage - 1;
// }
