<script>
	import { resolve } from '$app/paths';
	import { Link } from '@lucide/svelte';
</script>

<div class="mx-auto prose mt-24 flex flex-col gap-4 content dark:prose-invert prose-p:m-0">
	<h1>Impressum</h1>
	<p>
		<strong>Elench UG (haftungsbeschränkt)</strong><br />
		Anselm-Pflug-Str. 1<br />
		88097 Eriskirch<br />
		Deutschland<br />
	</p>

	<p>
		<strong>Vertreten durch den Geschäftsführer:</strong><br />
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
	</p>

	<p>
		<strong>Verbraucherstreitbeilegung/Universalschlichtungsstelle:</strong><br />
		Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
		teilzunehmen.
	</p>

	<p class="font-bold">Urheberrecht:</p>
	Die Inhalte, einschließlich Bilder und die Gestaltung der Elench-Website, unterliegen dem Urheberrechtsschutz
	und anderen Gesetzen zum Schutz des geistigen Eigentums, unabhängig von einer Bezeichnung (z.B. ©, ®
	oder ™ Zeichen). Die Vervielfältigung der Dokumente ist nur für den persönlichen und informativen Gebrauch
	gestattet. Jede andere Vervielfältigung, Verbreitung, Reproduktion, Übertragung oder sonstige Nutzung,
	einschließlich der Verwendung von Texten, Textteilen, Bildern oder Software, die direkt oder indirekt
	von der Website der Elench UG (haftungsbeschränkt) abgerufen werden können, ist ohne vorherige schriftliche
	Zustimmung der Elench UG (haftungsbeschränkt) nicht gestattet. Eine Änderung der Inhalte der Webseiten
	ist nicht gestattet. Durch die Nutzung dieser Website wird keine Lizenz zur Nutzung des geistigen Eigentums
	der Elench UG (haftungsbeschränkt) erteilt. Soweit nicht anders angegeben, sind alle auf der Website
	der Elench UG (haftungsbeschränkt) verwendeten Marken markenrechtlich geschützt. Dies gilt insbesondere
	für Firmenlogos und Markenzeichen.
</div>
