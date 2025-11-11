<script lang="ts">
	import {Input, PasswordInput} from '@sierra-95/svelte-ui';
	import {RenderCode} from '$lib';
	let email = '';
	let password = '';
</script>

<main class="space-y-4">
	<title>Inputs</title>
	<h1 class="font-bold text-2xl">Inputs</h1>
	<Input 
		id="email" 
		type="email" 
		label="Email Address" 
		placeholder="Enter your email"
		value={email} 
	/>
	<RenderCode
		lang="svelte"
		code={`
		<\script>
			import { Input } from '@sierra-95/svelte-ui';
			let email = '';
		<\/script>

		<Input 
			id="email" 
			type="email" 
			label="Email Address" 
			placeholder="Enter your email"
			value={email} 
		/>
		
	`}/>
	<PasswordInput
		id="password" 
		label="Password" 
		placeholder="Enter your password"
		value={password} 
	/>
	<RenderCode
		lang="svelte"
		code={`
		<\script>
			import { PasswordInput } from '@sierra-95/svelte-ui';
			let password = '';
		<\/script>

		<PasswordInput
			id="password" 
			label="Password" 
			placeholder="Enter your password"
			value={password} 
		/>
		
	`}/>
</main>