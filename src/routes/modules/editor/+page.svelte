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
    <h2>Saving & Loading Content</h2>
    <h3>
        After typing and clicking save, the JSON content and any images used in the editor will be stored in the <code>content</code> variable.
    </h3>
    <h3>
        The <code>content</code> variable can also be used to load previously saved content. 
        The JSON content is important because it preserves all styling and content from the editor, and can be saved in a database.
    </h3>
    <h2>Read only</h2>
    <h3>To read content created in this editor, use <code>readOnly</code> mode</h3>
    <RenderCode
		lang="svelte"
		code={`
		<\script>
            import {Editor} from '@sierra-95/svelte-ui';
            export let data;
            let content = data.content; // Load previously saved content
		<\/script>
        <Editor readOnly bind:content/>
	`}/>
    <h2>Inserting Images</h2>
    <h3>A storage solution is required to store images to be used by the editor, as it only uses url's</h3>
    <h3>The editor primarily uses
        <a href={routes.file_picker} class="note">File Picker</a>
        to handle image uploads and insertions.
    If you wish to use a different storage solution, an input has been provided to key in image URLs manually.</h3>
    <h2>Storage Solutions</h2>
    <h3>The
        <a href={routes.file_picker} class="note">File Picker</a>
        runs on Cloudflare R2 as a backend storage solution.
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