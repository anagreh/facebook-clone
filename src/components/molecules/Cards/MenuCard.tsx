import { FaAngleDoubleRight } from 'react-icons/fa';
import React from 'react';
import IconBase from '../../atoms/Icon';
import { BtnStyled, Wrapper } from './Shared.styled';

interface propsMenuCard extends React.HTMLAttributes<HTMLElement> {
  hasSecondaryMenu?: boolean;
  card: MenuCard;
  handleSecMenuCards: (cards: CardWithoutSecMenu[]) => void;
}
/**
 * width:default, height:fixed, margin:none
 */

export const MenuCard: React.FC<propsMenuCard> = ({
  card,
  handleSecMenuCards,
}) => {
  if ('link' in card) {
    card as CardWithoutSecMenu;
    //link,icon,title
    return (
      <Wrapper href={card.link}>
        <IconBase size="2.5em">{card.icon}</IconBase>
        <p>{card.title} </p>
      </Wrapper>
    );
  } else {
    card as CardWithSecMenu;

    //link,icon,title
    return (
      <Wrapper onClick={() => handleSecMenuCards(card.secMenu)}>
        <IconBase size="2.5em">{card.icon}</IconBase>
        <p>{card.title} </p>
        {
          <BtnStyled>
            <FaAngleDoubleRight />
          </BtnStyled>
        }
      </Wrapper>
    );
  }
};

export default MenuCard;
