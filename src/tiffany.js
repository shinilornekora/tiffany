if (!localStorage.getItem('authToken')) {
	localStorage.setItem('authToken', null);
}

/**
 * Tiffany - наша вспомогательная тулза для дебага всевозможных процессов
 * TODO: она должна быть доступна только в dev-режиме
 *
 * info - выводит статус тиффани - если включена.
 * loginSafe - инициализирует статус админа.
 * logoutSafe - выбивает пользователя из аккаунта.
 * language - глобальная переменная языка - не хочется полагаться чисто на реакт здесь
 * ErrorLog - отправление ошибок рантайма в дэшборды
 */
window['Tiffany'] = {
	language: 'en',

	ErrorLog: text => {
		// eslint-disable-next-line no-console
		return console.error(text);
	},

	log: text => {
		// eslint-disable-next-line no-console
		return console.log(text);
	},

	_loginDevFunc: () => {},

	_logoutDevFunc: () => {},

	info: () => {
		return 'Hi! My name is Tiffany. It stands for The Entropy Frontend\n\nMake sure that you see me';
	},

	loginSafe: () => {
		this.log('I hope you know what are you doing, sweetheart.\nKeep it up.');

		// Это не наркомания. Оптимизируем наши рендеры!
		this.loginDevFunc()();
	},

	logoutSafe: () => {
		this.log('\'Till next time, sweetheart!');
		this.logoutDevFunc()();
	},

	globalDevCall: function (fn, params) {
		this.log('I hope you know what are you doing, sweetheart.');

		return () => fn(params);
	},
};
