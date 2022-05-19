import { FaAngleDoubleRight } from 'react-icons/fa';
import React from 'react';
import IconBase from '../../atoms/Icon';
import { Wrapper, BtnStyled } from './Shared.styled';

interface props extends React.HTMLAttributes<HTMLElement> {
  hasSecondaryMenu?: boolean;
}
/**
 * width:default, height:fixed, margin:none
 */

export const AccountMenuCard: React.FC<props> = ({
  hasSecondaryMenu = false,
  children,
  ...props
}) => {
  //link,icon,title
  return (
    <Wrapper {...props}>
      <IconBase size="2.5em">{children}</IconBase>
      <p>search </p>
      {hasSecondaryMenu && (
        <BtnStyled>
          <FaAngleDoubleRight />
        </BtnStyled>
      )}
    </Wrapper>
  );
};
export default AccountMenuCard;
