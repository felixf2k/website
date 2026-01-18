<script lang="ts">
	import Card from './Card.svelte';
	import Page from './Page.svelte';
</script>

<svelte:head>
	<title>Pitch</title>
</svelte:head>

<Page class="flex flex-col gap-8 p-0">
	<div class="relative flex w-full flex-col gap-4 px-8 py-32 text-surface-50">
		<enhanced:img
			src="./heading.jpg"
			alt="Placeholder"
			class="absolute inset-0 -z-10 h-full w-full object-cover"
		/>
		<h1 class="text-6xl font-bold">Kooperative Softwareentwicklung</h1>
		<p class="text-2xl italic">
			Vom Auftrag bis Joint Venture: Wir skalieren unsere Beteiligung nach Ihren Zielen.
		</p>
	</div>

	<div class="flex flex-col gap-4 p-8">
		<h2 class="text-4xl font-bold text-surface-900">Das Konzept</h2>
		<div class="flex flex-col gap-2 text-xl text-surface-700">
			<p class="w-full">
				Für jeden Projektabschnitt wählen Sie den Grad unserer Beteiligung: <br /> von
				<span class="font-bold text-primary-600"> "Full Service" </span>
				bis <span class="font-bold text-primary-600">"Just the Code"</span>.
			</p>
		</div>
	</div>
</Page>

<Page class="flex flex-row p-0">
	<enhanced:img
		src="./documentation.jpg"
		alt="Documentation"
		class="h-full w-44 object-cover object-center"
	/>
	<div class="flex flex-1 flex-col gap-4 p-8">
		<h2 class="text-3xl font-bold text-surface-900">Phase 1: Anforderungsbestimmung</h2>
		<div class="grid grid-cols-1 gap-2">
			<Card class="flex flex-col justify-between gap-4">
				<div>
					<h3 class="mb-2 text-xl font-bold">Bring your own</h3>
					<p class="text-surface-600">
						Sie haben bereits eine <strong>vollständige</strong> Anforderungsdokumentation erstellt.
					</p>
				</div>
			</Card>
			<Card class="flex flex-col justify-between gap-4">
				<div>
					<h3 class="mb-2 text-xl font-bold">Kooperativ</h3>
					<p class="text-surface-600">
						Wir stellen <strong>Vorlagen</strong> bereit und geben regelmäßig
						<strong>Rückmeldung</strong> zur Qualität und Vollständigkeit ihrer Dokumentation.
					</p>
				</div>
			</Card>
			<Card class="flex flex-col justify-between gap-4">
				<div>
					<h3 class="mb-2 text-xl font-bold">Full-Service</h3>
					<p class="text-surface-600">
						Wir erstellen die komplette Dokumentation basierend auf <strong>Ihrem</strong> Input und Feedback.
					</p>
				</div>
			</Card>
		</div>
	</div>
</Page>

<Page class="flex flex-row p-0">
	<enhanced:img src="./design.jpg" alt="Design" class="h-full w-44 object-cover object-center" />
	<div class="flex flex-1 flex-col gap-4 p-8">
		<h2 class="text-3xl font-bold text-surface-900">Phase 2: UX / UI Design</h2>
		<div class="grid grid-cols-1 gap-2">
			<Card class="flex flex-col justify-between gap-4">
				<div>
					<h3 class="mb-2 text-xl font-bold">Bring your own</h3>
					<p class="text-surface-600">Sie stellen ein fertiges, umsetzbares Design bereit.</p>
				</div>
			</Card>
			<Card class="flex flex-col justify-between gap-4">
				<div>
					<h3 class="mb-2 text-xl font-bold">Standard</h3>
					<p class="text-surface-600">
						Nutzung unseres bewährten Standard-Designs für schnelle Ergebnisse.
					</p>
				</div>
			</Card>
			<Card class="flex flex-col justify-between gap-4">
				<div>
					<h3 class="mb-2 text-xl font-bold">Individuell</h3>
					<p class="text-surface-600">Maßgeschneidertes Design durch uns oder unsere Partner.</p>
				</div>
			</Card>
		</div>
	</div>
</Page>

<Page class="flex flex-row p-0">
	<enhanced:img
		src="./develop.jpg"
		alt="Development"
		class="h-full w-44 object-cover object-center"
	/>
	<div class="flex flex-1 flex-col gap-4 p-8">
		<h2 class="text-3xl font-bold text-surface-900">Phase 3: Entwicklung & Betrieb</h2>
		<div class="grid grid-cols-1 gap-2">
			<Card class="flex flex-col justify-between gap-4">
				<div>
					<h3 class="mb-2 text-xl font-bold">Exclusive SaaS</h3>
					<p class="mb-4 text-surface-600">
						Wir entwickeln und betreiben das Produkt exklusiv für Sie.
					</p>
				</div>
			</Card>
			<Card class="flex flex-col justify-between gap-4">
				<div>
					<h3 class="mb-2 text-xl font-bold">Innovation Partnership</h3>
					<p class="mb-4 text-surface-600">
						Wir behalten die IP und vermarkten das Produkt an Dritte.
					</p>
				</div>
			</Card>
			<Card class="flex flex-col justify-between gap-4">
				<div>
					<h3 class="mb-2 text-xl font-bold">Auftragsentwicklung</h3>
					<p class="mb-4 text-surface-600">
						Wir entwickeln das Produkt und übergeben Code & IP an Sie.
					</p>
				</div>
			</Card>
		</div>
	</div>
</Page>
