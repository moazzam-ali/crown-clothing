import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';


function HatsPage() { 
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
}


function App() {
  return (
    <div>
      <Router>
       <Routes>
          <Route path='/' element = {<HomePage/>} />
          <Route path='/shop' element = {<ShopPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
