const buttons = `/button`;
const stores = `/stores`;
const menus = `/menus`;
const alerts = `/alerts`;

export const routes = {
    installation: '/',
    // Buttons
    default_button: `${buttons}/default`,
    custom_button: `${buttons}/custom`,
    //menus
    layout_menu: `${menus}/layout`,
    user_menu: `${menus}/user`,
    //stores
    general_stores: `${stores}/general`,
    theme_stores: `${stores}/theme`,
    //alerts
    modal: `${alerts}/modal`,
    dispatch: `${alerts}/dispatch`,
    maintenance: `${alerts}/maintenance`,
    //others
    progress: `/progress`,
    inputs: `/inputs`,
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
        label: 'Buttons',
        items: [
            { 
                path: routes.default_button, 
                label: 'Default', 
                icon: 'fa fa-toggle-off',
            },
            { 
                path: routes.custom_button,
                label: 'Custom', 
                icon: 'fa fa-toggle-on',
            }
        ]
    },
    {
        label: 'Progress',
        items: [
            { 
                path: routes.progress,
                label: 'Progress', 
                icon: 'fa fa-spinner',
            },
        ]
    },
    {
        label: 'Inputs',
        items: [
            { 
                path: routes.inputs, 
                label: 'Inputs', 
                icon: 'fa fa-keyboard-o',
            }
        ]
    },
    {
        label: 'Menus',
        items: [
            { 
                path: routes.layout_menu, 
                label: 'Layout',
                icon: 'fa fa-bars' ,
            },
            { 
                path: routes.user_menu, 
                label: 'User',
                icon: 'fa fa-user' ,
            },
        ]
    },
    {
        label: 'Alerts',
        items: [
            { 
                path: routes.dispatch, 
                label: 'Dispatch',
                icon: 'fa fa-commenting' ,
            },
            { 
                path: routes.modal, 
                label: 'Modal',
                icon: 'fa fa-exclamation-triangle' ,
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
];