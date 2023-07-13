
//Step 1 completed: Essential HTML Elements Defined

let taskInput1 =document.getElementById("taskInput");
const button1 =document.getElementById("addTaskButton");
let taskList1 =document.getElementById("taskList");

//Step 2 completed: Loaded tasks from LocalStorage
//added

let taskArray = getTasksFromLocalStorage()


// step 3.1:Implement the getTaskFromLocalStorage()
function getTasksFromLocalStorage(){
    JSON.parse(localStorage.getItem("taskInput1")) || [];
}

//3.2 : 

function updateTasksInLocalStorage(){
    localStorage.setItem("taskArray" , JSON.stringify(taskArray));
}

//3.2 : Implement cerateTask function

function createTask(taskText)
{
     return {text: taskText, completed: false}
     
} 
//3.4 : Implemented delete task function

function deleteTask(index){

    taskArray.splice(index,1);
    updateTasksInLocalStorage();
}
 
// 3.5 Implement the createTaskElement(taskObj) Function
function createTaskElement(taskObj) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("taskItem");
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.checked = taskObj.completed;
    checkbox.addEventListener("change", function () {
        taskObj.completed = checkbox.checked;
        taskTextElement.classList.toggle("completed", taskObj.completed);
        updateTasksInLocalStorage();
    });
  
    const taskTextElement = document.createElement("span");
    taskTextElement.classList.add("taskText");
    taskTextElement.textContent = taskObj.text;
    taskTextElement.classList.toggle("completed", taskObj.completed);
  
    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "X";
    removeButton.addEventListener("click", function () {
        deleteTask(taskObj);
        renderTasks();
    });
  
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(removeButton);
  
    return taskItem;
}
//Step 8: Implement the Render Tasks Function

function renderTask(){
    taskList1.innerHTML = ""
    for (let i=0; i < taskArray.lenght ; i++){
      
     const taskElement = createTaskElement(taskArray[i])
    taskList1.appendChild(taskElement);
    }
}