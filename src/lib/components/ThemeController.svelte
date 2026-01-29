<script lang="ts">
	import { Theme, type ThemePreference } from '$lib/theme.svelte';
	import { Icon, Monitor, Moon, Sun } from '@lucide/svelte';

	const options: { icon: typeof Icon; value: ThemePreference }[] = [
		{
			value: 'system',
			icon: Monitor
		},
		{
			value: 'dark',
			icon: Moon
		},
		{
			value: 'light',
			icon: Sun
		}
	];
</script>

<div class="grid grid-cols-3 rounded-full border border-surface-300-700">
	{#each options as { value, icon: Icon }}
		{@const selected = value === Theme.theme}
		<button
			type="button"
			class={[
				'tranistion-all h-6 w-6 rounded-full p-1 text-surface-600-400 transition-colors hover:text-surface-900-100',
				selected && 'bg-surface-100-900'
			]}
			onclick={() => {
				Theme.theme = value;
			}}
		>
			<Icon class="h-full w-full" />
		</button>
	{/each}
</div>
