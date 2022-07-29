import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryCard = ({ bgColor, iconName, title }) => {
  return (
    <div
      className={`card ${bgColor} rounded-md h-24 flex flex-col items-center justify-around p-6 hover:border  hover:shadow-md transition ease-in-out duration-200 cursor-pointer`}
    >
      <FontAwesomeIcon icon={iconName} />
      <span className="font-semibold"> {title} </span>
    </div>
  );
};

export default CategoryCard;
