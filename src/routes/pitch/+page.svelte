<script lang="ts">
	import BulletPoint from './BulletPoint.svelte';
	import Card from './Card.svelte';
	import Page from './Page.svelte';

	const positions = [
		{ name: 'Anforderungsbestimmung (5 Tage à 1.000 €)', price: 5000 },
		{ name: 'UI / UX Design (5 Tage à 1.000 €)', price: 5000 },
		{ name: 'Benutzerverwaltung & Rollen (RBAC)', price: 4500 },
		{ name: 'Single Sign-On (SSO) & Active Directory Synchronisierung', price: 5000 },
		{ name: 'Multi-Tenancy (Mandantenfähigkeit)', price: 6500 },
		{ name: 'Ticketsystem Kernfunktionalität', price: 13500 }
	];

	const total = positions.reduce((sum, pos) => sum + pos.price, 0);

	const currencyFormatter = new Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 0
	});
</script>

<svelte:head>
	<title>Pitch</title>
</svelte:head>

<Page class="flex flex-col gap-8 p-0">
	<div class="relative flex w-full flex-col gap-4 px-8 py-32 text-surface-50">
		<enhanced:img
			src="./heading.jpg"
			alt="Placeholder"
			class="absolute inset-0 -z-10 h-full w-full object-cover brightness-75"
		/>
		<h1 class="text-6xl font-bold">Kooperative Softwareentwicklung</h1>
		<p class="text-2xl italic">
			Vom Auftrag bis Joint Venture: Wir skalieren unsere Beteiligung nach Ihren Zielen.
		</p>
	</div>

	<div class="flex flex-col gap-4 p-8">
		<h2 class="text-4xl font-bold text-surface-900-100">Das Konzept</h2>
		<div class="flex flex-col gap-2 text-xl text-surface-700-300">
			<p class="w-full">
				Für jeden Projektabschnitt wählen Sie den Grad unserer Beteiligung: <br /> von
				<span class="font-bold text-primary-700-300"> "Full Service" </span>
				bis <span class="font-bold text-primary-700-300">"Just the Code"</span>.
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
		<h2 class="text-3xl font-normal text-surface-900">
			Phase 1: <strong>Anforderungsbestimmung</strong>
		</h2>
		<Card title="Bring your own" rightFor="Unternehmen mit fertiger Spezifikation">
			{#snippet description()}
				Sie haben bereits eine <strong>vollständige</strong> Anforderungsdokumentation erstellt.
			{/snippet}
			<BulletPoint variant="warning">
				Bei Unvollständigkeit ist ein anderes Modell notwendig
			</BulletPoint>
		</Card>
		<Card title="Cooperative" rightFor="Unternehmen, die Ihre Anforderungen validieren wollen">
			{#snippet description()}
				Wir stellen <strong>Vorlagen</strong> bereit und geben regelmäßig
				<strong>Rückmeldung</strong> zur Qualität und Vollständigkeit Ihrer Dokumentation.
			{/snippet}
			<BulletPoint>Frühe Einbindung der technischen Experten</BulletPoint>
			<BulletPoint>Vorlagen helfen Nicht-Technikern</BulletPoint>
		</Card>
		<Card
			title="Full-Service"
			rightFor="Unternehmen, die den Aufwand minimieren, oder maximale Planungssicherheit brauchen"
		>
			{#snippet description()}
				Wir erstellen die <strong>komplette Dokumentation</strong> basierend auf Ihrem Input und Feedback.
			{/snippet}
			<BulletPoint>Professionelle Dokumentation</BulletPoint>
			<BulletPoint>Einbindung von Softwarearchitekten für eine reibunslose Umsetzung</BulletPoint>
			<BulletPoint>Vergünstigung der folgenden Phasen</BulletPoint>
		</Card>
	</div>
</Page>

<Page class="flex flex-row p-0">
	<enhanced:img src="./design.jpg" alt="Design" class="h-full w-44 object-cover object-center" />
	<div class="flex flex-1 flex-col gap-4 p-8">
		<h2 class="text-3xl font-normal text-surface-900">
			Phase 2: <strong>Oberflächendesign</strong>
		</h2>
		<Card title="Bring your own" rightFor="Unternehmen mit eigenen Design-Ressourcen">
			{#snippet description()}
				Sie stellen ein <strong>fertiges, umsetzbares</strong> Design bereit.
			{/snippet}
			<BulletPoint>Nutzung bestehender Ressourcen</BulletPoint>
			<BulletPoint variant="warning">Höhere Entwicklungskosten</BulletPoint>
		</Card>
		<Card title="Standard" rightFor="Kosteneffiziente und schnelle Umsetzung">
			{#snippet description()}
				Nutzung unseres <strong>bewährten Standard-Designs</strong> für schnelle Ergebnisse.
			{/snippet}
			<BulletPoint>Vergünstigung der folgenden Phasen</BulletPoint>
		</Card>
		<Card title="Individual" rightFor="Produkte mit hohem Branding-Anspruch">
			{#snippet description()}
				<strong>Maßgeschneidertes</strong> Design durch uns oder unsere Partner.
			{/snippet}
			<BulletPoint>Keine Auswirkung auf Entwicklungskosten</BulletPoint>
		</Card>
	</div>
</Page>

<Page class="flex flex-row p-0">
	<enhanced:img
		src="./develop.jpg"
		alt="Development"
		class="h-full w-44 object-cover object-center"
	/>
	<div class="flex flex-1 flex-col gap-4 p-8">
		<h2 class="text-3xl font-normal text-surface-900">
			Phase 3: <strong>Entwicklung & Betrieb</strong>
		</h2>
		<Card title="Exclusive access" rightFor="Founder mit Produktidee ohne eigenes Tech-Team">
			{#snippet description()}
				Wir entwickeln und betreiben das Produkt <strong>exklusiv</strong> für Sie.
			{/snippet}
			<BulletPoint>Betrieb durch Experten</BulletPoint>
			<BulletPoint>Volle Marktrechte</BulletPoint>
			<BulletPoint variant="primary">
				Betriebspauschale basierend auf der Benutzeranzahl
			</BulletPoint>
		</Card>
		<Card
			title="Innovation Partnership"
			rightFor="Unternehmen, die interne Prozesse digitalisieren möchten"
		>
			{#snippet description()}
				Durch <strong>Skalierung</strong> am Markt lösen wir Ihr Problem nachhaltig und preiswert.
			{/snippet}
			<BulletPoint>Betrieb durch Experten</BulletPoint>
			<BulletPoint>Dauerhaft kostenfreie Lizenz</BulletPoint>
			<BulletPoint>Keine Betriebspauschale</BulletPoint>
		</Card>
		<Card title="Commissioned Development" rightFor="Produkte die schützenswerte Prozesse abbilden">
			{#snippet description()}
				Wir entwickeln das Produkt und <strong>übergeben</strong> den Code an Sie.
			{/snippet}
			<BulletPoint>Voller Zugriff auf den Quellcode</BulletPoint>
			<BulletPoint variant="warning">Sie betreiben das Produkt selbst</BulletPoint>
		</Card>
	</div>
</Page>

<Page class="flex flex-col gap-8 p-8">
	<h2 class="text-3xl font-normal text-surface-900-100">
		<strong>Kosten eines Beispielprojektes (Ticketsystem)</strong>
	</h2>
	<table class="w-full rounded bg-surface-50-950 text-left text-sm text-surface-700-300">
		<thead class="border-b border-surface-200-800 font-bold text-surface-900-100">
			<tr>
				<th class="px-6 py-3">Leistung</th>
				<th class="px-6 py-3 text-right">Kosten</th>
			</tr>
		</thead>
		<tbody class="divide-y divide-surface-200-800">
			{#each positions as position}
				<tr>
					<td class="px-6 py-4">{position.name}</td>
					<td class="px-6 py-4 text-right">{currencyFormatter.format(position.price)}</td>
				</tr>
			{/each}
			<tr class="font-bold text-surface-900-100">
				<td class="px-6 py-4">Gesamt</td>
				<td class="px-6 py-4 text-right">{currencyFormatter.format(total)}</td>
			</tr>
		</tbody>
	</table>
</Page>
