import { buttonsDeleteTaskElement, buttonsElement, formElement, modeElement } from "./dom";
import { changeMode } from "./mode";
import { allTasks, createTask, deleteAllCompleteTasks, filterTasks, insertTasks } from "./todo-functions";



  
  insertTasks(allTasks);
  
  modeElement.addEventListener('click', changeMode);
  
  formElement.addEventListener('submit', event => {
    event.preventDefault();
    if (event.target.task.value === '') return;
    createTask(event.target.task.value);
    event.target.reset();
  });
  
  buttonsDeleteTaskElement.addEventListener('click', deleteAllCompleteTasks);
  
  buttonsElement.addEventListener('click', event => {
    if (event.target.tagName !== 'BUTTON') return;
    filterTasks(event.target);
  });
  
