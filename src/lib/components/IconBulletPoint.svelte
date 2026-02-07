<script lang="ts">
	import type { Component } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		title: string;
		description?: string;
		icon: Component;
		class?: ClassValue;
		iconClass?: ClassValue;
	};

	let { title, description, icon: Icon, class: clazz, iconClass }: Props = $props();
</script>

<div class={['flex flex-row gap-4', clazz]}>
	<div class={['mt-1', iconClass]}><Icon /></div>
	<div class="flex flex-col gap-1">
		<p class="font-semibold">{title}</p>
		{#if description}
			<p class="leading-relaxed text-surface-600-400">
				{description}
			</p>
		{/if}
	</div>
</div>
