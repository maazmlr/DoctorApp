import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function Alerter({msg,severity}){
    return(
        
    <Alert variant="filled" severity={severity}>
        {msg}

      </Alert>
      
    )
}

