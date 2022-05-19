import { useEffect, useState } from 'react';
import { MenuCard } from '../Cards';
import { useHeightMeasure } from '../../../hooks/useHeightMeasure';
import settingMenu from '../../../constants/settingMenu';
import { ViewPort, AllMenu, SingleMenu } from './style.styled';

export const SettingMenu = () => {
  const [currMenu, setCurrMenu] = useState<'main' | 'sec'>('main');
  const [secMenuCards, setSecMenuCards] = useState<CardWithoutSecMenu[]>([]);
  const [currMenuData, setCurrMenuData] = useState({
    height: 'default',
    transform: 'none',
  });

  const [mainMenuRef, mainMenuHeight] = useHeightMeasure();
  const [secMenuRef, secMenuHeight] = useHeightMeasure([currMenu]);

  useEffect(() => {
    switch (currMenu) {
      case 'sec':
        setCurrMenuData({
          height: secMenuHeight ? secMenuHeight.toString() : 'default',
          transform: 'translateX(-100%)',
        });
        break;
      default:
        setCurrMenuData({
          height: mainMenuHeight ? mainMenuHeight.toString() : 'default',
          transform: 'translateX(0)',
        });
        break;
    }
  }, [currMenu, mainMenuHeight, secMenuHeight]);

  const handleMenuChange = (newMenu: 'main' | 'sec') => {
    setCurrMenu(newMenu);
  };

  const handleSecMenuCards = (cards: CardWithoutSecMenu[]) => {
    setSecMenuCards(cards);
    setCurrMenu('sec');
  };

  return (
    <ViewPort style={{ height: currMenuData.height + 'px' }}>
      <AllMenu style={{ transform: currMenuData.transform }}>
        {/* main menu */}
        <SingleMenu ref={mainMenuRef}>
          {settingMenu.map((card, i) => {
            return (
              <MenuCard
                card={card}
                key={i}
                handleSecMenuCards={handleSecMenuCards}
              />
            );
          })}
        </SingleMenu>

        {/* sec menu */}
        <SingleMenu ref={secMenuRef}>
          <button onClick={() => handleMenuChange('main')}>back</button>

          {secMenuCards.map((card, i) => {
            return (
              <MenuCard
                card={card}
                key={i}
                handleSecMenuCards={handleSecMenuCards}
              />
            );
          })}
        </SingleMenu>
      </AllMenu>
    </ViewPort>
  );
};

export default SettingMenu;
