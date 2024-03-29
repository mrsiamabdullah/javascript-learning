///

function fetchAPI() {
  fetch("https://randomuser.me/api/?results=100")
    .then((repete) => repete.json())
    .then((users) => displayPosts(users.results));
}

function displayPosts(users) {
  console.log(users);
  users.forEach((user) => {
    let commentDiv = document.querySelector(".all-comments");
    commentDiv.innerHTML += `<div class="post">
        <img src="${user.picture.large}">
        <p>Name: ${user.name.title} ${user.name.first} ${user.name.last}</p>
        <p>Email: ${user.email}</p>
        <p>Gender: ${user.gender}</p>
        <p>Phone: ${user.phone}</p>
        <p>Location: ${user.location.state} ${user.location.country}</p>
        </div>`;
  });
}

fetchAPI();
