import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../contants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const [restaurant, setRestaurant] = useState({});
    const [offers, setOffers] = useState([]);
    

    const dispatch = useDispatch();

    const handleAddItem = () => {
        const cartItem = { restaurant, offers };
        dispatch(addItem(cartItem));
    };

    async function getRestaurantInfo(resId) {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4562294&lng=77.50353489999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log(json.data, "response data ");
        setRestaurant(json.data.cards[0].card.card.info);
        setOffers(json.data.cards[1].card.card.gridElements.infoWithStyle.offers);
    }

    useEffect(() => {
        getRestaurantInfo(resId);
    }, []);

    return (
        <div className="bg-gray-200 mt-3">
            <h2 > Restaurant id : {resId} </h2>
            <h2 className="font-bold text-3xl mb-2 ml-2 ">{restaurant.name}</h2>
            <img className="h-[300px] w-[300px] object-cover mb-2 ml-2" src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
            
          
                {
                    offers?.map((offer, index) => (
                        <div className="bg-yellow-200 font-bold flex justify-center items-center w-[300px] ml-2" key={index} >
                            {offer.info?.header}

                        </div>
                    ))

                }
         

            <button
                className="h-[40px] w-[300px] font-bold text-xl mt-2 mb-3 bg-green-400 rounded-sm hover:bg-green-500 shadow-md ml-2"
                onClick={() => handleAddItem()}>Add To Cart</button>
        </div>
    );
};
export default RestaurantMenu;