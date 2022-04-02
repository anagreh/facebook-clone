import React, { useState } from 'react';
import { FaSignal } from 'react-icons/fa';
import NavBtn from '../../molecules/NavBtn';
import AccountMenu from '../../molecules/AccountMenu';

const NavBtnWithMenu = () => {
  const [shown, setShown] = useState(false);

  const toggleShown = () => {
    setShown((curr) => !curr);
  };
  return (
    <div>
      <NavBtn title="hi" onClick={toggleShown}>
        <FaSignal />
      </NavBtn>
      {shown && <AccountMenu />}
    </div>
  );
};

export default NavBtnWithMenu;
