<script context="module">
    export async function load(event) {
        if (event.session?.userid) {
            return {
                status: 303,
                redirect: '/',
            }
        }

        return {}
    }
</script>
<script>
	import { enhance } from '$lib/form';
	import { browser } from '$app/env';
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
</script>

<form
	action="/auth/login"
	method="post"
	use:enhance={{
		async result({ response }) {
			if (response.ok) {
				const body = await response.json();

				if (browser) {
                    session.set(body);
                    goto('/')
                    invalidate('/')
                }
			}
		}
	}}
>
	<button>login</button>
</form>
