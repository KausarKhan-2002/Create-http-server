import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ItemsProvider from "./Context/ItemsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ItemsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ItemsProvider>
);
