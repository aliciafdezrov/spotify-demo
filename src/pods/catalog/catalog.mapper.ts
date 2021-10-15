import {Catalog, CatalogItem, createInitialCatalog, createInitialCatalogItem} from "./catalog.vm";
import {AlbumItemApiModel, ArtistItemApiModel, SearchCatalogApiModel, TrackItemApiModel} from "./api";

export const mapAlbumOrArtistItemApiToCatalogItem = (item: AlbumItemApiModel | ArtistItemApiModel): CatalogItem => {
    const catalogItem = createInitialCatalogItem();
    catalogItem.id = item.id;
    catalogItem.name = item.name;
    if (item.images?.length) {
        catalogItem.image = item.images[1];
    }
    return catalogItem;
};

export const mapTrackItemApiToCatalogItem = (item: TrackItemApiModel): CatalogItem => {
    const catalogItem = createInitialCatalogItem();
    catalogItem.id = item.id;
    catalogItem.name = item.name;
    if (item.album?.images?.length) {
        catalogItem.image = item.album.images[1];
    }
    return catalogItem;
};

export const mapApiCatalogToCatalog = (data: SearchCatalogApiModel): Catalog => {
    const catalog: Catalog = createInitialCatalog();
    catalog.albums = data.albums.items.map(mapAlbumOrArtistItemApiToCatalogItem);
    catalog.artists = data.artists.items.map(mapAlbumOrArtistItemApiToCatalogItem);
    catalog.tracks = data.tracks.items.map(mapTrackItemApiToCatalogItem);
    return catalog;
};
