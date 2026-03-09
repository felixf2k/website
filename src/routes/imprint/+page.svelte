<script>
	import { resolve } from '$app/paths';
	import { Link } from '@lucide/svelte';
</script>

<svelte:head>
	<meta name="description" content="Impressum der Elench Website" />
	<title>Impressum - Elench</title>
</svelte:head>

<div class="mx-auto prose mt-24 flex flex-col gap-4 content prose-p:m-0">
	<h1>Impressum</h1>
	<p>
		<strong>Elench UG (haftungsbeschränkt)</strong><br />
		Anselm-Pflug-Str. 1<br />
		88097 Eriskirch<br />
		Deutschland<br />
	</p>

	<p>
		<strong>Vertreten durch:</strong><br />
		Felix Fischerkeller
	</p>

	<div class="grid w-fit grid-cols-[1fr_auto] gap-x-4">
		<strong class="col-span-2">Kontakt:</strong>
		<p>Formular:</p>
		<a class="flex flex-row items-center gap-1 anchor" href={resolve('/contact')}>
			Kontaktformular
			<span><Link size={16} /></span>
		</a>
		<p>Email:</p>
		<a class="anchor" href="mailto:info@elench.de">info@elench.de</a>
		<p>Telefon:</p>
		<a class="anchor" href="tel:+4975419552768">+49 7541 9552768</a>
	</div>

	<p>
		<strong>Registereintrag:</strong><br />
		Eintragung im Handelsregister.<br />
		Registergericht: Amtsgericht Ulm<br />
		Registernummer: HRB 744695<br />
		Gerichtsstand: D-88069 Tettnang
	</p>

	<!-- <p>
		<strong>Umsatzsteuer-ID:</strong><br />
		Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
		[Deine USt-IdNr, falls vorhanden]
	</p> -->

	<p class="pt-4 font-bold">Haftungsausschluss:</p>
	Auf unserer Website finden Sie Verweise (Hyperlinks) auf andere Websites im Internet. Wir haben keinerlei
	Einfluss auf die Gestaltung und den Inhalt dieser externen Seiten. Daher übernehmen wir keine Verantwortung
	für den Inhalt und die Gestaltung dieser Seiten. Diese Erklärung gilt für alle auf unserer Website angezeigten
	externen Verweise. Durch die Bereitstellung solcher Links erteilt die Elench UG (Haftungsbeschränkt)
	keine Zustimmung zu deren Inhalten. Die Elench UG (Haftungsbeschränkt) übernimmt auch keine Verantwortung
	für die Verfügbarkeit oder den Inhalt solcher Websites oder eine Haftung für Schäden oder Verletzungen,
	die sich aus der Verwendung solcher Inhalte in irgendeiner Form ergeben. Der Zugriff auf solche Websites
	erfolgt auf eigene Gefahr. Die Wahl der Links sollte die Nutzer in keiner Weise auf die verlinkten Seiten
	beschränken.
	<p class="font-bold">Urheberrecht:</p>
	Die Inhalte, einschließlich Bilder und die Gestaltung der Elench-Website, unterliegen dem Urheberrechtsschutz
	und anderen Gesetzen zum Schutz des geistigen Eigentums, unabhängig von einer Bezeichnung (z.B. ©, ®
	oder ™ Zeichen). Die Vervielfältigung der Dokumente ist nur für den persönlichen und informativen Gebrauch
	gestattet. Jede andere Vervielfältigung, Verbreitung, Reproduktion, Übertragung oder sonstige Nutzung,
	einschließlich der Verwendung von Texten, Textteilen, Bildern oder Software, die direkt oder indirekt
	von der Website der Elench UG (Haftungsbeschränkt) abgerufen werden können, ist ohne vorherige schriftliche
	Zustimmung der Elench UG (Haftungsbeschränkt) nicht gestattet. Eine Änderung der Inhalte der Webseiten
	ist nicht gestattet. Durch die Nutzung dieser Website wird keine Lizenz zur Nutzung des geistigen Eigentums
	der Elench UG (Haftungsbeschränkt) erteilt. Soweit nicht anders angegeben, sind alle auf der Website
	der Elench UG (Haftungsbeschränkt) verwendeten Marken markenrechtlich geschützt. Dies gilt insbesondere
	für Firmenlogos und Markenzeichen.
</div>
