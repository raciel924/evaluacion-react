import { useState } from "react"


export const Couter = () => {
    const def =1;
    const [couter, setcouter] = useState(def)

    const handleIncrement = () => {
        setcouter(couter+1)
    }
    const handleDecrement = () => {
        setcouter(couter-1)
    }
    const handleReset = () => {
        setcouter(def)
    }
    const handleIncrementCustom = (val) => {
        setcouter(couter+val)
    }
  return (
    <>
     <h1> use state</h1>
     <hr/>
     <div className="d-flex">
        <h2>Valor:</h2>
        <h2 
            style={{
            color:'#a54c12',
            marginLeft:'1rem'}} >
            {couter}
        </h2>
     </div>
     <div style={{width:'20rem'}} className="d-flex justify-content-around">
     <button className="btn btn-primary" onClick={handleIncrement} > +1 </button>
     <button className="btn btn-warning" onClick={handleDecrement} > -1 </button>
     <button className="btn btn-danger" onClick={handleReset} > reset </button>
     <button className="btn btn-dark" onClick={() => handleIncrementCustom(10)} > +10 </button>
     </div>
    </>
  )
}
