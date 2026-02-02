<script lang="ts">
	import logo from '$lib/assets/images/logo.svg';
	import { BulletPoint, Card, IconCard } from '$lib/components';
	import {
		Code,
		FileCheck,
		FileText,
		Handshake,
		LayoutTemplate,
		Mail,
		Paintbrush,
		Shield,
		Upload,
		Users
	} from '@lucide/svelte';
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
	<title>Elench - Konzept</title>
</svelte:head>

<Page class="flex h-[calc(100vh-var(--spacing)*32)] flex-col gap-8 content py-8">
	<div class="hidden w-full flex-row items-center justify-between print:flex">
		<img src={logo} alt="Elench logo" class="h-10 w-auto" />
		<a href="mailto:info@elench.de" class="btn preset-filled-primary-500">
			Kontakt aufnehmen <Mail size={16} />
		</a>
	</div>
	<div class="flex w-full grow flex-col justify-center gap-8">
		<h1 class="text-4xl lg:text-8xl lg:leading-32 print:text-3xl print:leading-24">
			Kooperative<br /><span class="text-primary-600-400">Softwareentwicklung</span>
		</h1>
		<p class="text-lg leading-relaxed lg:text-3xl">
			Vom Auftrag bis Joint Venture:<br /> Wir skalieren unsere Beteiligung nach Ihren Zielen.
		</p>
	</div>

	<Card class="gap-4">
		<h2 class="h2 text-3xl">Das Konzept</h2>
		<div class="flex flex-col gap-2 text-lg text-surface-600-400">
			<p class="w-full">
				Für jeden Projektabschnitt wählen Sie den Grad unserer Beteiligung: <br /> von
				<span class="font-bold text-primary-600-400"> "Full Service" </span>
				bis <span class="font-bold text-primary-600-400">"Just the Code"</span>.
			</p>
		</div>
	</Card>
</Page>

