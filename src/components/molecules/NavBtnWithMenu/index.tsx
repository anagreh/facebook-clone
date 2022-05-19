import React, { useState } from 'react';
import { FaSignal } from 'react-icons/fa';
import NavBtn from '../NavBtn';
import { SettingMenu } from '../PopupMenu';
import useOutsideAlerter from '../../../hooks/useOutsideAlerter';

interface props {
  Menu: React.ReactNode;
  title: string;
  Icon: React.ReactNode;
}

const NavBtnWithMenu: React.FC<props> = (props) => {
  const [shown, setShown] = useState(false);

  const ref = useOutsideAlerter(() => setShown(false));
  const toggleShown = () => {
    setShown((curr) => !curr);
  };
  return (
    <div ref={ref}>
      <NavBtn title={props.title} onClick={toggleShown}>
        {props.Icon}
      </NavBtn>
      {shown && props.Menu}
    </div>
  );
};

export default NavBtnWithMenu;
