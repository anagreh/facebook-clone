interface CardWithoutSecMenu {
  link: string;
  icon: React.ReactNode;
  title: string;
}

interface CardWithSecMenu {
  title: string;
  icon: React.ReactNode;
  secMenu: CardWithoutSecMenu[];
}

type MenuCard = CardWithoutSecMenu | CardWithSecMenu;
