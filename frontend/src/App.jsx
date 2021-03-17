import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

import {Switch} from 'react-router-dom';
import ProductPage from './components/Product/ProductPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch className='py-1'>
        <Route exact path='/' component={Home} />
        <Route path='/product/:id' component={ProductPage}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
