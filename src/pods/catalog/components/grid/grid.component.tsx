import React from 'react';
import classes from "./grid.style.scss";
import {GridItem} from "./grid-item.component";
import {CatalogItem} from "../../catalog.vm";

interface Props {
    items: Array<CatalogItem>;
    categoryType: string;
}

export const Grid: React.FC<Props> = (props) => {
    const {categoryType, items} = props;

    return (
        <section className={classes.section}>
            <div className={classes.sectionHeader}>
                <h2 id={`category-header-${categoryType}`}>{categoryType}</h2>
            </div>
            <div>
                <div id={`catalog-items-${categoryType}`} className={classes.gridContainer}>
                    {
                        items.map(item => <GridItem key={item.id} item={item}/>)
                    }
                </div>
            </div>
        </section>
    );
};
