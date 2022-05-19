import {
  FaAdn,
  FaAirFreshener,
  FaAlignCenter,
  FaAnkh,
  FaAirbnb,
} from 'react-icons/fa';

const settingMenu: MenuCard[] = [
  {
    title: 'first setting',
    icon: <FaAdn />,
    secMenu: [
      {
        icon: <FaAlignCenter />,
        link: 'www.FaAlignCenter.com',
        title: 'FaAlignCenter',
      },
      {
        icon: <FaAnkh />,
        link: 'www.FaAnkh.com',
        title: 'FaAnkh',
      },
      {
        icon: <FaAirbnb />,
        link: 'www.FaAirbnb.com',
        title: 'FaAirbnb',
      },
    ],
  },

  {
    link: 'www.hi.com',
    icon: <FaAirFreshener />,
    title: 'hi',
  },
  {
    link: 'www.hi.com',
    icon: <FaAirFreshener />,
    title: 'hi',
  },

  {
    title: 'sec setting',
    icon: <FaAdn />,
    secMenu: [
      {
        icon: <FaAlignCenter />,
        link: 'www.FaAlignCenter.com',
        title: 'FaAlignCenter',
      },
      {
        icon: <FaAnkh />,
        link: 'www.FaAnkh.com',
        title: 'FaAnkh',
      },
    ],
  },
];

export default settingMenu;
