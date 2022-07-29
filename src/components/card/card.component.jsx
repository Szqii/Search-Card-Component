import SearchBar from "../search-bar/search-bar.component";
import CategoryCardContainer from "../category-card/category-card-container.component";

const Card = () => {
  return (
    <div className="card w-1/3 h-2/4 bg-white rounded-3xl p-16 flex flex-col">
      <SearchBar />
      <CategoryCardContainer />
    </div>
  );
};

export default Card;
