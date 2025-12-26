<script>
    import { onMount } from 'svelte';
    import {Editor, editorStore, User, isLoggedIn} from '@sierra-95/svelte-ui';
    import {RenderCode, routes} from '$lib';
    
    let content = {};
    const r2_key = `svelte-ui/${$User.userId}`;
    onMount(()=>{
        isLoggedIn.set(true);
        User.update(user => ({ ...user, userId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479' }) );
        editorStore.update(store => {
            store.r2_key = r2_key;
            store.serverGetUrl = '/api/media/get';
            store.serverUploadUrl = '/api/media/upload';
            store.serverDeleteUrl = '/api/media/delete';
            return store;
        });
    })
</script>

<main class="space-y-4">
	<title>Editor</title>
	<h1>Editor</h1>
    <Editor bind:content/>
        <RenderCode
		lang="svelte"
		code={`
		<\script>
            import {Editor} from '@sierra-95/svelte-ui';
            let content = {};
		<\/script>
        <Editor bind:content/>
	`}/>
    <h2>Inserting Files</h2>
    <h3>The editor primarily uses
        <a href={routes.file_picker} class="note">File Picker</a>
        to handle file uploads and insertions.
    </h3>
    <h2>Storage Solutions</h2>
    <h3>The
        <a href={routes.file_picker} class="note">File Picker</a>
        was primarily built to use Cloudflare R2 as a backend storage solution.
        If you wish to use a different storage solution, you can ignore <code>store.r2_key</code>
    </h3>
    <RenderCode
		lang="svelte"
		code={`
		<\script>
            import { onMount } from 'svelte';
            import {Editor, editorStore, User} from '@sierra-95/svelte-ui';
            
            let content = {};
            const r2_key = \`svelte-ui/\${$User.userId}\`;
            
            // Configure the editor store for File Picker handling
            onMount(()=>{
                editorStore.update(store => {
                    store.r2_key = r2_key;
                    store.serverGetUrl = '/api/media/get';
                    store.serverUploadUrl = '/api/media/upload';
                    store.serverDeleteUrl = '/api/media/delete';
                    return store;
                });
            })
		<\/script>

	`}/>
</main>