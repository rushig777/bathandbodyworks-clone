import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return <div className="App">
  <MainRoutes/>
  <Cart/>
  </div>;
}

export default App;
