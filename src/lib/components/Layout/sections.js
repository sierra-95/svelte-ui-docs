const core = `/core`;
const modules = `/modules`;
const stores = `/stores`;

const alerts = `${core}/alerts`;

export const routes = {
    installation: '/',
    
    // ################Core################

    buttons: `${core}/buttons`,
    progress: `${core}/progress`,
    inputs: `${core}/inputs`,
    Menus: `${core}/menus`,

    modal: `${alerts}/modal`,
    dispatch: `${alerts}/dispatch`,
    maintenance: `${alerts}/maintenance`,


    // ################Modules################    
    layout_menu: `${modules}/layout`,
    user_menu: `${modules}/user`,

    // ################Stores################ 
    general_stores: `${stores}/general`,
    theme_stores: `${stores}/theme`,
};

export const sections = [
    {
        label: 'Getting Started',
        items: [
            { 
                path: routes.installation, 
                label: 'Installation', 
                 icon: 'fa fa-download' 
            },
        ]
    },
    {
        label: 'Core',
        items: [
            { 
                path: routes.buttons, 
                label: 'Buttons', 
                icon: 'fa fa-toggle-off',
            },
            { 
                path: routes.dispatch, 
                label: 'Dispatch',
                icon: 'fa fa-commenting' ,
            },
            { 
                path: routes.inputs, 
                label: 'Inputs', 
                icon: 'fa fa-keyboard-o',
            },
            { 
                path: routes.Menus, 
                label: 'Menus',
                icon: 'fa fa-bars' ,
            },
            { 
                path: routes.modal, 
                label: 'Modal',
                icon: 'fa fa-exclamation-triangle' ,
            },
            { 
                path: routes.progress,
                label: 'Progress', 
                icon: 'fa fa-spinner',
            },
            { 
                path: routes.maintenance, 
                label: 'Site Under Maintenance',
                icon: 'fa fa-firefox' ,
            }
        ]
    },
    {
        label: 'Stores',
        items: [
            { 
                path: routes.general_stores, 
                label: 'General',
                icon: 'fa fa-store' ,
            },
            { 
                path: routes.theme_stores, 
                label: 'Theme',
                icon: 'fa fa-moon-o' ,
            },
        ]
    },
    {
        label: 'Modules',
        items: [
            { 
                path: routes.layout_menu, 
                label: 'Layout',
                icon: 'fa fa-bars' ,
            },
        ]
    },
];