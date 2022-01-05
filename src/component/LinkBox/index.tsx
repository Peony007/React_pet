import React from "react";

import "./styles.scss";

interface Props{
    linkText: string,
    // unit: string
}

export const LinkBox: React.FC<Props> = ({linkText}) => {

    return(
      <div className="link-box" >
          <p className="link-box__count" >{linkText}</p>
          {/*<p className="link-box__unit" >{unit}</p>*/}
      </div>
    );
}
