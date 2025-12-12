<script>
    import {UserMenu, MenuItem} from '@sierra-95/svelte-ui'
	import {RenderCode, UserMenuTable} from '$lib';
    let open = $state(true);

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
    <h1>User Menu</h1>
    <UserMenu bind:open bind:user>
        <MenuItem onclick={handleProfile} icon="fa-user">Profile</MenuItem>
		<MenuItem onclick={handleLogout} icon="fa-right-from-bracket">Logout</MenuItem>
    </UserMenu>
    {#if open}
        <div class="h-[250px]"></div>
    {/if}
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import {UserMenu, MenuItem} from '@sierra-95/svelte-ui

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
            
        <!--By default, UserMenu dropdown is absolute left of the parent
        If you need it on the right, set absolute='right'
        Like the example below-->
        <!--This is usefull if you need usermenu on the right,
        but dropdown on its left--> 
    `}/>
    <UserMenuTable />
</main>