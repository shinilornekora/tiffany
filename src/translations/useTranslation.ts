import { translations } from './dictionaries';

export default function useTranslation() {
	return function (text: string) {
		const translation = translations[Tiffany.language][text];
		if (!translation) {
			// Tiffany.ErrorLog(`No translation for ${text}`);

			return text;
		}

		return translation;
	};
}
