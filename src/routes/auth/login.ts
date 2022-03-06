import cookie from 'cookie';

export async function get(event) {
    if (event.session?.userid) {
        return {
            status: 303,
            redirect: '/',
        }
    }

    return {}
}

export async function post() {
    return {
        status: 200,
        body: { userid: 1 },
        headers: {
            'Set-Cookie': cookie.serialize('userid', '1', {
                path: '/',
                httpOnly: true,
            }),
        }
    }
}
