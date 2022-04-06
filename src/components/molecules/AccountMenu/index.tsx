import { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import styled from 'styled-components';
import { AccountMenuCard } from '../Card';
import { useHeightMeasure } from '../../../hooks/useHeightMeasure';

export const ViewPort = styled.div`
  position: absolute;

  top: 3.5em;
  right: 1em;

  border-radius: 0.5em;

  transition: height 0.5s;
  overflow: hidden;

  background-color: white;
  border: 1px solid gray;
`;
export const AllMenu = styled.ul`
  display: flex;
  align-items: flex-start;

  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: none;

  transition: transform 1s;
  /* transform: translateX(-50%); */
`;
export const SingleMenu = styled.li`
  width: 100%;

  flex-shrink: 0;
`;

const AccountMenu = () => {
  const [currMenu, setCurrMenu] = useState('main');
  const [secMenu, setSecMenu] = useState('');
  const [currMenuData, setCurrMenuData] = useState({
    height: 'default',
    transform: 'none',
  });

  const [mainMenuRef, mainMenuHeight] = useHeightMeasure();
  const [secMenuRef, secMenuHeight] = useHeightMeasure([currMenu]);

  useEffect(() => {
    switch (currMenu) {
      case 'main':
        setCurrMenuData({
          height: mainMenuHeight ? mainMenuHeight.toString() : 'default',
          transform: 'translateX(0)',
        });
        break;
      default:
        setCurrMenuData({
          height: secMenuHeight ? secMenuHeight.toString() : 'default',
          transform: 'translateX(-100%)',
        });
        break;
    }
  }, [currMenu, mainMenuHeight, secMenuHeight]);

  const handleMenuChange = (newMenu: string) => {
    setCurrMenu(newMenu);
    if (newMenu !== 'main') {
      setSecMenu(newMenu);
    }
  };

  console.log(currMenuData.height);

  /*TODO: move all the card to separate file with type [[{card},[{card},{card},...]], ... ]
    card will have -href?, -icon, -title
  */
  return (
    <ViewPort style={{ height: currMenuData.height + 'px' }}>
      <AllMenu style={{ transform: currMenuData.transform }}>
        {/* main menu */}
        <SingleMenu ref={mainMenuRef}>
          <AccountMenuCard
            onClick={() => handleMenuChange('setting')}
            hasSecondaryMenu
          >
            <FaAngleDoubleRight />
          </AccountMenuCard>
          <AccountMenuCard onClick={() => handleMenuChange('somethingMenu')} />
        </SingleMenu>

        {/* sec menu */}
        <SingleMenu ref={secMenuRef}>
          {/* setting menu */}
          <AccountMenuCard onClick={() => handleMenuChange('main')} />

          {secMenu === 'setting' && (
            <div>
              <AccountMenuCard />
              <AccountMenuCard />
              <AccountMenuCard />
            </div>
          )}
          {/* somethingMenu menu */}
          {secMenu === 'somethingMenu' && (
            <div>
              <AccountMenuCard />
              <AccountMenuCard />
              <AccountMenuCard />
              <AccountMenuCard />
              <AccountMenuCard />
            </div>
          )}
        </SingleMenu>
      </AllMenu>
    </ViewPort>
  );
};

export default AccountMenu;
