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
    text: 'Clients',
    active: false,
    link: '/clients'
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
]

export default menu