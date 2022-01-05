import React from "react";

import Social_1 from "../../../assets/svg/social_1.svg";
import Social_2 from "../../../assets/svg/social_2.svg";
import Social_3 from "../../../assets/svg/social_3.svg";
import Social_4 from "../../../assets/svg/social_4.svg";

interface Props{

}
const SocialLink : React.FC<Props> = () => {

    return(
        <div className="social-link" >
            <div className="social-link__social-group">
                <img src={Social_1} alt="social" />
            </div>
            <div className="social-link__social-group">
                <img src={Social_2} alt="social"/>
            </div>
            <div className="social-link__social-group">
                <img src={Social_3} alt="social"/>
            </div>
            <div className="social-link__social-group">
                <img src={Social_4} alt="social"/>
            </div>
        </div>
    );
}

export default SocialLink;
