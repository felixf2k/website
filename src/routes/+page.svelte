<script lang="ts">
	import { resolve } from '$app/paths';
	import {
		BulletPoint,
		Card,
		IconCard,
		LearnMoreButton,
		ProgressSection,
		Section,
	} from '$lib/components';
	import Hero from '$lib/components/Hero.svelte';
	import { models } from '$lib/models';
	import {
		ArrowRight,
		ChartCandlestick,
		Cloud,
		Code,
		Handshake,
		Layers,
		Lightbulb,
		Mail,
		MailCheck,
		Map,
		Route,
		ShieldCheck,
	} from '@lucide/svelte';
</script>

<svelte:head>
	<meta
		name="description"
		content="Elench bietet risikofreie Individualsoftware zu Fixpreisen. Entdecken Sie unsere flexiblen Kooperationsmodelle für planbare und nachhaltige Softwareprojekte."
	/>
	<title>Individualsoftware zu Fixpreisen - Elench</title>
</svelte:head>

<Hero centered>
	{#snippet heading()}
		Deine Software<br /><span class="text-primary-600-400"> Dein Modell </span>
	{/snippet}
	{#snippet description()}
		Von der präzisen Umsetzung bis zur langfristigen Partnerschaft.
		<br />
		Du wählst das <span class="text-primary-600-400">Kooperationsmodell</span>, wir garantieren die
		Planbarkeit.
	{/snippet}
	{#snippet actions()}
		<a class="group btn preset-filled-primary-500 xl:btn-xl" href="#models">
			Modelle erkunden
			<ArrowRight class="h-4 transition-all group-hover:translate-x-0.5 xl:h-6" />
		</a>
		<a class="btn border border-surface-400-600 text-surface-950-50 xl:btn-xl" href="/contact">
			Kontakt aufnehmen
			<Mail class="h-4 xl:h-6" />
		</a>
	{/snippet}
</Hero>

<Section
	heading="Für wen wir bauen"
	description="Egal, ob du eine neue Marktlösung schaffst oder interne Prozesse digitalisierst - wir bieten
			den passenden Rahmen für dein Vorhaben."
>
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-3 print:gap-4">
		<IconCard
			heading="Visionäre"
			description="Gründer ohne eigenes Tech-Team"
			iconStyle="filled"
			icon={Lightbulb}
		>
			<div class="flex flex-col gap-1">
				<p class="font-semibold text-primary-500">Dein Ziel</p>
				<p>
					Du hast eine Marktlücke entdeckt und willst dein SaaS-Produkt schnell und professionell an
					den Markt bringen.
				</p>
			</div>
			<hr class="mt-auto hr" />
			<div class="flex flex-col gap-2">
				<p class="text-surface-600-400">Empfohlenes Kooperationsmodell</p>
				<a
					href="#saas"
					class="flex flex-row items-center gap-2 text-lg font-semibold text-primary-500"
				>
					{models.saas.heading}
					<ArrowRight class="h-5 stroke-3" />
				</a>
			</div>
		</IconCard>
		<!-- Icon -->
		<IconCard
			heading="Optimierer"
			description="Unternehmen mit internen Herausforderungen"
			iconStyle="filled"
			icon={ChartCandlestick}
		>
			<div class="flex flex-col gap-1">
				<p class="font-semibold text-primary-500">Dein Ziel</p>
				<p>
					Du willst Prozesse optimieren, aber das Budget für Individualsoftware lieber strategisch
					investieren.
				</p>
			</div>
			<hr class="mt-auto hr" />
			<div class="flex flex-col gap-2">
				<p class="text-surface-600-400">Empfohlenes Kooperationsmodell</p>
				<a
					href="#partnership"
					class="flex flex-row items-center gap-2 text-lg font-semibold text-primary-500"
				>
					{models.partnership.heading}
					<ArrowRight class="h-5 stroke-3" />
				</a>
			</div>
		</IconCard>
		<IconCard
			heading="Strategen"
			description="Digitalisierung schützenswerter Prozesse"
			iconStyle="filled"
			icon={Route}
		>
			<div class="flex flex-col gap-1">
				<p class="font-semibold text-primary-500">Dein Ziel</p>
				<p>
					Du willst deinen Marktvorteil durch die Digitalisierung entscheidender Prozesse ausbauen.
				</p>
			</div>
			<hr class="mt-auto hr" />
			<div class="flex flex-col gap-2">
				<p class="text-surface-600-400">Empfohlenes Kooperationsmodell</p>
				<a
					href="#development"
					class="flex flex-row items-center gap-2 text-lg font-semibold text-primary-500"
				>
					{models.commissioned.heading}
					<ArrowRight class="h-5 stroke-3" />
				</a>
			</div>
		</IconCard>
	</div>
</Section>

<Section
	heading="Das Konzept"
	description="Maximale Flexibilität und Planbarkeit für dein Softwareprojekt."
>
	<Card class="gap-16">
		<div class="grid grid-cols-1 gap-x-24 gap-y-16 2xl:grid-cols-3">
			<div class="@container flex flex-col gap-4">
				<div class="flex flex-col gap-3 @lg:flex-row @lg:items-center">
					<ShieldCheck class="h-8 w-8 text-primary-500 print:h-5 print:w-5" />
					<h3 class="h3">Bezahlung pro Feature</h3>
				</div>
				<p class="border-l-2 border-primary-500 pl-2">
					Statt für Entwicklungszeit bezahlst du bei uns nur für abgenommene Features. Das minimiert
					dein Risiko und sorgt für volle Kostentransparenz.
				</p>
			</div>
			<div class="@container flex flex-col gap-4">
				<div class="flex flex-col gap-3 @lg:flex-row @lg:items-center">
					<Layers class="h-8 w-8 text-primary-500 print:h-5 print:w-5" />
					<h3 class="h3">Flexible Projektbeteiligung</h3>
				</div>
				<p class="border-l-2 border-primary-500 pl-2">
					Du entscheidest pro Projektabschnitt, wie stark wir uns einbringen. Ob wir alles
					übernehmen oder du eigene Ressourcen einbringst - wir passen uns an.
				</p>
			</div>
			<div class="@container flex flex-col gap-4">
				<div class="flex flex-col gap-3 @lg:flex-row @lg:items-center">
					<Handshake class="h-8 w-8 text-primary-500 print:h-5 print:w-5" />
					<h3 class="h3">Individuelles Kooperationsmodell</h3>
				</div>
				<p class="border-l-2 border-primary-500 pl-2">
					Egal ob SaaS, Partnerschaft oder Auftragsentwicklung: Wir finden gemeinsam das
					Kooperationsmodell, das am besten zu deinen Zielen passt.
				</p>
			</div>
		</div>
		<LearnMoreButton class="@lg:w-fit print:hidden" href={resolve('/concept')} />
	</Card>
</Section>

<Section
	heading="Kooperationsmodelle"
	description="Wähle ein Kooperationsmodell, dass zu deinem Projekt passt."
	id="models"
>
	<div class="grid grid-cols-1 gap-8 xl:grid-cols-3 print:gap-4">
		<IconCard {...models.saas} iconStyle="tonal" id="saas" icon={Cloud}>
			<p>
				Wir entwickeln und betreiben dein Produkt als SaaS Lösung. Du erhälst die exklusiven
				Vertriebsrechte und verwaltest deine Kunden über gesonderte Dashboards.
			</p>
			<div class="flex flex-col gap-2">
				<BulletPoint>Wir entwickeln und betreiben das Produkt für dich</BulletPoint>
				<BulletPoint>Exklusive Vertriebsrechte für dich</BulletPoint>
				<BulletPoint>Betriebspauschale gekoppelt an Nutzerzahl</BulletPoint>
			</div>
			<LearnMoreButton class="mt-auto w-fit print:hidden" href="{resolve('/models')}#saas" />
		</IconCard>
		<IconCard {...models.partnership} iconStyle="tonal" id="partnership">
			<p>
				Wir entwickeln eine Lösung für dein internes Problem zu reduzierten Preisen. Im Gegenzug
				kann die Software an dritte vermarktet werden.
			</p>
			<div class="flex flex-col gap-2">
				<BulletPoint>Maßgeschneiderte Lösung für dein Problem</BulletPoint>
				<BulletPoint>Reduzierte Entwicklungskosten</BulletPoint>
				<BulletPoint>
					Dritte können Lizenzen erwerben, du kannst Lizenzen für eine Kommission vertreiben
				</BulletPoint>
				<BulletPoint>Kostenlose Weiterentwicklung, wenn das Produkt gefragt ist</BulletPoint>
				<BulletPoint>Keine Betriebspauschale</BulletPoint>
			</div>
			<LearnMoreButton class="mt-auto w-fit print:hidden" href="{resolve('/models')}#partnership" />
		</IconCard>
		<IconCard {...models.commissioned} iconStyle="tonal" id="development">
			<p>
				Klassische Individualentwicklung. Wir setzen deine Anforderungen um und übergeben dir den
				Quellcode.
			</p>
			<div class="flex flex-col gap-2">
				<BulletPoint>Klassische Individualentwicklung</BulletPoint>
				<BulletPoint>Du betreibst das Produkt selbst</BulletPoint>
				<BulletPoint>Übergabe des Quellcodes</BulletPoint>
			</div>
			<LearnMoreButton
				class="mt-auto w-fit print:hidden"
				href="{resolve('/models')}#commissioned"
			/>
		</IconCard>
	</div>
</Section>

<Section heading="Der Prozess" description="So wird dein Projekt ablaufen:">
	<ProgressSection class="w-full">
		<IconCard
			iconStyle="tonal"
			heading="Erstgespräch"
			description="Unverbindliches Kennenlernen"
			icon={0}
		>
			<div class="flex flex-col gap-2 @xl:ml-20 print:ml-0">
				<BulletPoint>Das Projekt verstehen</BulletPoint>
				<BulletPoint>Das richtige Kooperationsmodell wählen</BulletPoint>
				<BulletPoint>Die nächsten Schritte planen</BulletPoint>
			</div>
		</IconCard>
		<IconCard
			iconStyle="tonal"
			heading="Anforderungsbestimmung"
			description="Was soll das Produkt am Ende können"
			icon={1}
		>
			<div class="flex flex-col gap-2 @xl:ml-20 print:ml-0">
				<BulletPoint>Welche Prozesse sollen abgebildet werden?</BulletPoint>
				<BulletPoint>Ausbaustufen bestimmen</BulletPoint>
				<BulletPoint>Dokumentation erstellen</BulletPoint>
				<LearnMoreButton
					class="mt-6 @lg:w-fit print:hidden"
					href="{resolve('/concept')}#requirements"
					label=""
				/>
			</div>
		</IconCard>
		<IconCard
			iconStyle="tonal"
			heading="UI Design"
			description="Wie werden die Benutzer mit dem Produkt interagieren"
			icon={2}
		>
			<div class="flex flex-col gap-2 @xl:ml-20 print:ml-0">
				<BulletPoint>Oberflächen Designen</BulletPoint>
				<BulletPoint>Benutzertests durchführen</BulletPoint>
				<BulletPoint>Identität des Produkts bestimmen</BulletPoint>
				<LearnMoreButton class="mt-6 @lg:w-fit print:hidden" href="{resolve('/concept')}#design" />
			</div>
		</IconCard>
		<IconCard
			iconStyle="tonal"
			heading="Entwicklung & Betrieb"
			description="Die Implementierung des Produkts"
			icon={3}
		>
			<div class="flex flex-col gap-2 @xl:ml-20 print:ml-0">
				<BulletPoint>Technische Umsetzung</BulletPoint>
				<BulletPoint>Bereitstellen der Anwendung</BulletPoint>
				<BulletPoint>Maintenance</BulletPoint>
				<LearnMoreButton
					class="mt-6 @lg:w-fit print:hidden"
					href="{resolve('/concept')}#development"
				/>
			</div>
		</IconCard>
	</ProgressSection>
</Section>

<Section heading="Warum Elench" description="Von Profis für Profis">
	<div class="grid grid-cols-1 gap-8 xl:grid-cols-3">
		<IconCard
			heading="Moderner Tech Stack"
			description="Hohe Performance und Zuverlässigkeit"
			iconStyle="tonal"
			icon={Layers}
		>
			<div class="flex flex-col gap-2">
				<BulletPoint>Hohe performance</BulletPoint>
				<BulletPoint>Schnelle Entwicklung</BulletPoint>
				<BulletPoint>Hohe Stabilität</BulletPoint>
			</div>
		</IconCard>
		<IconCard
			heading="Planbarkeit"
			description="Technische Risiken sind unsere Risiken"
			iconStyle="tonal"
			icon={Map}
		>
			<div class="flex flex-col gap-2">
				<BulletPoint>Du bezahlst deine Features, nicht unsere Zeit</BulletPoint>
				<BulletPoint>Kein Kostenüberraschungen</BulletPoint>
				<BulletPoint>Eindeutige "Definition of Done"</BulletPoint>
			</div>
		</IconCard>
		<IconCard
			heading="Flexible Modelle"
			description="Für jedes Projekt das richtige Kooperationsmodell"
			iconStyle="tonal"
			id="development"
			icon={Code}
		>
			<div class="flex flex-col gap-2">
				<BulletPoint>Maßgeschneidert für dein Budget</BulletPoint>
				<BulletPoint>Individuelle Risikoverteilung</BulletPoint>
				<BulletPoint>Wächst mit deinen Anforderungen</BulletPoint>
			</div>
		</IconCard>
	</div>
</Section>

<Section heading="Bereit dein Projekt zu starten?">
	<Card>
		<p class="text-lg text-surface-600-400">Lass uns unverbindlich über dein Vorhaben sprechen.</p>
		<a href="/contact" class="btn preset-filled-primary-500 @md:w-fit">
			Erstgespräch vereinbaren
			<MailCheck class="h-4 @md:h-5" />
		</a>
	</Card>
</Section>
