import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Category from '../Admin/components/Category';
import Orderdata from '../Admin/components/Orderdata';
import Product from '../Admin/components/Product';
import About from '../components/About';
import Addtocart from '../components/Addtocart';
import Chackout from '../components/Chackout';
import Filterproducts from '../components/Filterproducts';
import Home from '../components/Home';
import Login from '../components/Login';
import Placeorder from '../components/Placeorder';
import Products from '../components/Product';
import Productdetails from '../components/Productdetails';
import Terminal from '../components/Terminal';
import Publicroute from './Publicroute';
import Page404 from '../components/Page404';
import Privateroute from "../Routing/Privateroute";
import Clientroute from "../Routing/Clientroute";
function Approute(props) {
    return (
        <Switch>
        <Publicroute path="/productdetail" exact component={Productdetails} />
        <Publicroute path="/" exact component={Home} />
        <Publicroute path="/about" exact component={About} />
        <Publicroute path="/terminal" exact component={Terminal} />
        <Publicroute path="/product" exact component={Products} />
        <Publicroute path="/login" restricted={true} exact component={Login} />
        <Clientroute path="/addto" exact component={Addtocart} />
        <Clientroute path="/check" exact component={Chackout} />
        <Clientroute path={"/placeorder"} exact component={Placeorder} />
        <Publicroute path={"/filter"} exact component={Filterproducts} />

          <Privateroute path={"/Adminc"} exact component={Category} />
          <Privateroute path={"/Adminp"} exact component={Product} />
          <Privateroute path={"/Admino"} exact component={Orderdata} />

          <Publicroute path={"*"} component={Page404} />        
      </Switch>
    );
}

export default Approute;