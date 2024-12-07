import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import Navbar from "./Components/Navbar";
import store from "./Store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <div style={{ marginTop: "5rem" }}>
            <AppRoutes />
          </div>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
