import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
   const getAllUsers =  async () => await axios.get(' http://localhost:3001/users').then((res) => setUsers(res.data));
   getAllUsers()
   
  }, [])

  return (
    <div >
     {users.map((user) => <pre>{user.name}</pre>)}
    </div>
  );
}

export default App;
