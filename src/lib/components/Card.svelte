<script lang="ts" module>
	import { page } from '$app/state';
	import { merge } from '@ims360/svelte-ivory/utils/functions';
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	export type CardProps = {
		children?: Snippet;
		class?: ClassValue;
		id?: string;
	};
</script>

<script lang="ts">
	let { children, class: clazz, id }: CardProps = $props();

	const isHighlighted = $derived(id && page.url.hash === `#${id}`);
</script>

<div
	class={merge(
		'scroll-enter @container flex flex-col gap-8 card border bg-surface-50-950 p-[calc(var(--spacing)*8-1px)] transition-[border-color] delay-500 duration-500 not-dark:shadow-lg dark:bg-surface-100-900 print:gap-4 print:p-4',
		isHighlighted ? 'border-primary-500' : 'border-transparent ',
		clazz
	)}
	{id}
>
	{@render children?.()}
</div>

<style lang="scss">
	@keyframes enter {
		from {
			opacity: 0;
			transform: translateY(2rem);
		}
	}

	@media screen and (prefers-reduced-motion: no-preference) {
		.scroll-enter {
			animation: enter linear both;
			animation-timeline: view();
			animation-range: entry 5% entry 40%;
		}
	}
</style>
