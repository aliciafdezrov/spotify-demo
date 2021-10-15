import {getAuthHeader, getAuthVm, setAuthVm} from "./auth.helper";
import {createEmptyAuthorization} from "./auth.vm";

describe('Auth helper: getAuthHeader ', () => {
    beforeEach(() => {
        window.sessionStorage.clear();
    });

    it('should return null when the authorization is not valid', () => {
        window.sessionStorage.setItem('test', 'blabla');
        const result = getAuthHeader('test');
        expect(result).toEqual(null);
    });

    it('should return null when the authorization is an empty string', () => {
        window.sessionStorage.setItem('test', '');
        const result = getAuthHeader('test');
        expect(result).toEqual(null);
    });

    it('should return null when the authorization is null', () => {
        window.sessionStorage.setItem('test', null);
        const result = getAuthHeader('test');
        expect(result).toEqual(null);
    });

    it('should return the authorization header when there is a token in storage', () => {
        const mockAuthApiModel = {
            accessToken: 'blabla',
            tokenType: 'Bearer',
            expiresIn: 3600
        };
        window.sessionStorage.setItem('test', window.btoa(JSON.stringify(mockAuthApiModel)));
        const result = getAuthHeader('test');
        expect(result).toEqual('Bearer blabla');
    });
});

describe('Auth helper: getAuthVm ', () => {
    beforeEach(() => {
        window.sessionStorage.clear();
    });

    it('should return an empty authorization when the authorization from storage is not valid', () => {
        window.sessionStorage.setItem('test', '');
        const result = getAuthVm('test');
        expect(result).toEqual(createEmptyAuthorization());
    });

    it('should return an empty authorization when the authorization from storage is not valid', () => {
        window.sessionStorage.setItem('test', null);
        const result = getAuthVm('test');
        expect(result).toEqual(createEmptyAuthorization());
    });

    it('should return an empty authorization when the authorization from storage is not valid', () => {
        window.sessionStorage.setItem('test', 'blabla');
        const result = getAuthVm('test');
        expect(result).toEqual(createEmptyAuthorization());
    });

    it('should return the fields that are in storage', () => {
        const mockAuthApiModel = {
            accessToken: 'blabla',
            tokenType: 'Bearer',
        };
        window.sessionStorage.setItem('test', window.btoa(JSON.stringify(mockAuthApiModel)));
        const result = getAuthVm('test');
        expect(result.tokenType).toEqual('Bearer');
        expect(result.accessToken).toEqual('blabla');
    });

    it('should an empty authorization when there is nothing in the storage', () => {
        const mockAuthApiModel = {
            accessToken: '',
            tokenType: '',
            expiresIn: 0,
        };
        window.sessionStorage.setItem('test', window.btoa(JSON.stringify(mockAuthApiModel)));
        const result = getAuthVm('test');
        expect(result).toEqual(createEmptyAuthorization());
    });
});

describe('Auth helper: setAuthVm ', () => {
    beforeEach(() => {
        window.sessionStorage.clear();
    });

    it('should storage the auth info in base64', () => {
        const mockAuthVMModel = {
            accessToken: 'Blabla',
            tokenType: 'Bearer',
            expiresIn: 3600,
        };
        setAuthVm('test', mockAuthVMModel);
        window.sessionStorage.getItem('test')
        expect(window.sessionStorage.getItem('test')).toEqual('eyJhY2Nlc3NUb2tlbiI6IkJsYWJsYSIsInRva2VuVHlwZSI6IkJlYXJlciIsImV4cGlyZXNJbiI6MzYwMH0=');
    });
});
