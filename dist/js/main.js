const initApp = () => {
  const tasks = document.getElementById("my-tasks");
  const btnSaveTask = document.getElementById("save-task");
  const myTask = document.getElementById("new-task");
  const profilePicture = document.getElementById("profile-picture");
  const userMenu = document.getElementById("user-menu");
  const btnLogOut = document.getElementById("log-out");

  function saveTask() {
    const myTask = document.getElementById("new-task");
    const task = myTask.value;

    if (task) {
      const newTask = document.createElement("div");
      newTask.classList.add("bg-wewak-500", "flex", "justify-between", "items-center", "rounded-lg", "p-6",  "hover:drop-shadow-lg", "transition-all", "ease-in-out", "duration-150");

      const taskTitle = document.createElement("h3");
      taskTitle.classList.add("text-2xl", "text-wewak-50");
      taskTitle.innerText = task;

      const taskActions = document.createElement("div");
      taskActions.classList.add("flex", "justify-between", "space-x-3");

      const deleteTask = document.createElement("img");
      deleteTask.classList.add("w-8", "cursor-pointer", "hover:opacity-50", "transition-opacity", "ease-in-out", "duration-200");
      deleteTask.src = "./img/trash3-fill.svg";
      deleteTask.alt = "Delete task";
      deleteTask.addEventListener("click", (e) => e.target.parentElement.parentElement.remove());

      const finishTask = document.createElement("img");
      finishTask.classList.add("w-8", "cursor-pointer", "hover:opacity-50", "transition-opacity", "ease-in-out", "duration-200");
      finishTask.src = "./img/circle.svg";
      finishTask.alt = "Finish Task";
      finishTask.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.classList.toggle("bg-wewak-500");
        const deleted = e.target.parentElement.parentElement.classList.toggle("bg-wewak-300")
        e.target.parentElement.parentElement.classList.toggle("line-through");

        if (!deleted) {
          e.target.src = "./img/circle.svg";
        } else {
          e.target.src = "./img/check-circle.svg";
        }
      });

      // Bring all parts of the task together
      taskActions.append(deleteTask, finishTask);
      newTask.append(taskTitle, taskActions);

      tasks.appendChild(newTask);

      myTask.value = "";
    }

  }

  function toggleUserMenu() {
    userMenu.classList.toggle("scale-0");
    userMenu.classList.toggle("scale-100");
    userMenu.classList.toggle("opacity-0");
    userMenu.classList.toggle("opacity-100");
  }

  // Event Listeners
  btnSaveTask.addEventListener("click", saveTask);
  myTask.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      saveTask();
    }
  });

  profilePicture.addEventListener("click", () => {
    // userMenu.classList.toggle("hidden");
    // userMenu.classList.toggle("flex");
    toggleUserMenu();
  });

  // Close the menu if the user clicks outside of it.
  document.addEventListener("click", (e) => {
    if (userMenu.classList.contains("scale-100") && !userMenu.contains(e.target) && !e.target.matches("#profile-picture")) {
      toggleUserMenu(); 
    }
  });

  // Simulate a user logging out
  btnLogOut.addEventListener("click", () => {
    profilePicture.src = "./img/person-circle.svg";
    btnLogOut.innerText = "Sign in";

    const userName = document.querySelectorAll(".username");
    userName.forEach((user) => user.innerHTML = "");
  }); 
}

document.addEventListener("DOMContentLoaded", initApp);