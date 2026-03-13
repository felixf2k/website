<script>
	import { resolve } from '$app/paths';
	import { Link } from '@lucide/svelte';
</script>

<div class="mx-auto prose mt-24 flex flex-col gap-4 content prose-p:m-0">
	<h1>Datenschutzerklärung</h1>
	<p>
		Wir freuen uns über Ihren Besuch auf unserer Webseite. Gern möchten wir Sie nachstehend über die
		Verarbeitung Ihrer personenbezogenen Daten auf unserer Webseite informieren.
	</p>

	<h3>Verantwortliche Stelle</h3>

	<div class="flex flex-col gap-4">
		<p>
			<strong>Elench UG (haftungsbeschränkt)</strong><br />
			Anselm-Pflug-Str. 1<br />
			88097 Eriskirch<br />
			Deutschland<br />
		</p>
		<div class="grid w-fit grid-cols-[1fr_auto] gap-x-4">
			<strong class="col-span-2">Kontakt:</strong>
			<p>Formular:</p>
			<a class="flex flex-row items-center gap-1 anchor" href={resolve('/contact')}>
				Kontaktformular
				<span><Link size={16} /></span>
			</a>
			<p>Email:</p>
			<a class="anchor" href="mailto:datenschutz@elench.de">datenschutz@elench.de</a>

			<p>Telefon:</p>
			<a class="anchor" href="tel:+4975419552768">+49 7541 9552768</a>
		</div>
	</div>

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

	<h3>Kontaktformular und E-Mail-Kontakt</h3>
	<p>
		Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus
		dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
		Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Wir löschen die Daten, sofern
		diese nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
	</p>

	<div class="grid w-full grid-cols-1 gap-2 xl:grid-cols-[auto_1fr]">
		<p class="flex shrink-0 font-bold whitespace-nowrap">Datenkategorien:</p>
		<p>
			Bestandsdaten (z. B. Name), Kontaktdaten (z. B. E-Mail, Telefonnummer), Inhaltsdaten (z. B.
			Texteingaben)
		</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Zweck der Verarbeitung:</p>
		<p>Beantwortung von Kontaktanfragen und Kommunikation</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Rechtsgrundlage:</p>
		<p>
			Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 lit. b) DSGVO), Berechtigte
			Interessen (Art. 6 Abs. 1 lit. f) DSGVO)
		</p>
	</div>

	<h3>Hosting</h3>
	<p>
		Unsere Website wird bei einem externen Dienstleister gehostet. Daten der Besucher unserer
		Website, insbesondere sog. Logfiles, werden auf den Servern unseres Dienstleisters gespeichert.
		Eine Verarbeitung der Daten durch den von uns eingesetzten Hosting-Anbieter zu eigenen Zwecken
		findet nicht statt. Wir haben einen Vertrag zur Auftragsverarbeitung (AVV) mit dem Anbieter
		geschlossen.
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
		<p>
			Da es sich um ein US-Unternehmen handelt, kann eine Datenübermittlung in die USA nicht
			gänzlich ausgeschlossen werden. Grundlage hierfür sind Standardvertragsklauseln (SCC) bzw. das
			EU-US Data Privacy Framework (DPF).
		</p>

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

		<p class="flex shrink-0 font-bold whitespace-nowrap">
			Recht auf Einschränkung der Verarbeitung:
		</p>
		<p>Gem. Art. 18 DSGVO.</p>

		<p class="flex shrink-0 font-bold whitespace-nowrap">Recht auf Datenübertragbarkeit:</p>
		<p>Gem. Art. 20 DSGVO.</p>

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
