<script lang="ts">
	import type { ClassValue } from 'svelte/elements';
	import Blob from './Blob.svelte';

	type Props = {
		class?: ClassValue;
	};

	let { class: clazz }: Props = $props();

	const BLOBS = 2;
</script>

<div class={['opacity-15 blur-3xl print:hidden', clazz]}>
	{#each Array(BLOBS) as _, i (i)}
		<Blob class="rounded-full bg-primary-500" speed={4 + i} />
	{/each}
</div>
