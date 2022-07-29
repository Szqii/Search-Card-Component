import CategoryCard from "../category-card/category-card-item.component";

import {
  faCouch,
  faHouse,
  faPlane,
  faBuilding,
  faSailboat,
  faBicycle,
  faCoins,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";

const cardList = [
  { color: "bg-[#FFECEB]", icon: faCouch, title: "Furniture" },
  { color: "bg-[#F7EBFF]", icon: faHouse, title: "Property" },
  { color: "bg-[#ECF0FF]", icon: faBuilding, title: "Job" },
  { color: "bg-[#D7F9F3]", icon: faPlane, title: "Travel" },
  { color: "bg-[#E2FFD4]", icon: faSailboat, title: "Boat" },
  { color: "bg-[#F8FAFC]", icon: faBicycle, title: "Courier" },
  { color: "bg-[#FFF3C8]", icon: faCoins, title: "Economy" },
  { color: "bg-[#FFD9C8]", icon: faUmbrellaBeach, title: "Holiday" },

  { color: "bg-[#FFECEB]", icon: faCouch, title: "Furniture" },
  { color: "bg-[#F7EBFF]", icon: faHouse, title: "Property" },
  { color: "bg-[#ECF0FF]", icon: faBuilding, title: "Job" },
  { color: "bg-[#D7F9F3]", icon: faPlane, title: "Travel" },
  { color: "bg-[#E2FFD4]", icon: faSailboat, title: "Boat" },
  { color: "bg-[#F8FAFC]", icon: faBicycle, title: "Courier" },
  { color: "bg-[#FFF3C8]", icon: faCoins, title: "Economy" },
];

const CategoryCardContainer = () => {
  return (
    <div className="category-card-container grid grid-rows-8 grid-cols-3 gap-4 h-full overflow-y-scroll ">
      {cardList.map((item, index) => (
        <CategoryCard
          key={index}
          bgColor={item.color}
          iconName={item.icon}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default CategoryCardContainer;
