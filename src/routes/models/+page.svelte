<script lang="ts">
	import { BulletPoint, Card, Hero, IconBulletPoint, IconCard, Section } from '$lib/components';
	import { models } from '$lib/models';
	import { getLocale } from '$lib/paraglide/runtime';
	import {
		ArrowRight,
		Banknote,
		CircleDollarSign,
		Cloud,
		Code,
		Coins,
		Copyright,
		Hammer,
		Handshake,
		HardDrive,
		Layers,
		LayoutDashboard,
		Lightbulb,
		Link,
		LockOpen,
		PiggyBank,
		Shield,
		Ticket,
		TrendingUp,
		Users,
	} from '@lucide/svelte';

	// TODO: Zahl hier schon nennen?
	const IP_INCLUDED_USERS = 100;
</script>

<svelte:head>
	<title>Kooperationsmodelle - Elench</title>
	<meta
		name="description"
		content="Entdecke unsere flexiblen Kooperationsmodelle: {models.partnership.heading}, {models
			.saas.heading} und {models.commissioned.heading}. Maßgeschneidert für dein Projekt."
	/>
</svelte:head>

<Hero centered>
	{#snippet heading()}
		Flexible <br /><span class="text-primary-600-400">Kooperationsmodelle</span>
	{/snippet}
	{#snippet description()}
		Du wählst den Grad unserer Involvierung.<br /> Von
		<span class="font-semibold text-primary-500">"Full Service"</span> bis
		<span class="font-semibold text-primary-500">"Just the Code"</span>.
	{/snippet}
</Hero>

<Section
	heading="Innovation Partnership"
	description="Maximale Effizienz durch geteiltes Risiko."
	id="partnership"
>
	<div class="flex flex-col gap-16">
		<div class="flex flex-col gap-2 border-l-2 border-primary-500 pl-4">
			<h3 class="h3">Das Prinzip</h3>
			<p class="leading-relaxed text-surface-600-400">
				Wir entwickeln eine maßgeschneiderte Lösung für dein internes Problem.<br />
				Da wir das geistige Eigentum (IP) behalten und das Produkt an Dritte vermarkten dürfen, bieten
				wir dir die Entwicklung zu stark vergünstigten Konditionen an. <br />
				Du profitierst von einer hochwertigen Software, die stetig weiterentwickelt wird, ohne die vollen
				Kosten tragen zu müssen.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<IconCard heading="Was du einbringst" iconStyle="tonal" icon={Lightbulb}>
				<div class="flex flex-col gap-2">
					<BulletPoint>Tiefes Branchenwissen (Domain Expertise)</BulletPoint>
					<BulletPoint>Validierung in echter Umgebung</BulletPoint>
					<BulletPoint>Regelmäßiges Feedback</BulletPoint>
				</div>
			</IconCard>
			<IconCard heading="Was wir übernehmen" iconStyle="tonal" icon={Code}>
				<div class="flex flex-col gap-2">
					<BulletPoint>Technisches Know-How & Architektur</BulletPoint>
					<BulletPoint>Produkt-Vision & Vermarktungsstrategie</BulletPoint>
					<BulletPoint>Betrieb & Wartung</BulletPoint>
				</div>
			</IconCard>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<Card>
				<h3 class="h3">Vorteile</h3>
				<div class="flex flex-col gap-6">
					<IconBulletPoint
						title="Minimales Investment (CAPEX)"
						description="Durch unser geteiltes Interresse erhältst du eine High-End-Lösung zu einem Bruchteil der Marktkosten."
						icon={Banknote}
						iconClass="text-primary-500"
					/>
					<IconBulletPoint
						title="Wachstums-Bonus"
						description="Die ersten {IP_INCLUDED_USERS.toLocaleString(
							getLocale(),
						)} Benutzer sind komplett kostenfrei - alle weiteren erhälst du zu vergünstigten Raten."
						icon={TrendingUp}
						iconClass="text-primary-500"
					/>
					<IconBulletPoint
						title="Wartungsfrei"
						description="Sicherheitupdates und Instandhaltung für dich inklusive."
						icon={Shield}
						iconClass="text-primary-500"
					/>
					<p class="mt-4 font-semibold">Bei Markterfolg</p>
					<IconBulletPoint
						title="Kostenneutrale Weiterentwicklung"
						description="Um das Produkt noch attraktiver zu machen entwickeln wir gefragte features für dich Kostenneutral."
						icon={LayoutDashboard}
						iconClass="text-primary-500"
					/>
				</div>
			</Card>

			<Card>
				<h3 class="h3">Trade-Offs</h3>
				<div class="flex flex-col gap-6">
					<IconBulletPoint
						title="Keine Exklusivität"
						description="Da wir das Produkt vermarkten, können auch andere Marktteilnehmer die Lösung nutzen."
						icon={Users}
						iconClass="text-surface-500"
					/>
					<IconBulletPoint
						title="IP bei Elench"
						description="Das geistige Eigentum am Code verbleibt bei uns."
						icon={Copyright}
						iconClass="text-surface-500"
					/>
					<p class="mt-4 font-semibold">Bei Markterfolg</p>
					<IconBulletPoint
						title="Roadmap-Sharing"
						description="Neue Features werden so entwickelt, dass sie auch für den breiteren Markt funktionieren."
						icon={Handshake}
						iconClass="text-surface-500"
					/>
				</div>
			</Card>
		</div>

		<Card class="border-primary-500/30 bg-primary-500/5">
			<h3 class="text-center h3">Investment-Struktur</h3>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				<div class="flex flex-col items-center text-center">
					<div class="mb-4 rounded-full bg-primary-500/10 p-4 text-primary-500">
						<PiggyBank class="h-8 w-8" />
					</div>
					<p class="font-bold">Initial</p>
					<p class="text-surface-600-400">
						Stark reduziertes Co-Investment dank geteilter Interressen.
					</p>
				</div>
				<div class="flex flex-col items-center text-center">
					<div class="mb-4 rounded-full bg-primary-500/10 p-4 text-primary-500">
						<Ticket class="h-8 w-8" />
					</div>
					<p class="font-bold">Laufend</p>
					<p class="text-surface-600-400">
						Wachstums-Puffer: Erste {IP_INCLUDED_USERS.toLocaleString(getLocale())} Benutzer kostenfrei.
					</p>
				</div>
				<div class="flex flex-col items-center text-center">
					<div class="mb-4 rounded-full bg-primary-500/10 p-4 text-primary-500">
						<Coins class="h-8 w-8" />
					</div>
					<p class="font-bold">Kickback</p>
					<p class="text-surface-600-400">Umsatzprovision für jede erfolgreiche Empfehlung.</p>
				</div>
			</div>
		</Card>
	</div>
