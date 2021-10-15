import {Authorization, createEmptyAuthorization} from "./auth.vm";

export const setAuthVm = (header: string, value: Authorization) => sessionStorage.setItem(header, window.btoa(JSON.stringify(value)));

export const getAuthVm = (header: string) => {
    try {
        let authVm = createEmptyAuthorization();
        const authBase64FromSessionStorage = sessionStorage.getItem(header);

        if (authBase64FromSessionStorage) {
            const decodedAuthFromSessionStorage = window.atob(authBase64FromSessionStorage);
            const authVmFromSessionStorage: Authorization = JSON.parse(decodedAuthFromSessionStorage);
            authVm = {...authVm, ...authVmFromSessionStorage};
        }

        return authVm;
    } catch (e) {
        return createEmptyAuthorization();
    }
}

export const getAuthHeader = (header: string): string => {
    try {
        const authBase64FromSessionStorage = sessionStorage.getItem(header);
        if (!authBase64FromSessionStorage) {
            return null;
        }
        const authVm: Authorization = JSON.parse(window.atob(authBase64FromSessionStorage));
        return `${authVm.tokenType} ${authVm.accessToken}`;
    } catch (e) {
        return null;
    }
};
