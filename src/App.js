import "./App.css";
import Counter from "./component/Counter";
import UserForm from "./component/UserForm";
import { Heading, Flex, Box } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Box p={0} m={0}>
      <Flex alignItems='center' justifyContent='right' gap='4' p={5}>
        <Link to='/'>
          <Heading fontSize='20' _hover={{ color: "blue", cursor: "pointer" }}>
            Home
          </Heading>
        </Link>
        <Link to='/users'>
          <Heading fontSize='20' _hover={{ color: "blue", cursor: "pointer" }}>
            User
          </Heading>
        </Link>
      </Flex>
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/users' element={<UserForm />} />
      </Routes>
    </Box>
  );
}

export default App;
