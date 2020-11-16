import Signup from './SignUp';
import Login from './Login';
import Dashboard from './Dashboard';
import OfficeList from './OfficeList';
import NewOffice from './NewOffice';
import PrivateRoute from './PrivateRoute';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Container>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/offices" component={OfficeList} />
            <PrivateRoute exact path="/new_office" component={NewOffice} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
      <ToastContainer />
    </Container>
  );
}

export default App;
