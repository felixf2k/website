<script lang="ts">
	import { page } from '$app/state';
	import { getLocale } from '$lib/paraglide/runtime';
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		children?: Snippet;
		class?: ClassValue;
		heading?: string;
		description?: string;
		icon: Snippet | number;
		iconStyle?: 'filled' | 'tonal' | 'raw';
		id?: string;
	};

	let { children, class: clazz, heading, description, icon, iconStyle, id }: Props = $props();

	const isHighlighted = $derived(id && page.url.hash === `#${id}`);
</script>

<div
	class={[
		'scroll-enter @container flex flex-col gap-8 card border bg-surface-50-950 p-[calc(var(--spacing)*8-1px)] transition-[border-color] delay-500 duration-500 not-dark:shadow-lg dark:bg-surface-100-900',
		isHighlighted ? 'border-primary-500' : 'border-transparent ',
		clazz
	]}
	{id}
>
	<div class="@mx:gap-x-4 grid grid-cols-[auto_1fr] gap-4 @md:gap-y-0">
		<div
			class={[
				'flex h-12 w-12 items-center justify-center rounded-xl text-3xl @md:row-span-2 @md:h-16 @md:w-16',
				iconStyle === 'filled' && 'preset-filled-primary-500 p-3 @md:p-4',
				iconStyle === 'tonal' && 'bg-primary-50-950 p-3 text-primary-500 @md:p-4'
			]}
		>
			{#if typeof icon === 'number'}
				<p class="font-normal">
					{icon.toLocaleString(getLocale(), { minimumIntegerDigits: 1, maximumFractionDigits: 0 })}
				</p>
			{:else}
				{@render icon()}
			{/if}
		</div>
		<p class="my-auto h3 @md:my-0 @md:-translate-y-1">{heading}</p>
		<p class="col-span-2 text-lg text-surface-600-400 @md:col-span-1 @md:-translate-y-0.5">
			{description}
		</p>
	</div>
	{@render children?.()}
</div>

<style lang="scss">
	@keyframes enter {
		from {
			opacity: 0;
			transform: translateY(2rem);
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.scroll-enter {
			animation: enter linear both;
			animation-timeline: view();
			animation-range: entry 5% entry 40%;
		}
	}
</style>
