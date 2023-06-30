import  ReactDOM  from "react-dom/client";
import App from "./App";


// Get control of your root div element
var rootDiv = document.getElementById('root');

var root = ReactDOM.createRoot(rootDiv);

root.render(
  <>
        <App/>
  </>
);
