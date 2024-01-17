import { useState } from "react"

export const MultipleCouter = () => {
    const [couter, setcouter] = useState({
        couter1: 10,
        couter2: 20,
        couter3: 30
    })
    const {couter1,couter2,couter3} = couter;
    const handleCouter = (couterName,value) => {
        setcouter(prev => ({
            ...prev,
            [couterName]:value
        }));
    }
  return (
    <>
        <h1>Multiple Couter</h1>
        <hr/>
        <div>
            <h5>Couter 1: {couter1} </h5>
            <h5>Couter 2: {couter2}</h5>
            <h5>Couter 3: {couter3} </h5>
        </div>
        <div>
            <button onClick={()=>handleCouter('couter1',couter1+1)}>Couter 1</button>
            <button onClick={()=>handleCouter('couter2',couter2+1)}>Couter 2</button>
            <button onClick={()=>handleCouter('couter3',couter3+1)}>Couter 3</button>
        </div>
    </>
  )
}
