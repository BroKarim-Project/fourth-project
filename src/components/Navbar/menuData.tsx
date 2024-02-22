import { Menu } from '../../types/menu';

//pendeklarasian sebuah konstanta menuData yang merupakan array dari objek-objek bertipe Menu
const menuData: Menu[] = [
  {
    id: 1,
    title: 'Products',
    newTab: false,
    submenu: [
      {
        id: 11,
        title: 'Blog Grid',
        newTab: false,
        path: '/blog',
      },
      {
        id: 12,
        title: 'Sign In',
        newTab: false,
        path: '/auth/signin',
      },
      {
        id: 13,
        title: 'Sign Up',
        newTab: false,
        path: '/auth/signup',
      },
      {
        id: 14,
        title: 'Docs',
        newTab: false,
        path: '/docs',
      },
      {
        id: 15,
        title: 'Support',
        newTab: false,
        path: '/support',
      },
      {
        id: 16,
        title: '404',
        newTab: false,
        path: '/error',
      },
    ],
  },
  {
    id: 2,
    title: 'Enterprise',
    newTab: false,
    submenu: [
      {
        id: 21,
        title: 'Blog Grid',
        newTab: false,
        path: '/blog',
      },
      {
        id: 22,
        title: 'Sign In',
        newTab: false,
        path: '/auth/signin',
      },
      {
        id: 23,
        title: 'Sign Up',
        newTab: false,
        path: '/auth/signup',
      },
      {
        id: 24,
        title: 'Docs',
        newTab: false,
        path: '/docs',
      },
      {
        id: 25,
        title: 'Support',
        newTab: false,
        path: '/support',
      },
      {
        id: 26,
        title: '404',
        newTab: false,
        path: '/error',
      },
    ],
  },
  {
    id: 3,
    title: 'Pricing',
    newTab: false,
    path: '/blog',
  },
  {
    id: 4,
    title: 'Resources',
    newTab: false,
    path: '/docs',
  },
  {
    id: 5,
    title: 'Community',
    newTab: false,
    submenu: [
      {
        id: 51,
        title: 'Community resources',
        newTab: false,
        path: '/blog',
      },
      {
        id: 54,
        title: 'Sign In',
        newTab: false,
        path: '/auth/signin',
      },
      {
        id: 55,
        title: 'Sign Up',
        newTab: false,
        path: '/auth/signup',
      },
      {
        id: 56,
        title: 'Docs',
        newTab: false,
        path: '/docs',
      },
      {
        id: 57,
        title: 'Support',
        newTab: false,
        path: '/support',
      },
      {
        id: 58,
        title: '404',
        newTab: false,
        path: '/error',
      },
    ],
  },

  {
    id: 6,
    title: 'Contact Salse',
    newTab: false,
    path: '/support',
  },
];

export default menuData;
