import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

//Attach the react file to the root div in index.html
const root = createRoot(document.getElementById("root"));

root.render(<App />);
