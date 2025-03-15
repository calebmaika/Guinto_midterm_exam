// database storage
let tasks = [];
let taskId = 1;//autoincrement

//add
function addTask(name, description) {
    const task = { id: taskId++, name, description };
    tasks.push(task);
    console.log(` Task added:`, task);
}

//view
function viewTasks() {
    if (tasks.length === 0) {
        console.log(" No tasks available.");
    } else {
        console.log(" Task List:");
        tasks.forEach(task => {
            console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
        });
    }
}

//updatr
function updateTask(id, newName, newDescription) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.name = newName || task.name;
        task.description = newDescription || task.description;
        console.log(` Task updated:`, task);
    } else {
        console.log(` Task with ID ${id} not found.`);
    }
}

//delete 
function deleteTask(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        console.log(` Task deleted:`, deletedTask[0]);
    } else {
        console.log(` Task with ID ${id} not found.`);
    }
}

//example
addTask("Buy groceries", "Milk, eggs, and bread");
addTask("Study JavaScript", "Review ES6 features");
viewTasks();
updateTask(1, "buy snack", "Milk, eggs, bread, and chips");
deleteTask(2);
viewTasks();
