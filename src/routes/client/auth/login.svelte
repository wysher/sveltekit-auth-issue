<script>
    import { enhance } from '$lib/form';
	import { browser } from '$app/env';
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
    import { BASE_URL, LOGIN_URL } from '../_constants';
</script>

<form
	action="{LOGIN_URL}"
	method="post"
	use:enhance={{
		async result({ response }) {
			if (response.ok) {
				const body = await response.json();

				if (browser) {
					session.set(body);
					goto(BASE_URL);
				}
			}
		}
	}}
>
	<button>login</button>
</form>
