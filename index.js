const url = "https://randomuser.me/api/"
const container = document.querySelector(".container");
const img = document.querySelector(".img");
const title = document.querySelector(".title");
const fullName = document.querySelector(".fullname");
const phoneNum = document.querySelector(".phoneNum");
const email = document.querySelector(".email");
const streetAddress = document.querySelector(".streetAddress");
const next = document.querySelector(".next");

const getData =  () => {
fetch(url).then ((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    img.src = data.results[0].picture.large
    title.textContent =data.results[0].name.title;
    fullName.innerHTML =`${data.results[0].name.first}  ${data.results[0].name.last}`;
    phoneNum.innerHTML =data.results[0].phone;
    email.textContent =data.results[0].email;
    streetAddress.textContent =data.results[0].location.street.name
})

}

getData();
next.addEventListener("click", ()=>{ getData()
})