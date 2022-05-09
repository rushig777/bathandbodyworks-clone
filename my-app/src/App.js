import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

import MainRoutes from "./Routes/MainRoutes";
import { SubRoutes } from "./Routes/subRoutes";




function App() {
  return (
    <div className="App">
      <SubRoutes/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
