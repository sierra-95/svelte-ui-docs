<script>
    import {ButtonFlip, ButtonMarquee, ButtonSwipe} from '@sierra-95/svelte-ui'
    import {RenderCode, ButtonCustomTable} from '$lib';
</script>

<main class="space-y-4">
    <title>Custom Buttons</title>
    <h1>Custom Buttons</h1>
    <div class="flex gap-4 items-center">
        <ButtonSwipe />
        <ButtonMarquee/>
        <ButtonFlip />
    </div>    
    <h3>These buttons are not built to be as flexible compared to default buttons.</h3>
    <ol class="list-decimal pl-5">
        <li>They don’t support <code>on:click()</code> or aliases, since they are built with <code>&lt;a&gt;</code> tags.</li>
        <li>They are designed to be used as-is, with minimal customization options.</li>
        <li>All have fixed dimensions (w × h), with <strong>Marquee</strong> as the exception. Marquee automatically adjusts its width based on text length.</li>
    </ol>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import { ButtonMarquee } from '@sierra-95/svelte-ui';
        <\/script>

        <ButtonMarquee text='Sign In' link='/auth' bg='red' color = 'blue'  />

    `}/>
    <ButtonCustomTable/>
</main>