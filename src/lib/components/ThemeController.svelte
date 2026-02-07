<script lang="ts">
	import { Theme, type ThemePreference } from '$lib/theme.svelte';
	import { Icon, Monitor, Moon, Sun } from '@lucide/svelte';

	const options: { icon: typeof Icon; value: ThemePreference; ariaLabel: string }[] = [
		{
			value: 'system',
			icon: Monitor,
			ariaLabel: 'System Theme',
		},
		{
			value: 'dark',
			icon: Moon,
			ariaLabel: 'Dark Theme',
		},
		{
			value: 'light',
			icon: Sun,
			ariaLabel: 'Light Theme',
		},
	];
</script>

<div class="grid grid-cols-3 rounded-full border border-surface-300-700">
	{#each options as { value, icon: Icon, ariaLabel }}
		{@const selected = value === Theme.theme}
		<button
			type="button"
			class={[
				'tranistion-all h-6 w-6 rounded-full p-1 text-surface-600-400 transition-colors hover:text-surface-900-100',
				selected && 'bg-surface-100-900',
			]}
			onclick={() => {
				Theme.theme = value;
			}}
			aria-label={ariaLabel}
		>
			<Icon class="h-full w-full" />
		</button>
	{/each}
</div>
