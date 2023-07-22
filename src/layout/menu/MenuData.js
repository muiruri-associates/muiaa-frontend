const menu = [
  {
    heading: 'Menus'
  },
  {
    icon: 'grid-alt',
    text: 'Dashboard',
    active: false,
    link: '/'
  },
  {
    icon: 'users',
    text: 'Users',
    active: false,
    link: '/users'
  },
  {
    icon: 'tranx',
    text: 'Lenders',
    active: false,
    subMenu: [
      {
        text: 'Lender Organizations',
        link: '/lender-organizations'
      },
      {
        text: 'Lender Users',
        link: '/lender-users'
      }
    ]
  },
  {
    icon: 'file-docs',
    text: 'Loans',
    active: false,
    subMenu: [
      {
        text: 'Loans',
        link: '/loans'
      },
      {
        text: 'Loans',
        link: '/loans'
      }
    ]
  },
  {
    icon: 'file-docs',
    text: 'Access Controls',
    active: false,
    subMenu: [
      {
        text: 'Roles',
        link: '/roles'
      },
      {
        text: 'Permissions',
        link: '/permissions'
      }
    ]
  },
]

export default menu