import { paraglideMiddleware } from '$lib/paraglide/server';
import { Theme } from '$lib/theme.svelte';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const handleBasicAuth: Handle = async ({ event, resolve }) => {
	if (event.route.id) {
		const auth = event.request.headers.get('Authorization');
		const user = 'beta';
		const pass = 'access';

		if (auth !== `Basic ${btoa(`${user}:${pass}`)}`) {
			return new Response('Not authorized', {
				status: 401,
				headers: {
					'WWW-Authenticate': 'Basic realm="User Visible Realm", charset="UTF-8"',
				},
			});
		}
	}
	return resolve(event);
};

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale),
		});
	});

export const handle: Handle = sequence(handleBasicAuth, handleParaglide, Theme.handle);
