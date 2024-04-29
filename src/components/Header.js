import { useState, useContext } from "react";
import logo from "../assets/foodies.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// const isloggedIn=()=>{
//     return false
// };

const Title = () => (
    <a href="/">
        <img className="logo h-24" src={logo} />
    </a>
);

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { user } = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items)

    return (
        <div className="header flex justify-between bg-green-200 p-1 shadow-md">
            <Title />
            <div>
                <ul className="nav-info flex gap-5 mt-9 ">
                    <Link to="./Home"> <li>Home</li> </Link>
                    <Link to="./Contact"> <li>Contact</li></Link>
                    <Link to="./About"> <li>About</li> </Link>
                    <Link to="./instamart"> <li>Instamart</li> </Link>
                    <Link to="/cart" ><li data-testId="cart">Cart-{cartItems.length} items</li> </Link>
                </ul>
            </div>

            <div className="flex">
                <h1 className="font-bold py-9 ">User:{user.name}</h1>
                {isLoggedIn ?
                    (<button className="h-[50px] w-[70px] bg-green-500 my-6 mx-2 rounded-lg shadow-sm text-white font-bold hover:bg-green-700" onClick={() => setIsLoggedIn(false)}>Logout</button>) :
                    (<button className="h-[50px] w-[70px] bg-green-500 my-6 mx-2 rounded-lg shadow-sm text-white font-bold hover:bg-green-700" onClick={() => setIsLoggedIn(true)}>Login</button>)
                }
            </div>
        </div>
    );
};

export default Header;
// we are on same file so there is no need to export title in app.js
//if you want to export you can use direct export method and import in App.js using {}