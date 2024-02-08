import { allFilters, countTaskElement, tasksElement } from './dom';
import cross from '../assets/images/icon-cross.svg';

let allTasks = [
	{
		id: Date.now(),
		task: 'Make a todo app',
		completed: false
	}
];

const getFilteredTasks = () => {
	const currentFilter =
		document.querySelector('.filter--active').dataset.filter;
	let filteredTasks = allTasks;

	if (currentFilter === 'active') {
		filteredTasks = allTasks.filter(task => !task.completed);
	} else if (currentFilter === 'completed') {
		filteredTasks = allTasks.filter(task => task.completed);
	}

	return filteredTasks;
};

const countItemsLeft = () => {
	const itemsLeft = allTasks.filter(task => !task.completed).length;
	if (allTasks.length === 0) {
		countTaskElement.textContent = 'No tasks';
	} else if (itemsLeft === 0) {
		countTaskElement.textContent = 'All tasks completed!';
	} else {
		countTaskElement.textContent = `${itemsLeft} items left`;
	}
};

const insertTasks = tasks => {
	const fragment = document.createDocumentFragment();

	tasks.forEach(task => {
		const newTaskContainer = document.createElement('div');
		newTaskContainer.classList.add('task-container');

		const newTaskCheck = document.createElement('input');
		newTaskCheck.classList.add('check-task');
		newTaskCheck.type = 'checkbox';
		newTaskCheck.checked = task.completed;
		newTaskCheck.id = task.id;

		const newTaskText = document.createElement('label');
		newTaskText.classList.add('text-task');
		newTaskText.textContent = task.task;
		newTaskText.htmlFor = task.id;

		const newTaskDelete = document.createElement('img');
		newTaskDelete.classList.add('cross-task');
		newTaskDelete.src = cross;

		newTaskDelete.addEventListener('click', () => deleteTask(task.id));

		newTaskCheck.addEventListener('change', () => completeTask(task.id));

		newTaskContainer.append(newTaskCheck, newTaskText, newTaskDelete);

		fragment.append(newTaskContainer);
	});

	tasksElement.textContent = '';
	tasksElement.append(fragment);
	countItemsLeft();
};

const saveTask = task => {
	allTasks.push(task);
	const tasksToRender = getFilteredTasks();
	insertTasks(tasksToRender);
};

const deleteTask = id => {
	allTasks = allTasks.filter(task => task.id !== id);
	console.log(allTasks);
	insertTasks(allTasks);
};

const completeTask = id => {
	allTasks = allTasks.map(task => {
		if (task.id === id) {
			task.completed = !task.completed;
		}
		return task;
	});

	const filteredTasks = getFilteredTasks();
	insertTasks(filteredTasks);
};

const createTask = task => {
	const newTask = {
		id: Date.now(),
		task: task,
		completed: false
	};

	saveTask(newTask);
};

const changeFilter = filterTarget => {
	[...allFilters].forEach(filter => {
		filter.classList.remove('filter--active');
	});

	filterTarget.classList.add('filter--active');
};

const filterTasks = filterTarget => {
	changeFilter(filterTarget);
	const filteredTasks = getFilteredTasks(filterTarget);
	insertTasks(filteredTasks);
};

const deleteAllCompleteTasks = () => {
	allTasks = allTasks.filter(task => !task.completed);
	insertTasks(allTasks);
};

export {
	deleteAllCompleteTasks,
	filterTasks,
	createTask,
	insertTasks,
	allTasks
};
