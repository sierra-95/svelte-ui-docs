<script>
    import {modalStore,Button, Input} from '@sierra-95/svelte-ui';
    import {RenderCode} from '$lib';
    import ModalTable from '../_table/modal.svelte';

    let value = '';
    function triggerPlainModal() {
        modalStore.set({
            open: true,
            title: 'Confirm Action',
            content: 'Modal has been triggered',
            confirmText: 'Accept',
            cancelText: 'Decline',
            onConfirm: () => alert('Modal confirmed!'),
            onCancel: () => alert('Modal cancelled!'),
        });
    }

    function Submit(){}
    
    function triggerDynamicModal() {
        modalStore.update(m => ({
            ...m,
            open: true,
            title: 'Editor',
            onConfirm: () => {
                Submit();
            },
            onCancel: () => { value = ''},
            render: formContent
        }));
    }
</script>

{#snippet formContent()}
    <Input label="Enter Youtube URL" id="youtube-url" bind:value={value}/>
{/snippet}
<main class="space-y-4">
    <title>Alert Modal</title>
    <h1>Alert Modal</h1>
    <h2>Getting Started</h2>
    <h3>Place this anywhere in your app</h3>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import { Modal } from '@sierra-95/svelte-ui';
        <\/script>

        <Modal />

    `}/>
    <h2>Static Mode</h2>
    <Button onclick={triggerPlainModal}>Click to test</Button>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import { modalStore, Button } from '@sierra-95/svelte-ui';

            function triggerPlainModal() {
                modalStore.set({
                    open: true,
                    title: 'Confirm Action',
                    content: 'Modal has been triggered',
                    confirmText: 'Accept',
                    cancelText: 'Decline',
                    onConfirm: () => alert('Modal confirmed!'),
                    onCancel: () => alert('Modal cancelled!'),
                });
            }
        <\/script>

        <Button onclick={triggerPlainModal}>Click here</Button>

    `}/>
    <h2>Dynamic Mode</h2>
    <h3>Used to render custom UI such as inputs, forms, or any arbitrary markup inside the modal.</h3>
    <Button onclick={triggerDynamicModal}>Click to test</Button>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import { modalStore, Button, Input } from '@sierra-95/svelte-ui';

            let value = '';
            function Submit(){}
    
            function triggerDynamicModal() {
                modalStore.update(m => ({
                    ...m,
                    open: true,
                    title: 'Editor',
                    onConfirm: () => {
                        Submit();
                    },
                    onCancel: () => { value = ''},
                    render: formContent
                }));
            }
        <\/script>
        {#snippet formContent()}
            <Input label="Enter Youtube URL" id="youtube-url" bind:value={value}/>
        {/snippet}
        <Button onclick={triggerPlainModal}>Click here</Button>

    `}/>

    <h3>Use <code class="note">modalStore.update()</code> for optional properties to keep defaults</h3>
    <ModalTable />
</main>