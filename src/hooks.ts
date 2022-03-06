import cookie from 'cookie';
import type { Handle, GetSession } from '@sveltejs/kit';

export const getSession: GetSession = (event) => {
    const cookies = cookie.parse(event.request.headers.get('cookie') || '');
    const { userid } = cookies;
    event.locals.userid = userid;

    console.log('get session', { userid });

    return userid ? { userid } : {};
}

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	return response;
};
