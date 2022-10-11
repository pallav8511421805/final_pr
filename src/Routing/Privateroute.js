import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Lay_out from '../Admin/containers/Lay_out';

function Privateroute({component:Component,...rest}) {
    const auth = useSelector(state => state.auth)
    return (
        <Route {...rest} render={props => (
            auth.user !== null && auth.user.role === 'admin' ? <>
            <Lay_out>
                <Component {...props}/>
            </Lay_out>
            </> : 
            <Redirect to='/'/>
        )}
        
        />
    );
}

export default Privateroute;