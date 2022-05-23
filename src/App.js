import { Provider } from "react-redux";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import store from "./store";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path='/shopList' exact element={<Home />} />
            <Route path='/shopList/category' element={<Category />} />
          </Routes>
        </Provider>
      </Router>
    </>
  );
}

export default App;
