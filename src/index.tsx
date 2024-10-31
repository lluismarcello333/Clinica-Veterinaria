import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "../src/components/scrollToTop/ScrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
);
