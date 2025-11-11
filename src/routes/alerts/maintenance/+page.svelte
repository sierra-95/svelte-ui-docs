<script lang="ts">
    import { goto } from '$app/navigation';
	import {Button} from '@sierra-95/svelte-ui'
	import {RenderCode} from '$lib';
    function navigate(){
        goto('/maintenance/example');
    }
</script>

<main class="space-y-4">
	<title>maintenance</title>
	<h1>Site under Maintenance</h1>
	<Button onclick={navigate}>Go to Maintenance Page</Button>
	<RenderCode
		lang="svelte"
		code={`
		<\script>
			import { SiteUnderMaintenance} from '@sierra-95/svelte-ui';
		<\/script>

		<SiteUnderMaintenance email="me@michaelmachohi.com"/>

	`}/>
</main>