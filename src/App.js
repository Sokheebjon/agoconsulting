import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import {css} from "styled-components/macro"; //eslint-disable-line
import AgencyLandingPage from "./demos/AgencyLandingPage";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {
    return (
        <AgencyLandingPage/>
    );
}


