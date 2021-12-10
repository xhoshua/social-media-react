import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import Head  from '../header';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
class App extends React.Component {
    
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <Router history={history}>
            <div className="jumbotron">
            <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent ">
         
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
              <FontAwesomeIcon icon={faHouseUser} size="3x" color="white"/>           
                 </Link>
            </li>
          </div>
          {/* <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                <FontAwesomeIcon icon={faUser} size="3x"/> 
                </Link>
              </li>

             
            </div> */}
            <div className="navbar-nav ml-auto">
        <li class="dropdown">
          <a href="#"  data-toggle="dropdown" > <FontAwesomeIcon icon={faBars} size="3x" color="white"/></a>
          <ul class="dropdown-menu pull-right" role="menu">
            <li ><a href="/login">LogOut</a></li>
          </ul>
        </li>
            </div>
  
           
          
        </nav>
        </div>

                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />                     
                                <Route path="/register" component={RegisterPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
             </Router>
        );
        
    }
    
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };