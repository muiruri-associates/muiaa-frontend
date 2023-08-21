import { ROLE } from './../../constants/auth';

const menu = [
  {
    heading: 'Menus'
  },
  {
    icon: 'grid-alt',
    text: 'Dashboard',
    active: true,
    link: '/',
    roles: [ROLE.Admin, ROLE.Lender]  // Define the roles that are allowed to see this menu item
  },
  {
    icon: 'users',
    text: 'Users',
    active: false,
    link: '/users',
    roles: [ROLE.Admin]  // Example: Only users with 'admin' role can see this menu item
  },
  {
    icon: 'file-docs',
    text: 'Loans',
    active: false,
    link: '/loans',
    roles: [ROLE.Admin, ROLE.Lender]  // Example: Only users with 'admin' role can see this menu item
  },
  {
    icon: 'users',
    text: 'My Clients',
    active: false,
    link: '/clients',
    roles: [ROLE.Admin, ROLE.Lender]  // Example: Only users with 'admin' role can see this menu item
  },
  {
    icon: 'tranx',
    text: 'Lenders',
    active: false,
    roles: [ROLE.Admin],
    subMenu: [
      {
        text: 'Lender Organizations',
        link: '/lender-organizations', // Example: Only users with 'lenderAdmin' role can see this sub-menu item
      },
      {
        text: 'Lender Users',
        link: '/lender-users', // Example: Only users with 'lenderAdmin' role can see this sub-menu item
      }
    ]
  },
  {
    icon: 'file-docs',
    text: 'Access Controls',
    active: false,
    roles: [ROLE.Admin],
    subMenu: [
      {
        text: 'Roles',
        link: '/roles', // Example: Only users with 'admin' role can see this sub-menu item
      },
      {
        text: 'Permissions',
        link: '/permissions', // Example: Only users with 'admin' role can see this sub-menu item
      }
    ]
  },
];

export default menu;