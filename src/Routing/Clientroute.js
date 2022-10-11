import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../containers/Footer';
import Header from '../containers/Header';

function Clientroute({component:Component,...rest}) {
    const auth = useSelector(state => state.auth)
    return (
        <Route {...rest} render={props => (
        auth.user !== null ?
        <>
        <Header/>
        <Component {...props}/>
        <Footer/>
        </>
        :
        <>
        <Header/>
        <Redirect to="/login"/>
        <Footer/>
        </>
        )}
        
        />
    );
}

export default Clientroute;