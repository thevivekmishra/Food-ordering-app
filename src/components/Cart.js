import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";

const Cart = () => {


    const cartItems = useSelector(state => state.cart.items)
    console.log(cartItems, 'inside card component');


    return (
        <div className="bg-gray-200 py-8 px-4 mt-3">


            <h1
                className="font-bold text-2xl flex justify-center bg-yellow-200 p-2 shadow-sm mt-2"
            >
                Cart Items
            </h1>


            {
                cartItems.length <= 0 ? (
                    <div>
                        <div>No items found !!</div>
                        <Link to={"/"} className="underline">Go to Home</Link>
                    </div>
                ) : (

                    <div className="flex gap-6">
                        {
                            cartItems.map((item, index) => {
                                return (
                                    <div className="bg-transparent" key={index}>
                                        {/* <h2 > Restaurant id : {resId} </h2> */}
                                        <h2 className="font-bold text-3xl mb-2  ">{item.restaurant.name}</h2>
                                        <img className="h-[300px] w-[300px] object-cover mb-2" src={IMG_CDN_URL + item.restaurant.cloudinaryImageId} />


                                        {
                                            item?.offers?.map((offer, index) => (
                                                <div className="bg-yellow-200 font-bold flex justify-center items-center w-[300px]" key={index} >
                                                    {offer.info?.header}

                                                </div>

                                            ))


                                        }
                                        <button className="h-[40] w-[300px] bg-green-400 mt-2 font-bold  text-lg hover:bg-green-600" >Order Now</button>
                                    </div>
                                )
                            })
                        }

                    </div>
                )
            }
        </div>
    );
};
export default Cart;