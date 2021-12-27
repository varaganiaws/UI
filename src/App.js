import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Servicedetailtable from './Components/ServiceDetail/ServiceDetailTable';
// import Servicedetailtwo from './Components/Option2/ServiceDetailTwo';
import Notfound from './Helpers/NotFound';
import Login from './Auth/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/service/:service" element={<Servicedetailtable/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
