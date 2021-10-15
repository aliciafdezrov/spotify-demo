import React from 'react';
import classes from "./grid-item.style.scss";
import {CatalogItem} from "../../catalog.vm";
const defaultItemImage = require("../../../../../assets/images/default-spotify.png");

interface Props {
    item: CatalogItem;
}

export const GridItem: React.FC<Props> = (props) => {
    const {item} = props;

    return (
        <div className={`${classes.card} ${classes.fadeInCard}`}>
            <img src={item.image.url}
                 alt={item.name}
                 onError={(e: any) => {
                     e.target.onerror = null;
                     e.target.src = defaultItemImage
                 }}
                 width="300"
                 height="300"/>
            <div className={classes.container}>
                <label>{item.name}</label>
            </div>
        </div>
    );
};
