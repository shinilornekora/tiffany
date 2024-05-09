import { UNSAFE_CALL } from '@types';

const server = 'http://94.250.251.77:80/api';

export const apiCall = ({ method, path, body }: UNSAFE_CALL) => {
	if (method === 'GET') {
		body = Object.entries(body).reduce(
			(acc, current) => acc + `${current[0]}=${current[1]}`,
			'?',
		);
	}

	const innerCall = async () =>
		await fetch(server + path, {
			method: method,
			mode: 'no-cors',
			body: JSON.stringify(body ?? {}),
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

	return innerCall().catch(e => {
		Tiffany.log(e);
	});
};
