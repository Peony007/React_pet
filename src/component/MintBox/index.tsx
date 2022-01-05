import React from "react";

import "./styles.scss";


interface Props{
    image: string,
    color:string
}

export const MintBox : React.FC<Props> = ({image, color}) => {

    return(
        <div className="mint" style={{backgroundColor:color}}>
            <img className="mint__img" src={image} alt="mint" />
        </div>
    );
}

