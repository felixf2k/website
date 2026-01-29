<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		children: Snippet;
		class?: ClassValue;
	};

	let { children, class: clazz }: Props = $props();
</script>

<div class={['flex flex-row gap-4 sm:gap-8', clazz]}>
	<div class="relative w-2 rounded-full bg-surface-100-900 [clip-path:inset(0_round_9999px)]">
		<div class="bg-fixed-progress h-full w-full"></div>
	</div>

	<div class="flex grow flex-col gap-8">
		{@render children()}
	</div>
</div>

<style>
	.bg-fixed-progress {
		background: linear-gradient(
				to bottom,
				var(--color-primary-600) 0vh,
				var(--color-primary-500) 50vh,
				transparent 50vh
			)
			fixed;

		/* Ensures the background covers the whole viewport width for consistent alignment */
		background-size: 100% 100vh;
		background-repeat: no-repeat;
	}
</style>
