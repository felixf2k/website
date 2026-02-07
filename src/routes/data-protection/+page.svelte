<script>
	import { resolve } from '$app/paths';
	import { Link } from '@lucide/svelte';
</script>

<svelte:head>
	<meta name="description" content="Datenschutzerklärung" />
	<title>Datenschutzerklärung - Elench</title>
</svelte:head>

<div class="mx-auto prose-lg mt-24 flex flex-col gap-8 content prose-p:m-0">
	<h1>Datenschutzerklärung</h1>
	<p>
		Wir freuen uns über Ihren Besuch auf unserer Webseite. Gern möchten wir Sie nachstehend über die
		Verarbeitung Ihrer personenbezogenen Daten auf unserer Webseite informieren.
	</p>

	<h3>Verantwortliche</h3>
	<p>
		Elench UG (Haftungsbeschränkt)<br />
		Dr.-Klein-Straße 29<br />
		88069 Tettnang<br />
		Deutschland<br />
		<strong>Kontakt:</strong><br />
		<a class="flex flex-row items-center gap-1 anchor" href={resolve('/contact')}>
			Kontaktformular
			<span><Link size={16} /></span>
		</a>
		Email: datenschutz|at|elench.de
	</p>

	<h3>Begriffe</h3>
	<p>
		Die in dieser Datenschutzerklärung verwendeten Fachbegriffe sind so zu verstehen, wie sie in
		Art. 4 DSGVO legaldefiniert sind.<br />
		Die Begriffe „Nutzer“ und „Websitebesucher“ werden in unserer Datenschutzerklärung synonym verwendet.
	</p>

	<h3>Kategorien von Betroffenen</h3>
	<p>
		Bei den Kategorien von Betroffenen handelt es sich um Websitebesucher und sonstige Nutzer von
		Onlinediensten.
	</p>

	<h2>Allgemeine Hinweise zur Datenverarbeitung auf der Website</h2>
	<h3>Automatisierte Datenverarbeitung (Log-Files etc.)</h3>
	<p>
		Unsere Seite kann ohne aktive Angaben zur Person der Nutzer besucht werden. Wir speichern jedoch
		automatisch mit jedem Aufruf der Webseite Zugriffsdaten (Server-Log-Dateien) wie z. B. den Namen
		des Internet Service Providers, das verwendete Betriebssystem, die Webseite, von der aus der
		Nutzer uns besucht, das Datum und die Dauer des Besuchs oder den Namen der angeforderten Datei,
		sowie aus Sicherheitsgründen, z. B. zur Erkennung von Angriffen auf unsere Webseite, die
		IP-Adresse des verwendeten Endgeräts für eine begrenzte Dauer. Eine Zusammenführung dieser Daten
		mit anderen Datenquellen erfolgt nicht. Die Daten verarbeiten und nutzen wir für folgende
		Zwecke: Bereitstellung der Webseite, Verhinderung und Erkennung von Fehlern/Fehlfunktionen, und
		Missbrauch der Webseite.
	</p>

	<div class="grid w-full grid-cols-1 gap-2 xl:grid-cols-[auto_1fr]">
		<p class="flex shrink-0 font-bold whitespace-nowrap">Datenkategorien:</p>
		<p>
			Meta- und Kommunikationsdaten (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, Uhrzeit, Art
			des HTTP-Requests, Webseite, von der aus der Zugriff erfolgt (Referrer-URL), Verwendeter
			Browser und ggf. Betriebssystem des zugreifenden Rechners)
		</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Zweck der Verarbeitung:</p>
		<p>
			Verhinderung und Erkennung von Fehlern/Fehlfunktionen, Erkennung von Missbrauch der Webseite
		</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Rechtsgrundlage:</p>
		<p>Berechtigtes Interesse gem. Art. 6 Abs. 1 lit. f) DSGVO</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Berechtigte Interessen:</p>
		<p>Betrugsprävention zur Erkennung von Missbrauch der Website</p>
	</div>

	<h3>Erforderliche Cookies</h3>
	<p>
		Um die Nutzung der Grundfunktionen auf unserer Website zu ermöglichen, verwenden wir sogenannte
		Cookies. Bei Cookies handelt es sich um Informationen, die auf dem Endgerät des Nutzers
		gespeichert werden. Unbedingt erforderliche Cookies werden eingesetzt, um einen vom Nutzer
		ausdrücklich gewünschten Dienst zur Verfügung zu stellen (z.B. Speicherung von Sprach- oder
		Datenschutzeinstellungen). Die beschriebene Datenverarbeitung erfolgt auf Grundlage unseres
		berechtigten Interesses, die Funktionalität der Webseite sicherzustellen.
	</p>

	<div class="grid w-full grid-cols-1 gap-2 xl:grid-cols-[auto_1fr]">
		<p class="flex shrink-0 font-bold whitespace-nowrap">Rechtsgrundlage:</p>
		<p>Berechtigte Interessen (Art. 6 Abs. 1 lit. f) DSGVO i. V. m. § 25 Abs. 2 Nr. 2 TDDDG)</p>
	</div>

	<h3>Hosting</h3>
	<p>
		Unsere Website wird bei einem externen Dienstleister gehostet. Daten der Besucher unserer
		Website, insbesondere sog. Logfiles, werden auf den Servern unseres Dienstleisters gespeichert.
		Eine Verarbeitung der Daten durch den von uns eingesetzten Hosting-Anbieter zu eigenen Zwecken
		findet nicht statt.
	</p>
	<div class="grid w-full grid-cols-1 gap-2 xl:grid-cols-[auto_1fr]">
		<p class="flex shrink-0 font-bold whitespace-nowrap">Kategorien Daten:</p>
		<p>Meta- und Kommunikationsdaten (z.B. Geräteinformationen, IP-Adressen, Zugriffszeiten)</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Zweck der Verarbeitung:</p>
		<p>Ordnungsgemäße Darstellung und Optimierung der Website</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Rechtsgrundlage:</p>
		<p>Berechtigte Interessen (Art. 6 Abs. 1 lit. f) DSGVO)</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Empfänger:</p>
		<p>Vercel Inc., Avenue Huart Hamoir 71, 1030 Brussels, Belgium</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Drittlandsübermittlung:</p>
		<p>Findet nicht statt (Speicherung auf EU-Servern).</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Datenschutzerklärung:</p>
		<p>
			<a target="_blank" href="https://vercel.com/legal/privacy-policy">
				https://vercel.com/legal/privacy-policy
			</a>
		</p>
	</div>

	<h3>Downloads</h3>
	<p>
		Wir bieten die Möglichkeit, auf unserer Website Downloads vorzunehmen (z. B. PDF-Dokumente), um
		unsere Besucher mit Informationen zu versorgen. Ein Tracking oder eine statistische Auswertung
		des Download-Verhaltens findet nicht statt.
	</p>
	<div class="grid w-full grid-cols-1 gap-2 xl:grid-cols-[auto_1fr]">
		<p class="flex shrink-0 font-bold whitespace-nowrap">Datenkategorien:</p>
		<p>
			Meta- und Kommunikationsdaten (z. B. Geräteinformationen, IP-Adressen), Nutzungsdaten (z. B.
			Zugriffszeit)
		</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Zweck der Verarbeitung:</p>
		<p>Bereitstellung von Informationsmaterialien</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Rechtsgrundlage:</p>
		<p>Berechtigtes Interesse (Art. 6 Abs. 1 lit. f) DSGVO)</p>
	</div>

	<h2>Rechte der Betroffenen</h2>
	<div class="grid w-full grid-cols-1 gap-2 xl:grid-cols-[auto_1fr]">
		<p class="flex shrink-0 font-bold whitespace-nowrap">Recht auf Auskunft:</p>
		<p>Gem. Art. 15 DSGVO.</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Recht auf Berichtigung:</p>
		<p>Gem. Art. 16 DSGVO.</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Recht auf Löschung:</p>
		<p>Gem. Art. 17 DSGVO.</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Beschwerderecht:</p>
		<p>Beschwerde bei der zuständigen Aufsichtsbehörde gem. Art. 77 DSGVO.</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Recht auf Widerspruch:</p>
		<p>Gem. Art. 21 DSGVO bei Verarbeitung auf Grundlage berechtigter Interessen.</p>
	</div>

	<h3>Änderungen</h3>
	<p>
		Wir behalten uns vor, die Datenschutzhinweise auf unserer Website jederzeit bei Änderungen
		anzupassen.
	</p>
</div>
