import { useRouteError } from "react-router-dom";
import error from "../assets/error.png"

const Error=()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div className=" error h-[100vh] flex flex-col items-center justify-center"> 
        <img className="error-img flex justify-center items-center
        " src={error}/>
        <h1  className="text-2xl font-bold"> OOPS!!</h1>
        <h2 className="text-2xl font-bold">Something went wrong!! </h2>
        <h2  className="text-2xl font-bold">{err.data}</h2>
        <h2  className="text-2xl font-bold">{err.status + " :"+err.statusText}</h2>
        </div>
    )
};
export default Error;