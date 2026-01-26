<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Placement =
		| 'top-left'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-right'
		| 'bottom'
		| 'top'
		| 'center';

	type Props = {
		children: Snippet;
		class?: ClassValue;
		placement?: Placement;
	};

	let { children, class: clazz, placement = 'center' }: Props = $props();

	const positionMap: Record<Placement, string> = {
		'top-left': 'top left',
		'top-right': 'top right',
		'bottom-left': 'bottom left',
		'bottom-right': 'bottom right',
		top: 'top',
		bottom: 'bottom',
		center: 'center'
	};
</script>

<div
	class={[clazz]}
	style="background-image: radial-gradient(circle 80vw at {positionMap[
		placement
	]}, var(--tw-gradient-from, transparent) 0, transparent 100%)"
>
	{@render children()}
</div>
