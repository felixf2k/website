<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import {
		ArrowRight,
		ChartCandlestick,
		Cloud,
		Code,
		Handshake,
		Lightbulb,
		Route
	} from '@lucide/svelte';
</script>

<div class="flex h-screen w-full flex-col items-center justify-center content select-none">
	<div class="flex max-w-full flex-col gap-8">
		<h1 class="text-4xl lg:text-8xl lg:leading-32">
			Deine Software<br /><span class="text-primary-500"> Dein Modell </span>
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
			Egal ob du eine neue Marktlösung schaffst oder interne Prozesse digitalisierst - wir bieten
			den passenden Rahmen für dein Vorhaben.
		</p>
	</div>
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
		<Card heading="Visionäre" description="Gründer ohne eigenes Tech-Team" iconStyle="filled">
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
		</Card>
		<Card
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
		</Card>
		<Card
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
		</Card>
	</div>
</div>

<div class="flex w-full flex-col gap-8 content">
	<div class="flex flex-col gap-2">
		<h2 class="h2" id="models">Entwicklungsmodelle</h2>
		<p class="h4 text-surface-600-400">
			Wähle ein Entwicklungsmodell dass zu deinem Projekt und Budget passt
		</p>
	</div>
	<div class="grid grid-cols-1 gap-4 xl:grid-cols-3">
		<Card heading="Your SaaS" description="Deine Saas, as a Service" iconStyle="tonal" id="saas">
			{#snippet icon()}
				<Cloud class="h-full w-full" />
			{/snippet}
			<p>
				Wir entwickeln und betreiben dein Produkt als SaaS Lösung. Du erhälst die exklusiven
				Vertriebsrechte und verwaltest deine Kunden über gesonderte Dashboards.
			</p>
			<ul class="flex flex-col gap-2">
				<li class="flex flex-row items-start gap-2">
					<div class="mt-1.75 h-2 w-2 shrink-0 rounded-full preset-filled-primary-500"></div>
					<span>Wir entwickeln und betreiben das Produkt für dich</span>
				</li>
				<li class="flex flex-row items-start gap-2">
					<div class="mt-1.75 h-2 w-2 shrink-0 rounded-full preset-filled-primary-500"></div>
					<span>Exklusive Vertriebsrechte für dich</span>
				</li>
				<li class="flex flex-row items-start gap-2">
					<div class="mt-1.75 h-2 w-2 shrink-0 rounded-full preset-filled-primary-500"></div>
					<span>Betriebspauschale gekoppelt an Nutzerzahl</span>
				</li>
			</ul>
			<a class="mt-auto btn w-fit preset-filled-primary-500">
				Mehr erfahren
				<ArrowRight size={16} />
			</a>
		</Card>
		<Card
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
			<ul class="flex flex-col gap-2">
				<li class="flex flex-row items-start gap-2">
					<div class="mt-1.75 h-2 w-2 shrink-0 rounded-full preset-filled-primary-500"></div>
					<span>Maßgeschneiderte Lösung für dein Problem</span>
				</li>
				<li class="flex flex-row items-start gap-2">
					<div class="mt-1.75 h-2 w-2 shrink-0 rounded-full preset-filled-primary-500"></div>
					<span>Reduzierte Entwicklungskosten</span>
				</li>
				<li class="flex flex-row items-start gap-2">
					<div class="mt-1.75 h-2 w-2 shrink-0 rounded-full preset-filled-primary-500"></div>
					<span>
						Dritte können Lizenzen erwerben, du kannst Lizenzen für eine Kommission vertreiben
					</span>
				</li>
				<li class="flex flex-row items-start gap-2">
					<div class="mt-1.75 h-2 w-2 shrink-0 rounded-full preset-filled-primary-500"></div>
					<span>Kostenlose Weiterentwicklung und Wartung, wenn das Produkt gefragt ist</span>
				</li>
				<li class="flex flex-row items-start gap-2">
					<div class="mt-1.75 h-2 w-2 shrink-0 rounded-full preset-filled-primary-500"></div>
					<span>Keine Betriebspauschale</span>
				</li>
			</ul>
			<a class="mt-auto btn w-fit preset-filled-primary-500">
				Mehr erfahren
				<ArrowRight size={16} />
			</a>
		</Card>
		<Card
			heading="Commissioned Development"
			description="Volle Kontrolle über kritischen Code"
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
			<ul class="flex flex-col gap-2">
				<li class="flex flex-row items-start gap-2">
					<div class="mt-1.75 h-2 w-2 shrink-0 rounded-full preset-filled-primary-500"></div>
					<span>Klassische Individualentwicklung</span>
				</li>
				<li class="flex flex-row items-start gap-2">
					<div class="mt-1.75 h-2 w-2 shrink-0 rounded-full preset-filled-primary-500"></div>
					<span>Du betreibst das Produkt selbst</span>
				</li>
				<li class="flex flex-row items-start gap-2">
					<div class="mt-1.75 h-2 w-2 shrink-0 rounded-full preset-filled-primary-500"></div>
					<span>Übergabe des Quellcodes</span>
				</li>
			</ul>
			<a class="mt-auto btn w-fit preset-filled-primary-500">
				Mehr erfahren
				<ArrowRight size={16} />
			</a>
		</Card>
	</div>
</div>
