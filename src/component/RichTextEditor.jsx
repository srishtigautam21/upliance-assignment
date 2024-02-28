import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Box } from "@chakra-ui/react";
const RichTextEditor = ({ userData }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const userArr = [];
  let users = [];
  useEffect(() => {
    users = JSON.parse(localStorage.getItem("userArr"));
    // console.log(users[1]);
    users.forEach((user) => {
      let keys = Object.keys(user);
      console.log(keys.slice(1));
      keys.slice(1).forEach((key) => {
        userArr.push(user[key]);
      });
    });

    console.log(users, userArr);
    // setContent(userArr.toString());
  }, [userData]);

  useEffect(() => {
    setContent(userArr.toString());
  }, []);

  //   if (userData.length !== 0) {

  //   }
  console.log(content);
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
