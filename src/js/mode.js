import { modeElement } from './dom';

let darkMode = false;

const changeMode = () => {
	darkMode = !darkMode;

	if (darkMode) {
		document.body.classList.add('dark');
		modeElement.src = '../assets/images/icon-sun.svg';
	} else {
		document.body.classList.remove('dark');
		modeElement.src = '../assets/images/icon-moon.svg';
	}
};

export { changeMode };
