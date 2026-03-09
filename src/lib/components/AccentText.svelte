<script lang="ts">
	import { merge } from '@ims360/svelte-ivory/utils/functions';
	import type { HTMLAttributes } from 'svelte/elements';

	let { children, class: clazz, ...props }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={merge('border-l-2 border-primary-500 py-0.5 pl-2 text-surface-800-200', clazz)}
	{...props}
>
	{@render children?.()}
</div>
