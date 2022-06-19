import { useContext, useEffect, useState } from "react";
import { MenuCard } from "../Cards";
import { useHeightMeasure } from "../../../hooks/useHeightMeasure";
import settingMenu from "../../../constants/settingMenu";
import { ViewPort, AllMenu, SingleMenu, BackBtn } from "./style.styled";
import { logOutCtx } from "../../../context/userProvider";
import { FaArrowLeft, FaSignOutAlt } from "react-icons/fa";

export const SettingMenu = () => {
  const logOut = useContext(logOutCtx);

  const [currMenu, setCurrMenu] = useState<"main" | "sec">("main");
  const [secMenuCards, setSecMenuCards] = useState<CardWithoutSecMenu[]>([]);
  const [currMenuData, setCurrMenuData] = useState({
    height: "default",
    transform: "none",
  });

  const [mainMenuRef, mainMenuHeight] = useHeightMeasure();
  const [secMenuRef, secMenuHeight] = useHeightMeasure([currMenu]);

  useEffect(() => {
    switch (currMenu) {
      case "sec":
        setCurrMenuData({
          height: secMenuHeight ? secMenuHeight.toString() : "default",
          transform: "translateX(-100%)",
        });
        break;
      default:
        setCurrMenuData({
          height: mainMenuHeight ? mainMenuHeight.toString() : "default",
          transform: "translateX(0)",
        });
        break;
    }
  }, [currMenu, mainMenuHeight, secMenuHeight]);

  const handleMenuChange = (newMenu: "main" | "sec") => {
    setCurrMenu(newMenu);
  };

  const handleSecMenuCards = (cards: CardWithoutSecMenu[]) => {
    setSecMenuCards(cards);
    setCurrMenu("sec");
  };

  const card: Card = {
    title: "Sign Out",
    icon: <FaSignOutAlt />,
  };

  return (
    <ViewPort style={{ height: currMenuData.height + "px" }}>
      <AllMenu style={{ transform: currMenuData.transform }}>
        {/* main menu */}
        <SingleMenu ref={mainMenuRef}>
          {settingMenu.map((card, i) => {
            return <MenuCard card={card} key={i} handleSecMenuCards={handleSecMenuCards} />;
          })}
          <MenuCard card={card} onClick={logOut} handleSecMenuCards={handleSecMenuCards} />
        </SingleMenu>

        {/* sec menu */}
        <SingleMenu ref={secMenuRef}>
          <BackBtn onClick={() => handleMenuChange("main")}>
            <FaArrowLeft />
          </BackBtn>

          {secMenuCards.map((card, i) => {
            return <MenuCard card={card} key={i} handleSecMenuCards={handleSecMenuCards} />;
          })}
        </SingleMenu>
      </AllMenu>
    </ViewPort>
  );
};

export default SettingMenu;
