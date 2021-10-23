import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./pages/Login/Login";
import Register from './pages/Register/Register';
import Profile from "./pages/Profile/Profile";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/register' exact>
          <Register />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/profile' exact>
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
