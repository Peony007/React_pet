import React from "react";

import "./styles.scss";

interface Props{
    title: string
}

export const TabPet: React.FC<Props> = ({title}) => {
    return(
      <div className="tab-pet" >
          <div className="tab-pet__text" ><span className="tab-pet__text" style={{color:"red"}} >{title}</span></div>
          <div className="tab-pet__selected" >

          </div>
      </div>
    );
}



