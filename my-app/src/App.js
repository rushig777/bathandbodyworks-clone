
import './App.css';
import {Navbar} from "./components/Navbar"
import {Footer} from "./components/Footer"
import { MainRoutes } from './MainRoutes/MainRoutes';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <MainRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
