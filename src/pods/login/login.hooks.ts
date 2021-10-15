import React from 'react';
import {AuthContext} from 'common/auth';
import {getToken} from "common/auth/api/auth.api";
import {mapAuthorizationApiToAuthorizationVm} from "common/auth/auth.mapper";

interface Props {
    onNavigate: () => void;
}

export const useAuth = (props: Props) => {
    const {onChangeAuth} = React.useContext(AuthContext);

    const handleAuth = React.useCallback(async () => {
        try {
            const authApiModel = await getToken();
            const authVm = mapAuthorizationApiToAuthorizationVm(authApiModel);
            onChangeAuth(authVm);
            props.onNavigate();
        } catch (error) {
            console.log('Error: ', error);
        }
    }, []);

    return {
        onAuth: handleAuth,
    };
};
