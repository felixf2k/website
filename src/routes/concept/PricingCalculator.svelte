<script lang="ts" module>
	import { Card } from '$lib/components';
	import { models } from '$lib/models';
	import { Checkbox } from '@ims360/svelte-ivory/components/basic';
	import {
		FileCheck,
		FileText,
		Handshake,
		LayoutTemplate,
		Paintbrush,
		Upload,
	} from '@lucide/svelte';

	export type RequirementOptions = 'bring-your-own' | 'cooperative' | 'full-service';
	export type DesignOptions = 'bring-your-own' | 'standard' | 'individual';
	export type DevelopmentOptions = 'saas' | 'partnership' | 'commissioned';
</script>

<script lang="ts">
	type Props = {
		requirement: RequirementOptions;
		design: DesignOptions;
		development: DevelopmentOptions;
	};

	let {
		requirement = $bindable('cooperative'),
		design = $bindable('standard'),
		development = $bindable('partnership'),
	}: Props = $props();

	const currencyFormatter = new Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 0,
	});

	type Option<T extends RequirementOptions | DesignOptions | DevelopmentOptions> = {
		value: T;
		label: string;
		icon: any;
		modifier: number;
	};

	const requirementOpts: Option<RequirementOptions>[] = [
		{ value: 'bring-your-own', label: 'Bring your own', icon: FileCheck, modifier: 0 },
		{ value: 'cooperative', label: 'Cooperative', icon: Handshake, modifier: 0 },
		{ value: 'full-service', label: 'Full-Service', icon: FileText, modifier: -0.05 },
	];
	const designOpts: Option<DesignOptions>[] = [
		{ value: 'bring-your-own', label: 'Bring your own', icon: Upload, modifier: 0.1 },
		{ value: 'standard', label: 'Standard', icon: LayoutTemplate, modifier: -0.05 },
		{ value: 'individual', label: 'Individual', icon: Paintbrush, modifier: 0 },
	];
	const developmentOpts: Option<DevelopmentOptions>[] = [
		{ value: 'saas', label: models.saas.heading, icon: models.saas.icon, modifier: -0.1 },
		{
			value: 'partnership',
			label: models.partnership.heading,
			icon: models.partnership.icon,
			modifier: -0.25,
		},
		{
			value: 'commissioned',
			label: models.commissioned.heading,
			icon: models.commissioned.icon,
			modifier: 0,
		},
	];

	const requirementDailyRate = 1000;
	const designDailyRate = 1000;

	let features = $state([
		{
			name: 'Anforderungsbestimmung',
			get description() {
				switch (requirement) {
					case 'bring-your-own':
						return 'Sie liefern die fertige Dokumentation.';
					case 'full-service':
						return `10 Tage à ${currencyFormatter.format(requirementDailyRate)}`;
					case 'cooperative':
					default:
						return `5 Tage à ${currencyFormatter.format(requirementDailyRate)}`;
				}
			},
			get price() {
				switch (requirement) {
					case 'bring-your-own':
						return 0;
					case 'full-service':
						return requirementDailyRate * 10;
					case 'cooperative':
					default:
						return requirementDailyRate * 5;
				}
			},
			enabled: true,
			fixed: true,
			exemptFromModifiers: true,
		},
		{
			name: 'UI / UX Design',
			get description() {
				switch (design) {
					case 'bring-your-own':
						return 'Sie liefern ein fertiges Design.';
					case 'individual':
						return `10 Tage à ${currencyFormatter.format(designDailyRate)}`;
					case 'standard':
					default:
						return undefined;
				}
			},
			get price() {
				switch (design) {
					case 'standard':
						return 0;
					case 'individual':
						return designDailyRate * 10;
					case 'bring-your-own':
					default:
						return 0;
				}
			},
			enabled: true,
			fixed: true,
			exemptFromModifiers: true,
		},
		{
			name: 'Benutzerverwaltung & Rollen (RBAC)',
			price: 5000,
			enabled: true,
			fixed: true,
			exemptFromModifiers: false,
		},
		{
			name: 'Single Sign-On (SSO) & Active Directory Synchronisierung',
			price: 5000,
			enabled: true,
			fixed: false,
			exemptFromModifiers: false,
		},
		{
			name: 'Multi-Tenancy (Mandantenfähigkeit)',
			price: 6500,
			enabled: true,
			fixed: false,
			exemptFromModifiers: false,
		},
		{
			name: 'Ticketsystem Kernfunktionalität',
			price: 13500,
			enabled: true,
			fixed: false,
			exemptFromModifiers: false,
		},
	]);

	let activeModifiers = $derived.by(() => {
		const mods: { label: string; amount: number; category: string }[] = [];
		mods.push({
			category: 'Anforderungsbestimmung',
			label: requirementOpts.find((o) => o.value === requirement)?.label ?? '',
			amount: requirementOpts.find((o) => o.value === requirement)?.modifier ?? 0,
		});
		mods.push({
			category: 'Design',
			label: designOpts.find((o) => o.value === design)?.label ?? '',
			amount: designOpts.find((o) => o.value === design)?.modifier ?? 0,
		});
		mods.push({
			category: 'Kooperationsmodell',
			label: developmentOpts.find((o) => o.value === development)?.label ?? '',
			amount: developmentOpts.find((o) => o.value === development)?.modifier ?? 0,
		});

		return mods;
	});

	let devMultiplier = $derived(1 + activeModifiers.reduce((sum, m) => sum + m.amount, 0));

	let total = $derived.by(() => {
		let sum = 0;
		for (const feature of features) {
			if (feature.enabled) {
				sum += feature.price * (feature.exemptFromModifiers ? 1 : devMultiplier);
			}
		}
		return sum;
	});

	const gridCols =
		'grid grid-cols-1 md:grid-cols-[1fr_auto] xl:grid-cols-[1fr_8rem_24rem_8rem] gap-x-4 gap-y-2 xl:gap-8';
