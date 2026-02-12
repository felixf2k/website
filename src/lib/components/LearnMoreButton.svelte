<script lang="ts">
	import { merge } from '@ims360/svelte-ivory/utils/functions';
	import { ArrowRight, Icon as GenericIcon } from '@lucide/svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		class?: ClassValue;
		label?: string;
		icon?: typeof GenericIcon;
		href: string;
	};

	let { class: clazz, href, label = 'Mehr erfahren', icon: Icon = ArrowRight }: Props = $props();
</script>

<a class={merge('group btn preset-filled-primary-500', clazz)} {href}>
	{label}
	<Icon class="stroke-2 transition-all group-hover:stroke-3" size={16} />
</a>
