<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		children: Snippet;
		class?: ClassValue;
	};

	let { children, class: clazz }: Props = $props();
</script>

<div class={['flex flex-row items-start gap-2', clazz]}>
	<div class="mt-1.75 h-2 w-2 shrink-0 rounded-full preset-filled-primary-500"></div>
	<span>{@render children()}</span>
</div>
