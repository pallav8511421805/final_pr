import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../containers/Footer';
import Header from '../containers/Header';

function Publicroute({component:Component,restricted=false,...rest}) {
    const auth = useSelector(state => state.auth)
    return (
        <Route {...rest} render={props =>(
            auth.user !== null && restricted ? 
            
            <>
        <Header/>
        <Redirect to="/login"/>
        <Footer/>
        
        </>
        :

        <>
        <Header/>
        <Component {...props}/>
        <Footer/>
        </> 
        )}/>
    );
}

export default Publicroute;