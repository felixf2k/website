<script lang="ts">
	import { page } from '$app/state';
	import favicon from '$lib/assets/images/favicon.svg';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import Navbar from './Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar class={['fixed top-0 w-full']} />
<main class={['pt-20']}>
	{@render children()}
</main>
<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>
			{locale}
		</a>
	{/each}
</div>
