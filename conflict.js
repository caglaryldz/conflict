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
        console.log("conflict");
      }
    };
   
    this.viewTasks = function() {
      console.log("con");
      this.tasks.forEach(task => {
        console.log(`${task.name} - ${task.completed ? 'Conflict' : 'Not Conflict'}`);
      });
    };
  }
   
  // Testing the TaskManager function
  const taskManager = new TaskManager();
  taskManager.addTask("Task 1");
  taskManager.addTask("Task 2");
  taskManager.completeTask("Task 1");
  taskManager.viewTasks();