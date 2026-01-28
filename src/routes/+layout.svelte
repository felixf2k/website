<script lang="ts">
	import { page } from '$app/state';
	import favicon from '$lib/assets/images/favicon.svg';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import Footer from './Footer.svelte';
	import './layout.css';
	import Navbar from './Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar class={['fixed top-0 z-10']} />
<main class="flex flex-col gap-32 pb-20">
	{@render children()}
</main>
<Footer />
<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>
			{locale}
		</a>
	{/each}
</div>
