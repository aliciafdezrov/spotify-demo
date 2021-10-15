import React from 'react';
import {Authorization} from './auth.vm';
import {getAuthVm, setAuthVm} from "./auth.helper";
import {SPOTIFY_API_CODE} from "../../core/const";

interface Context {
    auth: Authorization;
    onChangeAuth: (auth: Authorization) => void;
}

export const AuthContext = React.createContext<Context>(null);

export const AuthProviderComponent: React.FunctionComponent = (props) => {
    const [auth, setAuth] = React.useState<Authorization>(getAuthVm(SPOTIFY_API_CODE));

    React.useEffect(() => {
        setAuthVm(SPOTIFY_API_CODE, auth);
    }, [auth]);


    return (
        <AuthContext.Provider value={{
            auth,
            onChangeAuth: setAuth,
        }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
