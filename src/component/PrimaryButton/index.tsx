import React from "react";

import {useMediaQuery} from "react-responsive";


import "./styles.scss";

interface Props {
    title: string,
    image?: string
    width: number
    isfullColor?: boolean
}

export const PrimaryButton: React.FC<Props> = ({title, image, width, isfullColor = false}) => {

    const isMobile = useMediaQuery({query: '(max-width: 576px)'})

    return (
        <div className="primary-button" style={(isfullColor) ? {
            backgroundColor: "#FF494F",
            width: isMobile ? 0.9 * width : width
        } : {backgroundColor: "", width: isMobile ? 0.9 * width : width}}>
            {image !== undefined &&
            <img className="primary-button__img" src={image} alt="button"/>
            }
            <p className="primary-button__text"
               style={(isfullColor) ? {color: "white"} : {color: "#FF494F"}}>{title}</p>
        </div>
    );
}
