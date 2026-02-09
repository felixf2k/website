import { Cloud, Handshake, Server, type Icon } from '@lucide/svelte';

interface Model {
	heading: string;
	description?: string;
	icon: typeof Icon;
}

export const models = {
	saas: {
		heading: 'Your SaaS',
		description: 'Dein SaaS Produkt, as a Service',
		icon: Cloud,
	},
	partnership: {
		heading: 'Innovation Partnership',
		description: 'Gemeinsam Risiken minimieren',
		icon: Handshake,
	},
	commissioned: {
		heading: 'Commissioned Development',
		description: 'Volle Kontrolle für kritische Lösungen',
		icon: Server,
	},
} as const satisfies Record<string, Model>;
