<script lang="ts" module>
	import { beforeNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	// import logo from '$lib/assets/images/logo.svg';
	import Logo from '$lib/components/Logo.svelte';
	import { clickOutside } from '@ims360/svelte-ivory/utils/attachments';
	import { Menu, X } from '@lucide/svelte';
	import type { ClassValue } from 'svelte/elements';
	import { slide } from 'svelte/transition';
	import Navlink from './Navlink.svelte';

	const DISPLAYED_LINKS = [
		{ name: 'Konzept', url: resolve('/concept'), description: '', type: 'WebPage' },
		{ name: 'Modelle', url: resolve('/models'), description: '', type: 'WebPage' },
		{ name: 'Über uns', url: resolve('/about'), description: '', type: 'AboutPage' },
	];

	export const LINKS = [
		...DISPLAYED_LINKS,
		{
			name: 'Startseite',
			url: resolve('/'),
			description:
				'Elench bietet risikofreie Individualsoftware zu Fixpreisen. Entdecken Sie unsere flexiblen Kooperationsmodelle für planbare und nachhaltige Softwareprojekte.',
			type: 'WebPage',
		},
		{
			name: 'Kontakt',
			url: resolve('/contact'),
			description: 'Nimm Kontakt zu uns auf',
			type: 'ContactPage',
		},
		{
			name: 'Impressum',
			url: resolve('/imprint'),
			description: 'Impressum',
			type: 'WebPage',
		},
		{
			name: 'Datenschutz',
			url: resolve('/data-protection'),
			description: 'Datenschutzerklärung',
			type: 'WebPage',
		},
	];
</script>

<script lang="ts">
	type Props = {
		class?: ClassValue;
	};

	let { class: clazz }: Props = $props();

	let isMobileMenuOpen = $state(false);
	let scrollY = $state(0);

	beforeNavigate(() => {
		isMobileMenuOpen = false;
	});
</script>

<svelte:window bind:scrollY />

<nav
	class={[
		'navbar w-full max-w-full border-b bg-surface-50-950/90 backdrop-blur transition-colors select-none  print:hidden',
		scrollY
			? 'border-surface-200-800'
			: [isMobileMenuOpen ? 'border-surface-200-800 lg:border-transparent' : 'border-transparent'],
		clazz,
	]}
	{@attach clickOutside(() => (isMobileMenuOpen = false))}
>
	<div class="mx-auto flex flex-row justify-between content pr-0 lg:pr-8">
		<a class="flex shrink-0 items-center py-4" href="/" aria-label="Startseite">
			<Logo class="h-10 w-auto lg:h-12" />
		</a>
		<div class="hidden lg:flex lg:items-center">
			{@render navItems(false)}
		</div>
		<button
			type="button"
			class="flex grow items-center justify-end rounded-md content text-surface-600-400 hover:bg-surface-100-900 hover:text-surface-900-100 focus:outline-none lg:hidden"
			aria-controls="mobile-menu"
			aria-expanded={isMobileMenuOpen}
			onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
		>
			<span class="sr-only">Open main menu</span>
			{#if isMobileMenuOpen}
				<X class="block h-6 w-6" aria-hidden="true" />
			{:else}
				<Menu class="block h-6 w-6" aria-hidden="true" />
			{/if}
		</button>
	</div>

	{#if isMobileMenuOpen}
		<div class="container mx-auto lg:hidden" id="mobile-menu" transition:slide>
			<div class="flex flex-col pb-4">
				{@render navItems(true)}
			</div>
		</div>
	{/if}
</nav>

<!-- <div
	class="absolute top-0 hidden w-full flex-row items-center justify-between content py-4 print:flex"
>
	<img src={logo} alt="Elench logo" class="h-10 w-auto" />
	<a href="mailto:info@elench.de" class="btn preset-filled-primary-500">
		Kontakt aufnehmen <Mail size={16} />
	</a>
</div> -->

{#snippet navItems(mobile = false)}
	{#each DISPLAYED_LINKS as link}
		<Navlink
			href={link.url}
			class={['flex items-center px-4 text-lg', mobile ? 'w-full py-2' : 'h-full justify-center ']}
		>
			{link.name}
		</Navlink>
	{/each}
	<a href="/contact" class={['text-lg', mobile ? 'mt-2 w-fit px-4' : 'ml-4 h-full py-8']}>
		<div class="btn h-full preset-filled-primary-500 font-semibold">Kontakt aufnehmen</div>
	</a>
{/snippet}

<style>
	.navbar {
		-webkit-backdrop-filter: blur(8px);
	}
</style>
