<script context="module">
	export async function load(event) {
		const isAuthenticated = event.session.userid;

        console.log({ isAuthenticated });

		const hasLoginPath = event.url.pathname.startsWith('/auth/login');

		if (!isAuthenticated && !hasLoginPath) {
			return {
				status: 302,
				redirect: '/auth/login',
				props: {
					event
				}
			};
		}

		return {
			props: {
				event
			}
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

{#if !!$session?.userid}
	<form
		action="/auth/logout"
		method="post"
		use:enhance={{
			async result({ response }) {
				if (response.ok) {
					const body = await response.json();

					if (browser) {
						session.set(body);
                        isLogoutVisible = false;
						goto('/auth/login');
					}
				}
			}
		}}
	>
		<button>logout</button>
	</form>
{/if}

<slot />
