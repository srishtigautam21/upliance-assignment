import "./App.css";
import Counter from "./component/Counter";
import { Heading, Flex, Box } from "@chakra-ui/react";

function App() {
  return (
    <Box p={0} m={0}>
      <Flex alignItems='center' justifyContent='right' gap='4' p={5}>
        <Heading fontSize='20' _hover={{ color: "blue", cursor: "pointer" }}>
          Home
        </Heading>

        <Heading fontSize='20' _hover={{ color: "blue", cursor: "pointer" }}>
          User
        </Heading>
      </Flex>
      <Counter />
    </Box>
  );
}

export default App;
