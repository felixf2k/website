<script lang="ts">
	import { merge } from '@ims360/svelte-ivory/utils/functions';
	import type { Snippet } from 'svelte';
	import type { ClassValue, HTMLAttributes } from 'svelte/elements';
	import Section from './Section.svelte';

	type Props = HTMLAttributes<HTMLDivElement> & {
		class?: ClassValue;
		heading: Snippet;
		description?: Snippet | string;
		actions?: Snippet;
		centered?: boolean;
	};

	let {
		class: clazz,
		heading,
		description,
		actions,
		centered = false,
		children,
		...rest
	}: Props = $props();
</script>

<Section
	class={merge(
		'flex w-full flex-col content',
		centered
			? 'h-[calc(100vh-var(--spacing)*32)] items-center justify-center gap-8 pb-8 select-none '
			: 'gap-4',
		clazz,
	)}
	{...rest}
>
	<div
		class={merge(
			'flex max-w-full grow flex-col justify-center pb-24',
			centered ? 'gap-8' : 'gap-4',
		)}
	>
		<h1 class="h1">
			{@render heading()}
		</h1>
		{#if description}
			<p class="h2 leading-normal text-surface-600-400">
				{#if typeof description === 'string'}
					{description}
				{:else}
					{@render description()}
				{/if}
			</p>
		{/if}
		{#if actions}
			<div class="mt-2 grid grid-cols-1 gap-4 sm:mt-4 sm:w-fit sm:grid-cols-2 lg:gap-8">
				{@render actions()}
			</div>
		{/if}
	</div>
	{@render children?.()}
</Section>
