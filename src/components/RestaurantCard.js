import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";

export const RestaurantCard = ({
    id,
    name,
    cuisines,
    cloudinaryImageId,
    avgRating, locality,
    areaName,
    costForTwo
}) => {
    // console.log(name)
    return (
        <div className="card w-[360px] m-2 p-2 bg-yellow-100 ">

            < Link to={`/Restaurant/${id}`} >

                <img src={IMG_CDN_URL + cloudinaryImageId} className="h-[300px] w-[350px] object-fit " />
                <h2 className="font-bold text-xl" >{name}</h2>
                <h3 className="break-words">{cuisines.join(',')}</h3>
                <h4 className="h-[20px] w-[60px] bg-green-400 rounded-md aling-center text-center justify-center items-center flex">{avgRating} Star</h4>
                <h4>{areaName}</h4>
                <h4>{locality}</h4>
                <h2 className="text-xl text-red-600">{costForTwo}</h2>
            </Link>
            <div>
                {/* <button className="border border-green-500 p-1 hover:bg-green-500 text-lg ">Order Now</button> */}
                {/* <button className="border border-green-500 p-1 hover:bg-green-500 text-lg m-3 ">Add to Cart</button> */}
            </div>

        </div>
    );
};
