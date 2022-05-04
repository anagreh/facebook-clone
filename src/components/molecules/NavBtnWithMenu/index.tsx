import React, { useState } from 'react';
import { FaSignal } from 'react-icons/fa';
import NavBtn from '../NavBtn';
import AccountMenu from '../AccountMenu';
import useOutsideAlerter from '../../../hooks/useOutsideAlerter';

const NavBtnWithMenu = () => {
  const [shown, setShown] = useState(false);

  const ref = useOutsideAlerter(() => setShown(false));
  const toggleShown = () => {
    setShown((curr) => !curr);
  };
  return (
    <div ref={ref}>
      <NavBtn title="hi" onClick={toggleShown}>
        <FaSignal />
      </NavBtn>
      {shown && <AccountMenu />}
    </div>
  );
};

export default NavBtnWithMenu;
