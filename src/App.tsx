import React from "react";
import {RouterComponent} from "./core/router";
import {AuthProviderComponent} from 'common/auth';

const App: React.FC = () => {
    return (
        <AuthProviderComponent>
            <RouterComponent/>
        </AuthProviderComponent>
    );
}

export default App;
