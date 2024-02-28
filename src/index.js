import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext";
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
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);
