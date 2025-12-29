<script lang="ts">
	import {CircularProgress, LinearProgress} from '@sierra-95/svelte-scaffold';
	import {RenderCode} from '$lib';
</script>

<main class="space-y-4">
	<title>Progress</title>
	<h1>Progress</h1>
	<h2 class="font-bold text-2xl">Circular Progress</h2>
	<CircularProgress/>
	<RenderCode
		lang="svelte"
		code={`
		<\script>
			import { CircularProgress } from '@sierra-95/svelte-scaffold';
		<\/script>

		<CircularProgress />

	`}/>
	<h2 class="font-bold text-2xl">Linear Progress</h2>
	<LinearProgress/>
	<RenderCode
		lang="svelte"
		code={`
		<\script>
			import { LinearProgress } from '@sierra-95/svelte-scaffold';
		<\/script>

		<LinearProgress />
		
	`}/>
</main>