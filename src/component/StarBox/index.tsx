import React from "react";

import "./styles.scss";

interface Props{
    count: string,
    unit: string
}

export const StarBox: React.FC<Props> = ({count, unit}) => {

    return(
      <div className="start-box" >
          <p className="start-box__count" >{count}</p>
          <p className="start-box__unit" >{unit}</p>
      </div>
    );
}