</Section>

<Section
	heading="Your SaaS"
	description="Volle Konzentration auf Vertrieb und Marktwachstum"
	id="saas"
>
	<div class="flex flex-col gap-16">
		<div class="flex flex-col gap-2 border-l-2 border-primary-500 pl-4">
			<h3 class="h3">Das Prinzip</h3>
			<p class="text-lg leading-relaxed text-surface-600-400">
				Du hast eine Vision für ein SaaS-Produkt, möchtest dich aber auf Vertrieb und Marketing
				konzentrieren. Wir übernehmen die komplette technische Entwicklung und den Betrieb der
				Plattform exklusiv für dich. Du behältst die volle Kontrolle über deine Kunden und Märkte,
				während wir im Hintergrund für Stabilität und Features sorgen.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<IconCard heading="Was du einbringst" iconStyle="tonal" icon={Lightbulb}>
				<div class="flex flex-col gap-2">
					<BulletPoint>Marktvision & Geschäftsmodell</BulletPoint>
					<BulletPoint>Vertrieb & Marketing</BulletPoint>
					<BulletPoint>Kundenbeziehungen & Support</BulletPoint>
				</div>
			</IconCard>
			<IconCard heading="Was wir übernehmen" iconStyle="tonal" icon={Code}>
				<div class="flex flex-col gap-2">
					<BulletPoint>Technische Umsetzung</BulletPoint>
					<BulletPoint>Skalierbare Cloud-Infrastruktur</BulletPoint>
					<BulletPoint>Sicherheitsupdates & Betrieb</BulletPoint>
				</div>
			</IconCard>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<Card>
				<h3 class="h3">Vorteile</h3>
				<div class="flex flex-col gap-6">
					<IconBulletPoint
						title="Exklusivitäts-Garantie"
						description="Kein Know-How-Leak. Die Lösung wird exklusiv für dich entwickelt und betrieben."
						icon={Shield}
						iconClass="text-primary-500"
					/>
					<IconBulletPoint
						title="Berechenbare Skalierung"
						description="Transparente Betriebspauschale pro User (Pay-as-you-grow). Keine Sorge um Server-Administration oder Cloud-Kosten."
						icon={TrendingUp}
						iconClass="text-primary-500"
					/>
					<IconBulletPoint
						title="CTO-as-a-Service"
						description="Wir übernehmen die technische Verantwortung, während du dich auf Marketing und Sales konzentrierst."
						icon={Code}
						iconClass="text-primary-500"
					/>
				</div>
			</Card>

			<Card>
				<h3 class="h3">Trade-Offs</h3>
				<div class="flex flex-col gap-6">
					<IconBulletPoint
						title="Laufende Kosten"
						description="Höhere monatliche Fixkosten durch die Betriebspauschale im Vergleich zum Partnership-Modell."
						icon={Banknote}
						iconClass="text-surface-500"
					/>
					<IconBulletPoint
						title="Infrastruktur-Bindung"
						description="Der Betrieb ist eng mit unseren Prozessen verzahnt (Managed Service)."
						icon={Link}
						iconClass="text-surface-500"
					/>
				</div>
			</Card>
		</div>

		<Card>
			<h3 class="text-center h3">Investment-Struktur</h3>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				<div class="flex flex-col items-center text-center">
					<div class="mb-4 rounded-full bg-surface-100 p-4 text-primary-500 dark:bg-surface-950">
						<Hammer class="h-8 w-8" />
					</div>
					<p class="h4">Setup</p>
					<p class="text-surface-600-400">Einmaliges Budget für die technische Erschließung</p>
				</div>
				<div class="flex flex-col items-center text-center">
					<div class="mb-4 rounded-full bg-surface-100 p-4 text-primary-500 dark:bg-surface-950">
						<Layers class="h-8 w-8" />
					</div>
					<p class="h4">Betrieb</p>
					<p class="text-surface-600-400">Monatliche Betriebspauschale pro aktivem User.</p>
				</div>
				<div class="flex flex-col items-center text-center">
					<div class="mb-4 rounded-full bg-surface-100 p-4 text-primary-500 dark:bg-surface-950">
						<Cloud class="h-8 w-8" />
					</div>
					<p class="h4">Managed</p>
					<p class="text-surface-600-400">Wartung, Sicherheitsupdates und Hosting inklusive.</p>
				</div>
			</div>
		</Card>
	</div>
