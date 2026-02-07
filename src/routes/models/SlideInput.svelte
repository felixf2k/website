<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		value: number;
		min?: number;
		max?: number;
		step?: number;
		bgClass: ClassValue;
		class?: ClassValue;
	};

	let {
		value = $bindable(),
		min = 0,
		max = 100,
		step = 1,
		bgClass,
		class: clazz,
	}: Props = $props();

	let percentage = $derived(((value - min) / (max - min)) * 100);
</script>

<div
	class={['relative flex h-2 min-w-32 flex-1 items-center rounded-full bg-surface-300-700', clazz]}
>
	<div class={['absolute h-full rounded-lg', bgClass]} style="width: {percentage}%"></div>
	<input
		type="range"
		{min}
		{max}
		{step}
		bind:value
		class="absolute h-full w-full cursor-pointer appearance-none rounded-full bg-transparent"
	/>
</div>
