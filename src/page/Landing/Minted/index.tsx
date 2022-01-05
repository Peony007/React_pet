import React from "react";
import {useMediaQuery} from "react-responsive";

import {MintBox} from "../../../component/MintBox";
import Pet_1 from "../../../assets/png/mint_pet_1.png";
import Pet_2 from "../../../assets/png/mint_pet_2.png";
import Pet_3 from "../../../assets/png/mint_pet_3.png";
import Pet_4 from "../../../assets/png/mint_pet_4.png";
import Pet_5 from "../../../assets/png/mint_pet_5.png";
import Pet_6 from "../../../assets/png/mint_pet_6.png";

interface Props {

}

const Minted: React.FC<Props> = () => {

    const isMobile = useMediaQuery({query: '(max-width: 576px)'});

    return (
        <div className="minted">
            <h2 className="minted__title"> Recently minted Puppies</h2>

            {isMobile ? (<div className="minted__box-group">
                <div className="minted__box-group__row-group">
                    <MintBox image={Pet_1} color="#FFB399"/>
                    <MintBox image={Pet_2} color="#C0E1FC"/>
                </div>
                <div className="minted__box-group__row-group">
                    <MintBox image={Pet_3} color="#D1EEEB"/>
                    <MintBox image={Pet_4} color="#D9F5CB"/>
                </div>
                <div className="minted__box-group__row-group">
                    <MintBox image={Pet_5} color="#D1EEEB"/>
                    <MintBox image={Pet_6} color="#FFD6F7"/>
                </div>
            </div>) : (<div className="minted__box-group">
                <div className="minted__box-group__row-group">
                    <MintBox image={Pet_1} color="#FFB399"/>
                    <MintBox image={Pet_2} color="#C0E1FC"/>
                    <MintBox image={Pet_3} color="#A2DC64"/>
                </div>
                <div className="minted__box-group__row-group">
                    <MintBox image={Pet_4} color="#D1EEEB"/>
                    <MintBox image={Pet_5} color="#D9F5CB"/>
                    <MintBox image={Pet_6} color="#FFD6F7"/>
                </div>
            </div>)}
            {/*<div className="minted__box-group" >*/}
            {/*    <div className="minted__box-group__row-group" >*/}
            {/*        <MintBox image={Pet_1} color="#FFB399"/>*/}
            {/*        <MintBox image={Pet_2} color="#C0E1FC"/>*/}
            {/*        <MintBox image={Pet_3} color="#A2DC64"/>*/}
            {/*    </div>*/}
            {/*    <div className="minted__box-group__row-group" >*/}
            {/*        <MintBox image={Pet_4} color="#D1EEEB"/>*/}
            {/*        <MintBox image={Pet_5} color="#D9F5CB"/>*/}
            {/*        <MintBox image={Pet_6} color="#FFD6F7"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default Minted;
