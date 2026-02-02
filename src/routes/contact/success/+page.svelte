<script lang="ts">
	import { ArrowRight, CircleCheckBig } from '@lucide/svelte';
</script>

<div class="flex h-full w-full grow flex-col items-center justify-center content pt-16 select-none">
	<div class="flex max-w-full flex-col items-center gap-8">
		<CircleCheckBig class="h-32 w-32 text-primary-500" />
		<h1 class="text-xl font-semibold lg:text-4xl">Nachricht empfangen</h1>
		<p class="text-lg text-surface-700-300 lg:text-3xl">Wir melden uns in Kürze bei dir.</p>
		<div class="mt-2 grid grid-cols-1 gap-4 sm:mt-4 sm:w-fit sm:grid-cols-1 lg:gap-8">
			<a class="btn preset-filled-primary-500 lg:btn-xl" href="/">
				Zurück zur Startseite
				<ArrowRight />
			</a>
		</div>
	</div>
</div>
