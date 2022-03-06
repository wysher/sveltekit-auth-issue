<script>
    import { page } from '$app/stores';

    const PAGES = ['client', 'server'];
</script>

<nav>
    <ul>
        {#each PAGES as name}
        <li>
            <a href="/{name}">
                {name}
                {#if $page.url.pathname.includes(name)}
                <span>{` <==`} </span>
                {/if}
            </a>
        </li>
        {/each}
    </ul>
</nav>

<slot />
