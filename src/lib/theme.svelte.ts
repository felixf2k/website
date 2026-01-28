import { browser } from '$app/environment';
import { cookie } from '@ims360/svelte-ivory/utils/functions';
import type { Handle } from '@sveltejs/kit';

const COOKIE_THEME_KEY = 'theme';

export type ThemePreference = 'system' | 'light' | 'dark';

class ThemeController {
	private currentTheme = $state<ThemePreference>('system');

	constructor() {
		if (!browser) return;
		const isOverwritten = document.cookie
			.split('; ')
			.some((row) => row.startsWith(COOKIE_THEME_KEY + '='));
		if (isOverwritten) {
			const value = cookie.get(COOKIE_THEME_KEY);
			this.currentTheme = value === 'true' ? 'dark' : 'light';
		} else {
			this.currentTheme = 'system';
		}
	}

	get theme() {
		return this.currentTheme;
	}

	get preference() {
		return this.currentTheme;
	}

	set theme(value: ThemePreference) {
		if (!browser) return;
		this.currentTheme = value;
		cookie.set({
			name: COOKIE_THEME_KEY,
			value
		});
		if (value === 'system') {
			const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			document.documentElement.classList.toggle('dark', systemDark);
		} else if (value === 'light') {
			document.documentElement.classList.toggle('dark', false);
		} else {
			document.documentElement.classList.toggle('dark', true);
		}
	}

	/** Add to hook sequence to enable correct prerendering ot the theme */
	handle: Handle = ({ event, resolve }) => {
		const theme = event.cookies.get(COOKIE_THEME_KEY);
		let isDark = false;

		if (theme !== undefined && (theme as ThemePreference) !== 'system') {
			isDark = theme === 'dark';
		} else {
			isDark = event.request.headers.get('sec-ch-prefers-color-scheme') === 'dark';
		}

		if (!isDark) return resolve(event);

		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('<html class="', '<html class="dark ')
		});
	};
}

export const Theme = new ThemeController();
