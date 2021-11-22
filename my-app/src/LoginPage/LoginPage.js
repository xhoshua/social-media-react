import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';



class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
            <div class="control"> 
    <h1>
   Login
    </h1>
  </div>
  <form class="form"  onSubmit={this.handleSubmit}>
  
  <div className={'control block-cube block-input'+(submitted && !username ? ' has-error' : '')}>
    <input value={username} onChange={this.handleChange}   name="username"  type="text" placeholder="Username"/> 
    {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
    <div class="bg-top">
      <div class="bg-inner"></div>
    </div>
    <div class="bg-right">
     <div class="bg-inner"></div>
    </div>
    <div class="bg">
      <div class="bg-inner"></div>
    </div>
  </div>
  <div className={'control block-cube block-input'+ (submitted && !password ? ' has-error' : '')}>
    <input value={password} onChange={this.handleChange} name="password" type="password" placeholder="Password" />
    {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
    <div class="bg-top">
      <div class="bg-inner"></div>
    </div>
    <div class="bg-right">
      <div class="bg-inner"></div>
    </div>
    <div class="bg">
      <div class="bg-inner"></div>
    </div>
  </div>
  <button class="btn block-cube block-cube-hover">
       {loggingIn    }
    <div class="bg-top">
      <div class="bg-inner"></div>
    </div>
    <div class="bg-right">
      <div class="bg-inner"></div>
    </div>
    <div class="bg">
      <div class="bg-inner"></div>
    </div>
    <div class="text">
     Log In
    </div>
    </button>
     <Link to="/register" className="btn btn-link">Register</Link>
</form>

  </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };