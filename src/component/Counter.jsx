import React, { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState("#fffff");
  const [disableBtn, setDisableBtn] = useState(false);
  const [ht, setHeight] = useState(100);

  const handleDecrement = () => {
    if (count === 100) {
      setDisableBtn(true);
    }
    if (ht !== 100 && count <= 500) {
      setHeight(Number(ht) - 100);
    }
    setCount(Number(count) - 100);
    if (count === 900) setDisableBtn(false);
  };

  const handleIncrement = () => {
    if (count === "#fffff") {
      setCount("100");
    } else if (count === 900) {
      setDisableBtn(true);
    } else {
      setCount(Number(count) + 100);
      if (ht !== 500) {
        setHeight(Number(ht) + 100);
      }
    }
  };

  const handleReset = () => {
    setCount("#fffff");
  };

  return (
    <Box m={2} h='calc(90vh)'>
      <Flex direction='column' position='relative'>
        <Flex
          alignItems='center'
          justifyContent='center'
          gap={5}
          minHeight='calc(80vh)'
          zIndex={1000}
          w='100%'
          position='absolute'
        >
          <Button
            colorScheme='teal'
            size='md'
            onClick={() => handleDecrement()}
            disabled={disableBtn}
            cursor={disableBtn ? "not-allowed" : ""}
          >
            Decrement
          </Button>

          <Button colorScheme='teal' size='md' onClick={() => handleReset()}>
            Reset
          </Button>

          <Button
            colorScheme='teal'
            size='md'
            onClick={() => handleIncrement()}
            disabled={disableBtn}
            cursor={disableBtn ? "not-allowed" : ""}
          >
            Increment
          </Button>
        </Flex>
        <Box
          backgroundColor={`red.${count}`}
          w='100%'
          className='background'
          // height='100px'
          height={`${ht}px`}
          position='absolute'
        ></Box>
      </Flex>
    </Box>
  );
};

export default Counter;
