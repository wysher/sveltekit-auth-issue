import cookie from 'cookie';
import { BASE_URL } from '../_constants';

export async function get(event) {
	if (event.session?.userid) {
		return {
			status: 303,
			redirect: BASE_URL
		};
	}

	return {};
}

export async function post() {
	return {
		status: 303,
		headers: {
            location: BASE_URL,
			'Set-Cookie': cookie.serialize('userid', '1', {
				path: '/',
				httpOnly: true
			})
		}
	};
}
