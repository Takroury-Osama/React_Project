import Header from './mainComponents/header'
import Footer from './mainComponents/footer'

import Home from './components/home'
import Booking from './components/booking'
import Contact from './components/contact'
import Maintenance from './components/maintenance'
import Consultation from './components/consultation'
import AdminPage from './components/adminpage'
import ErrorPage from'./components/errorpage'


//import LogIn from './components/login'
//import SignUp from './components/signup'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/home'><Home /></Route>
          <Route path='/booking'><Booking /></Route>
          <Route path='/contact'><Contact /></Route>
          <Route path='/maintenance'><Maintenance /></Route>
          <Route path='/consultation'><Consultation /></Route>
          <Route path='/adminpage'><AdminPage /></Route>
          
          <Route path='*'><ErrorPage /></Route>
    {
      //    <Route path='/login'><LogIn /></Route>
      //    <Route path='/signup'><SignUp /></Route>
      //    <Route path='/coupon'><Copupon /></Route>
    }
        </Switch>
        <Footer></Footer>
      </Router>
  )
}

export default App;
