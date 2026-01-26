<script lang="ts">
	import logo from '$lib/assets/images/logo.svg';
	import { clickOutside } from '@ims360/svelte-ivory/utils/attachments';
	import { Menu, X } from '@lucide/svelte';
	import type { ClassValue } from 'svelte/elements';
	import { slide } from 'svelte/transition';

	type Props = {
		class?: ClassValue;
	};

	let { class: clazz }: Props = $props();

	let isMobileMenuOpen = $state(false);
	let scrollY = $state(0);

	const links = [
		{ name: 'Services', href: '/' },
		{ name: 'Approach', href: '/pricing' },
		{ name: 'Pricing', href: '/pricing' }
	];
</script>

<svelte:window bind:scrollY />

<nav
	class={[
		'border-b bg-surface-50-950 transition-colors print:hidden',
		scrollY ? 'border-surface-200-800' : 'border-transparent',
		clazz
	]}
	{@attach clickOutside(() => (isMobileMenuOpen = false))}
>
	<div class="mx-auto flex flex-row justify-between content">
		<div class="flex shrink-0 items-center py-4">
			<img class="h-10 w-auto" src={logo} alt="Logo" />
		</div>
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
				'flex items-center justify-center text-surface-700-300 hover:text-surface-950-50',
				!mobile && 'h-full px-4'
			]}
		>
			{link.name}
		</a>
	{/each}
	<a href="/contact" class={['', mobile ? 'mt-2' : 'ml-4 h-full py-4']}>
		<div class="btn h-full preset-filled-primary-500">Contact us</div>
	</a>
{/snippet}
