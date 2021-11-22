import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './register.css'
import { userActions } from '../_actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
            <div class="control">
    
    <h1>
   Register
    </h1>
  </div>
  <form class="form"  onSubmit={this.handleSubmit}>
 
  <div className={'control block-cube block-input' + (submitted && !user.firstName ? ' has-error' : '')}>
    <input value={user.firstName} onChange={this.handleChange} name="firstName"  type="text" placeholder="First Name"/> 
    {submitted && !user.firstName &&
                            <div className="help-block">First Name is required</div>
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
  <div className={ 'control block-cube block-input' + (submitted && !user.lastName ? ' has-error' : '')}>
    <input value={user.lastName} onChange={this.handleChange}  name="lastName"  type="text" placeholder="Last Name"/> 
    {submitted && !user.lastName &&
                            <div className="help-block">Last Name is required</div>
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
  
  <div className={'control block-cube block-input'+(submitted && !user.username ? ' has-error' : '')}>
    <input value={user.username} onChange={this.handleChange}   name="username"  type="text" placeholder="Username"/> 
    {submitted && !user.username &&
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
  <div className={'control block-cube block-input'+ (submitted && !user.password ? ' has-error' : '')}>
    <input value={user.password} onChange={this.handleChange} name="password" type="password" placeholder="Password" />
    {submitted && !user.password &&
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
       {registering     }
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
     Register
    </div>
    </button>
    
</form>

  </div>
          
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };