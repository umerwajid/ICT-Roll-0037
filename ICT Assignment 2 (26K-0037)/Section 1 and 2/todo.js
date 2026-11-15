const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let todo = [];

function addTask() {
    rl.question("Enter task: ", function(task) {
        todo.push(task);
        console.log("Task added!");
        menu();
    });
}

function removeTask() {
    rl.question("Enter task number to remove: ", function(num) {
        todo.splice(num - 1, 1);
        console.log("Task removed!");
        menu();
    });
}

function displayTasks() {
    console.log("My To-Do List:");
    for (let i = 0; i < todo.length; i++) {
        console.log((i + 1) + ". " + todo[i]);
    }
    menu();
}

function clearTasks() {
    todo = [];
    console.log("List cleared!");
    menu();
}

function menu() {
    rl.question("\nCommand (add, remove, view, clear, exit): ", function(choice) {
        if (choice == "add") {
            addTask();
        } else if (choice == "remove") {
            removeTask();
        } else if (choice == "view") {
            displayTasks();
        } else if (choice == "clear") {
            clearTasks();
        } else if (choice == "exit") {
            console.log("Bye!");
            rl.close();
        } else {
            console.log("Wrong command!");
            menu();
        }
    });
}

menu();
