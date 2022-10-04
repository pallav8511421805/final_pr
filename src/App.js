import "./App.css";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Terminal from "./components/Terminal";
import Products from "./components/Product";
import Blog from "./components/Blog";
import Login from "./components/Login";
import Addtocart from "./components/Addtocart";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { PersistGate } from "redux-persist/integration/react";
import Lay_out from "./Admin/containers/Lay_out";
import Category from "./Admin/components/Category";
import { configstore } from "./redux/store";
import Product from "./Admin/components/Product";
import Productdetails from "./components/Productdetails";
import Chackout from "./components/Chackout";
import Placeorder from "./components/Placeorder";
// import Page404 from "./components/Page404";
function App() {
  let { store, persistor } = configstore();
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <Header />
            <Switch>
              <Route path="/productdetail" exact component={Productdetails} />
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/terminal" exact component={Terminal} />
              <Route path="/product" exact component={Products} />
              <Route path="/blog" exact component={Blog} />
              <Route path="/login" exact component={Login} />
              <Route path="/addto" exact component={Addtocart} />
              <Route path="/check" exact component={Chackout} />
              <Route path={"/placeorder"} exact component={Placeorder} />
              {/* <Route component={Page404} /> */}
              <Lay_out>
                <Route path={"/Category"} exact component={Category} />
                <Route path={"/products"} exact component={Product} />
              </Lay_out>
            </Switch>
            <Footer />
          </Provider>
        </PersistGate>
      </SnackbarProvider>
    </>
  );
}

export default App;
