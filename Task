
let tasks = [];
const addTask = (task, callback) => {
    tasks.push(task);
    console.log(`Task added: "${task}"`);
    if (typeof callback === 'function') {
        callback();
    }
};

const printTasks = function () {
    console.log("Current Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
const addMultipleTasks = (...newTasks) => {
    newTasks.forEach(task => tasks.push(task));
    console.log(`${newTasks.length} tasks added.`);
    printTasks();
};
const demonstrateScope = () => {
    let localVar = "a local variable inside demonstrateScope";
    console.log(localVar); // accessible here
    console.log(globalVar); // can access globalVar
};

let globalVar = "a global variable"; 

addTask("Buy groceries", printTasks);

addMultipleTasks("Walk the dog", "Clean the kitchen", "Write report");
console.log(globalVar);
demonstrateScope();
