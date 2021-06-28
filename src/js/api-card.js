"use strict";


document.addEventListener("DOMContentLoaded", () => {
  const url = "http://localhost:3006";
  const xhr = new XMLHttpRequest();

  xhr.open("GET", 'http://localhost:3006/item/${id}');
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText).content;
      function showItem(response) {
        const el = document.createElement("div");
        el.classList.add("card");
        el.innerHTML = `
    
          <div class="card__img">
            <img src="${url}${response.picture.path} alt="${response.picture.alt}" />
          </div>
          <div class="card__wrap"> 
          <div class="card__desc">
          <h1 class="product__title">${response.name}</h1>
          <p>${response.info}</p>
          <h2 class="product__desc">Details</h2>
          <p>${response.details}</p>
        </div>
        <div class="card__order-wrap">
          <div class="card__order">
            <span class="card__order-price">${response.price.currency} ${response.price.value}</span>
          </div>
          <div class="card__order-quantity">
            <div class="card__btns-box">
              <button class="card__control-btn">&#8722;</button>
              <input type="number" />
              <button class="card__control-btn">+</button>
            </div>
            <button class="card__order-btn" type="submit">Add to cart</button>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
              fill="#959595" />
          </svg>
          </div>
          </div>
        `;
        document.querySelector("main").append(el);
      }
      showItem(response);
    }
  };

  xhr.send();
});