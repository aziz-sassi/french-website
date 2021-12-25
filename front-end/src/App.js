import './App.css';
import Home from './pages';
import about from './pages/about';
import services from './pages/services';
import contactus from './pages/contactUs';

import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';


function App() {
  return (
    <Router>

   <Switch>
     <Route path="/" component={Home} exact />
     <Route path='/about' component={about} exact />
     <Route path='/services' component={services} exact />
     <Route path='/contactus' component={contactus} exact />
   </Switch>
    </Router>
  );
}

export default App;
