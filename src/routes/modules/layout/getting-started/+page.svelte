<script>
    import {RenderCode, routes} from '$lib';
</script>

<main class="space-y-4">
    <title>Getting Started</title>
    <h1>Getting Started</h1>
    <h3>Define a sections file. The contents will be mapped to the Layout.</h3>
    <ol class="list-decimal list-inside space-y-2">
        <li>Labels are used to classify routes that fall under a category. Leave empty if a route is independent</li>
        <li>A <strong>hr</strong> is automatically added after category name if label is included.</li>
        <li>The prefered icons are from <a href="https://fontawesome.com/v4/" target="_blank" class="note">https://fontawesome.com/</a> as they work well with <a href={routes.stores.theme_stores} class="underline note">Themes</a>.</li>
    </ol>
    <RenderCode
        lang="javascript"
        code={`
        const account = '/account';
        const routes = {
            home: '/home',
            profile: \`\${account}/profile\`,
            security: \`\${account}/security\`,
        };

        export const sections = [
            {
                label: '',
                items: [
                    { path: routes.home, label: 'Home',  icon: 'fa fa-home' }
                ]
            },
            {
                label: 'Account',
                items: [
                    { 
                        path: routes.profile, 
                        label: 'Profile', 
                        icon: 'fa fa-user',
                    },
                    { 
                        path: routes.security,
                        label: 'Security', 
                        icon: 'fa fa-lock',
                    }
                ]
            },
        ];

    `}/>
    <h3>Import the sections file and layout component in a <strong>+layout.svelte</strong> file.</h3>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import {Layout, ButtonTheme} from '@sierra-95/svelte-scaffold'
            import {sections} from './sections.js';
            
            let { children } = $props();
        <\/script>
        <Layout 
            headerTitle = 'Brand Name'
            headerLink = '/'
            headerImage = 'https://example.com/logo.ico'
            headerImageSize = '35px'
            {sections}
        >{@render children()} 
        </Layout>

    `}/>
    <h3>And thats it!</h3>
</main>