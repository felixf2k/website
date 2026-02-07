<script lang="ts">
	import { Toasts, type ToastSettings } from '@ims360/svelte-ivory/components/toast';
	import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from '@lucide/svelte';
	import { onMount } from 'svelte';

	interface Props {
		toast: ToastSettings & {
			id?: string;
			close: () => void;
			timeoutId?: ReturnType<typeof setTimeout>;
		};
	}

	let { toast }: Props = $props();

	let progress = $state<number>(0);

	const freeze = async () => {
		Toasts.freeze(toast.id ?? '');
		progress = 0;
	};

	const unfreeze = async () => {
		Toasts.unfreeze(toast.id ?? '');
		progress = 100;
	};

	const Icon = $derived.by(() => {
		if (toast.icon) return toast.icon;
		switch (toast.variant) {
			case 'info':
				return Info;
			case 'success':
				return CircleCheck;
			case 'warning':
				return CircleAlert;
			case 'error':
				return TriangleAlert;
		}
	});

	const variantBg = $derived.by(() => {
		return [
			toast.variant === 'info' && 'bg-primary-500/60',
			toast.variant === 'success' && 'bg-success-500/60',
			toast.variant === 'warning' && 'bg-warning-500/60',
			toast.variant === 'error' && 'bg-error-500/60',
		];
	});

	const variantStroke = $derived.by(() => {
		return [
			toast.variant === 'info' && 'stroke-primary-500',
			toast.variant === 'success' && 'stroke-success-500',
			toast.variant === 'warning' && 'stroke-warning-500',
			toast.variant === 'error' && 'stroke-error-500',
		];
	});

	onMount(async () => {
		progress = 100;
	});

	let offset = $state<number>(0);
	let transition = $state(false);
</script>

<div
	class={[
		'group relative flex h-fit w-full max-w-96 items-start overflow-hidden rounded bg-surface-50 select-none not-dark:shadow 2xl:w-lg dark:bg-surface-900 ',
		transition && 'transition-all duration-200',
	]}
	onpointerenter={freeze}
	onpointerleave={unfreeze}
	style="transform: translateX({offset}px);"
>
	<div class={['flex flex-row items-center gap-2 p-2 px-4', toast.hideDismiss && '']}>
		<Icon class={[variantStroke]} size={16} />
		<div class="max-w-96 overflow-hidden">
			{toast.message}
		</div>
	</div>
	<div class="ml-auto flex h-full flex-col pb-1">
		{#if !toast.hideDismiss}
			<button class="group/close grow pt-2.5 pr-2 pb-1 pl-1" onclick={() => toast.close()}>
				<X
					size={16}
					class="shrink-0 stroke-2 text-surface-600-400 transition-all group-hover/close:stroke-3"
				/>
			</button>
		{/if}
		{#if toast.autohide}
			<div class="mt-auto w-full pr-1">
				<div class="h-1 w-full overflow-hidden rounded-full bg-surface-100-900">
					<div
						class={[variantBg, 'h-full transition-all ease-linear group-hover:duration-200!']}
						style="width: {progress}%; transition-duration: {toast.timeout}ms;"
					></div>
				</div>
			</div>
		{/if}
	</div>
</div>
