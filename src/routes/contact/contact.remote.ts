import { form } from '$app/server';
import { env } from '$env/dynamic/private';
import { mail } from '$lib/email';
import z from 'zod';

const schema = z.object({
	name: z.string().min(1, 'Dein Name ist erforderlich'),
	email: z.email('Ungültige Email').optional(),
	phone: z.string().optional(),
	message: z.string(),
	requestAppointment: z.boolean().optional()
});

export const contactForm = form(schema, async (data) => {
	await mail.send({
		to: env.INBOUND_ADRESS,
		from: env.SMTP_USER,
		subject: 'Neue Kontaktanfrage',
		text: `Name: ${data.name}\nEmail: ${data.email}\nTelefon: ${data.phone ?? '-'}\nNachricht: ${data.message}\nTermin erwünscht: ${data.requestAppointment ? 'Ja' : 'Nein'}`
	});
});
