import React from "react";
import ReactDOM from "react-dom";
import {createStandaloneToast} from "@chakra-ui/toast";

const {ToastContainer, toast} = createStandaloneToast();

import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root"),
);
toast({title: "Chakra UI"});
