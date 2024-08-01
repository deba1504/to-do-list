const inputbox = document.getElementById("tasks");
const task = document.getElementById("mere_task");

function addTask(){
    if(inputbox.value === ''){
        alert("You must type something");
    }
    else{
        let newTask = document.createElement("li");
        newTask.innerHTML = inputbox.value;
        task.appendChild(newTask);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        newTask.appendChild(span);
        saveData();
    }
    inputbox.value = '';
}

task.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",task.innerHTML);
}

function showSaved(){
    task.innerHTML = localStorage.getItem("data");
}

showSaved();