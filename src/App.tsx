import { observer } from "mobx-react";
import React, { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import "./App.scss";
import { Loading } from "./components/Loading";
import { Map } from "./components/Map";
import { Sidebar } from "./components/Sidebar";
import { useQueryParams } from "./hooks";
import { RootStore } from "./stores/root.store";
import { StoreProvider } from "./stores/store.context";

const store = new RootStore();

const Home = () => {
  return (
    <div className="App">
      <Loading isLoading={store.isLoading} />
      <Sidebar />
      <Map />
    </div>
  );
};

const App = observer(function App() {
  const query = useQueryParams();
  const location = useLocation();
  const trackingNumber = query.get("trackingNumber");

  useEffect(() => {
    if (trackingNumber && location.pathname === "/") {
      store.load(trackingNumber);
    } else {
      store.clear();
    }
  }, [trackingNumber, location]);

  return (
    <StoreProvider store={store}>
      {" "}
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Navigate to="/" />} />
      </Routes>
      {/* </BrowserRouter> */}
    </StoreProvider>
  );
});

export default App;
