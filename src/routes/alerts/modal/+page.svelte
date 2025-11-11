<script>
    import {modalStore,Button} from '@sierra-95/svelte-ui';
    import {RenderCode, ModalTable} from '$lib';

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
    <title>Modal</title>
    <h1 class="font-bold text-2xl">Alert Modal</h1>
    <Button onclick={triggerModal}>Click here</Button>
    <h3>Place this anywhere in your app</h3>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import { Modal } from '@sierra-95/svelte-ui';
        <\/script>

        <Modal />

    `}/>
    <h3>Trigger the Modal. Note that <strong>onCancel()</strong> is optional</h3>
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
    <ModalTable />
</main>