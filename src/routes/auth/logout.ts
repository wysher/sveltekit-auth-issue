import cookie from 'cookie';

export async function get(event) {
    if (event.session?.userid) {
        return {
            status: 303,
            redirect: '/auth/login',
        }
    }

    return {}
}


export async function post() {
    return {
        status: 200,
        body: { userid: '' },
        headers: {
            // location: '/auth/login',
            'Set-Cookie': cookie.serialize('userid', '', {
                path: '/',
                expires: new Date(0),
                httpOnly: true,
            })
        }
    }
}
