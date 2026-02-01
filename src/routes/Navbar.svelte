<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import Logo from '$lib/components/Logo.svelte';
	import { clickOutside } from '@ims360/svelte-ivory/utils/attachments';
	import { Menu, X } from '@lucide/svelte';
	import type { ClassValue } from 'svelte/elements';
	import { slide } from 'svelte/transition';

	type Props = {
		class?: ClassValue;
	};

	let { class: clazz }: Props = $props();

	// idk why svelte doesnt recognize the
	clickOutside;

	let isMobileMenuOpen = $state(false);
	let scrollY = $state(0);

	beforeNavigate(() => {
		isMobileMenuOpen = false;
	});

	const links = [
		{ name: 'Konzept', href: '/pitch' },
		{ name: 'Preise', href: '/pricing' }
	];
</script>

<svelte:window bind:scrollY />

<nav
	class={[
		'w-full max-w-full border-b bg-surface-50-950/90 backdrop-blur-lg transition-colors select-none print:hidden',
		scrollY
			? 'border-surface-200-800'
			: [isMobileMenuOpen ? 'border-surface-200-800 sm:border-transparent' : 'border-transparent'],
		clazz
	]}
	{@attach clickOutside(() => (isMobileMenuOpen = false))}
>
	<div class="mx-auto flex flex-row justify-between content">
		<a class="flex shrink-0 items-center py-4" href="/">
			<Logo class="h-10 w-auto sm:h-12" />
		</a>
		<div class="hidden sm:flex sm:items-center">
			{@render navItems(false)}
		</div>
		<button
			type="button"
			class="flex items-center justify-center rounded-md p-2 text-surface-600-400 hover:bg-surface-100-900 hover:text-surface-900-100 focus:outline-none sm:hidden"
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
		<div class="container mx-auto sm:hidden" id="mobile-menu" transition:slide>
			<div class="flex flex-col pb-4">
				{@render navItems(true)}
			</div>
		</div>
	{/if}
</nav>

{#snippet navItems(mobile = false)}
	{#each links as link}
		<a
			href={link.href}
			class={[
				'flex items-center px-4 text-lg text-surface-700-300 hover:text-surface-950-50',
				mobile ? 'w-full py-2' : 'h-full justify-center '
			]}
		>
			{link.name}
		</a>
	{/each}
	<a href="/contact" class={['text-lg', mobile ? 'mt-2 w-full px-4' : 'ml-4 h-full py-8']}>
		<div class="btn h-full preset-filled-primary-500 font-semibold">Kontakt aufnehmen</div>
	</a>
{/snippet}
