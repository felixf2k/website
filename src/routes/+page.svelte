<script lang="ts">
	import { resolve } from '$app/paths';
	import { BulletPoint, IconCard, ProgressSection } from '$lib/components';
	import {
		ArrowRight,
		ChartCandlestick,
		Cloud,
		Code,
		Handshake,
		Layers,
		Lightbulb,
		MailCheck,
		Map,
		Route
	} from '@lucide/svelte';
</script>

<div class="flex h-screen w-full flex-col items-center justify-center content select-none">
	<div class="flex max-w-full flex-col gap-8">
		<h1 class="text-4xl lg:text-8xl lg:leading-32">
			Deine Software<br /><span class="text-primary-600-400"> Dein Modell </span>
		</h1>
		<p class="text-lg leading-relaxed lg:text-3xl">
			Von der präzisen Umsetzung bis zur langfristigen Partnerschaft.
			<br />
			Du wählst das Modell, wir garantieren die Planbarkeit.
		</p>
		<div class="mt-2 grid grid-cols-1 gap-4 sm:mt-4 sm:w-fit sm:grid-cols-2 lg:gap-8">
			<a class="btn preset-filled-primary-500 lg:btn-xl" href="#models">
				Modelle erkunden
				<ArrowRight />
			</a>
			<a class="btn border border-surface-400-600 text-surface-950-50 lg:btn-xl" href="/contact">
				Kontakt aufnehmen
			</a>
		</div>
	</div>
</div>

