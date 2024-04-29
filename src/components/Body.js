import React from "react";
import { restaurantList } from "../contants";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";


const Body = () => {
    const [allRestaurnts,setAllRestaurants]=useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);//restaurantList update []
    const [searchText, setSearchText] = useState("");

  
    useEffect(() => {
        getRestaurants();
        console.log( allRestaurnts )
    }, [ ]);

    //API 
    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4562294&lng=77.50353489999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
    //    console.log(data);
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //sometime it show length is not defined to avoid this known as early return
    if(!allRestaurnts) return <h1>Not renderd please wait...</h1>

    
    //conditionl rendering 
    return ( allRestaurnts?.length === 0 ) ? ( <Shimmer/>) : (
        <>
            <div className="search-container py-4 my-2 bg-red-100 ">
                <input
                    className="search-input h-10 rounded-md border-current-black shadow-lg mx-2 p-2 focus:bg-gray-100"
                    type="text"
                    placeholder ="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />

                <button
                data-testId="search-btn"
                    className="search-btn p-2 m-2 bg-green-500 rounded-md hover:bg-green-700 transition-all ease-in shadow-lg "
                    onClick={() => {
                        const data = filterData(searchText,allRestaurnts);
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
            
            <div className="restraunt-list flex flex-wrap bg-gray-200 wrap ">
                {
                    filteredRestaurants.map((restaurant) => {
                        return (
                            < RestaurantCard {...restaurant?.info } key={restaurant?.info?.id} />
                        );
                    })
                }
            </div>
        </>
    );
};
export default Body;