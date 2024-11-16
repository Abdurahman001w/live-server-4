import Button from "./Button";
import Number from "./Number";
import { useState } from "react";
function Main() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="container menu_main"><Number counter={counter} /><Button counter={counter} setCounter={setCounter} /></div>)
}
export default Main;
