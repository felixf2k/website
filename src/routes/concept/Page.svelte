<script module lang="ts">
	let pages = $state<symbol[]>([]);
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		class?: ClassValue;
		children: Snippet;
		excludeFirstN?: number;
	};

	let { class: clazz, children, excludeFirstN = 1 }: Props = $props();

	const id = Symbol();

	onMount(() => {
		pages.push(id);
		return () => {
			const index = pages.indexOf(id);
			if (index !== -1) pages.splice(index, 1);
		};
	});

	let pageNumber = $derived(pages.indexOf(id) + 1 - excludeFirstN);
	let totalPages = $derived(pages.length - excludeFirstN);
</script>

<div class={['relative h-fit w-full print:h-screen print:break-before-page', clazz]}>
	{@render children()}
	{#if pageNumber > 0}
		<div class="absolute right-8 bottom-4 hidden text-sm text-gray-400 print:block">
			{pageNumber} / {totalPages}
		</div>
	{/if}
</div>
