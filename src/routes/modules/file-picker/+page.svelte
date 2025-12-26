<script>
    import { onMount } from 'svelte';
    import {fileInputStore, resetFileInputStore, User, isLoggedIn, Button, Input, setToastMessage} from '@sierra-95/svelte-ui';
    import {RenderCode, childrenRoutes, routes} from '$lib';
    
    const r2_key = `svelte-ui/${$User.userId}`;
    onMount(()=>{
        isLoggedIn.set(true);
        User.update(user => ({ ...user, userId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479' }) );
        open();
        setToastMessage('success','Close to read the docs')
    })
    function open(){
        fileInputStore.update(store => ({ 
			...store, 
            r2_key,
			serverGetUrl: '/api/media/get',
            serverUploadUrl: '/api/media/upload',
			serverDeleteUrl: '/api/media/delete',
			uploadModalOpen: true 
		}));
    }
    function limitFilePickerMenu(){
        fileInputStore.update(store => ({ 
			...store,
			serverGetUrl: '/api/media/get',
            disabledMenuItem: ['Documents','Videos','Music'],
			uploadModalOpen: true 
		}));
    }
    let value = '';
    $: if (
		$fileInputStore.submissionComplete &&
		$fileInputStore.submissions.length > 0 &&
		$fileInputStore.uploadModalOpen === false
	) {
		const urlsToInsert = $fileInputStore.submissions.map(item => item.url);
		value += urlsToInsert.join(' ');
		resetFileInputStore();
	}
</script>

<main class="space-y-4">
	<title>File Picker</title>
	<h1>File Picker</h1>
    <h3>The file picker is a cloud solution for form filling that allows users to submit uploaded files,
        update new ones and never lose them all together.</h3>
    <h2>Getting Started</h2>
    <RenderCode
		lang="svelte"
		code={`
		<\script>
            import {fileInputStore} from '@sierra-95/svelte-ui';
        
            const r2_key = \`svelte-ui/\${$User.userId}\`;
            
            function open(){
                fileInputStore.update(store => ({ 
                    ...store, 
                    r2_key,
                    serverGetUrl: '/api/media/get',
                    serverUploadUrl: '/api/media/upload',
                    serverDeleteUrl: '/api/media/delete',
                    uploadModalOpen: true 
                }));
            }
		<\/script>
        <Button onclick={open}>Click to test</Button>
	`}/>
    <h2>Cloud</h2>
    <h3>The cloud tab displays menu items for different file categories and actual cloud media. This can be loaded from $fileInputStore.serverGetUrl endpoint.
        To display specific menu items,list them on <code>$fileInputStore.disabledMenuItem</code>.
    </h3>
    <Button onclick={limitFilePickerMenu}>Click to test</Button>
    <Input 
        id="url-input" 
        label="File URLs" 
        placeholder="Enter file URLs"
        bind:value={value}
    />

    <RenderCode
		lang="svelte"
		code={`
		<\script>
            import {User, Input, FilePicker, fileInputStore, resetFileInputStore} from '@sierra-95/svelte-ui';
            
            function limitFilePickerMenu(){
                fileInputStore.update(store => ({ 
                    ...store,
                    serverGetUrl: '/api/media/get',
                    disabledMenuItem: ['Documents','Videos','Music'],
                    uploadModalOpen: true 
                }));
            }
            let value = '';
            $: if (
                $fileInputStore.submissionComplete &&
                $fileInputStore.submissions.length > 0 &&
                $fileInputStore.uploadModalOpen === false
            ) {
                const urlsToInsert = $fileInputStore.submissions.map(item => item.url);
                value += urlsToInsert.join(' ');
                resetFileInputStore();
            }
		<\/script>
        <Button onclick={limitFilePickerMenu}>Click to test</Button>
        <Input 
            id="url-input" 
            label="File URLs" 
            placeholder="Enter file URLs"
            bind:value={value}
        />
	`}/>
    <h3>If <code>$fileInputStore.manage</code> is set to <code>true</code>, users can delete files from the cloud. Once a user starts to select files, the delete option appears.</h3>
    <h2>Upload</h2>
    <h3>Built on <a href={routes.file_uploader} class="note">File Uploader</a>, it is used to upload files to the cloud. This means you can control size and type of files to be uploaded.</h3>
    <h2>Integrating your Backend</h2>
    <h3>Use this <a href={childrenRoutes.file_picker} class="note">guide</a> to integrate your backend</h3>
</main>