document.addEventListener("DOMContentLoaded", () => {
  fetch("data/tasks.json")
    .then((res) => res.json())
    .then((tasks) => {
      const taskList = document.getElementById("task-list");
      const taskFrame = document.getElementById("task-frame");

      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.title;

        li.addEventListener("click", () => {
         
          document.querySelectorAll("#task-list li").forEach(el => el.classList.remove("active"));

          
          li.classList.add("active");

          
          taskFrame.src = task.files[0];
        });

        
        if (index === 0) {
          li.classList.add("active");
          taskFrame.src = task.files[0];
        }

        taskList.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Error loading tasks.json:", error);
      const taskList = document.getElementById("task-list");
      taskList.innerHTML = "<li style='color: red;'>Failed to load tasks</li>";
    });
});
