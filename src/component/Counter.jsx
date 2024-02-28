import React, { useEffect, useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";

const Counter = () => {
  const [count, setCount] = useState("#fffff");
  // localStorage.setItem("bgColor", count);
  const [disableBtn, setDisableBtn] = useState(false);
  const [ht, setHeight] = useState(100);
  // localStorage.setItem("bgColor", count);
  // localStorage.setItem("bgHeight", ht);

  const handleDecrement = () => {
    if (count === 100) {
      setDisableBtn(true);
    }

    if (ht !== 100 && count <= 500) {
      setHeight(Number(ht) - 100);
    }
    setCount(Number(count) - 100);
    if (count === 900) setDisableBtn(false);
    // localStorage.setItem("bgColor", count);
    // localStorage.setItem("bgHeight", ht);
    console.log(count, ht, "in decre");
  };

  const handleIncrement = () => {
    console.log("here");
    // setHeight(localStorage.getItem("bgHeight"));
    // setCount(localStorage.getItem("bgColor"));
    if (count === "#fffff") {
      setCount("100");
    } else if (count === 900) {
      setDisableBtn(true);
    } else {
      console.log("here");
      setCount(Number(count) + 100);
      // const c = localStorage.getItem("bgColor");
      // setCount(Number(c) + 100);

      if (ht !== 500) {
        setHeight(Number(ht) + 100);
        // const h = localStorage.getItem("bgHeight");
        // setHeight(Number(h) + 100);
        console.log(true, "reached 100% ht");
      }
    }
    // localStorage.setItem("bgColor", count);
    // localStorage.setItem("bgHeight", ht);
    console.log(count, typeof count, ht);
  };

  const handleReset = () => {
    setCount("#fffff");
    // localStorage.setItem("bgColor", "#fffff");
  };

  // useEffect(() => {
  //   setHeight(localStorage.getItem("bgHeight"));
  //   setCount(localStorage.getItem("bgColor"));
  // }, [count, ht]);

  //getting values from local storage
  // const bgHeight = localStorage.getItem("bgHeight");
  // const bgColor = localStorage.getItem("bgColor");

  return (
    <Box m={2} h='calc(90vh)'>
      <Flex direction='column' position='relative'>
        <Flex
          alignItems='center'
          justifyContent='center'
          gap={5}
          minHeight='calc(80vh)'
          zIndex={1000}
          // backgroundColor={`red.${count}`}
          w='100%'
          position='absolute'
          // height='100px'
        >
          {/* {count === "#fffff" && disableBtn ? ( */}
          <Button
            colorScheme='teal'
            size='md'
            onClick={() => handleDecrement()}
            disabled={disableBtn}
            cursor={disableBtn ? "not-allowed" : ""}
          >
            Decrement
          </Button>
          {/* ) : (
            <Button
              colorScheme='teal'
              size='md'
              onClick={() => handleDecrement()}
            >
              Decrement
            </Button>
          )} */}
          <Button colorScheme='teal' size='md' onClick={() => handleReset()}>
            Reset
          </Button>
          {/* {count === 900 && disableBtn ? ( */}
          <Button
            colorScheme='teal'
            size='md'
            onClick={() => handleIncrement()}
            disabled={disableBtn}
            cursor={disableBtn ? "not-allowed" : ""}
          >
            Increment
          </Button>
          {/* ) : (
            <Button
              colorScheme='teal'
              size='md'
              onClick={() => handleIncrement()}
            >
              Increment
            </Button>
          )
          } */}
        </Flex>
        <Box
          backgroundColor={`red.${count}`}
          w='100%'
          // height='100px'
          height={`${ht}px`}
          position='absolute'
        ></Box>
      </Flex>
    </Box>
  );
};

export default Counter;
