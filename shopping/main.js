const list = document.getElementById("list");

fetch("data.json")
  .then((response) => response.json())
  .then((response) => {
    response.data.forEach((item) => {
      list.innerHTML += `
            <div class="row align-items-center">
            <div class="col">${item.user.firstName}</div>
            <div class="col">${item.user.lastName}</div>
            <div class="col">${item.user.province}</div>
            <div class="col">${item.user.phoneNumber}</div>
            </div>`;
    });
  });

const list2 = document.getElementById("list-2");

fetch("data.json")
  .then((response) => response.json())
  .then((response) => {
    response.data.forEach((item) => {
      list2.innerHTML += `
                <div class="row align-items-center">
                <div class="col">${item.id}</div>
                <div class="col">${item.userId}</div>
            </div>`;
    });
  });

const list3 = document.getElementById("list-3");

