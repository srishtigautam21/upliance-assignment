import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
//extend Theme

// const colors={
//   brand:{
//     100:'#FED7D7',
//     200:'#FEB2B2',
//     300:'',
//     400:'',
//     500:'',
//     600:'',
//     700:'',
//     8800:'',

//   }
// }
// const theme = extendTheme();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* theme={theme} */}
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
