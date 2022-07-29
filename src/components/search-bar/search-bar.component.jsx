import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="search-container w-full flex mb-6">
      <div className="search-bar w-2/3 relative mr-4">
        <input
          type="text"
          placeholder="Search for a part-time job"
          className=" p-2 pl-12 w-full border h-full font-semibold text-black focus:outline-none"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute top-4 left-4 text-gray-400"
        />
      </div>
      <div className="map-btn bg-[#281A51] w-[calc(33.333333%_-_8px)] text-white text-center font-semibold  flex items-center justify-center p-3 transition ease-in-out duration-200 cursor-pointer hover:bg-[#432b8a] d">
        <FontAwesomeIcon icon={faMap} className="mr-3" />
        Use map
      </div>
    </div>
  );
};

export default SearchBar;
