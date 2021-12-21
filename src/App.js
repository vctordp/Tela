
import Home from './pages/home';
import Escolha from './pages/escolha';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    {/* <Home/> */}
    <Home/>
    {/* <Route component = { Home }  path="/" exact />
    <Route component = { Escolha }  path="/escolha" exact /> */}
    </>
  );
}

export default App;
