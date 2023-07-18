
//Step 1 completed: Essential HTML Elements Defined

let taskTextInput =document.getElementById("taskInput");
const button1 =document.getElementById("addTaskButton");
let taskList1 =document.getElementById("taskList");
let errorMsg = document.getElementById("message");
//Step 2 completed: Loaded tasks from LocalStorage
//added

let taskArray = getTasksFromLocalStorage()


// step 3.1:Implement the getTaskFromLocalStorage()
function getTasksFromLocalStorage(){
    return JSON.parse(localStorage.getItem("taskArray")) || [];
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
    //cresting list with class name taskitem
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
        renderTask();
    });
  
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(removeButton);
  
    return taskItem;
}
//Step 8: Implement the Render Tasks Function

function renderTask(){
    taskList1.innerHTML = ""
    
    for (let i=0; i<taskArray.length; i++)
    {
      
     const taskElement = createTaskElement(taskArray[i])
    taskList1.appendChild(taskElement)
    }
}

//Step 9: Added event listner

button1.addEventListener("click", function() {
   let taskText1 = taskTextInput.value.trim();
    if(taskText1 === ""){
        errorMsg.textContent = "Please input value";
        return
    }
    else{
    const newTask = createTask(taskText1);
    taskArray.push(newTask)
    updateTasksInLocalStorage();
    taskTextInput.value = "";
    renderTask();
    }
})

//step 10 : 
renderTask();
