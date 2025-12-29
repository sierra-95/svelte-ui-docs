<script lang="ts">
	import {Input, PasswordInput} from '@sierra-95/svelte-scaffold';
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
		bind:value={email}
	/>
	<RenderCode
		lang="svelte"
		code={`
		<\script>
			import { Input } from '@sierra-95/svelte-scaffold';
			let email = '';
		<\/script>
		<!-- id == name == label_for -->
		<!-- type: default=text, options: text, number, email, tel, url  etc-->
		<Input 
			id="email" 
			type="email" 
			label="Email Address" 
			placeholder="Enter your email"
			bind:value={email}
		/>
		
	`}/>
	<PasswordInput
		id="password" 
		label="Password" 
		placeholder="Enter your password"
		bind:value={password} 
	/>
	<RenderCode
		lang="svelte"
		code={`
		<\script>
			import { PasswordInput } from '@sierra-95/svelte-scaffold';
			let password = '';
		<\/script>

		<!-- id == name == label_for -->
		<PasswordInput
			id="password" 
			label="Password" 
			placeholder="Enter your password"
			bind:value={password} 
		/>
		
	`}/>
</main>