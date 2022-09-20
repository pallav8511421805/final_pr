import logo from "./logo.svg";
import "./App.css";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Terminal from "./components/Terminal";
import Product from "./components/Product";
import Blog from "./components/Blog";
import Login from "./components/Login";
import Addtocart from "./components/Addtocart";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <Header />
            <Switch>
              <Route path="/H" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/terminal" exact component={Terminal} />
              <Route path="/product" exact component={Product} />
              <Route path="/blog" exact component={Blog} />
              <Route path="/login" exact component={Login} />
              <Route path="/addto" exact component={Addtocart} />
            </Switch>
            <Footer />
          </Provider>
        </PersistGate>
      </SnackbarProvider>
    </>
  );
}

export default App;
