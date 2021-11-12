import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import * as React from "react"
import Head from "./header";
import './style.css';
import SignIn from "./SigIn"

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
   const getAllUsers =  async () => await axios.get(' http://localhost:3001/users').then((res) => setUsers(res.data));
   getAllUsers()
   
  }, [])

  return (
    // <div >
    //  {users.map((user) => <pre>{user.name}</pre>)}
    // </div>
    <div  className="page">
    <Head/>
    <SignIn/>
    </div>
  );
}

export default App;
