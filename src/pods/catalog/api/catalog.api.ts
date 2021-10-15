import {SearchTypes} from "../catalog.vm";
import {SearchCatalogApiModel} from "./catalog-item.api-model";
import {getAuthHeader} from "../../../common/auth";
import {SPOTIFY_API_CODE} from "../../../core/const";

export const getSpotifyCatalog = async (query: string, types: Array<SearchTypes>, offset: number = 0, limit: number = 20): Promise<SearchCatalogApiModel> => {
    try {
        const url = `${process.env.SPOTIFY_API}/search?q=${query}&type=${types.join(',')}&offset=${offset}&limit=${limit}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {'Authorization': getAuthHeader(SPOTIFY_API_CODE)},
        });

        if (response.ok) {
            return await response.json()
        }
        throw response;

    } catch (exception) {
        throw exception;
    }
};
