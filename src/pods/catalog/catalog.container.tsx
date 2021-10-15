import React from 'react';
import {useSearch, useSearchQueryParams} from './catalog.hooks';
import {createInitialCatalog} from "./catalog.vm";
import {Grid} from "./components/grid/grid.component";
import {SearchBar} from "./components/search-bar/search-bar.component";
import classes from './catalog.style.scss';
import {SPOTIFY_API_CODE} from "../../core/const";
import {AuthContext, createEmptyAuthorization} from "../../common/auth";
import {useHistory} from "react-router-dom";
import {routes} from "../../core/router";

export const CatalogContainer: React.FC = () => {
    const {onChangeAuth} = React.useContext(AuthContext);
    const history = useHistory();
    const [catalog, setCatalog] = React.useState(createInitialCatalog());
    const {getQueryParam} = useSearchQueryParams();
    const {onSearch} = useSearch({
        onLoadCatalog: (vmCatalog) => setCatalog(vmCatalog),
    });

    React.useEffect(() => {
        let searchQuery = getQueryParam("search");
        if (searchQuery) {
            onSearch(searchQuery);
        }
    }, []);

    const onLogout = () => {
        sessionStorage.removeItem(SPOTIFY_API_CODE);
        onChangeAuth(createEmptyAuthorization())
        history.push(routes.root);
    }

    return (
        <>
            <header className={classes.searchBar}>
                <SearchBar defaultSearch={getQueryParam("search")} onSearch={onSearch}/>
                <button id={"logout-button"} className={classes.logoutButton} onClick={onLogout}>
                    Logout
                </button>
            </header>

            <main className={classes.main}>
                {
                    Object.keys(catalog).map(catalogKey => catalog[catalogKey].length > 0 && (
                        <Grid key={catalogKey} categoryType={catalogKey}
                              items={catalog[catalogKey]}/>)
                    )

                }
            </main>
        </>
    );
};
