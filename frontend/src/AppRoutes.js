import React from "react";
import { Switch, Route} from 'react-router-dom';

import { HomePage } from "./components/pages/HomePage";

export const AppRoutes = () => (
    <Switch>
        <Route path='/' exact component={HomePage}/>
    </Switch>
)
