import { FaAdn, FaAirFreshener, FaAlignCenter, FaAnkh, FaAirbnb } from "react-icons/fa";

const settingMenu: MenuCard[] = [
  {
    title: "first setting",
    icon: <FaAdn />,
    secMenu: [
      {
        icon: <FaAlignCenter />,
        link: "http://www.FaAlignCenter.com",
        title: "FaAlignCenter",
      },
      {
        icon: <FaAnkh />,
        link: "http://www.FaAnkh.com",
        title: "FaAnkh",
      },
      {
        icon: <FaAirbnb />,
        link: "http://www.FaAirbnb.com",
        title: "FaAirbnb",
      },
    ],
  },

  {
    link: "http://www.hi.com",
    icon: <FaAirFreshener />,
    title: "hi",
  },
  {
    link: "http://www.hi.com",
    icon: <FaAirFreshener />,
    title: "hi",
  },

  {
    title: "sec setting",
    icon: <FaAdn />,
    secMenu: [
      {
        icon: <FaAlignCenter />,
        link: "http://www.FaAlignCenter.com",
        title: "FaAlignCenter",
      },
      {
        icon: <FaAnkh />,
        link: "http://www.FaAnkh.com",
        title: "FaAnkh",
      },
    ],
  },
];

export default settingMenu;
