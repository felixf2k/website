<script lang="ts">
	import { Check, X } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		children: Snippet;
		available?: boolean;
		class?: ClassValue;
	};

	let { children, available = true, class: clazz }: Props = $props();
</script>

<div class={['flex flex-row items-center gap-2', clazz]}>
	{#if available}
		<div
			class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success-500 text-surface-50"
		>
			<Check size={16} class="stroke-3" />
		</div>
	{:else}
		<div
			class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-error-500 text-surface-50"
		>
			<X size={16} class="stroke-3" />
		</div>
	{/if}
	<div>
		{@render children()}
	</div>
</div>
