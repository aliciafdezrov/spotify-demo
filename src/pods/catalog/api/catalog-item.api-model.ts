export interface SearchCatalogApiModel {
    albums: ItemListCatalogApiModel;
    artists: ItemListCatalogApiModel;
    tracks: ItemListCatalogApiModel;
}

export interface ItemListCatalogApiModel {
    items: Array<AlbumItemApiModel | ArtistItemApiModel | TrackItemApiModel>;
}

export interface AlbumItemApiModel {
    id: string;
    name: string;
    images: Array<ImageApiModel>;
    type: string;
}

export interface ArtistItemApiModel {
    id: string;
    name: string;
    images: Array<ImageApiModel>;
    type: string;
}

export interface TrackItemApiModel {
    id: string;
    name: string;
    type: string;
    album: AlbumItemApiModel;
}

export interface ImageApiModel {
    url: string;
    width: number;
    height: number;
}
