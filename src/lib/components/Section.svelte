<script module lang="ts">
	import { merge } from '@ims360/svelte-ivory/utils/functions';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let pages = $state<symbol[]>([]);
</script>

<script lang="ts">
	type Props = HTMLAttributes<HTMLDivElement> & {
		excludeFirstN?: number;
		heading?: string;
		description?: string;
	};

	let {
		class: clazz,
		children,
		excludeFirstN = 1,
		heading,
		description,
		...rest
	}: Props = $props();

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

<div
	class={merge(
		'relative flex h-fit w-full flex-col gap-8 content print:h-screen print:break-before-page print:py-4',
		clazz,
	)}
	{...rest}
>
	{#if heading}
		<div class="flex w-full flex-col gap-2 print:gap-0">
			<h2 class="h2 print:h4">{heading}</h2>
			{#if description}
				<p class="h4 text-surface-600-400 print:h6 print:text-surface-600-400">{description}</p>
			{/if}
		</div>
	{/if}
	{@render children?.()}
	{#if pageNumber > 0}
		<div class="absolute right-8 bottom-4 hidden text-sm text-gray-400 print:block">
			{pageNumber} / {totalPages}
		</div>
	{/if}
</div>
