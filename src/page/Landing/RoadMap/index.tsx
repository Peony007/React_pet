import React from "react";

import RoadImage from "../../../assets/png/road_image.png";

interface Props{
    id:string
}

const RoadMap : React.FC<Props> = ({id}) =>{

    return(
        <>
            <div id={id}>
                {/*<Header/>*/}
                <div className="road-map">
                    <div className="road-map__title-supre-group" >
                        <p>RoadMap</p>
                    </div>
                     <div className="road-map__title-parent">
                         <p>
                             September 2021
                         </p>
                     </div>
                    <div className="road-map__subtitle-parent" >
                        <p>- Launch of Pet Puppies</p>
                        <p>- Auction for Rare Pet Puppies</p>
                    </div>

                    <div className="road-map__title-parent">
                        <p>
                            October 2021
                        </p>
                    </div>
                    <div className="road-map__subtitle-parent" >
                        <p>- Member-Exclusive Pet Puppies Merchandise</p>
                        <p>- Donate to Dog Charities</p>
                        <p>- New Token for Pet Puppies</p>
                    </div>
                    <div className="road-map__title-parent">
                        <p>
                            November 2021
                        </p>
                    </div>
                    <div className="road-map__subtitle-parent" >
                        <p>- New NFTs Airdropped to the Current Holders</p>
                        <p>- Pet Puppies Metaverse</p>
                    </div>
                    <div className="road-map__img-parent" >
                        <img className="road-map__img-parent__img"  src={RoadImage} alt="road-img" />
                    </div>
                </div>

            </div>
        </>

    );
}

export default RoadMap;
