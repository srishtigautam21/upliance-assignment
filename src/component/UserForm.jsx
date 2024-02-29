import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import RichTextEditor from "./RichTextEditor";
import React, { useEffect } from "react";

import { useUser } from "../context/userContext";

const UserForm = () => {
  const { form, setForm, handleFormData, handleInput, userData } = useUser();

  useEffect(() => {
    localStorage.setItem("userArr", JSON.stringify(userData));
  }, [userData]);

  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='center'
      gap='4'
    >
      <Heading fontSize='20' color='teal'>
        User Data
      </Heading>
      <Box
        w='480px'
        m={5}
        p={5}
        bg='white'
        borderRadius='20px'
        boxShadow='5px 5px 5px 3px lightgray'
      >
        <FormControl isRequired mb='20px'>
          <FormLabel color='teal'>Name:</FormLabel>
          <Input
            type='text'
            name='name'
            value={form.name}
            onChange={handleInput}
          ></Input>
        </FormControl>
        <FormControl isRequired mb='20px'>
          <FormLabel color='teal'>Email:</FormLabel>
          <Input
            type='email'
            name='email'
            value={form.email}
            onChange={handleInput}
          ></Input>
        </FormControl>
        <FormControl isRequired mb='20px'>
          <FormLabel color='teal'>Address:</FormLabel>
          <Input
            type='text'
            name='address'
            value={form.address}
            onChange={handleInput}
          ></Input>
        </FormControl>
        <FormControl isRequired mb='20px'>
          <FormLabel color='teal'>Phone:</FormLabel>
          <Input
            type='number'
            name='phone'
            value={form.phone}
            onChange={handleInput}
          ></Input>
        </FormControl>

        <Button
          colorScheme='teal'
          size='md'
          cursor='pointer'
          w='100%'
          onClick={() => {
            handleFormData();
            setForm({
              ...form,
              name: "",
              email: "",
              address: "",
              phone: "",
            });
          }}
        >
          Submit
        </Button>
      </Box>
      {userData.length !== 0 && <RichTextEditor />}
    </Flex>
  );
};

export default UserForm;
