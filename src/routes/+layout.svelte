<script lang="ts">
	import '../app.css';
	import {Layout, ButtonTheme, theme} from '@sierra-95/svelte-scaffold';
	import {sections} from '$lib';

	let { children } = $props();
	let link = $state('');
	$effect(() => {
		if($theme === 'light'){
			link = 'https://files.michaelmachohi.com/logos/michaelmachohi.dark.blue.png';
		}else{
			link = 'https://files.michaelmachohi.com/logos/michaelmachohi.light.blue.png';
		}
	});
</script>

<svelte:head>
	<link rel="icon" href="https://files.michaelmachohi.com/logos/michaelmachohi.favicon.circle.ico" />
	<script
	src="https://kit.fontawesome.com/b63be7ac2d.js"
	crossorigin="anonymous"
	></script>
</svelte:head>

<Layout 
	headerTitle = 'Sierra-95/svelte-scaffold'
	headerLink = '/'
	headerImage = {link}
	headerImageSize = '35px'
	{sections}
	contentCenter
	headerRightContent = {headerRightContent}
>{@render children()} 
</Layout>
{#snippet headerRightContent()}
	<div class="mr-4"><ButtonTheme /></div>
{/snippet}
