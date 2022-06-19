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
interface Card {
  title: string;
  icon: React.ReactNode;
}

type MenuCard = CardWithoutSecMenu | CardWithSecMenu | Card;
