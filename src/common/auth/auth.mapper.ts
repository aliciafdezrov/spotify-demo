import {AuthorizationApiModel} from "./api/auth.api-model";
import {Authorization, createEmptyAuthorization} from "./auth.vm";

export const mapAuthorizationApiToAuthorizationVm = (data: AuthorizationApiModel): Authorization => {
    const authVm = createEmptyAuthorization();
    authVm.tokenType = data.token_type;
    authVm.accessToken = data.access_token;
    authVm.expiresIn = data.expires_in;
    return authVm;
};
