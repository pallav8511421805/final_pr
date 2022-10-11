import "./App.css";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Terminal from "./components/Terminal";
import Products from "./components/Product";
import Login from "./components/Login";
import Addtocart from "./components/Addtocart";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { PersistGate } from "redux-persist/integration/react";
import Lay_out from "./Admin/containers/Lay_out";
import Category from "./Admin/components/Category";
import { store, persistor } from "./redux/store";
import Product from "./Admin/components/Product";
import Productdetails from "./components/Productdetails";
import Chackout from "./components/Chackout";
import Placeorder from "./components/Placeorder";
import Orderdata from "./Admin/components/Orderdata";
import Filterproducts from "./components/Filterproducts";
import Approute from "./Routing/Approute";
// import Page404 from "./components/Page404";
function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            
            <Approute/>
            
          </Provider>
        </PersistGate>
      </SnackbarProvider>
    </>
  );
}

export default App;
