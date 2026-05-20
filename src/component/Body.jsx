import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import { transformRestaurantData } from "../utils/transformRestaurantData";
import Shimmer from "./Shimmer";


const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);


const fetchData = async () => {
  const res = await fetch(
    "https://696bc8eb624d7ddccaa209c3.mockapi.io/restaurants"
  );
  const json = await res.json();

  const transformedData = transformRestaurantData(json);

  setlistOfRestaurant(transformedData);
  setOriginalList(transformedData);
  setfilteredList(transformedData);
};
// if(listOfRestaurant.length===0){
//   return <Shimmer/>;
// }
  return listOfRestaurant.length===0?<Shimmer/>:(
    <div className="body">
      
      <div className="filter">
        <div className="search_box">
          <input type="text" className="search" value={searchText} onChange={(e)=>{
            setsearchText(e.target.value);
          }}/>
          <button className="search_btn" onClick={()=>{
           const filterreslist= listOfRestaurant.filter((res)=>
              res.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredList(filterreslist)
          }}>search</button>
          <button className="clear_search" onClick={()=>{
            setfilteredList(originalList);
            setsearchText("");
          }}>clear</button>
        </div>
        {!isFiltered && (
          <button
            className="filter_btn"
            onClick={() => {
              const filtered = filteredList.filter(
                (restaurant) => restaurant.rating > 2.5
              );
              setfilteredList(filtered);
              setIsFiltered(true);
            }}
          >
            Filter Restaurants
          </button>
        )}

        {isFiltered && (
          <button
            className="reset_btn"
            onClick={() => {
              setfilteredList(originalList);
              setIsFiltered(false);
              setsearchText("");
            }}
          >
            Reset Restaurants
          </button>
        )}
      </div>

      <div className="res-container">
        {filteredList.map((restaurant) => (
          <ResturantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
