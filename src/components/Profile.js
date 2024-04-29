import { useState } from "react";

const Profile=(props)=>{
    const[count ,setCount] = useState(0)
    return(
        <div>
            <h2>This is creater without class based </h2>
            <h2>Name:{props.name}</h2>
            
            <h2>count:{count}</h2>
            <button onClick={()=>setCount(100)}>count</button>
        </div>
    )
};
export default Profile;