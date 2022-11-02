const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-bumber");
const province = document.getElementById("province");

fetch("data.json").then((response) => response.json())
      .then(response => {
        firstName.innerHTML=`${response.firstName}`
        lastName.innerHTML=`${response.lastName}`
        email.innerHTML=`${response.email}`
        province.innerHTML=`${response.province}`
      });
