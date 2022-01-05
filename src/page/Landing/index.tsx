import React from "react";

import "./styles.scss";
import Header from "./Header";

import Home from "./Home";
import Partner from "./Partner";
import RoadMap from "./RoadMap";
import WhyPet from "./WhyPet";

export const Landing: React.FC<any> = () => {
    return(
        <>
            <div >
                <Header/>
                <Home id="home"/>
                <WhyPet/>
                <RoadMap id="roadmap"/>
                {/*<SocialLink/>*/}
                {/*<Footer/>*/}
                <Partner/>
            </div>
        </>
    );
};







