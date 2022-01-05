import React from "react";
import Header from "../Header";


interface Props{

}


const Gallery: React.FC<Props> = () => {
    return(
        <div>
            <Header/>
            <div className="gallery" >
                <p>COMING SOON</p>
            </div>
        </div>
    )
}

export default Gallery;
