<script lang="ts">
	import { page } from '$app/state';
	import favicon from '$lib/assets/images/favicon.svg';
	import AnimatedBackground from '$lib/components/background/AnimatedBackground.svelte';
	import ToastUI from '$lib/components/toast/ToastUI.svelte';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import Footer from './Footer.svelte';
	import './layout.css';
	import Navbar, { LINKS } from './Navbar.svelte';

	let { children } = $props();

	const isHome = $derived(page.url.pathname === '/');

	const pathSegments = $derived(page.url.pathname.split('/').filter(Boolean));
	const breadcrumbData = $derived([
		{ name: 'Startseite', item: 'https://elench.de' },
		...pathSegments.map((segment, i) => ({
			name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
			item: `https://elench.de/${pathSegments.slice(0, i + 1).join('/')}`,
		})),
	]);

	// Page Specific Logic
	const currentLink = $derived(LINKS.find((link) => link.url === page.url.pathname));
	const pageType = $derived(currentLink?.type || 'WebPage');

	const schema = $derived({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': 'https://elench.de/#organization',
				name: 'Elench',
				url: 'https://elench.de/',
				logo: 'https://elench.de/favicon-512.png', // Good practice to include for Org
			},
			// Include Breadcrumbs if not on homepage
			...(!isHome
				? [
						{
							'@type': 'BreadcrumbList',
							'@id': `https://elench.de${page.url.pathname}#breadcrumb`,
							itemListElement: breadcrumbData.map((b, i) => ({
								'@type': 'ListItem',
								position: i + 1,
								name: b.name,
								item: b.item,
							})),
						},
					]
				: []),
			{
				'@type': pageType,
				'@id': `https://elench.de${page.url.pathname}#webpage`,
				url: `https://elench.de${page.url.pathname}`,
				name: currentLink?.name || 'Elench',
				description: currentLink?.description || 'Innovative Lösungen von Elench.',
				isPartOf: { '@id': 'https://elench.de/#organization' },
				...(!isHome && {
					breadcrumb: { '@id': `https://elench.de${page.url.pathname}#breadcrumb` },
				}),
			},
		],
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<AnimatedBackground class="fixed top-0 left-0 -z-10 h-screen w-full" />
<Navbar class={['fixed top-0 z-10']} />
<main class="flex min-h-full flex-col gap-32 pt-32 pb-20 print:block print:pt-0 print:pb-0">
	{@render children()}
</main>
<Footer />
<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>
			{locale}
		</a>
	{/each}
</div>
<ToastUI />
