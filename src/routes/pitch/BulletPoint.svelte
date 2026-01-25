<script lang="ts">
	import { type Variant } from '@ims360/svelte-ivory';
	import { CheckCheck, Info, TriangleAlert, X } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		children: Snippet;
		class?: ClassValue;
		variant?: Variant;
	};

	let { children, variant = 'success', class: clazz }: Props = $props();

	const ICON_SIZE = 24;
</script>

<div class={['flex flex-row items-center gap-2', clazz]}>
	{#if variant === 'success'}
		<CheckCheck size={ICON_SIZE} class="stroke-success-500" />
	{:else if variant === 'error'}
		<X size={ICON_SIZE} class="stroke-error-500" />
	{:else if variant === 'warning'}
		<TriangleAlert size={ICON_SIZE} class="stroke-warning-500" />
	{:else if variant === 'primary'}
		<Info size={ICON_SIZE} class="stroke-secondary-500" />
	{/if}
	<div>
		{@render children()}
	</div>
</div>
