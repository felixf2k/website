<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { Card } from '$lib/components';
	import { enhanceForm } from '$lib/remote/form';
	import {
		CheckboxInput,
		EmailInput,
		TextareaInput,
		TextInput,
	} from '@ims360/svelte-ivory/components/inputs';
	import { Toasts } from '@ims360/svelte-ivory/components/toast';
	import { Copy, Mail, Send } from '@lucide/svelte';
	import { contactForm } from './contact.remote';

	const form = contactForm;

	let copyFailed = $state(false);
	const copyMail = () => {
		try {
			navigator.clipboard.writeText('info@elench.de');
			Toasts.trigger({
				variant: 'success',
				message: 'Adresse erfolgreich kopiert',
			});
		} catch (e) {
			copyFailed = true;
			Toasts.trigger({
				variant: 'warning',
				message: 'Wir konnten die Adresse nicht kopieren, kopiere sie manuell',
			});
		}
	};
</script>

<div class="flex min-h-full grow flex-col gap-8 content">
	<Card class="@container flex flex-col gap-8">
		<h2 class="text-3xl">Kontakt per Email</h2>
		<p>Gerne kannst du uns auch direkt eine Email schreiben.</p>
		<div class="grid grid-cols-1 gap-2 @md:w-fit @md:grid-cols-2 @md:gap-1">
			<a
				href="mailto:info@elench.de"
				class="btn flex flex-row items-center gap-2 preset-filled-primary-500 @md:rounded-l-4xl @md:rounded-r-sm"
			>
				info@elench.de
				<Mail size={16} />
			</a>
			<button
				class="btn flex flex-row items-center gap-2 border border-surface-400-600 text-surface-950-50 @md:rounded-l-sm @md:rounded-r-4xl"
				onclick={copyMail}
			>
				Adresse kopieren
				<Copy size={16} class="text-surface-400-600" />
			</button>
		</div>
		{#if copyFailed}
			<p class="w-full text-center text-xl @md:text-start">info@elench.de</p>
		{/if}
	</Card>
	<Card class="@container">
		<form
			{...form.enhance(
				enhanceForm({
					form,
					async onSuccess() {
						await goto(resolve('/contact/success'));
					},
					onError() {
						Toasts.trigger({
							message: 'Ein Fehler ist aufgetreten, schreib uns gerne eine Email',
							variant: 'warning',
						});
					},
				}),
			)}
			class="flex w-full flex-col gap-4"
		>
			<h2 class="text-3xl">Kontaktformular</h2>
			<TextInput label="Dein Name" form={form.fields.name} />
			<EmailInput label="Deine Email" form={form.fields.email} />
			<TextareaInput label="Dein Anliegen" form={form.fields.message} class="min-h-36" />
			<CheckboxInput
				label="Gespräch erwünscht"
				description="Wir schlagen dir einige Termine vor"
				form={form.fields.requestAppointment}
			/>
			<button type="submit" class="btn preset-filled-primary-500 @md:w-fit">
				Absenden
				<Send size={16} />
			</button>
		</form>
	</Card>
</div>
