

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../src/pages/home';
import Escolha from '../src/pages/escolha';


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/Escolha" element={<Escolha />} />
            
        </Routes>
    </Router>
  );
  }
export default App;
