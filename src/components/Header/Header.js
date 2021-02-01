import React from 'react';
import classes from './header.module.css';

const header = (props) => (
    <header className={classes.header}>
        Current counter: {props.count}
    </header>
);

export default header;