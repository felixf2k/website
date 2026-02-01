<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import ThemeController from '$lib/components/ThemeController.svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		class?: ClassValue;
	};

	let { class: clazz }: Props = $props();

	const year = new Date().getFullYear();
</script>

<footer
	class={[
		'mt-auto w-full border-t border-surface-200-800 bg-surface-50-950/90 py-8 text-sm print:hidden',
		clazz
	]}
>
	<div class="mx-auto flex w-fit flex-row gap-8 content md:gap-16">
		<div class="flex flex-col items-start gap-4">
			<Logo class="mt-2 h-8" />
			<span class="text-surface-600-400">© {year} Elench UG</span>
			<ThemeController />
		</div>
		<div class="flex flex-col gap-2 text-surface-600-400">
			<a href="/imprint" class="transition-colors hover:text-surface-900-100">Impressum</a>
			<a href="/data-protection" class="transition-colors hover:text-surface-900-100">
				Datenschutz
			</a>
			<a href="/contact" class="transition-colors hover:text-surface-900-100">Kontakt</a>
		</div>
	</div>
</footer>
