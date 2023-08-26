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
    roles: [ROLE.Admin, ROLE.Lender]
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
    text: 'Loans',
    active: false,
    link: '/loans',
    roles: [ROLE.Admin, ROLE.Lender]
  },
  {
    icon: 'users',
    text: 'My Clients',
    active: false,
    link: '/clients',
    roles: [ROLE.Lender]
  },
  {
    icon: 'tranx',
    text: 'Lenders',
    active: false,
    roles: [ROLE.Admin],
    subMenu: [
      {
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
    icon: 'file-docs',
    text: 'Access Controls',
    active: false,
    roles: [ROLE.Admin],
    subMenu: [
      {
        text: 'Roles',
        link: '/roles',
      },
      {
        text: 'Permissions',
        link: '/permissions',
      }
    ]
  },
];

export default menu;