<script>
    import {isLoading, Button} from '@sierra-95/svelte-scaffold';
    import {RenderCode} from '$lib';
	import {routes} from '$lib/assets/company';

    function toggleLoading() {
        isLoading.update((value) => !value);
    }
</script>

{#snippet layout_link()}
	<a href={routes.modules.layout.base} class="note">Layout component</a> 
{/snippet}


<title>General Stores</title>
<main class="space-y-6">
	<h1 class="sierra-docs-h1">Scaffold Stores<span>Because someone has to remember</span></h1>
	<ol class="sierra-docs-ol space-y-4">
	
		<section id={routes.stores.ids.device_width} data-title="Device Width" class="space-y-4">
			<li>Device Width</li>
			<h3>isMobile (&lt;480px), isTablet ( 480px &gt & &lt; 768px), isDesktop (&gt1024px)</h3>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import { isMobile, isTablet, isDesktop } from '@sierra-95/svelte-scaffold';
					
					let isMenuOpen = $state(false);
					$effect(() => {
						if ($isMobile) isMenuOpen = false;
					});
				<\/script>
			`}/>
		</section>

		<section id={routes.stores.ids.isLoading} data-title="App Loading" class="space-y-4">
			<li>isLoading</li>
			<h3>Implemented internally in {@render layout_link?.()}, so it can be used, for example, in form submissions.
			It is also triggered during beforeNavigate and afterNavigate events, which can be used to show a loading indicator during page transitions.
			</h3>
			<Button onclick={toggleLoading}>Click here</Button>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import { isLoading } from '@sierra-95/svelte-scaffold';
					
					function toggleLoading() {
						isLoading.update((value) => !value);
					}
				<\/script>
			`}/>
		</section>
	
		<section id={routes.stores.ids.isLoggedIn} data-title="App Authentication" class="space-y-4">
			<li>isLoggedIn</li>
			<h3>Default value is <code>null</code></h3>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import { isLoggedIn } from '@sierra-95/svelte-scaffold';
					const {data} = $props();
					$: if (data?.user) {
						isLoggedIn.set(true);
					}
				<\/script>

				{#if $isLoggedIn}
					<p>Welcome back!</p>
				{/if}
			`}/>
		</section>

		<section id={routes.stores.ids.theme_store} data-title="Theme Store" class="space-y-4">
			<li>Theme Store</li>
			<h3>The theme store is tightly integrated with the {@render layout_link?.()} and internal body styling. 
				It is also directly manipulated by the 
				<a href={routes.core.components.children.buttons.path + '#' + routes.core.components.children.buttons.ids.theme_button} class="note">Theme Button</a>.
			</h3>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import { onMount } from 'svelte';
					import { theme } from '@sierra-95/svelte-scaffold';
					onMount(() => {
						theme.set('light');
					});
				<\/script>

			`}/>
			<h3>Note that updates made to the store are also saved to localStorage, ensuring they persist.</h3>
		</section>
	</ol>
</main>