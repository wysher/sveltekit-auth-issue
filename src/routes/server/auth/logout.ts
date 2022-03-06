import cookie from 'cookie';
import { LOGIN_URL } from '../_constants';

export async function post() {
    return {
        status: 302,
        headers: {
            location: LOGIN_URL,
            'Set-Cookie': cookie.serialize('userid', '', {
                path: '/',
                expires: new Date(0),
                httpOnly: true,
            })
        }
    }
}
