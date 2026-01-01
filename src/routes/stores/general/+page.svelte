<script>
    import {isLoading, Button} from '@sierra-95/svelte-scaffold';
    import {RenderCode} from '$lib';

    function toggleLoading() {
        isLoading.update((value) => !value);
    }
</script>

<main class="space-y-4">
	<title>General Stores</title>
	<h1>General Stores</h1>
	<h3><strong>@sierra-95/svelte-scaffold</strong> offers a variety of store components for managing state in your Svelte applications.</h3>
	<h2>isMobile (768px)</h2>
	<RenderCode
		lang="svelte"
		code={`
		<\script>
			import { isMobile } from '@sierra-95/svelte-scaffold';
			
			let isMenuOpen = $state(false);
			$effect(() => {
				if ($isMobile) isMenuOpen = false;
			});
		<\/script>

	`}/>
	<h2>isLoading</h2>
	<Button onclick={toggleLoading}>Click here</Button>
	<RenderCode
		lang="svelte"
		code={`
		<\script>
			import { isLoading, LinearProgress, Button } from '@sierra-95/svelte-scaffold';
			
			function toggleLoading() {
				isLoading.update((value) => !value);
			}
		<\/script>

		{#if $isLoading}
			<LinearProgress />
		{/if}

		<Button onclick={toggleLoading}>Click here</Button>

	`}/>
	<h2>isLoggedIn</h2>
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
</main>