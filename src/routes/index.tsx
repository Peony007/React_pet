import React from "react";
import Switch from "react-bootstrap/Switch";
import {PublicRoute} from "./PublicRoute";
import {Landing} from "../page/Landing";
import RoadMap from "../page/Landing/RoadMap";
import Gallery from "../page/Landing/Gallery";
import Market from "../page/Landing/Market";

const Routes : React.FC = () => {
    return(
        <>
            <Switch>
                <PublicRoute path="/" exact component={Landing} />
                <PublicRoute path="/roadmap" component={RoadMap} />
                <PublicRoute path="/gallery" component={Gallery} />
                <PublicRoute path="/market-place" component={Market} />
            </Switch>
        </>
    )
}

export default Routes;
