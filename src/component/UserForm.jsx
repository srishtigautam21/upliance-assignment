import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { useUser } from "../context/userContext";

const UserForm = () => {
  //   const [form, setForm] = useState({
  //     id: "",
  //     name: "",
  //     email: "",
  //     address: "",
  //     phone: 0,
  //   });
  //   const [userData, setUserData] = useState([]);

  //   const handleFormData = () => {
  //     setForm((prev) => ({
  //       ...prev,
  //       id: (Date.now() * Math.random()).toFixed(0),
  //     }));
  //     setUserData((prev) => [...prev, form]);
  //     localStorage.setItem("userArr", JSON.stringify(userData));
  //     console.log(userData);
  //   };
  const { form, setForm, handleFormData, handleInput, userData } = useUser();
  useEffect(() => {
    console.log("2nd", userData);
    localStorage.setItem("userArr", JSON.stringify(userData));
  }, [userData]);
  return (
    // <Form onSubmit={handleFormData}>
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
        {/* <Form useSub> */}
        <FormControl isRequired mb='20px'>
          <FormLabel color='teal'>Name:</FormLabel>
          <Input
            type='text'
            name='name'
            value={form.name}
            onChange={
              // (e) =>
              //   setForm((prev) => ({ ...prev, name: e.target.value }))
              //   setForm({ ...form, name: e.target.value })
              handleInput
            }
          ></Input>
        </FormControl>
        <FormControl isRequired mb='20px'>
          <FormLabel color='teal'>Email:</FormLabel>
          <Input
            type='email'
            name='email'
            value={form.email}
            onChange={
              // (e) =>
              //   setForm((prev) => ({ ...prev, email: e.target.value }))
              //   setForm({ ...form, email: e.target.value })
              handleInput
            }
          ></Input>
        </FormControl>
        <FormControl isRequired mb='20px'>
          <FormLabel color='teal'>Address:</FormLabel>
          <Input
            type='text'
            name='address'
            value={form.address}
            onChange={
              // (e) =>
              //   setForm((prev) => ({ ...prev, address: e.target.value }))
              //   setForm({ ...form, address: e.target.value })
              handleInput
            }
          ></Input>
        </FormControl>
        <FormControl isRequired mb='20px'>
          <FormLabel color='teal'>Phone:</FormLabel>
          <Input
            type='number'
            name='phone'
            value={form.phone}
            onChange={
              // (e) =>
              //   setForm((prev) => ({ ...prev, phone: e.target.value }))
              //   setForm({ ...form, phone: e.target.value })
              handleInput
            }
          ></Input>
        </FormControl>
        {/* </Form> */}
        <Button
          colorScheme='teal'
          size='md'
          // onClick={() => handleIncrement()}
          // disabled={disableBtn}
          cursor='pointer'
          w='100%'
          // type='submit'
          onClick={() => {
            // setForm((prev) => ({
            //   ...prev,
            //   id: Date.now().toString(),
            // }));
            handleFormData();
            setForm({ ...form, name: "", email: "", address: "", phone: "" });
          }}
        >
          Submit
        </Button>
      </Box>
    </Flex>
    // </Form>
  );
};

export default UserForm;
