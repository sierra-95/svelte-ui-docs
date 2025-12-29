<script>
    import {UserMenu, MenuItem, DropdownContainer} from '@sierra-95/svelte-scaffold';
	import {RenderCode} from '$lib';
    import UserMenuTable from './_table/userMenu.svelte';


    let openDropdown = $state(true);
    let openUserMenu = $state(true);

    let user = $state({
        name: 'John Doe',
        email: 'john.doe@example.com'
    });

    function handleProfile(){
        alert('Profile clicked');
    }
    function handleLogout(){
        alert('Logged out');
    }
</script>

<main class="space-y-4">
    <title>User Menu</title>
    <h1>Dropdown Menu</h1>
    <p>
        The dropdown container lets you build any dropdown menu quickly.
        It only requires a trigger element (such as a button or icon)
        and the content to be displayed inside the dropdown.
    </p>
    <DropdownContainer bind:open={openDropdown}>
        {#snippet dropdownTrigger()}
            <button class="w-10 cursor-pointer" aria-label="Ellipsis" onclick={() => (openDropdown = !openDropdown)}>
                <i class="fa-solid fa-ellipsis-v"></i>
            </button>
        {/snippet}
        <MenuItem>New Tab</MenuItem>
        <MenuItem>More Tools</MenuItem>
        <MenuItem>Settings</MenuItem>
    </DropdownContainer>
    {#if openDropdown}
        <div class="h-[150px]"></div>
    {/if}

        <RenderCode
        lang="svelte"
        code={`
        <\script>
            import {DropdownContainer, MenuItem} from '@sierra-95/svelte-scaffold'
            
            let openDropdown = $state(true);
        <\/script>
        
        <!-- Default top=130% width=auto open=$bindable(true) -->
        <DropdownContainer bind:open={openDropdown}>
            {#snippet dropdownTrigger()}
                <button class="w-10 cursor-pointer" aria-label="Ellipsis" onclick={() => (openDropdown = !openDropdown)}>
                    <i class="fa-solid fa-ellipsis-v"></i>
                </button>
            {/snippet}
            <MenuItem>New Tab</MenuItem>
            <MenuItem>More Tools</MenuItem>
            <MenuItem>Settings</MenuItem>
        </DropdownContainer>  
    `}/>

    <h1>User Menu</h1>
    <UserMenu bind:open={openUserMenu} bind:user>
        <MenuItem onclick={handleProfile} icon="fa-user">Profile</MenuItem>
		<MenuItem onclick={handleLogout} icon="fa-right-from-bracket">Logout</MenuItem>
    </UserMenu>
    {#if openUserMenu}
        <div class="h-[200px]"></div>
    {/if}
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import {UserMenu, MenuItem} from '@sierra-95/svelte-scaffold'

            let user = {
                name: 'John Doe',
                email: 'john.doe@example.com'
            };

            function handleProfile(){
                alert('Profile clicked');
            }
            function handleLogout(){
                alert('Logged out');
            }
        <\/script>
        
        <UserMenu bind:user>
            <MenuItem onclick={handleProfile} icon="fa-user">Profile</MenuItem>
            <MenuItem onclick={handleLogout} icon="fa-right-from-bracket">Logout</MenuItem>
        </UserMenu>   
    `}/>
    <UserMenuTable />
</main>