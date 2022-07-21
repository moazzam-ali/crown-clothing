import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


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
          <Route path='/shop/hats' element = {<HatsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