<Page class="flex flex-row p-0">
	<enhanced:img
		src="./documentation.jpg"
		alt="Documentation"
		class="h-full w-44 object-cover object-center"
	/>
	<div class="flex flex-1 flex-col gap-4 p-8 not-print:py-0">
		<h2 class="h2 text-3xl">
			Phase 1: <strong>Anforderungsbestimmung</strong>
		</h2>
		<IconCard heading="Bring your own" iconStyle="tonal">
			{#snippet icon()}
				<FileCheck class="h-full w-full" />
			{/snippet}
			<p>
				Sie haben bereits eine <strong>vollständige</strong> Anforderungsdokumentation erstellt.
			</p>
			<div class="flex flex-col gap-2">
				<BulletPoint>
					<span class="text-surface-600-400">
						Bei Unvollständigkeit ist ein anderes Modell notwendig
					</span>
				</BulletPoint>
			</div>
		</IconCard>
		<IconCard heading="Cooperative" iconStyle="tonal">
			{#snippet icon()}
				<Handshake class="h-full w-full" />
			{/snippet}
			<p>
				Wir stellen <strong>Vorlagen</strong> bereit und geben regelmäßig
				<strong>Rückmeldung</strong> zur Qualität und Vollständigkeit Ihrer Dokumentation.
			</p>
			<div class="flex flex-col gap-2">
				<BulletPoint>Frühe Einbindung der technischen Experten</BulletPoint>
				<BulletPoint>Vorlagen helfen Nicht-Technikern</BulletPoint>
			</div>
		</IconCard>
		<IconCard heading="Full-Service" iconStyle="tonal">
			{#snippet icon()}
				<FileText class="h-full w-full" />
			{/snippet}
			<p>
				Wir erstellen die <strong>komplette Dokumentation</strong> basierend auf Ihrem Input und Feedback.
			</p>
			<div class="flex flex-col gap-2">
				<BulletPoint>Professionelle Dokumentation</BulletPoint>
				<BulletPoint>Einbindung von Softwarearchitekten</BulletPoint>
				<BulletPoint>Vergünstigung der folgenden Phasen</BulletPoint>
			</div>
		</IconCard>
	</div>
</Page>

<Page class="flex flex-row p-0">
	<enhanced:img src="./design.jpg" alt="Design" class="h-full w-44 object-cover object-center" />
	<div class="flex flex-1 flex-col gap-4 p-8 not-print:py-0">
		<h2 class="h2 text-3xl">
			Phase 2: <strong>Oberflächendesign</strong>
		</h2>
		<IconCard heading="Bring your own" iconStyle="tonal">
			{#snippet icon()}
				<Upload class="h-full w-full" />
			{/snippet}
			<p>Sie stellen ein <strong>fertiges, umsetzbares</strong> Design bereit.</p>
			<div class="flex flex-col gap-2">
				<BulletPoint>Nutzung bestehender Ressourcen</BulletPoint>
				<BulletPoint>Höhere Entwicklungskosten</BulletPoint>
			</div>
		</IconCard>
		<IconCard heading="Standard" iconStyle="tonal">
			{#snippet icon()}
				<LayoutTemplate class="h-full w-full" />
			{/snippet}
			<p>Nutzung unseres <strong>bewährten Standard-Designs</strong> für schnelle Ergebnisse.</p>
			<div class="flex flex-col gap-2">
				<BulletPoint>Vergünstigung der folgenden Phasen</BulletPoint>
			</div>
		</IconCard>
		<IconCard heading="Individual" iconStyle="tonal">
			{#snippet icon()}
				<Paintbrush class="h-full w-full" />
			{/snippet}
			<p><strong>Maßgeschneidertes</strong> Design durch uns oder unsere Partner.</p>
			<div class="flex flex-col gap-2">
				<BulletPoint>Keine Auswirkung auf Entwicklungskosten</BulletPoint>
			</div>
		</IconCard>
	</div>
</Page>

<Page class="flex flex-row p-0">
	<enhanced:img
		src="./develop.jpg"
		alt="Development"
		class="h-full w-44 object-cover object-center"
	/>
	<div class="flex flex-1 flex-col gap-4 p-8 not-print:py-0">
		<h2 class="h2 text-3xl">
			Phase 3: <strong>Entwicklung & Betrieb</strong>
		</h2>
		<IconCard heading="Exclusive access" iconStyle="tonal">
			{#snippet icon()}
				<Shield class="h-full w-full" />
			{/snippet}
			<p>Wir entwickeln und betreiben das Produkt <strong>exklusiv</strong> für Sie.</p>
			<div class="flex flex-col gap-2">
				<BulletPoint>Betrieb durch Experten</BulletPoint>
				<BulletPoint>Volle Marktrechte</BulletPoint>
				<BulletPoint>Betriebspauschale basierend auf der Benutzeranzahl</BulletPoint>
			</div>
		</IconCard>
		<IconCard heading="Innovation Partnership" iconStyle="tonal">
			{#snippet icon()}
				<Users class="h-full w-full" />
			{/snippet}
			<p>
				Durch <strong>Skalierung</strong> am Markt lösen wir Ihr Problem nachhaltig und preiswert.
			</p>
			<div class="flex flex-col gap-2">
				<BulletPoint>Betrieb durch Experten</BulletPoint>
				<BulletPoint>Dauerhaft kostenfreie Lizenz</BulletPoint>
				<BulletPoint>Keine Betriebspauschale</BulletPoint>
			</div>
		</IconCard>
		<IconCard heading="Commissioned Development" iconStyle="tonal">
			{#snippet icon()}
				<Code class="h-full w-full" />
			{/snippet}
			<p>Wir entwickeln das Produkt und <strong>übergeben</strong> den Code an Sie.</p>
			<div class="flex flex-col gap-2">
				<BulletPoint>Voller Zugriff auf den Quellcode</BulletPoint>
				<BulletPoint>Sie betreiben das Produkt selbst</BulletPoint>
			</div>
		</IconCard>
	</div>
</Page>

<Page class="flex flex-col gap-8 p-8">
	<h2 class="h2 text-3xl">
		<strong>Kosten eines Beispielprojektes (Ticketsystem)</strong>
	</h2>
	<table class="w-full rounded bg-surface-50-950 text-left text-sm text-surface-600-400 shadow-lg">
		<thead class="border-b border-surface-200-800 font-bold text-surface-950-50">
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
			<tr class="font-bold text-surface-950-50">
				<td class="px-6 py-4">Gesamt</td>
				<td class="px-6 py-4 text-right">{currencyFormatter.format(total)}</td>
			</tr>
		</tbody>
	</table>

	<div
		class="mt-auto flex w-full flex-col gap-6 rounded-xl bg-surface-50-950 p-8 shadow-lg print:shadow-none"
	>
		<div class="flex flex-col gap-2">
			<h3 class="h3 text-2xl font-bold">Interesse geweckt?</h3>
			<p class="text-lg text-surface-600-400">
				Lass uns unverbindlich über dein Vorhaben sprechen.
			</p>
		</div>
		<a href="mailto:info@elench.de" class="btn w-fit preset-filled-primary-500">
			Jetzt Kontakt aufnehmen <Mail size={20} />
		</a>
	</div>
</Page>
