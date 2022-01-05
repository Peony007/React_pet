import React from "react";

import WelcomeImg from "../../../assets/png/welcome.png";

interface Props {
    id:string
}

const Home: React.FC<Props> = ({id}) => {

    return (

        <>
            <div className="home" id={id}>
                <div className="home__image-parent">
                    <img className="home__image-parent__img" src={WelcomeImg} alt="home-img"/>
                </div>

                <div className="home__description-group">
                    <div className="home__description-group__title-parent">
                        {/*<Link to="/market-place" style={{textDecoration:"none"}} >*/}
                            <p>Pet Puppies</p>
                        {/*</Link>*/}

                    </div>
                    <div className="home__description-group__content-parent"  >
                        <text>Pet Puppies is an NFT collection series consisting of pet puppies with traits of breed, clothing, faces, and accessories, and many more!
                        </text>
                    </div>
                </div>

                {/*<div className="home__social-group" >*/}
                {/*    /!*<Link to="/roadmap" >*!/*/}
                {/*        <LinkBox linkText="RoadMap"/>*/}
                {/*    /!*</Link>*!/*/}
                {/*    <Link to="/gallery" >*/}
                {/*        <LinkBox linkText="Gallery"/>*/}
                {/*    </Link>*/}
                {/*    <a href='https://docs.petpuppiesnft.com' target='_blank' rel='noreferrer'>*/}
                {/*        <LinkBox linkText="Docs"/>*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
        </>

    );
}

export default Home;