<div class="flex w-full flex-col gap-8 content">
	<div class="flex flex-col gap-4">
		<h2 class="h2">Für wen wir bauen</h2>
		<p class="h4 text-surface-600-400">
			Egal, ob du eine neue Marktlösung schaffst oder interne Prozesse digitalisierst - wir bieten
			den passenden Rahmen für dein Vorhaben.
		</p>
	</div>
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
		<IconCard heading="Visionäre" description="Gründer ohne eigenes Tech-Team" iconStyle="filled">
			{#snippet icon()}
				<Lightbulb class="h-full w-full" />
			{/snippet}
			<div class="flex flex-col gap-1">
				<p class="font-semibold text-primary-500">Dein Ziel</p>
				<p>
					Du hast eine Marktlücke entdeckt und willst dein SaaS-Produkt schnell und professionell an
					den Markt bringen.
				</p>
			</div>
			<hr class="mt-auto hr" />
			<div class="flex flex-col gap-2">
				<p class="text-surface-600-400">Empfohlenes Modell</p>
				<a
					href="#saas"
					class="flex flex-row items-center gap-2 text-lg font-semibold text-primary-500"
				>
					Your SaaS
					<ArrowRight class="h-5 stroke-3" />
				</a>
			</div>
		</IconCard>
		<!-- Icon -->
		<IconCard
			heading="Optimierer"
			description="Unternehmen mit internen Herausforderungen"
			iconStyle="filled"
		>
			{#snippet icon()}
				<ChartCandlestick class="h-full w-full" />
			{/snippet}
			<div class="flex flex-col gap-1">
				<p class="font-semibold text-primary-500">Dein Ziel</p>
				<p>
					Du willst Prozesse optimieren, aber das Budget für Individualsoftware lieber strategisch
					investieren.
				</p>
			</div>
			<hr class="mt-auto hr" />
			<div class="flex flex-col gap-2">
				<p class="text-surface-600-400">Empfohlenes Modell</p>
				<a
					href="#partnership"
					class="flex flex-row items-center gap-2 text-lg font-semibold text-primary-500"
				>
					Innovation Partnership
					<ArrowRight class="h-5 stroke-3" />
				</a>
			</div>
		</IconCard>
		<IconCard
			heading="Strategen"
			description="Digitalisierung schützenswerter Prozesse"
			iconStyle="filled"
		>
			{#snippet icon()}
				<Route class="h-full w-full" />
			{/snippet}
			<div class="flex flex-col gap-1">
				<p class="font-semibold text-primary-500">Dein Ziel</p>
				<p>
					Du willst deinen Marktvorteil durch die Digitalisierung entscheidender Prozesse ausbauen.
				</p>
			</div>
			<hr class="mt-auto hr" />
			<div class="flex flex-col gap-2">
				<p class="text-surface-600-400">Empfohlenes Modell</p>
				<a
					href="#development"
					class="flex flex-row items-center gap-2 text-lg font-semibold text-primary-500"
				>
					Commissioned Development
					<ArrowRight class="h-5 stroke-3" />
				</a>
			</div>
		</IconCard>
	</div>
</div>

<div class="flex w-full flex-col gap-8 content">
	<div class="flex flex-col gap-2">
		<h2 class="h2" id="models">Entwicklungsmodelle</h2>
		<p class="h4 text-surface-600-400">
			Wähle ein Entwicklungsmodell, dass zu deinem Projekt und Budget passt.
		</p>
	</div>
	<div class="grid grid-cols-1 gap-8 xl:grid-cols-3">
		<IconCard
			heading="Your SaaS"
			description="Dein SaaS Produkt, as a Service"
			iconStyle="tonal"
			id="saas"
		>
			{#snippet icon()}
				<Cloud class="h-full w-full" />
			{/snippet}
			<p>
				Wir entwickeln und betreiben dein Produkt als SaaS Lösung. Du erhälst die exklusiven
				Vertriebsrechte und verwaltest deine Kunden über gesonderte Dashboards.
			</p>
			<div class="flex flex-col gap-2">
				<BulletPoint>Wir entwickeln und betreiben das Produkt für dich</BulletPoint>
				<BulletPoint>Exklusive Vertriebsrechte für dich</BulletPoint>
				<BulletPoint>Betriebspauschale gekoppelt an Nutzerzahl</BulletPoint>
			</div>
			<a class="mt-auto btn w-fit preset-filled-primary-500" href={resolve('/models/your-saas')}>
				Mehr erfahren
				<ArrowRight size={16} />
			</a>
		</IconCard>
		<IconCard
			heading="Innovation Partnership"
			description="Gemeinsam Risiken minimieren"
			iconStyle="tonal"
			id="partnership"
		>
			{#snippet icon()}
				<Handshake class="h-full w-full" />
			{/snippet}
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
				<BulletPoint>
					Kostenlose Weiterentwicklung und Wartung, wenn das Produkt gefragt ist
				</BulletPoint>
				<BulletPoint>Keine Betriebspauschale</BulletPoint>
			</div>
			<a class="mt-auto btn w-fit preset-filled-primary-500" href={resolve('/models/partnership')}>
				Mehr erfahren
				<ArrowRight size={16} />
			</a>
		</IconCard>
		<IconCard
			heading="Commissioned Development"
			description="Volle Kontrolle für kritische Lösungen"
			iconStyle="tonal"
			id="development"
		>
			{#snippet icon()}
				<Code class="h-full w-full" />
			{/snippet}
			<p>
				Klassische Individualentwicklung. Wir setzen deine Anforderungen um und übergeben dir den
				Quellcode.
			</p>
			<div class="flex flex-col gap-2">
				<BulletPoint>Klassische Individualentwicklung</BulletPoint>
				<BulletPoint>Du betreibst das Produkt selbst</BulletPoint>
				<BulletPoint>Übergabe des Quellcodes</BulletPoint>
			</div>
			<a class="mt-auto btn w-fit preset-filled-primary-500" href={resolve('/models/commissioned')}>
				Mehr erfahren
				<ArrowRight size={16} />
			</a>
		</IconCard>
	</div>
</div>

<div class="flex w-full flex-col gap-8 content">
	<div class="flex flex-col gap-2">
		<h2 class="h2" id="models">Der Prozess</h2>
		<p class="h4 text-surface-600-400">So wird dein Projekt ablaufen:</p>
	</div>
	<ProgressSection class="w-full">
		<IconCard
			iconStyle="tonal"
			heading="Erstgespräch"
			description="Unverbindliches Kennenlernen"
			icon={1}
		>
			<div class="flex flex-col gap-2 @xl:ml-20">
				<BulletPoint>Das Projekt verstehen</BulletPoint>
				<BulletPoint>Das richtige Modell wählen</BulletPoint>
				<BulletPoint>Die nächsten Schritte planen</BulletPoint>
			</div>
		</IconCard>
		<IconCard
			iconStyle="tonal"
			heading="Anforderungs-bestimmung"
			description="Was soll das Produkt am Ende können"
			icon={2}
		>
			<div class="flex flex-col gap-2 @xl:ml-20">
				<BulletPoint>Welche Prozesse sollen abgebildet werden?</BulletPoint>
				<BulletPoint>Ausbaustufen bestimmen</BulletPoint>
				<BulletPoint>Dokumentation erstellen</BulletPoint>
			</div>
		</IconCard>
		<IconCard
			iconStyle="tonal"
			heading="UI Design"
			description="Wie werden die Benutzer mit dem Produkt interagieren"
			icon={3}
		>
			<div class="flex flex-col gap-2 @xl:ml-20">
				<BulletPoint>Oberflächen Designen</BulletPoint>
				<BulletPoint>Benutzertests durchführen</BulletPoint>
				<BulletPoint>Identität des Produkts bestimmen</BulletPoint>
			</div>
		</IconCard>
		<IconCard
			iconStyle="tonal"
			heading="Entwicklung"
			description="Die Implementierung des Produkts"
			icon={4}
		>
			<div class="flex flex-col gap-2 @xl:ml-20">
				<BulletPoint>Technische Umsetzung</BulletPoint>
				<BulletPoint>Testing</BulletPoint>
				<BulletPoint>Security testing</BulletPoint>
			</div>
		</IconCard>
		<IconCard
			iconStyle="tonal"
			heading="Betrieb"
			description="Produktiver Betrieb des Produkts"
			icon={5}
		>
			<div class="flex flex-col gap-2 @xl:ml-20">
				<BulletPoint>Bereitstellen der Anwendung</BulletPoint>
				<BulletPoint>Maintenance</BulletPoint>
				<BulletPoint>Security Updates</BulletPoint>
			</div>
		</IconCard>
	</ProgressSection>
</div>

<div class="flex w-full flex-col gap-8 content">
	<div class="flex flex-col gap-2">
		<h2 class="h2" id="models">Warum Elench</h2>
		<p class="h4 text-surface-600-400"></p>
	</div>
	<div class="grid grid-cols-1 gap-8 xl:grid-cols-3">
		<IconCard
			heading="Moderner Tech Stack"
			description="Hohe Performance und Zuverlässigkeit"
			iconStyle="tonal"
		>
			{#snippet icon()}
				<Layers class="h-full w-full" />
			{/snippet}
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
		>
			{#snippet icon()}
				<Map class="h-full w-full" />
			{/snippet}
			<div class="flex flex-col gap-2">
				<BulletPoint>Du bezahlst deine Features, nicht unsere Zeit</BulletPoint>
				<BulletPoint>Kein Kostenüberraschungen</BulletPoint>
				<BulletPoint>Eindeutige "Definition of Done"</BulletPoint>
			</div>
		</IconCard>
		<IconCard
			heading="Flexible Modelle"
			description="Für jedes Projekt das richtige Modell"
			iconStyle="tonal"
			id="development"
		>
			{#snippet icon()}
				<Code class="h-full w-full" />
			{/snippet}
			<div class="flex flex-col gap-2">
				<BulletPoint>Klassische Individualentwicklung</BulletPoint>
				<BulletPoint>Du betreibst das Produkt selbst</BulletPoint>
				<BulletPoint>Übergabe des Quellcodes</BulletPoint>
			</div>
		</IconCard>
	</div>
</div>

<div class="flex flex-col gap-8 content">
	<p class="text-2xl">Bereit dein Projekt zu starten?</p>
	<a href="/contact" class="btn w-fit btn-xl preset-filled-primary-500">
		Erstgespräch vereinbaren
		<MailCheck />
	</a>
</div>
