// Aquí van los getElementById y los querySelectorAll que pondrías al principio.
const tasksElement = document.getElementById('tasks');
const buttonsElement = document.getElementById('buttons');
const formElement = document.getElementById('form');
const countTaskElement = document.getElementById('count-task');
const buttonsDeleteTaskElement = document.getElementById('delete-task');
const modeElement = document.getElementById('mode');
const allFilters = buttonsElement.querySelectorAll('.filter');

export {
	tasksElement,
	buttonsElement,
	formElement,
	countTaskElement,
	buttonsDeleteTaskElement,
	modeElement,
	allFilters
};
