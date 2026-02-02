<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { Card } from '$lib/components';
	import { enhanceForm } from '$lib/remote/form';
	import {
		CheckboxInput,
		EmailInput,
		TextareaInput,
		TextInput
	} from '@ims360/svelte-ivory/components/inputs';
	import { Toasts } from '@ims360/svelte-ivory/components/toast';
	import { Copy, Mail, MailCheck } from '@lucide/svelte';
	import { contactForm } from './contact.remote';

	const form = contactForm;

	const copyMail = () => {
		try {
			navigator.clipboard.writeText('info@elench.de');
			Toasts.trigger({
				variant: 'success',
				message: 'Adresse erfolgreich kopiert'
			});
		} catch (e) {
			Toasts.trigger({
				variant: 'warning',
				message: 'Wir konnten die Adresse nicht kopieren, kopiere sie manuell'
			});
		}
	};
</script>

<div class="flex min-h-full grow flex-col gap-8 content">
	<Card>
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
							variant: 'warning'
						});
					}
				})
			)}
			class="flex w-full flex-col gap-4"
		>
			<h2 class="text-3xl">Kontaktformular</h2>
			<TextInput label="Dein Name" form={form.fields.name} />
			<EmailInput label="Deine Email" form={form.fields.email} />
			<TextareaInput label="Dein Anliegen" form={form.fields.message} class="min-h-36" />
			<CheckboxInput
				label="Gespräch erwünscht"
				description="Wir schlagen dir Termine für ein Gespräch vor"
				form={form.fields.requestAppointment}
			/>
			<button type="submit" class="btn w-fit preset-filled-primary-500">
				Absenden
				<MailCheck size={16} />
			</button>
		</form>
	</Card>
	<Card class="flex flex-col gap-4">
		<h2 class="text-3xl">Kontakt per Email</h2>
		<p>Gerne kannst du uns auch direkt eine Email schreiben.</p>
		<div class="grid w-fit grid-cols-2 gap-1">
			<a
				href="mailto:info@elench.de"
				class="btn flex flex-row items-center gap-2 rounded-l-4xl rounded-r-sm preset-filled-primary-500"
			>
				info@elench.de
				<Mail size={16} />
			</a>
			<button
				class="btn flex flex-row items-center gap-2 rounded-l-sm rounded-r-4xl border border-surface-400-600 text-surface-950-50"
				onclick={copyMail}
			>
				<Copy size={16} class="text-surface-400-600" />
				Adresse kopieren
			</button>
		</div>
	</Card>
</div>
