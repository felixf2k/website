<script lang="ts">
	import { resolve } from '$app/paths';
	import Logo from '$lib/components/Logo.svelte';
	import { ThemeSelect } from '@ims360/svelte-ivory/components/basic';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		class?: ClassValue;
	};

	let { class: clazz }: Props = $props();
</script>

<footer
	class={[
		'mt-auto w-full border-t border-surface-200-800 bg-surface-50-950/90 py-8 text-sm print:hidden',
		clazz,
	]}
>
	<div class="mx-auto flex w-fit flex-row gap-8 content md:gap-16">
		<div class="flex flex-col items-start gap-4">
			<Logo class="mt-2 h-8" />
			<ThemeSelect />
		</div>
		<div class="flex flex-col gap-2 text-surface-600-400">
			<a href={resolve('/imprint')} class="transition-colors hover:text-surface-900-100">
				Impressum
			</a>
			<a href={resolve('/data-protection')} class="transition-colors hover:text-surface-900-100">
				Datenschutz
			</a>
			<a href={resolve('/contact')} class="transition-colors hover:text-surface-900-100">Kontakt</a>
		</div>
	</div>
</footer>
