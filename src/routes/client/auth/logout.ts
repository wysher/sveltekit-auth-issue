import cookie from 'cookie';
import { LOGIN_URL } from '../_constants';

export async function post({ request }) {
	const headers = {
		'Set-Cookie': cookie.serialize('userid', '', {
			path: '/',
			expires: new Date(0),
			httpOnly: true
		})
	};

    if (request.headers.get('accept') === 'application/json') {
        return {
            status: 200,
            body: { userid: 1 },
            headers,
        };
    }

	return {
		status: 302,
		headers: {
			...headers,
			location: LOGIN_URL
		}
	};
}
