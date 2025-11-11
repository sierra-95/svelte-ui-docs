<script>
    import { onMount, onDestroy } from 'svelte';
    import {setDispatchMessage,clearDispatchMessage, Button} from '@sierra-95/svelte-ui'
    import {RenderCode, DispatchTable} from '$lib';
    onMount(() => {
        setDispatchMessage(
            'error', 
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', 
            6000, 
            true
        );
    });
    onDestroy(() => {
        clearDispatchMessage();
    });
    function triggerDispatch(){
        setDispatchMessage('success', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.');
    }
</script>

<main class="space-y-4">
    <title>Dispatch</title>
    <h1>Dispatch</h1>
    <Button onclick={triggerDispatch}>Click here</Button>
    <h3>Place this anywhere in your app</h3>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import { Dispatch } from '@sierra-95/svelte-ui';
        <\/script>

        <Dispatch />

    `}/>
    <h2>Timed message dispatch</h2>
    <h3>Default timeout is <strong>6 seconds</strong></h3>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import {setDispatchMessage, Button} from '@sierra-95/svelte-ui';

            function triggerDispatch(){
                setDispatchMessage('success', 'Dispatch Triggered');
            }
        <\/script>

        <Button onclick={triggerDispatch}>Click here</Button>

    `}/>

    <h2>Persistent message dispatch</h2>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import { onMount, onDestroy } from 'svelte';
            import {setDispatchMessage,clearDispatchMessage} from '@sierra-95/svelte-ui';

            setDispatchMessage(
                'success', 
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', 
                6000, 
                true
            );
            onDestroy(() => {
                clearDispatchMessage();
            });
        <\/script>

    `}/>
    <DispatchTable />
</main>