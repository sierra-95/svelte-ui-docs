<script>
    import { onMount } from 'svelte';
    import { FileInput, fileInputStore, resetFileInputStore} from '@sierra-95/svelte-ui';
    import {RenderCode, routes} from '$lib';
    
    let processing = false; 

    function handleUpload(){
        processing = true;
        const files = $fileInputStore.selectedFiles;
        //process the files here
        processing = false;
        resetFileInputStore();
    }

    onMount(() => {
        fileInputStore.update(store => {
            store.sizeConstraint = 5 * 1024 * 1024;
            store.uploadType = ['image','video','audio','pdf'];
            return store;
        });
    });
</script>

<main class="space-y-4">
    <title>File Uploader</title>
    <h1>File Uploader</h1>
    <FileInput bind:processing onclick={handleUpload}  />
    <h3>Incase any errors occur during upload, the
        <a href={routes.core.children.alerts.toast} class="note">Toast</a>
        component will display it. Ensure its imported and added to your root layout.
    </h3>
    <h3>
        If you are using the
        <a href={routes.modules.layout.children.overview} class="note">Layout</a> module,
        the <code>Toast</code> component is included by default.
    </h3>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import { onMount } from 'svelte';
            import { FileInput, fileInputStore, resetFileInputStore} from '@sierra-95/svelte-ui';
        
            let processing = false; 

            function handleUpload(){
                processing = true;
                const files = $fileInputStore.selectedFiles;
                //process the files here
                processing = false;
                resetFileInputStore();
            }

            // uploadType: Array<'image' | 'audio' | 'video' | 'pdf'>;
            onMount(() => {
                fileInputStore.update(store => {
                    store.sizeConstraint = 5 * 1024 * 1024; // 5 MB
                    store.uploadType = ['image','video','audio','pdf'];
                    return store;
                });
            });
        <\/script>
        <FileInput bind:processing onclick={handleUpload}  />
    `}/>
</main>