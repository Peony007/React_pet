import React from "react";

import "./styles.scss";

export const Tab: React.FC = ({children}) => {
    return(
      <div className="tabs" >
          <div className="tabs__text" >
              {children}
          </div>
          <div className="tabs__selected" ></div>
      </div>
    );
}



