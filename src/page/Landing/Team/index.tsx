import React from "react";

import Pet_1 from "../../../assets/png/mint_pet_1.png";
import Pet_2 from "../../../assets/png/mint_pet_2.png";
import Pet_3 from "../../../assets/png/mint_pet_3.png";
import {MintBox} from "../../../component/MintBox";

interface Props {

}

const Team: React.FC<Props> = () => {

    return (
        <div className="team">
            <h2 className="team__title">Team</h2>
            <div className="team__box-container">
                <div className="team__box-container__mobile-padding"></div>
                <div className="team__box-container__box-group">
                    <MintBox image={Pet_1} color="#FFB399"/>
                    <p className="team__box-container__box-group__title">Pranksy</p>
                </div>
                <div className="team__box-container__box-group">
                    <MintBox image={Pet_2} color="#FFB399"/>
                    <p className="team__box-container__box-group__title">N0tior0us</p>
                </div>
                <div className="team__box-container__box-group">
                    <MintBox image={Pet_3} color="#FFB399"/>
                    <p className="team__box-container__box-group__title">Gaba01</p>
                </div>
            </div>
        </div>
    );
}

export default Team;
