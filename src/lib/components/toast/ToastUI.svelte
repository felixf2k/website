<script lang="ts">
	import { Toasts } from '@ims360/svelte-ivory/components/toast';
	import { flip } from 'svelte/animate';
	import { fly, scale } from 'svelte/transition';
	import Toast from './Toast.svelte';

	const duration = 200;
	const scaleFactor = 0.05;

	let toasts = $state<Toast[]>([]);
</script>

<div
	class="pointer-events-none fixed top-0 left-0 z-50 flex h-full w-full flex-col-reverse items-center justify-end overflow-hidden px-4 py-2"
>
	{#each Toasts.toasts as toast, i (toast.id)}
		{@const offset = Toasts.toasts.length - i - 1}
		{@const currentScale = Math.max(1 - offset * scaleFactor)}
		<div
			in:fly={{ y: '-100%', duration }}
			out:scale={{ duration }}
			animate:flip={{ duration }}
			class="group pointer-events-auto absolute top-0 left-4 flex h-fit w-[calc(100%-var(--spacing)*8)] flex-row items-center justify-center pt-2"
			style="transform: translateY({offset * 8 * currentScale}px) scale({currentScale});"
		>
			<Toast bind:this={toasts[i]} toast={{ ...toast, close: () => Toasts.close(toast.id) }} />
		</div>
	{/each}
</div>
