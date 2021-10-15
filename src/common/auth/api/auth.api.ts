import {AuthorizationApiModel} from "./auth.api-model";

export const getToken = async (): Promise<AuthorizationApiModel> => {
    try {
        const url = `${process.env.SPOTIFY_ACCOUNTS}/api/token`;
        const authorizationHeader = window.btoa(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${authorizationHeader}`
            },
            body: `grant_type=client_credentials`
        });

        if (response.ok) {
            return await response.json();
        }
    } catch (exception) {
        console.log('Exception: ', exception);
    }
};
