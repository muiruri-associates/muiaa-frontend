import { ROLE } from './../../constants/roles';

const menu = [{
        heading: 'Menus'
    },
    {
        icon: 'grid-alt',
        text: 'Dashboard',
        active: true,
        link: '/',
        roles: [ROLE.Admin, ROLE.Lender, ROLE.User]
    },
    {
        icon: 'user',
        text: 'My Account',
        active: false,
        roles: [ROLE.User],
        subMenu: [{
            text: 'Uploads',
            link: '/uploads',
        }, ]
    },
    {
        icon: 'tranx',
        text: 'Transactions',
        active: false,
        link: '/transactions',
        roles: [ROLE.User],
    },
    {
        icon: 'users',
        text: 'Users',
        active: false,
        link: '/users',
        roles: [ROLE.Admin]
    },
    {
        icon: 'file-docs',
        text: 'Leads',
        active: false,
        link: '/leads',
        roles: [ROLE.Lender],
    },
    {
        icon: 'file-docs',
        text: 'Loans',
        active: false,
        link: '/borrower-loans',
        roles: [ROLE.User],
        subMenu: [{
                text: 'Requested Loans',
                link: '/requested-loans',
                roles: [ROLE.User],
            },
            {
                text: 'Approved Loans',
                link: '/approved-loans',
                roles: [ROLE.User],
            },
            {
                text: 'Rejected Loans',
                link: '/rejected-loans',
                roles: [ROLE.User],
            },
            {
                text: 'Contact Lender',
                link: '/contact-lender',
                roles: [ROLE.User],
            },
        ]
    },
    {
        icon: 'users',
        text: 'My Leads',
        active: false,
        link: '/my-leads',
        roles: [ROLE.Lender]
    },
    {
        icon: 'tranx',
        text: 'Lenders',
        active: false,
        roles: [ROLE.Admin],
        subMenu: [{
                text: 'Lender Organizations',
                link: '/lender-organizations',
            },
            {
                text: 'Lender Users',
                link: '/lender-users',
            }
        ]
    },
    {
        icon: 'coins',
        text: 'Loan Applications',
        active: false,
        roles: [ROLE.Admin],
        subMenu: [{
                text: 'Personal Loans',
                link: '/personal-loans',
            },
            {
                text: 'Business Loans',
                link: '/business-loans',
            },
            {
                text: 'Mortgage',
                link: '/mortgage',
            }
        ]
    },
    {
        icon: 'file-docs',
        text: 'Access Controls',
        active: false,
        roles: [ROLE.Admin],
        subMenu: [{
                text: 'Roles',
                link: '/roles',
            },
            {
                text: 'Permissions',
                link: '/permissions',
            }
        ]
    },
    {
        heading: 'Support',
    },
    {
        icon: 'call',
        text: 'Contact Borrowers',
        active: false,
        link: '/contact-user',
        roles: [ROLE.Lender],
    },
    {
        icon: 'ticket',
        text: 'Tickets',
        active: false,
        link: '/my-tickets',
        roles: [ROLE.Lender],
    },
    {
        icon: 'ticket',
        text: 'All Tickets',
        active: false,
        link: '/all-tickets',
        roles: [ROLE.Admin],
    },
];

export default menu;