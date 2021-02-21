import React from 'react';
import { Alert } from 'reactstrap';

export default function AlertLogin(props) {
    console.log(props);
    return (
        <Alert color="info">
            {props.message}
        </Alert>   
    )
}