import React from 'react';
import { Router, Switch } from 'react-router-dom';
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
import { switchhistory } from '../History/history';
function Approute(props) {
    return (
      <Router history={switchhistory}>
        <Switch>
        <Publicroute path="/productdetail" exact component={Productdetails} />
        <Publicroute path="/" exact component={Home} />
        <Publicroute path="/about" exact component={About} />
        <Publicroute path="/terminal" exact component={Terminal} />
        <Clientroute path="/product" exact component={Products} />
        <Publicroute path="/login" restricted={true} exact component={Login} />
        <Clientroute path="/addto" exact component={Addtocart} />
        <Clientroute path="/check" exact component={Chackout} />
        <Clientroute path={"/placeorder"} exact component={Placeorder} />
        <Publicroute path={"/filter"} exact component={Filterproducts} />
        <Publicroute path={'*'} component={Page404} />
        
          <Privateroute path={"/Categoryadmin"} exact component={Category} />
          <Privateroute path={"/productsadmin"} exact component={Product} />
          <Privateroute path={"/ordersadmin"} exact component={Orderdata} />
        
      </Switch>
      </Router>
    );
}

export default Approute;