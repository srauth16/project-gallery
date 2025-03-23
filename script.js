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
          taskFrame.src = task.file;
        });

        if (index === 0) {
          li.classList.add("active");
          taskFrame.src = task.file;
        }

        taskList.appendChild(li);
      });
    })
    .catch((error) => console.error("Error loading tasks:", error));
});