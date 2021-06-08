"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const url = "http://localhost:3006";
  let xhr = new XMLHttpRequest();

  xhr.open("GET", `${url}/item`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      for (let i = 0; i < response.content.length; i++) {
        function showItem(response) {
          const el = document.createElement("a");
          el.classList.add("item__link");
          el.href = "description.html";

          el.innerHTML = `
                  <div class="item">
                 
                        <svg class="icon__like" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
                            fill="#959595" />
                        </svg>
                                       
                
                        <img src=${url}/${response.content[i].picture.path} alt=${response.content[i].picture.alt} />
                        <span class="item__title">${response.content[i].name}</span>
                        <span class="item__price">${response.content[i].price.currency}${response.content[i].price.value}</span>
                  </div>`;

          document.querySelector(".item__box").append(el);
        }
        showItem(response);
      }
    }
  };

  xhr.send();
});
