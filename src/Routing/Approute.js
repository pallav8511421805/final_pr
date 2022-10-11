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

function Approute(props) {
    return (
        <Switch>
        <Publicroute path="/productdetail" exact component={Productdetails} />
        <Publicroute path="/" exact component={Home} />
        <Publicroute path="/about" exact component={About} />
        <Publicroute path="/terminal" exact component={Terminal} />
        <Publicroute path="/product" exact component={Products} />
        <Publicroute path="/login" restricted={true} exact component={Login} />
        <Publicroute path="/addto" exact component={Addtocart} />
        <Publicroute path="/check" exact component={Chackout} />
        <Publicroute path={"/placeorder"} exact component={Placeorder} />
        <Publicroute path={"/filter"} exact component={Filterproducts} />
        {/* <Route component={Page404} /> */}
        
          <Route path={"/Categoryadmin"} exact component={Category} />
          <Route path={"/productsadmin"} exact component={Product} />
          <Route path={"/ordersadmin"} exact component={Orderdata} />
        
      </Switch>
    );
}

export default Approute;