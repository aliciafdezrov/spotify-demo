import React from 'react';
import classes from './not-found.style.scss';
import {routes} from "../../core/router";
import {Link} from "react-router-dom";

export const NotFound: React.FC = () => {
    return (
        <div className={classes.notFoundContainer}>
            <h1 className={classes.notFoundText}>
                404
            </h1>
            <h2 className={classes.notFoundText}>Page Not Found</h2>

            <div className={classes.backIndex}>
                <Link aria-label="link to main login page due to not found"
                      to={routes.root}>Back to index</Link></div>
        </div>
    );
};
