let form = document.querySelector("form");
let inputItem = document.getElementById("text-feild");
let listItems = document.getElementById("list_Items");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputItem.value) {
    //   console.log(inputItem.value);
    // listItems.innerHTML += `<li>${inputItem.value}</li>`;
  } else {
    alert("Please add your task!");
    return;
  }
  //   inputItem.value = "";
  //   console.log(inputItem.value);

  //   if (inputItem.value) {
  //     listItems.innerHTML += `<li>${inputItem.value}</li>`
  //   }
  //   inputItem.value = "";

  let li = document.createElement("li");
  li.innerHTML = inputItem.value;
  li.classList.add("list-item");
  listItems.appendChild(li);
  // console.log(li);

  let button = document.createElement("button");
  button.classList.add("delete");
  button.innerText = "Delete";
  li.appendChild(button);

  button.addEventListener("click", () => {
    listItems.removeChild(li)
  })

  inputItem.value = "";
});

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   //   if (inputItem.value) {
//   //     alert("Please add your task!");
//   //   }

//   let li = document.createElement("li");
//   li.innerHTML = inputItem.value;
//   li.classList.add("list-item");
//   listItems.appendChild(li);
// //   console.log(li);
// });
