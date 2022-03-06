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
	import { enhance } from '$lib/form';
	import { browser } from '$app/env';
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
</script>

<h1>
    Client (JS on)
</h1>
<h3>
    here login/logout works with JS on
</h3>

<slot />

{#if !!$session?.userid}
    <form
        action="{LOGOUT_URL}"
        method="post"
        use:enhance={{
            async result({ response }) {
                if (response.ok) {
                    const body = await response.json();

                    if (browser) {
                        session.set(body);
                        goto(LOGIN_URL);
                    }
                }
            }
        }}
    >
        <button>logout</button>
    </form>
{/if}
