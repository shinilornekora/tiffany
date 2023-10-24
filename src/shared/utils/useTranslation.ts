import apis from '../../apis';
import { useState, useMemo } from 'react';

export default function useTranslation() {
	return function (text: string) {
		const [currentTranslation, setCurrentTranslation] = useState<string>('');

		useMemo(() => {
			apis.utils.translation(text).then((object) => setCurrentTranslation(object.data.text)).catch(() => {
				// eslint-disable-next-line no-console
				console.log(`No translation for ${text}.`);
				setCurrentTranslation(text);
			});
		},[text]);

		return currentTranslation;
	};
}