import React from 'react';
import {
    Button
} from 'reactstrap';

export default function NewButton(props) {
    return(
        <Button type="button" className="login-button" onClick= {props.clickHandler}>Login</Button>
    )
   
}

