if (!localStorage.getItem('authToken')) {
	localStorage.setItem('authToken', null);
}

/**
 * Tiffany - наша вспомогательная тулза для дебага всевозможных процессов
 * TODO: она должна быть доступна только в dev-режиме
 *
 * info - выводит статус тиффани - если включена.
 * logAsAdmin - инициализирует статус админа.
 * language - глобальная переменная языка - не хочется полагаться чисто на реакт здесь
 * ErrorLog - отправление ошибок рантайма в дэшборды
 */
window['Tiffany'] = {
	info: () => {
		return 'Hi! My name is Tiffany. It stands for The Entropy Frontend\n\nMake sure that you see me';
	},
	logAsAdmin: () => {
		localStorage.setItem('authToken', 'superuser_2004');

		return 'Now you are logged as Admin. Bless you!';
	},
	language: 'en',
	ErrorLog: text => {
		// eslint-disable-next-line no-console
		return console.error(text);
	},
	log: text => {
		// eslint-disable-next-line no-console
		return console.log(text);
	},
};
