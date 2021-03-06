import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userActions } from '../_actions';
import {configureFakeBackend} from '../_helpers';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
 import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
 import { faCss3 } from '@fortawesome/free-brands-svg-icons'
 import { faJs } from '@fortawesome/free-brands-svg-icons'
import { users } from '../_reducers/users.reducer';

const target = {
    clicked: 0,
    currentFollowers: 90,
    btn: document.querySelector("a.btn"),
    fw: document.querySelector("span.followers")
  };
  
  const follow = () => {
    target.clicked += 1;
    target.btn.innerHTML = 'Following <i class="fas fa-user-times"></i>';
  
    if (target.clicked % 2 === 0) {
      target.currentFollowers -= 1;
      target.btn.innerHTML = 'Follow <i class="fas fa-user-plus"></i>';
    }
    else {
      target.currentFollowers += 1;
    }
  
    target.fw.textContent = target.currentFollowers;
    target.btn.classList.toggle("following");
  }

class HomePage extends React.Component {
    componentDidMount() {
      
        this.props.getUsers();
    }
    test(){
      console.log(this.users)
    }
    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }
    handleUpdateUser(id) {
      return (e) => this.props.updateUser(id);
  }

    render() {
        const { user, users } = this.props;
        return (
          
            <div className="col-md-6 col-md-offset-3">
              {user.username=="admin"? 
            <div>
              <h1>Admin</h1>
              <table>
            <thead >
                <tr style={{color:"white"}}>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody style={{color:"white"}}>
          
            {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <>
                        {users.items.map((user, index) =>
                              <tr key={user.id}>
                              <td >{user.id}</td>
                              <td > {user.firstName}</td>
                              <td > {user.lastName}</td>
                              <td > {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                } </td>
                                 <td > {
                                    user.updating ? <em> - Updating...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.updateError}</span>
                                    : <span> - <a onClick={this.handleUpdateUser(user.id)}>Update</a></span>
                                } </td>
                                </tr>
                          
                        )}
                    </>
    }
            </tbody>
        </table>
              </div>
            :
            <div class="card">
              
            <div class="ds-top"></div>
            <div class="avatar-holder">
              <img src="http://source.unsplash.com/random/250x250" alt="Profile Pic" />
            </div>
            <div class="name">
              <h2  target="_blank">{user.firstName}</h2>
              <h6 title="Followers"><FontAwesomeIcon icon={faUserPlus}/><span class="followers">90</span></h6>
            </div>
            
            <div class="button" style={{borderColor:"transparent"}} onClick={this.test()}>
              <a href="#" class="btn" onmousedown="follow();">Follow <FontAwesomeIcon icon={faUserPlus}/></a>
            </div>
            <div class="ds-info">
              <div class="ds pens">
                <h6 title="Number of pens created by the user">Pens <FontAwesomeIcon icon={faEdit}/></h6>
                <p>29</p>
              </div>
              <div class="ds projects">
                <h6 title="Number of projects created by the user">Projects <FontAwesomeIcon icon={faProjectDiagram}/></h6>
                <p>0</p>
              </div>
              <div class="ds posts">
                <h6 title="Number of posts">Posts <FontAwesomeIcon icon={faComments}/></h6>
                <p>0</p>
              </div>
            </div>
            <div class="ds-skill">
              <h6>Skill  <FontAwesomeIcon icon={faCode} /></h6>
              <div class="skill html">
                <h6><FontAwesomeIcon icon={faHtml5} /> HTML5 </h6>
                <div class="bar bar-html">
                  <p>95%</p>
                </div>
              </div>
              <div class="skill css">
                <h6><FontAwesomeIcon icon={faCss3} /> CSS3 </h6>
                <div class="bar bar-css">
                  <p>90%</p>
                </div>
              </div>
              <div class="skill javascript">
                <h6><FontAwesomeIcon icon={faJs} /> JavaScript </h6>
                <div class="bar bar-js">
                  <p>75%</p>
                </div>
              </div>
            </div>
          </div>
            
            }
             </div>   
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };