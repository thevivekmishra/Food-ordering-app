import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        //create state
        this.state = {
           userInfo :{
            name:"",
            location:""
           },
        };
        // console.log("child-constructor"+this.props.name);
    }

   async componentDidMount(){
        // console.log("child-componentDidMount"+this.props.name);
        const data = await fetch ("https://api.github.com/users/thevivekmishra");
        const json = await data.json();
        this.setState({
            userInfo:json,
        });
    }
    render() {
        const { count } = this.state;
        // console.log("child-render"+this.props.name );
        return (
            <div className="classbased  bg-gray-200  flex flex-col p-3 items-center">
                {/* <h2>This section is created using-</h2>
                <h2>Class based component </h2> */}
                <img src={this.state.userInfo.avatar_url}/>
                <h2>Name:{this.state.userInfo.name}</h2>
                <h2>Location:{this.state.userInfo.location}</h2>
{/* 
                <h2>count:{count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: 1,
                    })
                }}>count</button> */}

            </div>
        );
    }
}
export default Profile;