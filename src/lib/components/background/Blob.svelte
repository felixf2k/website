<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		class?: string;
		speed?: number;
		minSize?: number;
		maxSize?: number;
	}

	let { class: clazz, speed = 5, minSize = 20, maxSize = 50 }: Props = $props();

	let x = $state(50);
	let y = $state(50);
	let w = $state(minSize);
	let h = $state(minSize);
	let duration = $state(0);

	onMount(() => {
		w = minSize + Math.random() * (maxSize - minSize);
		h = minSize + Math.random() * (maxSize - minSize);
		x = Math.random() * (100 - w);
		y = Math.random() * (100 - h);

		let timeout: ReturnType<typeof setTimeout>;

		const move = () => {
			w = minSize + Math.random() * (maxSize - minSize);
			h = minSize + Math.random() * (maxSize - minSize);
			const nextX = Math.random() * (100 - w);
			const nextY = Math.random() * (100 - h);

			const dist = Math.hypot(nextX - x, nextY - y);
			const time = dist / speed;

			duration = time;
			x = nextX;
			y = nextY;

			timeout = setTimeout(move, time * 1000);
		};

		timeout = setTimeout(move, 100);

		return () => clearTimeout(timeout);
	});
</script>

<div
	class={['absolute transition-all ease-linear', clazz]}
	style="left: {x}%; top: {y}%; width: {w}%; height: {h}%; transition-duration: {duration}s;"
></div>
