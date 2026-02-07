<script lang="ts">
	import { merge } from '@ims360/svelte-ivory/utils/functions';
	import type { Snippet } from 'svelte';
	import type { ClassValue, HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		class?: ClassValue;
		heading: string;
		description?: string;
		children?: Snippet;
	};

	let { class: clazz, heading, description, children, ...rest }: Props = $props();
</script>

<div class={merge('flex w-full flex-col gap-8 content', clazz)} {...rest}>
	<div class="flex w-full flex-col gap-2">
		<h2 class="h2">{heading}</h2>
		{#if description}
			<p class="h4 text-surface-600-400">{description}</p>
		{/if}
	</div>
	{@render children?.()}
</div>
