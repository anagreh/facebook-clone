import withCounter from '../../../HOC/withTitle';
import NavLinkBase from '../../atoms/NavLinkBase';

export default withCounter<React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  NavLinkBase,
);
