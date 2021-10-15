import {mapAuthorizationApiToAuthorizationVm} from "./auth.mapper";

describe('Auth mapper', () => {
    it('should return the auth model with the data from the api', () => {
        const authApiModel = {
            access_token: 'some access token',
            token_type: 'Bearer',
            expires_in: 3600
        };

        const result = mapAuthorizationApiToAuthorizationVm(authApiModel);
        expect(result.accessToken).toEqual('some access token');
        expect(result.tokenType).toEqual('Bearer');
        expect(result.expiresIn).toEqual(3600);
    });
});