</Section>

<Section
	heading="Commissioned Development"
	description="Maximale Kontrolle und Unabhängigkeit."
	id="commissioned"
>
	<div class="flex flex-col gap-16">
		<div class="flex flex-col gap-2 border-l-2 border-primary-500 pl-4">
			<h3 class="h3">Das Prinzip</h3>
			<p class="text-lg leading-relaxed text-surface-600-400">
				Der Klassiker der Softwareentwicklung. Du beauftragst uns mit der Umsetzung deiner
				Anforderungen. Nach Abschluss des Projekts übergeben wir dir den vollständigen Quellcode und
				alle Rechte (IP). Du bist unabhängig und hast die volle Kontrolle über Weiterentwicklung,
				Hosting und Deployment deiner Software.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<IconCard heading="Was du einbringst" iconStyle="tonal" icon={Lightbulb}>
				<div class="flex flex-col gap-2">
					<BulletPoint>Klare Anforderungen & Lastenheft</BulletPoint>
					<BulletPoint>Budget für Entwicklung (CAPEX)</BulletPoint>
					<BulletPoint>Product Ownership & Abnahme</BulletPoint>
				</div>
			</IconCard>
			<IconCard heading="Was wir übernehmen" iconStyle="tonal" icon={Code}>
				<div class="flex flex-col gap-2">
					<BulletPoint>Erfahrenes Entwicklungsteam</BulletPoint>
					<BulletPoint>Umsetzung nach Best Practices</BulletPoint>
					<BulletPoint>Qualitätssicherung & Dokumentation</BulletPoint>
				</div>
			</IconCard>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<Card>
				<h3 class="h3">Vorteile</h3>
				<div class="flex flex-col gap-6">
					<IconBulletPoint
						title="Full IP Ownership"
						description="Nach Abschluss gehören alle Rechte am Quellcode dir. Du besitzt ein echtes digitales Asset."
						icon={Copyright}
						iconClass="text-primary-500"
					/>
					<IconBulletPoint
						title="Vendor Independence"
						description="Kein Lock-in. Du kannst die Software theoretisch mit einem eigenen Team weiterführen oder bei jedem beliebigen Provider hosten."
						icon={LockOpen}
						iconClass="text-primary-500"
					/>
				</div>
			</Card>

			<Card>
				<h3 class="h3">Trade-Offs</h3>
				<div class="flex flex-col gap-6">
					<IconBulletPoint
						title="Hohe Initialkosten"
						description="Da Elench kein Skalierungspotenzial am Markt hat, wird der volle Marktsatz für die Entwicklung fällig."
						icon={Banknote}
						iconClass="text-surface-500"
					/>
					<IconBulletPoint
						title="Volle Eigenverantwortung"
						description="Nach Übergabe bist du für Hosting, Security-Patches und technische Instandhaltung selbst verantwortlich."
						icon={Users}
						iconClass="text-surface-500"
					/>
					<IconBulletPoint
						title="Weiterentwicklung und Sicherheitsupdates"
						description="Weitere Features und Sicherheitsupdates müssen gesondert beauftragt werden."
						icon={LayoutDashboard}
						iconClass="text-surface-500"
					/>
				</div>
			</Card>
		</div>

		<Card>
			<h3 class="text-center h3">Investment-Struktur</h3>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				<div class="flex flex-col items-center text-center">
					<div class="mb-4 rounded-full bg-surface-100 p-4 text-surface-500 dark:bg-surface-950">
						<CircleDollarSign class="h-8 w-8" />
					</div>
					<p class="h4">Projektpreis</p>
					<p class="text-surface-600-400">Abrechnung nach marktüblichen Sätzen (CAPEX).</p>
				</div>
				<div class="flex flex-col items-center text-center">
					<div class="mb-4 rounded-full bg-surface-100 p-4 text-surface-500 dark:bg-surface-950">
						<HardDrive class="h-8 w-8" />
					</div>
					<p class="h4">Infrastruktur</p>
					<p class="text-surface-600-400">Echtheitskosten direkt beim Provider deiner Wahl.</p>
				</div>
				<div class="flex flex-col items-center text-center">
					<div class="mb-4 rounded-full bg-surface-100 p-4 text-surface-500 dark:bg-surface-950">
						<LayoutDashboard class="h-8 w-8" />
					</div>
					<p class="h4">Weiterentwicklung</p>
					<p class="text-surface-600-400">
						Updates und weitere Features müssen gesondert beauftragt werden.
					</p>
				</div>
			</div>
		</Card>
	</div>
</Section>

<div class="content">
	<Card class="flex flex-col items-center gap-8 text-center md:p-12">
		<div class="flex flex-col gap-4">
			<h3 class="h2">Bereit für den nächsten Schritt?</h3>
			<p class="mx-auto max-w-2xl text-lg text-surface-600-400">
				Lass uns gemeinsam herausfinden, welches Modell am besten zu deinen Zielen passt. Wir freuen
				uns auf deine Idee!
			</p>
		</div>
		<a href="/contact" class="btn preset-filled-primary-500">
			Kontakt aufnehmen
			<ArrowRight class="h-5 w-5" />
		</a>
	</Card>
</div>
