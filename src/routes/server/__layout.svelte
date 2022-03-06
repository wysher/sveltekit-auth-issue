<script context="module">
	import { LOGIN_URL, LOGOUT_URL } from './_constants';

	export async function load(event) {
		const isAuthenticated = event.session.userid;
		const hasLoginPath = event.url.pathname.startsWith(LOGIN_URL);

		if (!isAuthenticated && !hasLoginPath) {
			return {
				status: 302,
				redirect: LOGIN_URL,
				props: { event },
			};
		}

		return {
			props: { event },
		};
	}
</script>

<script>
	export let event;
</script>

<h1>
    Server (JS off)
</h1>
<h3>
    here login/logout works with JS off, which causes fetching all files again
</h3>

<slot />

{#if !!event.session?.userid}
    <form
        action="{LOGOUT_URL}"
        method="post"
    >
        <button>logout</button>
    </form>
{/if}
