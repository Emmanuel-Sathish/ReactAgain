import React from "react";
import ReactDOM from "react-dom/client"

let JsxComponent= function (){
   return (<h1>Namaste React🚀</h1>)
}

const elem = <span>Inline</span>

const HeadingComponent = () => (
  <div>
    <JsxComponent/>
    <h1>{elem}Namaste React Functional Component🚀</h1>
  </div>
);
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)


