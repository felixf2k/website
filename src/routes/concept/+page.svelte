<script lang="ts">
	import { resolve } from '$app/paths';
	import { BulletPoint, Card, Hero, IconCard, LearnMoreButton, Section } from '$lib/components';
	import { models } from '$lib/models';
	import {
		FileCheck,
		FileText,
		Handshake,
		Layers,
		LayoutTemplate,
		Mail,
		Paintbrush,
		ShieldCheck,
		Upload,
	} from '@lucide/svelte';
	import PricingCalculator, {
		type DesignOptions,
		type DevelopmentOptions,
		type RequirementOptions,
	} from './PricingCalculator.svelte';

	let requirement = $state<RequirementOptions>('cooperative');
	let design = $state<DesignOptions>('standard');
	let development = $state<DevelopmentOptions>('partnership');
</script>

<svelte:head>
	<title>Elench - Konzept</title>
	<meta
		name="description"
		content="Unser Konzept der kooperativen Softwareentwicklung: Bezahlung pro Feature, flexible Projektbeteiligung und individuelle Kooperationsmodelle."
	/>
</svelte:head>

<Hero
	centered
	description="Wir glauben, dass großartige Software durch enge Zusammenarbeit und flexible, faire Modelle entsteht. "
>
	{#snippet heading()}
		Das Konzept <br /><span class="text-primary-600-400">Kooperative Softwareentwicklung </span>
	{/snippet}
</Hero>

<Section
	heading="Unser Ansatz: Partnerschaft auf Augenhöhe"
	description="Unser Konzept basiert auf drei Säulen, die Ihnen maximale Kontrolle, Transparenz und
			Planbarkeit garantieren."
>
	<Card>
		<p class="h4"></p>
		<div class="grid grid-cols-1 gap-x-24 gap-y-16 2xl:grid-cols-3">
			<div class="@container flex flex-col gap-4">
				<div class="flex flex-col gap-3 @lg:flex-row @lg:items-center">
					<ShieldCheck class="h-8 w-8 text-primary-500 print:h-5 print:w-5" />
					<h3 class="h3">Bezahlung pro Feature</h3>
				</div>
				<div class="flex flex-col gap-2 border-l-2 border-primary-500 pl-2">
					<p>Statt für Entwicklungszeit bezahlen Sie bei uns nur für abgenommene Features.</p>
				</div>
				<BulletPoint>Bezahlung nur für abgenommene Features statt Entwicklungszeit</BulletPoint>
				<BulletPoint>Minimiertes Risiko und volle Kostentransparenz</BulletPoint>
				<BulletPoint>Festlegung einer "Definition of Done" vor Entwicklungsstart</BulletPoint>
				<BulletPoint>Anzahlung vor Start, Restzahlung nach erfolgreicher Abnahme</BulletPoint>
			</div>
			<div class="@container flex flex-col gap-4">
				<div class="flex flex-col gap-3 @lg:flex-row @lg:items-center">
					<Layers class="h-8 w-8 text-primary-500 print:h-5 print:w-5" />
					<h3 class="h3">Flexible Projektbeteiligung</h3>
				</div>
				<div class="flex flex-col gap-2 border-l-2 border-primary-500 pl-2">
					<p>Sie entscheiden pro Projektabschnitt, wie stark wir uns einbringen.</p>
				</div>
				<BulletPoint>Entscheidung über Beteiligungsgrad pro Projektabschnitt</BulletPoint>
				<BulletPoint>
					Möglichkeit eigene Ressourcen (z.B. Design, Dokumentation) einzubringen
				</BulletPoint>
				<BulletPoint>Anpassung an Ihre Bedürfnisse und Ihr Budget</BulletPoint>
			</div>
			<div class="@container flex flex-col gap-4">
				<div class="flex flex-col gap-3 @lg:flex-row @lg:items-center">
					<Handshake class="h-8 w-8 text-primary-500 print:h-5 print:w-5" />
					<h3 class="h3">Individuelles Kooperationsmodell</h3>
				</div>
				<div class="flex flex-col gap-2 border-l-2 border-primary-500 pl-2">
					<p>Wir finden gemeinsam das Kooperationsmodell, das am besten zu Ihren Zielen passt.</p>
				</div>
				<BulletPoint>
					Gemeinsame Findung des passenden Modells (SaaS, Partnerschaft, Auftragsentwicklung)
				</BulletPoint>
				<BulletPoint>Ausrichtung an Ihren Zielen und Geschäftsmodell</BulletPoint>
				<BulletPoint>Strategische Beratung zur optimalen Risiko- und Chancenverteilung</BulletPoint>
			</div>
		</div>
	</Card>
</Section>

<Section
	heading="Phase 1: Anforderungsbestimmung"
	description="Wähle unseren Beteiligungsgrad:"
	id="requirements"
>
	<IconCard heading="Bring your own" iconStyle="tonal" icon={FileCheck}>
		<p>
			Sie haben bereits eine <strong>vollständige</strong> Anforderungsdokumentation erstellt.
		</p>
		<div class="flex flex-col gap-2">
			<BulletPoint>Bei Unvollständigkeit ist ein anderes Modell notwendig</BulletPoint>
		</div>
	</IconCard>
	<IconCard heading="Cooperative" iconStyle="tonal" icon={Handshake}>
		<p>
			Wir stellen <strong>Vorlagen</strong> bereit und geben regelmäßig
			<strong>Rückmeldung</strong> zur Qualität und Vollständigkeit Ihrer Dokumentation.
		</p>
		<div class="flex flex-col gap-2">
			<BulletPoint>Frühe Einbindung der technischen Experten</BulletPoint>
			<BulletPoint>Vorlagen helfen Nicht-Technikern</BulletPoint>
		</div>
	</IconCard>
	<IconCard heading="Full-Service" iconStyle="tonal" icon={FileText}>
		<p>
			Wir erstellen die <strong>komplette Dokumentation</strong> basierend auf Ihrem Input und Feedback.
		</p>
		<div class="flex flex-col gap-2">
			<BulletPoint>Professionelle Dokumentation</BulletPoint>
			<BulletPoint>Einbindung von Softwarearchitekten</BulletPoint>
			<BulletPoint>Vergünstigung der folgenden Phasen</BulletPoint>
		</div>
	</IconCard>
</Section>

<Section
	heading="Phase 2: Oberflächendesign"
	description="Wähle unseren Beteiligungsgrad:"
	id="design"
>
	<IconCard heading="Bring your own" iconStyle="tonal" icon={Upload}>
		<p>Sie stellen ein <strong>fertiges, umsetzbares</strong> Design bereit.</p>
		<div class="flex flex-col gap-2">
			<BulletPoint>Nutzung bestehender Ressourcen</BulletPoint>
			<BulletPoint>Höhere Entwicklungskosten</BulletPoint>
		</div>
	</IconCard>
	<IconCard heading="Standard" iconStyle="tonal" icon={LayoutTemplate}>
		<p>Nutzung unseres <strong>bewährten Standard-Designs</strong> für schnelle Ergebnisse.</p>
		<div class="flex flex-col gap-2">
			<BulletPoint>Vergünstigung der folgenden Phasen</BulletPoint>
		</div>
	</IconCard>
	<IconCard heading="Individual" iconStyle="tonal" icon={Paintbrush}>
		<p><strong>Maßgeschneidertes</strong> Design durch uns oder unsere Partner.</p>
		<div class="flex flex-col gap-2">
			<BulletPoint>Keine Auswirkung auf Entwicklungskosten</BulletPoint>
		</div>
	</IconCard>
</Section>

<Section
	heading="Phase 3: Entwicklung & Betrieb"
	description="Wähle ein Kooperationsmodell:"
	id="development"
>
	<IconCard {...models.saas} iconStyle="tonal">
		<p>Wir entwickeln und betreiben das Produkt <strong>exklusiv</strong> für Sie.</p>
		<div class="flex flex-col gap-2">
			<BulletPoint>Betrieb durch Experten</BulletPoint>
			<BulletPoint>Volle Marktrechte</BulletPoint>
			<BulletPoint>Betriebspauschale basierend auf der Benutzeranzahl</BulletPoint>
		</div>
		<LearnMoreButton class="w-fit" href="{resolve('/models')}#saas" />
	</IconCard>
	<IconCard {...models.partnership} iconStyle="tonal">
		<p>
			Durch <strong>Skalierung</strong> am Markt lösen wir Ihr Problem nachhaltig und preiswert.
		</p>
		<div class="flex flex-col gap-2">
			<BulletPoint>Entwicklung und Betrieb durch Experten</BulletPoint>
			<BulletPoint>Dauerhaft kostenfreie Lizenz</BulletPoint>
			<BulletPoint>Keine Betriebspauschale</BulletPoint>
		</div>
		<LearnMoreButton class="w-fit" href="{resolve('/models')}#partnership" />
	</IconCard>
	<IconCard {...models.commissioned} iconStyle="tonal">
		<p>Wir entwickeln das Produkt und <strong>übergeben</strong> den Code an Sie.</p>
		<div class="flex flex-col gap-2">
			<BulletPoint>Voller Zugriff auf den Quellcode</BulletPoint>
			<BulletPoint>Sie betreiben das Produkt selbst</BulletPoint>
		</div>
		<LearnMoreButton class="w-fit" href="{resolve('/models')}#commissioned" />
	</IconCard>
</Section>

<Section class="flex flex-col gap-8 p-8">
	<h2 class="h2 text-3xl">
		<strong>Kosten eines Beispielprojektes (Ticketsystem)</strong>
	</h2>
	<PricingCalculator bind:requirement bind:design bind:development />
	<div
		class="mt-auto flex w-full flex-col gap-6 rounded-xl bg-surface-50-950 p-8 shadow-lg print:shadow-none"
	>
		<div class="flex flex-col gap-2">
			<h3 class="h3 text-2xl font-bold">Interesse geweckt?</h3>
			<p class="text-lg text-surface-600-400">
				Lass uns unverbindlich über dein Vorhaben sprechen.
			</p>
		</div>
		<a href={resolve('/contact')} class="btn w-fit preset-filled-primary-500">
			Jetzt Kontakt aufnehmen <Mail size={20} />
		</a>
	</div>
</Section>
