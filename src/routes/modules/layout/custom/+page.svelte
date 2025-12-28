<script>
    import {RenderCode, routes} from '$lib';
</script>
<main class="space-y-4">
    <title>Customize</title>
    <h1>Customize the Layout</h1>
    <h2>More header content ?</h2>
    <h3>The header can carry much more content, including searchbars, theme switchers, and more.</h3>
        <RenderCode
        lang="svelte"
        code={`
        <\script>
            import {Layout, ButtonTheme} from '@sierra-95/svelte-ui'
            import {sections} from './sections.js';

            let { children } = $props();
        <\/script>
        <Layout 
            headerTitle = 'Brand Name'
            {sections}
            contentCenter
        >
            {#snippet headerContent()}
                <div class=" mr-4">
                    <ButtonTheme />
                </div>
            {/snippet}
            {@render children()} 
        </Layout>

    `}/>
</main>