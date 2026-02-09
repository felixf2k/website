<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime';
	import type { Icon } from '@lucide/svelte';
	import Card, { type CardProps } from './Card.svelte';

	type Props = CardProps & {
		heading?: string;
		description?: string;
		icon: typeof Icon | number;
		iconStyle?: 'filled' | 'tonal' | 'raw';
	};

	let { children, heading, description, icon, iconStyle, ...cardProps }: Props = $props();
</script>

<Card {...cardProps}>
	<div class="@mx:gap-x-4 grid grid-cols-[auto_1fr] gap-4 @md:gap-y-0">
		<div
			class={[
				'flex h-12 w-12 items-center justify-center rounded-xl text-3xl @md:row-span-2 @md:h-16 @md:w-16 print:h-12 print:w-12',
				iconStyle === 'filled' && 'preset-filled-primary-500 p-3 @md:p-4 print:p-3',
				iconStyle === 'tonal' && 'bg-primary-50-950 p-3 text-primary-500 @md:p-4 print:p-3',
			]}
		>
			{#if typeof icon === 'number'}
				<p class="font-mono font-normal">
					{icon.toLocaleString(getLocale(), { minimumIntegerDigits: 1, maximumFractionDigits: 0 })}
				</p>
			{:else}
				{@const Icon = icon}
				<Icon class="h-full w-full" />
			{/if}
		</div>
		<p
			class={[
				'my-auto h3 @md:my-0 @md:-translate-y-1 print:-translate-y-1 print:h4',
				!description && 'self-center @md:row-span-2 @md:translate-y-0',
			]}
		>
			{heading}
		</p>
		{#if description}
			<p class="col-span-2 text-lg text-surface-600-400 @md:col-span-1 @md:-translate-y-0.5">
				{description}
			</p>
		{/if}
	</div>
	{@render children?.()}
</Card>
