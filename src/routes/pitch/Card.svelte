<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		class?: ClassValue;
		title: string;
		description: string | Snippet;
		rightFor: string;
		children?: Snippet;
	};

	let { class: clazz, title, description, rightFor, children }: Props = $props();
</script>

<div class={['flex flex-col justify-between gap-6 rounded bg-surface-50-950 p-4', clazz]}>
	<div class="mb-2 text-surface-600-400">
		<h3 class="mb-2 text-xl font-bold text-surface-950-50">{title}</h3>
		{#if typeof description === 'string'}
			<p>
				{description}
			</p>
		{:else}
			{@render description()}
		{/if}
	</div>
	<div class="flex flex-col gap-2 border-surface-100-900">
		{@render children?.()}
	</div>
	<p class="mt-1 text-surface-800-200">
		<span class="mr-1 text-sm font-bold tracking-wide text-primary-700-300">Richtig für:</span>
		{rightFor}
	</p>
</div>
