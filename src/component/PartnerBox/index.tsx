import React from "react";

import "./styles.scss";


interface Props{
    image: string,

}

export const PartnerBox : React.FC<Props> = ({image}) => {

    return(
        <div className="part-com" >
            <img className="part-com__img" src={image} alt="mint" />
            <div className="part-com__title-group" >
                <p style={{marginBottom:0}} >Kishu Inu</p>
            </div>
        </div>
    );
}

