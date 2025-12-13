<script>
    import {modalStore,Button} from '@sierra-95/svelte-ui';
    import {RenderCode} from '$lib';
    import ModalTable from '../_table/modal.svelte';

    function triggerModal() {
        modalStore.set({
            open: true,
            title: 'Confirm Action',
            content: 'Modal has been triggered',
            confirmText: 'Confirm',
            cancelText: 'No',
            onConfirm: () => alert('Modal confirmed!'),
            onCancel: () => alert('Modal cancelled!'),
        });
    }
</script>

<main class="space-y-4">
    <title>Alert Modal</title>
    <h1>Alert Modal</h1>
    <Button onclick={triggerModal}>Click to test</Button>
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
    <h2>Plain Modal</h2>
    <img src="https://files.michaelmachohi.com/svelte-ui/modal-plain.png" alt="Plain Modal Example"/>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import { modalStore, Button } from '@sierra-95/svelte-ui';

            function triggerModal() {
                modalStore.set({
                    open: true,
                    title: 'Confirm Action',
                    content: 'Modal has been triggered',
                    confirmText: 'Confirm',
                    cancelText: 'No',
                    onConfirm: () => alert('Modal confirmed!'),
                    onCancel: () => alert('Modal cancelled!'),
                });
            }
        <\/script>

        <Button onclick={triggerModal}>Click here</Button>

    `}/>
    <h2>Dynamic Modal</h2>
    <h3>Used to render custom UI such as inputs, forms, or any arbitrary markup inside the modal.</h3>
    <img src="https://files.michaelmachohi.com/svelte-ui/modal-input.png" alt="Input Modal Example"/>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import { modalStore, Button, Input } from '@sierra-95/svelte-ui';

            let value = '';
            function triggerModal() {
                modalStore.update(m => ({
                    ...m,
                    open: true,
                    title: 'Editor',
                    onConfirm: () => {alert('Modal confirmed!')},
                    onCancel: () => alert('Modal cancelled!'),
                    render: formContent
                }));
            }
        <\/script>
        {#snippet formContent()}
            <Input label="Enter Youtube URL" id="youtube-url" bind:value={value}/>
        {/snippet}
        <Button onclick={triggerModal}>Click here</Button>

    `}/>

    <h3>Use <code class="note">modalStore.update()</code> for optional properties to keep defaults</h3>
    <ModalTable />
</main>