<script lang="ts">
	import { merge } from '@ims360/svelte-ivory/utils/functions';
	import { Icon as GenericIcon } from '@lucide/svelte';
	import { scaleLinear } from 'd3-scale';
	import { curveMonotoneX, line } from 'd3-shape';
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	// Definition des Datasets mit Tailwind-Klassen statt Hex-Codes
	interface Dataset {
		label: string;
		data: number[];
		class: string;
		icon?: typeof GenericIcon;
		input?: Snippet;
	}

	interface Props {
		datasets: Dataset[];
		class?: ClassValue;
		yMax?: number;
	}

	let { datasets, class: clazz, yMax: yMaxOverwrite }: Props = $props();

	let width = $state(0);
	let height = $state(0);
	let hoveredIndex = $state<number>();
	const hovered = $derived(typeof hoveredIndex === 'number' ? datasets[hoveredIndex] : undefined);

	// Berechnungen für Skalierung
	let yMax = $derived(yMaxOverwrite || Math.max(...datasets.flatMap((d) => d.data)));
	let xMax = $derived(Math.max(...datasets.map((d) => d.data.length - 1)));

	// Scales (Reaktiv sobald Breite/Höhe da ist)
	let xScale = $derived(scaleLinear().domain([0, xMax]).range([0, width]));
	let yScale = $derived(scaleLinear().domain([0, yMax]).range([height, 0]));

	// Pfad-Generator
	let pathGenerator = $derived(
		line<number>()
			.x((d, i) => xScale(i))
			.y((d) => yScale(d))
			.curve(curveMonotoneX),
	);
</script>

<div class={merge('flex flex-col gap-4 md:flex-row-reverse', clazz)}>
	<div
		class="relative grow rounded-bl-xl border-b border-l border-surface-300-700"
		bind:clientWidth={width}
		bind:clientHeight={height}
	>
		{#if width > 0 && height > 0}
			<svg viewBox="0 0 {width} {height}" class="h-full w-full overflow-visible">
				{#each datasets as set, i}
					<g
						role="group"
						onpointerenter={() => (hoveredIndex = i)}
						onpointerleave={() => (hoveredIndex = undefined)}
						class={[
							'transition-opacity duration-300 ease-in-out',
							!hovered || hovered.label === set.label ? 'opacity-100' : 'opacity-30',
						]}
					>
						<path
							d={pathGenerator(set.data) || ''}
							class="stroke-linecap-round fill-none stroke-[3px] {set.class}"
						/>

						<path
							d={pathGenerator(set.data) || ''}
							class="cursor-pointer fill-none stroke-transparent stroke-[20px]"
						/>
					</g>
				{/each}
			</svg>

			{#if hovered}
				<div
					class="pointer-events-none absolute right-0"
					style="top: {100 - (hovered.data[hovered.data.length - 1] / yMax) * 100}%"
				>
					<span
						class="inline-block rounded border border-slate-200 bg-white/90 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur"
					>
						{hovered.label}
					</span>
				</div>
			{/if}
		{/if}
	</div>
	<div class="flex flex-row items-start justify-start gap-x-6 gap-y-2 md:flex-col">
		{#each datasets as set, i}
			{@const { label, icon: Icon, class: clazz, input } = set}
			<div
				class="flex w-full items-center gap-2 select-none"
				onpointerenter={() => (hoveredIndex = i)}
				onpointerleave={() => (hoveredIndex = undefined)}
			>
				{#if Icon}
					<Icon class={clazz} size={16} />
				{/if}
				<span class="text-sm text-surface-700-300">{label}</span>
				<div class="ml-auto">
					{@render input?.()}
				</div>
			</div>
		{/each}
	</div>
</div>
