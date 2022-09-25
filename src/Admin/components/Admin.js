import React from "react";
import { Switch, Route } from "react-router-dom";
import Lay_out from "../../Admin/containers/Lay_out";
import Category from "../../Admin/components/Category";
import { configstore } from "../../redux/store";
import Product from "../../Admin/components/Product";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { PersistGate } from "redux-persist/integration/react";
function Admin(props) {
  let { store, persistor } = configstore();
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <Switch>
              <Lay_out>
                <Route path={"/Category"} exact component={Category} />
                <Route path={"/products"} exact component={Product} />
              </Lay_out>
            </Switch>
          </Provider>
        </PersistGate>
      </SnackbarProvider>
    </>
  );
}

export default Admin;
