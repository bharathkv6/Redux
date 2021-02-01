import React from 'react';
import classes from './button.module.css';

const button = (props) => (
    <button onClick={props.handler} className={classes.button}>{props.title}</button>
)

export default button;