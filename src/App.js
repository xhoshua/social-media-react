import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import * as React from "react"
import { Grid, GridItem } from "@chakra-ui/react"
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"

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
    <>
<Grid
  h="200px"
  templateRows="repeat(2, 1fr)"
  templateColumns="repeat(5, 1fr)"
  gap={4}
>

  <GridItem colSpan={5} bg="tomato" />
</Grid>


    </>
  );
}

export default App;
