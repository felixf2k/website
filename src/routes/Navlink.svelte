<script lang="ts">
	import { page } from '$app/state';

	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let { class: clazz, children, ...props }: HTMLAnchorAttributes = $props();

	let isActive = $derived.by(() => {
		if (!props.href) return false;
		const { pathname } = page.url;
		if (pathname === '/') return props.href === pathname;
		return pathname.startsWith(props.href);
	});
</script>

<a
	class={[
		'transition-colors',
		isActive ? 'text-primary-500' : 'text-surface-700-300 hover:text-surface-950-50',
		clazz,
	]}
	{...props}
>
	{@render children?.()}
</a>
