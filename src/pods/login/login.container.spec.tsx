import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {LoginContainer} from "./login.container";
import {AuthContext, createEmptyAuthorization} from "../../common/auth";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import * as useAuth from "./login.hooks";

const renderWithRouter = (component) => {
    return {
        ...render(
            <BrowserRouter>
                <Switch>
                    <Route path="/test" component={LoginContainer}/>
                </Switch>
                {component}
            </BrowserRouter>
        ),
    };
};

describe('Login container specs', () => {
    it('should display the login container when there is no token', () => {
        const authMocked = createEmptyAuthorization();
        renderWithRouter(
            <AuthContext.Provider value={{auth: authMocked, onChangeAuth: jest.fn()}}>
                <LoginContainer/>
            </AuthContext.Provider>
        );
        const headingElement = screen.getByRole('heading') as HTMLHeadingElement;
        const buttonElement = screen.getByRole('button') as HTMLButtonElement;
        expect(headingElement).toHaveTextContent('Login to continue');
        expect(buttonElement).toHaveTextContent('Login to spotify');
    });

    it('should call on change auth when click on login button', () => {
        const authMocked = createEmptyAuthorization();
        const onAuthStub = jest.fn();
        const spy = jest.spyOn(useAuth, 'useAuth');
        spy.mockReturnValue({
            onAuth: onAuthStub,
        })
        renderWithRouter(
            <AuthContext.Provider value={{auth: authMocked, onChangeAuth: jest.fn()}}>
                <LoginContainer/>
            </AuthContext.Provider>
        );
        const buttonElement = screen.getByRole('button') as HTMLButtonElement;
        fireEvent.click(buttonElement)
        expect(onAuthStub).toHaveBeenCalled();
    });

    it('should not display the login container when there is token', () => {
        const authMocked = createEmptyAuthorization();
        authMocked.accessToken = 'access_token';
        renderWithRouter(
            <AuthContext.Provider value={{auth: authMocked, onChangeAuth: jest.fn()}}>
                <LoginContainer/>
            </AuthContext.Provider>
        );
        const headingElement = screen.queryAllByRole('heading') as Array<HTMLHeadingElement>;
        const buttonElement = screen.queryAllByRole('button') as Array<HTMLButtonElement>;
        expect(headingElement.length).toBe(0);
        expect(buttonElement.length).toBe(0);
    });
});
