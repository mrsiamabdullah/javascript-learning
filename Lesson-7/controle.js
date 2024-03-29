let form = document.querySelector(".new_task_form");
let input = document.querySelector(".task_input");
let tasks = document.querySelector(".all_tasks");

// console.log(form, input, tasks);
form.addEventListener("submit", function (event) {
  // console.log(event.target);
  event.preventDefault();

  if (input.value) {
    let show_value = input.value;

    // creating task div
    let taskEL = document.createElement("div");
    taskEL.classList.add("single_task");

    // creating content div
    let taskEL_content = document.createElement("div");
    taskEL_content.classList.add("content");

    // inserting content div to task
    taskEL.appendChild(taskEL_content);

    // creating input
    let taskEL_input = document.createElement("input");
    taskEL_input.classList.add("text");
    taskEL_input.value = show_value;
    taskEL_input.setAttribute("readonly", "readonly");

    // creating action div
    let taskEL_Action = document.createElement("div");
    taskEL_Action.classList.add("actions");

    // inserting action div to content div
    taskEL_content.appendChild(taskEL_Action);

    // creating edit button
    let taskEL_Edit = document.createElement("button");
    taskEL_Edit.classList.add("edit");

    taskEL_Action.appendChild(taskEL_Edit);
    taskEL_Action.innerText = "Edit";

    // creating complete button
    let taskEL_Complete = document.createElement("button");
    taskEL_Complete.classList.add("complete");

    taskEL_Action.appendChild(taskEL_Complete);
    taskEL_Complete.innerText = "Complete";

    // creating delete button
    let taskEL_Delete = document.createElement("button");
    taskEL_Delete.classList.add("delete");

    taskEL_Action.appendChild(taskEL_Delete);
    taskEL_Delete.innerHTML = "Delete";

    // inserting input to content div
    taskEL_content.appendChild(taskEL_input);

    // inserting task element div to tasks div
    tasks.appendChild(taskEL);

    // clear input field
    input.value = "";

    // user can edit
    taskEL_Edit.addEventListener("click", function () {
      if (taskEL_Edit.innerHTML.toLowerCase() === "edit") {
        taskEL_Edit.innerHTML = "Save";
        taskEL_input.removeAttribute("readonly");
        taskEL_input.focus();
      } else {
        taskEL_Edit.innerHTML = "Edit";
        taskEL_input.setAttribute("readonly", "readonly");
      }
    });
  } else {
    alert("Please add a task minimum!");
  }
});
