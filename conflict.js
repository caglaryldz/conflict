function TaskManager() {
    this.tasks = [];
   
    this.addTask = function(taskName) {
      this.tasks.push({ name: taskName, completed: false });
    };
   
    this.completeTask = function(taskName) {
      const taskIndex = this.tasks.findIndex(task => task.name === taskName);
      if (taskIndex !== -1) {
        this.tasks[taskIndex].completed = true;
      } else {
        console.log("Task!");
      }
    };
   
    this.viewTasks = function() {
      console.log("Tasks bulunamdı:");
      this.tasks.forEach(task => {
        console.log(`${task.name} - ${task.completed ? 'tamamlandı' : 'tamamlanmadı'}`);
      });
    };
  }
   
  // Testing the TaskManager function
  const taskManager = new TaskManager();
  taskManager.addTask("Task 10");
  taskManager.addTask("Task 20");
  taskManager.completeTask("Task 100");
  taskManager.viewTasks();