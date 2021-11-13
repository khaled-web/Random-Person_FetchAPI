// Promises

const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
  fetch('https://randomuser.me/api/')
    .then(data => data.json())
    .then(data => showData(data))
    .catch(error => console.log(error))
});


function showData(data) {

  const {
    name: {
      first
    },
    name: {
      last
    },
    picture: {
      large
    },
    location: {
      country
    },
    location: {
      city
    },
    phone: phone,
    email: email
  } = data.results[0];

  // console.log(data);

  document.getElementById('first').textContent = first;
  document.getElementById('last').textContent = last;
  document.getElementById('photo').src = large;
  document.getElementById('country').textContent = country;
  document.getElementById('city').textContent = city;
  document.getElementById('phone').textContent = phone;
  document.getElementById('email').textContent = email;
}