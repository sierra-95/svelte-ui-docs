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
    toast: `${alerts}/toast`,

    date: `${core}/date`,
    file_uploader: `${core}/file-uploader`,


    // ################Modules################    
    layout: `${modules}/layout`,
    file_picker: `${modules}/file-picker`,
    editor: `${modules}/editor`,

    // ################Stores################ 
    general_stores: `${stores}/general`,
    theme_stores: `${stores}/theme`,
    user_stores: `${stores}/user`,
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
                path: routes.date, 
                label: 'Date', 
                icon: 'fa fa-calendar',
            },
            { 
                path: routes.file_uploader, 
                label: 'File Uploader', 
                icon: 'fa fa-upload',
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
                path: routes.toast, 
                label: 'Toast',
                icon: 'fa fa-info-circle' ,
            },
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
            { 
                path: routes.user_stores, 
                label: 'User',
                icon: 'fa fa-user-o' ,
            },
        ]
    },
    {
        label: 'Modules',
        items: [
            { 
                path: routes.editor, 
                label: 'Editor',
                icon: 'fa fa-pencil-square-o' ,
            },
            { 
                path: routes.file_picker, 
                label: 'File Picker',
                icon: 'fa fa-cloud-upload' ,
            },
            { 
                path: routes.layout, 
                label: 'Layout',
                icon: 'fa fa-rocket' ,
            },
        ]
    },
];