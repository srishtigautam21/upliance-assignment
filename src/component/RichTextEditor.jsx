import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Box } from "@chakra-ui/react";
import { useUser } from "../context/userContext";

const RichTextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { userData } = useUser();
  console.log("inrich", userData);
  const userArr = [];
  let users = [];

  // useEffect(() => {
  // users = JSON.parse(localStorage.getItem("userArr"));
  //   console.log("users in 1st useEffect", users);
  // users.forEach((user) => {
  //   let keys = Object.keys(user);
  //   console.log(keys.slice(1));
  //   keys.slice(1).forEach((key) => {
  //     userArr.push(user[key]);
  //   });
  // });
  // console.log(users, userArr);
  // setContent(userArr.toString());
  // }, [userData]);

  useEffect(() => {
    JSON.parse(localStorage.getItem("userArr")).forEach((user) => {
      let keys = Object.keys(user);
      console.log(keys.slice(1));
      keys.slice(1).forEach((key) => {
        userArr.push(user[key]);
      });
    });

    console.log(userArr);
    setContent(userArr.toString());
  }, [userData]);

  return (
    <Box w='80%'>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
    </Box>
  );
};

export default RichTextEditor;
