document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

let task = document.getElementById('task');
let submit = document.getElementById('create-task-form');
let taskBar = document.getElementById('new-task-description');
let uList = document.getElementById('list');

submit.addEventListener('submit',(e)=>{
  e.preventDefault();
let newTask = taskBar.value;
let taskList = document.createElement('li');
taskList.textContent = newTask;
uList.appendChild(taskList);
taskDescription.value= '';
})