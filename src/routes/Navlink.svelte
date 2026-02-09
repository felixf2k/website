<script lang="ts">
	import { page } from '$app/state';

	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let { class: clazz, href, children, ...props }: HTMLAnchorAttributes = $props();

	let isActive = $derived.by(() => {
		if (!href) return false;
		const { pathname } = page.url;
		if (pathname === '/') return href === pathname;
		return pathname.startsWith(href);
	});
</script>

<a
	{href}
	class={[
		'transition-colors',
		isActive ? 'text-primary-500' : 'text-surface-700-300 hover:text-surface-950-50',
		clazz,
	]}
	{...props}
>
	{@render children?.()}
</a>
