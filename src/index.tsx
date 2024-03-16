import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// @ts-expect-error: тайпскрипт не умеет так
window.authToken = '';

// @ts-expect-error: тайпскрипт не умеет так
window['Tiffany'] = {
	info: () => {
		return 'Hi! My name is Tiffany. It stands for The Entropy Frontend';
	},
	logAsAdmin: () => {
		// @ts-expect-error: тайпскрипт не умеет так
		window.authToken = 'superuser777';

		return 'Now you are logged as Admin. Bless you!';
	}
};

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
