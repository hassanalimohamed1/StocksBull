import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';


export default function Overlay () {
    return (
        <div className='overlay center'>
        <CircularProgress className='centerr' style={{color: "#85bb65"}} />
        </div>
    )
}