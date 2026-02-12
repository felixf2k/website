<script lang="ts">
	import { resolve } from '$app/paths';
	import { Card, LearnMoreButton, Section } from '$lib/components';
	import image from './FF.jpg';
</script>

<svelte:head>
	<title>Über uns - Elench</title>
	<meta
		name="description"
		content="Lerne Elench kennen. Wir revolutionieren Softwareprojekte durch geteilte Interessen und flexible Kooperationsmodelle."
	/>
</svelte:head>

<Section heading="Founder">
	<Card class="flex flex-col overflow-hidden p-0">
		<div class="flex flex-col md:flex-row">
			<enhanced:img
				src={image}
				alt="Felix"
				class="aspect-square h-64 w-64 max-w-full shrink-0 rounded-xl object-cover shadow-lg"
			/>
			<div class="flex flex-col gap-4 p-8">
				<h3 class="h3">Felix Fischerkeller</h3>
				<p class="leading-relaxed text-surface-700-300">
					Als Softwareingenieur habe ich über 5 Jahre an der Konzeptionierung und Umsetzung
					komplexer Management- und KI-Plattformen gearbeitet. Dabei habe ich Verbesserungspotential
					in der gängigen Organisation und Umsetung von komplexen Softwareprojekten erkannt, dass
					ich mit Elench verwirkliche.
				</p>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-3">
					<h4 class="h4">Motivation</h4>
				</div>
				<div
					class="flex flex-col gap-2 border-l border-primary-500 pl-2 leading-relaxed text-surface-700-300"
				>
					<p>Softwareprojekte stehen vor einigen Herausvorderungen:</p>
					<ol class="list-decimal pl-4">
						<li>
							Vendor Lock-in ist kaum zu vermeiden, da das technische Know-How zwangsläufig bei dem
							Tech-Team liegt.
						</li>
						<li>Der Aufbau eigener Tech-Teams ist jedoch schwierig, Zeit-und Kostenintensiv.</li>
						<li>
							Zudem sind Softwareprojekte oft durch unvorhergesehene Kostensteigerungen
							gekennzeichnet.
						</li>
					</ol>
					<p>
						Ich bin der Überzeugung, dass durch eine Struktur die eine Überlappung der Interressen
						beider Partein sicherstellt, bessere Ergebnisse erzielt werden können.
					</p>
				</div>
			</div>
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-3">
					<h4 class="h4">Lösungsansatz</h4>
				</div>
				<div
					class="flex flex-col gap-2 border-l border-primary-500 pl-2 leading-relaxed text-surface-700-300"
				>
					<p>
						Um sich den Herausforderungen zu stellen, ist es nötig gemeinsame Interessen am
						tatsächlichen Erfolg der Produkte zu schaffen:
					</p>
					<ol class="list-decimal pl-4">
						<li>
							Du bezahlst nur für fertig umgesetzte Features, was dein finanzielles Risiko
							minimiert.
						</li>
						<li>
							Durch unser Eigeninteresse an wartbarer, erfolgreicher Software garantieren wir hohe
							Qualität und kontinuierliche Verbesserung.
						</li>
						<li>
							Flexible <a href={resolve('/models')} class="anchor">Kooperationsmodelle</a> werden den
							Rahmenbedingungen von unterschiedlichen Projekten gerecht.
						</li>
					</ol>
				</div>
			</div>
			<LearnMoreButton label="Kontakt aufnehmen" class="md:w-fit" href={resolve('/contact')} />
		</div>
	</Card>
</Section>
