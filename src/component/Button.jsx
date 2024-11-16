import Reset from "./Reset"

function Button({ counter, setCounter }) {
  const plus = function () {
    return setCounter(counter + 1)
  }
  const minus = function () {
    return (setCounter(counter - 1))
  }
  const reset = function () {
    return (setCounter(counter * 0))
  }
  return (<div><div className="button-items">
    <div className="button-item"><button onClick={plus} className="plus">+</button></div>



    <div className="button-item"><button onClick={reset} className="reset"><Reset /></button></div>







    <div className="button-item"><button onClick={minus} className="minus">-</button></div>
  </div>
  </div>)
}
export default Button;
