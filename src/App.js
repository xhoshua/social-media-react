import axios from "axios";
import React, { useState, useEffect } from "react";
import Head from "./header";
import "./style.css";
import Login from "./components/SigIn.js";
import FooterPage from "./foot";
import { history } from "./helpers/history";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

const App =()=> {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  // const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  // useEffect(() => {
  //   if (currentUser) {
  //     setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
  //     setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
  //   }
  // }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Router history={history}>
   
    <div className="page">
      <Head />
      <Login />
      <FooterPage />
    </div>
    </Router>
  );
}

export default App;
