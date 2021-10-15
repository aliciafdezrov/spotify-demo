import React from 'react';
import * as api from './api';
import {AuthContext} from 'common/auth';
import {mapApiCatalogToCatalog} from "./catalog.mapper";
import {Catalog, createInitialCatalog, SearchTypes} from "./catalog.vm";
import {debounce} from "lodash";
import {useHistory, useLocation} from "react-router-dom";
import {routes} from "../../core/router";
import {LocationDescriptor} from "history";
import {getToken} from "../../common/auth/api/auth.api";
import {mapAuthorizationApiToAuthorizationVm} from "../../common/auth/auth.mapper";

interface Props {
    onLoadCatalog: (vmCatalog: Catalog) => void;
}

export const useSearch = (props: Props) => {
    const {onChangeAuth} = React.useContext(AuthContext);
    const history = useHistory();

    const debouncedSearch = debounce(async (query: string, types: Array<SearchTypes> = [SearchTypes.album, SearchTypes.track, SearchTypes.artist]) => {
        await handleSearch(query, types);
    }, 500);

    const handleSearch = React.useCallback(async (query: string, types: Array<SearchTypes> = [SearchTypes.album, SearchTypes.track, SearchTypes.artist], isFirstCall: boolean = true) => {
        try {
            let vmCatalog: Catalog = createInitialCatalog();
            let locationDescriptor: LocationDescriptor = {
                pathname: routes.catalog,
            }

            if (query) {
                const encodedQuery: string = encodeURIComponent(query);
                const apiCatalog = await api.getSpotifyCatalog(encodedQuery, types);
                vmCatalog = mapApiCatalogToCatalog(apiCatalog);
                locationDescriptor.search = `?search=${encodedQuery}`;
            }
            history.push(locationDescriptor);
            props.onLoadCatalog(vmCatalog);
        } catch (error) {
            if (error?.status === 401 && isFirstCall) {
                const authApiModel = await getToken();
                const authVm = mapAuthorizationApiToAuthorizationVm(authApiModel);
                onChangeAuth(authVm);
                await handleSearch(query, types, false);
            } else if (error?.status === 400) {
                window.location.href = `${process.env.API_BASE}${routes.root}`
            }
        }
    }, []);

    return {
        onSearch: debouncedSearch,
    };
};

export const useSearchQueryParams = () => {
    const location = useLocation();

    const getQueryParam = React.useCallback((query: string) => {
        const searchParams = new URLSearchParams(location.search);
        const queryResult = searchParams.get(query);
        if (queryResult) {
            return queryResult;
        }
        return '';
    }, []);

    return {
        getQueryParam,
    };
}
