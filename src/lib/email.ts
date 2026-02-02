import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { createTransport, type Transporter } from 'nodemailer';

// Define the email options type
interface EmailOptions {
	from: string;
	to: string;
	subject: string;
	text?: string;
	html?: string;
}

const transporter: Transporter = createTransport({
	host: env.SMTP_HOST,
	port: Number(env.SMTP_PORT),
	secure: !dev,
	auth: {
		user: env.SMTP_USER,
		pass: env.SMTP_PASS
	}
});

async function sendEmail(options: EmailOptions) {
	await transporter.sendMail(options);
}

export const mail = {
	send: sendEmail
};
