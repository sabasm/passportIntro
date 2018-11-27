//form
document.querySelector("#form").addEventListener("submit", sendForm);

function sendForm(e) {
  e.preventDefault();
  const restaurant = {
    name: e.target.name.value,
    location: {
      type: "Point",
      coordinates: [e.target.lng.value, e.target.lat.value]
    }
  };
  axios
    .post("http://localhost:3000/restaurants/api/new", restaurant)
    .then(result => {
      console.log(result);
      alert("Creado");
    })
    .catch(e => console.log(e));
}

// setTimeout(apiRequest, 5000);
// //javascript se comunica con el servidor JSON
// function apiRequest() {
//   axios
//     .get("http://localhost:3000/restaurants/api/5bfd6268673bd907c4d381d8")
//     .then(result => {
//       console.log(result);
//     })
//     .catch(e => {
//       console.log(e);
//     });
// }
