import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Box } from "@chakra-ui/react";
import { useUser } from "../context/userContext";

const RichTextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { userData } = useUser();
  const userArr = [];

  useEffect(() => {
    JSON.parse(localStorage.getItem("userArr")).forEach((user) => {
      let keys = Object.keys(user);

      keys.slice(1).forEach((key) => {
        userArr.push(user[key]);
      });
    });
    setContent(userArr.toString());
    // eslint-disable-next-line
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
