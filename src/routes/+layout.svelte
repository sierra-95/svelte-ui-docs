<script lang="ts">
	import '../app.css';
	import '@sierra-95/svelte-ui/global.css';
	import {Layout, ButtonTheme} from '@sierra-95/svelte-ui';
	import {sections} from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="https://files.michaelmachohi.com/logos/michaelmachohi.favicon.png" />
	<script
	src="https://kit.fontawesome.com/b63be7ac2d.js"
	crossorigin="anonymous"
	></script>
</svelte:head>

<Layout 
	headerTitle = 'Sierra-95/svelte-ui'
	headerLink = '/'
	headerImage = 'https://files.michaelmachohi.com/logos/michaelmachohi.black.png'
	headerImageSize = '35px'
	{sections}
	contentCenter
>
	{#snippet headerContent()}
		<div class="mr-4"><ButtonTheme /></div>
	{/snippet}
	{@render children()} 
</Layout>
