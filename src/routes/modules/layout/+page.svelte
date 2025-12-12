<script>
    import {RenderCode, routes} from '$lib';
</script>

<main class="space-y-4">
	<title>Layout Menu</title>
	<h1>Layout Menu</h1>
	<h3>The layout menu is a prebuilt interface with header, menu, application entry point and theme support.
        It’s designed to save developers time on setup so they can focus on real development work.
    </h3>
    <img src="https://files.michaelmachohi.com/svelte-ui/light-theme-layout.png" alt="Light Theme Layout" />
    <img src="https://files.michaelmachohi.com/svelte-ui/dark-theme-layout.png" alt="Dark Theme Layout" />
	<h2>Getting Started</h2>
    <h3>Define a sections file. The contents will be mapped to the Layout Menu.</h3>
	<ol class="list-decimal list-inside space-y-2">
        <li>Labels are used to classify routes that fall under a category. Leave empty if a route is independent</li>
        <li>A <strong>hr</strong> is automatically added after category name if label is included.</li>
        <li>The prefered icons are from <a href="https://fontawesome.com/v4/" target="_blank" class="note">https://fontawesome.com/</a> as they work well with <a href={routes.theme_stores} class="underline note">Themes</a>.</li>
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
			import {Layout, ButtonTheme} from '@sierra-95/svelte-ui'
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
    <h2>More header content ?</h2>
    <h3>The header can carry much more content, including searchbars, theme switchers, and more.</h3>
        <RenderCode
		lang="svelte"
		code={`
		<\script>
			import {Layout, ButtonTheme, UserMenu} from '@sierra-95/svelte-ui'
            import {sections} from './sections.js';

            let { children } = $props();
		<\/script>
        <Layout 
            headerTitle = 'Brand Name'
            {sections}
            contentCenter
        >
            {#snippet headerContent()}
                <div class="flex items-center gap-4 mr-4">
                    <ButtonTheme />
                    <UserMenu absolute='right' />
                </div>
            {/snippet}
            {@render children()} 
        </Layout>

	`}/>
</main>