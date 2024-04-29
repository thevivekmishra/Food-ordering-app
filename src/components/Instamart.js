import { useState } from "react";

const Section = ({ title, description }) => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className=" m-2 p-2 shadow-sm bg-white "  >
            <h1 className="mb-3 text-xl font-bold">{title}</h1>
            {
                isVisible ? <button
                    className="mr-2 underline " onClick={() => setIsVisible(false)}>
                    Hide</button> :
                    <button className=" underline" onClick={() => setIsVisible(true)}
                    >Show</button>
            }
            {isVisible && <p>{description}</p>}
        </div>
    );
};


const Instamart = () => {
    // const [visibleSection ,setIsVisibleSection]=useState("")
    return (
        <div className="bg-gray-200 p-3 mt-3">
            <h1 className="font-bold text-3xl flex justify-center">Instamart</h1>
            <Section 
                title={"About Instamart"}
                description={"Indulge your taste buds in a culinary adventure at [Your App Name], the go-to destination for passionate foodies. We cater to those who appreciate the art of gastronomy, offering a curated platform that brings together a diverse array of culinary delights. From local treasures steeped in tradition to avant-garde flavors pushing boundaries, our app is your gateway to a world of taste sensationsAt Foodies, being a foodie is a shared passion. Connect with a community that celebrates the joy of discovery, where you can exchange tips and relish in the pleasure of a well-crafted meal. Enjoy the convenience of modern technology as you explore menus, customize orders, and have your favorite dishes delivered right to your doorstep. Join us in savoring the moments that make every meal an experience. Download Foodies now and elevate your gastronomic journey!"}
            // isVisible={visibleSection === "about"}
            // setIsVisible={()=>setIsVisibleSection("about")}
            />

            <Section
                title={"Details of Instamart"}
                description={" Welcome to Foodies, the ultimate haven for food enthusiasts! Dive into a world tailored for your culinary cravings. As a foodie on our app, relish the joy of discovering diverse flavors, from local gems to trending global cuisines. Customize your orders effortlessly, explore enticing menus, and enjoy the convenience of doorstep delivery—all with just a few taps"}
            />

            <Section
                title={"Team of Instamart"}
                description={"Meet our dynamic team of passionate foodies , united by a shared love for culinary delights! Comprising seasoned gourmets and enthusiastic explorers, our team is dedicated to curating a diverse and delightful food experience for you. With a finger on the pulse of food trends and a commitment to quality, our foodie experts ensure that every dish on our platform is a celebration of flavor. From chefs with a flair for creativity to connoisseurs of local cuisine, our team is your culinary companion, driven by the joy of discovery. Join us on this delicious journey – where our team's passion for food mirrors yours!"}
            />
        </div>
    )
}
export default Instamart;