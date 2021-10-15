export interface CatalogItem {
    id: string;
    name: string;
    image: {
        url: string;
        width: number;
        height: number;
    };
}

export const createInitialCatalogItem = (): CatalogItem => ({
    id: '',
    name: '',
    image: {
        url: '',
        width: 0,
        height: 0
    },
});

export enum SearchTypes {
    album = 'album',
    artist = 'artist',
    track = 'track'
}

export interface Catalog {
    albums: Array<CatalogItem>;
    artists: Array<CatalogItem>;
    tracks: Array<CatalogItem>;
}

export const createInitialCatalog = (): Catalog => ({
    albums: [],
    artists: [],
    tracks: [],
});
