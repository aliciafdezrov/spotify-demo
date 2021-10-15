import React from 'react';
import {routes} from 'core/router';
import classes from "./login.style.scss"
import {Redirect, useHistory} from "react-router-dom";
import {useAuth} from "./login.hooks";
import {AuthContext} from "common/auth";

export const LoginContainer: React.FC = () => {
    const history = useHistory();
    const {auth} = React.useContext(AuthContext);
    const {onAuth} = useAuth({
        onNavigate: () => history.push(routes.catalog),
    });

    if (!auth.accessToken) {
        return (
            <div className={classes.loginScreenAlignment}>
                <h1 className={classes.title}>Login to continue</h1>
                <div>
                    <button id={"login-button"} className={classes.loginButton} type="submit" onClick={onAuth}>
                        Login to spotify
                    </button>
                </div>
            </div>
        );
    } else {
        return <Redirect to={routes.catalog}/>
    }
};
