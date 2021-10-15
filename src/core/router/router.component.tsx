import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {switchRoutes} from './routes';
import {CatalogScene, LoginScene} from '../../scenes';
import {NotFound} from "common/components/not-found.component";

export const RouterComponent: React.FunctionComponent = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path={switchRoutes.catalog} component={CatalogScene}/>
                    <Route exact={true} path={switchRoutes.root} component={LoginScene}/>
                    <Route path={"*"} component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
};
