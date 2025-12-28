<script>
	import { onMount } from 'svelte';
    import {User, resetUserStore} from '@sierra-95/svelte-ui';
    import {RenderCode, routes} from '$lib';

	onMount(() => {
		User.update(store => {
			store.firstName = 'John';
			store.lastName = 'Doe';
			store.email = 'john.doe@example.com';
			store.phone = '+1-555-123-4567';
			return store;
		});
		User.update(store => {
			store.userId = 'random-uuid-1234-5678';
			return store;
		});
	});

	function logout() {
		resetUserStore();
	}
</script>

<main class="space-y-4">
	<title>User Store</title>
	<h1>User Store</h1>
	<h3>This store is used by most components to manage user-related data including the  
        <a href={routes.Menus} class="note">UserMenu component</a> 
    </h3>
    <RenderCode
		lang="svelte"
		code={`
		<\script>
			import { onMount } from 'svelte';
	        import {User, resetUserStore} from '@sierra-95/svelte-ui';

			onMount(() => {
				User.update(store => {
					store.firstName = 'John';
					store.lastName = 'Doe';
					store.email = 'john.doe@example.com';
					store.phone = '+1-555-123-4567';
					return store;
				});
			});

			function logout() {
				resetUserStore();
			}
		<\/script>
	`}/>
	<h2>$User.userId</h2>
	<h3>
		On mount, the application checks whether local storage contains a <code>anonymous_id</code>.
		If it exists, the User store is updated with this value.</h3>
	<h3>If it doesn't exist and  your not logged in (<a href={routes.general_stores} class="note">isLoggedIn</a> is false), a new user id is generated using <code>crypto.randomUUID()</code>.
		The User store and local storage is then updated with the newly created value.
	</h3>
	<h3>If you're logged in, manually update <code>$User.userId</code> accordingly.</h3>

	<h2>Compulsory $User.userId?</h2>
	<h3>Here are some modules that rely on $User.userId</h3>
    <ul class="list-disc list-inside space-y-2">
        <li><a href={routes.editor} class="note">Editor</a></li>
        <li><a href={routes.file_picker} class="note">File Picker</a></li>
    </ul>
</main>