</script>

<Card class="flex flex-col gap-8 p-6">
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
		{@render options(
			'Anforderungsbestimmung',
			requirement,
			requirementOpts,
			(opt) => (requirement = opt.value),
		)}
		{@render options('Design', design, designOpts, (opt) => (design = opt.value))}
		{@render options(
			'Entwicklung / Kooperationsmodell',
			development,
			developmentOpts,
			(opt) => (development = opt.value),
		)}
	</div>

	<div class="flex flex-col divide-y divide-surface-200-800 text-sm">
		<div class={['py-3 font-bold text-surface-950-50', gridCols]}>
			<div>Leistung</div>
			<div class="hidden xl:block">Basis</div>
			<div class="hidden xl:block">Anpassung</div>
			<div class="text-right">Kosten</div>
		</div>
		{#each features as feature}
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<svelte:element
				this={feature.fixed ? 'div' : 'button'}
				class={[
					'py-4 text-start transition-colors',
					gridCols,
					!feature.fixed && 'cursor-pointer',
					!feature.enabled && 'opacity-50',
				]}
				onclick={feature.fixed ? undefined : () => (feature.enabled = !feature.enabled)}
			>
				<div class="flex items-center gap-3 xl:row-span-1">
					{#if !feature.fixed}
						<Checkbox checked={feature.enabled} class="shrink-0" />
					{/if}
					<div class={['flex flex-col', !feature.enabled && 'line-through']}>
						<p>{feature.name}</p>
						{#if feature.description}
							<p class={['text-surface-600-400', !feature.enabled && 'line-through']}>
								{feature.description}
							</p>
						{/if}
					</div>
				</div>
				<div
					class={[
						'text-right text-surface-600-400 md:col-start-2 md:row-start-1 xl:col-span-1 xl:col-start-auto xl:row-start-auto xl:text-left xl:text-surface-950-50',
						!feature.enabled && 'line-through',
					]}
				>
					<span class="xl:hidden">Basis: </span>
					{currencyFormatter.format(feature.price)}
				</div>
				<div class="text-xs md:col-span-1 md:row-start-2 xl:col-span-1 xl:row-start-auto">
					{#if !feature.exemptFromModifiers}
						<div
							class="mr-auto grid w-fit grid-cols-[auto_1fr] gap-y-0.5 whitespace-nowrap sm:grid-cols-[auto_auto_auto]"
						>
							{#each activeModifiers as mod}
								<p class="col-span-2 pr-2 text-surface-600-400 sm:col-span-1 sm:text-end">
									{mod.category}:
								</p>
								<p class={['rounded-l-full bg-surface-100-900/50 px-2 text-end']}>
									{mod.label}
								</p>
								<p
									class={[
										'rounded-r-full px-2 text-end',
										mod.amount === 0
											? 'bg-surface-100-900/50 text-surface-600-400'
											: [
													mod.amount > 0
														? 'bg-error-50-950 text-error-800-200'
														: 'bg-success-50-950 text-success-900-100',
												],
									]}
								>
									{mod.amount > 0 ? '+' : ''}{mod.amount * 100}%
								</p>
							{/each}
						</div>
					{/if}
				</div>
				<div
					class={[
						'self-end text-right md:col-start-2 md:row-start-2 xl:col-auto xl:row-auto',
						!feature.enabled && 'line-through',
					]}
				>
					{currencyFormatter.format(
						feature.price * (feature.exemptFromModifiers ? 1 : devMultiplier),
					)}
				</div>
			</svelte:element>
		{/each}
		<div class={['items-center py-4 font-bold text-surface-950-50', gridCols]}>
			<div>Gesamt</div>
			<div class="hidden xl:block"></div>
			<div class="hidden xl:block"></div>
			<div class="text-right">{currencyFormatter.format(total)}</div>
		</div>
	</div>
</Card>

{#snippet options<T extends RequirementOptions | DesignOptions | DevelopmentOptions>(
	label: string,
	selected: T,
	options: Option<T>[],
	onclick: (option: Option<T>) => void,
)}
	<div class="flex flex-col gap-2">
		<span class="font-bold">{label}</span>
		<div class="flex flex-col gap-0.5">
			{#each options as opt}
				{@const Icon = opt.icon}
				<button
					type="button"
					class={[
						'btn w-full justify-start rounded px-4 first:rounded-t-xl last:rounded-b-xl',
						selected === opt.value ? 'preset-filled-primary-500' : 'preset-tonal-primary',
					]}
					onclick={() => onclick(opt)}
				>
					<Icon size={18} class="shrink-0" />
					{opt.label}
				</button>
			{/each}
		</div>
	</div>
{/snippet}
