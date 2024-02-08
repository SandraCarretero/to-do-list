import { modeElement } from './dom';
import sun from '../assets/images/icon-sun.svg'
import moon from '../assets/images/icon-moon.svg'

let darkMode = false;

const changeMode = () => {
	darkMode = !darkMode;

	if (darkMode) {
		document.body.classList.add('dark');
		modeElement.src = sun;
	} else {
		document.body.classList.remove('dark');
		modeElement.src = moon;
	}
};

export { changeMode };
