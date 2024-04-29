// import { Outlet } from "react-router-dom";
// import Profile from "./Profile";

// import Profile from "./ProfileClass";
// import ProfileFunctionalComponent from "./Profile"; //this is for functional component  (profile) 
// const About = () => {
//     return (
//         <div className="aboutus">
//             <h1>About us page </h1>

//             <ProfileFunctionalComponent name={"Vivek"}/>
//             <Profile  name={"Vivek"}/>

//             {/* <Profile/> for class based  */}
//         </div>
//     );
// };


// creating class based component 

import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import React from "react";

class Contact extends React.Component {

    constructor(props){
        super(props);
            console.log("parent-constructor");
    };

    componentDidMount(){
        console.log("parent-componentDidMount");
    }
    render() {
        console.log("parent-render");
        return (
            <div className="aboutus">
                <h1 className="font-bold font-serif items-center text-2xl">Contact Us</h1>
                {/* <ProfileFunctionalComponent name={"Vivek"} /> */}
                <Profile name={"first "} />
                {/* <Profile name={"second"} /> */}
            </div>

        );
    };
}

export default Contact;