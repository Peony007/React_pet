import React from "react";

import PartnerKshu from "../../../assets/png/partner_kishu.png";
import {PartnerBox} from "../../../component/PartnerBox";


interface Props {

}


const Partner:  React.FC<Props> = () => {
    return(
        <div className="partner">
            <h2 className="partner__title">Partnerships</h2>
            <div className="partner__box-container ">
                <div className="team__box-container__mobile-padding">

                </div>
                <div className="partner__box-container__box-parent">
                    <div className="partner__box-container__box-parent__box-group">
                        <a href='https://kishu.com' target='_blank' rel='noreferrer'>
                            <PartnerBox image={PartnerKshu} />
                        </a>
                    </div>
                    {/*<div className="partner__box-container__box-parent__box-group">*/}
                    {/*    <PartnerBox image={PartnerKshu} />*/}
                    {/*</div>*/}
                </div>

                {/*<div className="partner__box-container__box-parent">*/}
                {/*    <div className="partner__box-container__box-group">*/}
                {/*        <PartnerBox image={PartnerKshu} />*/}
                {/*    </div>*/}
                {/*    <div className="partner__box-container__box-group">*/}
                {/*        <PartnerBox image={PartnerKshu} />*/}
                {/*    </div>*/}
                {/*</div>*/}


            </div>
        </div>
    )
}

export default Partner;
