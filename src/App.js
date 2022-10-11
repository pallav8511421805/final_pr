import "./App.css";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import Approute from "./Routing/Approute";

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
