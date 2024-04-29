import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {

    const {user} = useContext(UserContext);

    return(
        <div className="footer h-[100px] my-2 bg-pink-300">
         <h2 className="justify-center items-center flex py-9 font-bold">Made with ❤️ by - {user.name} - {user.email}</h2>
         </div>
    )
};
export default Footer;