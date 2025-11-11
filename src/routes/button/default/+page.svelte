<script lang="ts">
	import {Button} from '@sierra-95/svelte-ui'
	import {RenderCode, ButtonDefaultTable} from '$lib';
	const contained_buttons = [
		{ color: 'primary', title: 'Primary contained' },
		{ color: 'warning', title: 'Warning contained' },
		{ color: 'error', title: 'Error contained' }
	] as const;
	const outlined_buttons = [
		{ color: 'primary', title: 'Primary outlined' },
		{ color: 'warning', title: 'Warning outlined' },
		{ color: 'error', title: 'Error outlined' }
	] as const;
</script>

<main class="space-y-4">
	<title>Default Buttons</title>
	<h1 class="font-bold text-2xl">Default Buttons</h1>
	<div class="flex gap-4 flex-wrap">
	{#each contained_buttons as { color, title }}
		<Button variant="contained" color={color} title={title}>Button</Button>
	{/each}
	{#each outlined_buttons as { color, title }}
		<Button variant="outlined" color={color} title={title}>Button</Button>
	{/each}
		<Button variant="contained"  isLoading title="Loading">Button</Button>
		<Button variant='contained' disabled title="Disabled">Button</Button>
		<Button pill variant='outlined' title="Pill"><i class="fa fa-chevron-right"></i></Button>
	</div>
	<RenderCode
		lang="svelte"
		code={`
		<\script>
			import { Button } from '@sierra-95/svelte-ui';
		<\/script>

		<Button onclick={() => alert('Button clicked!')}>
			Click Me
		</Button>
		
	`}/>
	<div class='flex flex-col gap-2'>
		<h3>You may also customize it using Tailwind via the <strong>style</strong> prop.</h3>
		<RenderCode
			lang="svelte"
			code={`
			<\script>
				import { enhance } from '$app/forms';
				import { Button } from '@sierra-95/svelte-ui';
				
				let processing = false;
				let success = false;
				function handleEnhance({formData, cancel}) {
					processing = true;
					return ({ update, result }) => {
						processing = false;
						if(result.type === 'success' && result.data){
							success = true;
						}else{
							update();
						}
					};
				}
			<\/script>
			<form method="post" use:enhance={handleEnhance}>
				<Button 
					title="Submit Form"
					type="submit" 
					style="w-[150px]"
					isLoading={processing}
					disabled={success}
				>Submit
				</Button>
			</form>
		`}/>
	</div>
	<div class='overflow-x-auto'><ButtonDefaultTable/></div>
</main>
