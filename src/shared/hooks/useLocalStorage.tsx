import { useState } from 'react';

export const useLocalStorage = (
	keyName: string,
	defaultValue: string | null,
) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const value = window.localStorage.getItem(keyName);

			if (value) {
				return JSON.parse(value);
			}

			window.localStorage.setItem(keyName, JSON.stringify(defaultValue));

			return defaultValue;
		} catch (err) {
			return defaultValue;
		}
	});
	const setValue = (newValue: Record<string, string>) => {
		try {
			window.localStorage.setItem(keyName, JSON.stringify(newValue));
			// eslint-disable-next-line no-empty
		} catch (err) {}

		setStoredValue(newValue);
	};

	return [storedValue, setValue];
};
