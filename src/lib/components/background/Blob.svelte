<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		class?: string;
		speed?: number;
		minSize?: number;
		maxSize?: number;
	}

	let { class: clazz, speed = 5, minSize = 20, maxSize = 50 }: Props = $props();

	const PADDING_FACTOR = 0.5;

	let x = $state(50);
	let y = $state(50);
	let w = $state(minSize);
	let h = $state(minSize);
	let duration = $state(0);

	function generatePosition(size: number) {
		return Math.random() * (100 - size * PADDING_FACTOR);
	}

	function generateSize(min: number, max: number) {
		return min + Math.random() * (max - min);
	}

	onMount(() => {
		w = generateSize(minSize, maxSize);
		h = generateSize(minSize, maxSize);
		x = generatePosition(w);
		y = generatePosition(h);

		let timeout: ReturnType<typeof setTimeout>;

		const move = () => {
			w = generateSize(minSize, maxSize);
			h = generateSize(minSize, maxSize);
			const nextX = generatePosition(w);
			const nextY = generatePosition(h);

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
	class={['absolute transition-all ease-linear will-change-transform', clazz]}
	style="left: {x}%; top: {y}%; width: {w}%; height: {h}%; transition-duration: {duration}s;"
></div>
