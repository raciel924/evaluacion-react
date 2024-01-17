
import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Message } from './Message'

export const EffectCleunUp = () => {
    const [showComponent, setshowComponent] = useState(false)

    const handleChngeFlag = () => {
        setshowComponent(prev => !prev)
    }

  return (
   <>
    <h1>EffectCleunUp</h1>

    <h3>
        componente:{''}
        {showComponent === false ? 'Componente desmontado': 'Componente montado'} 
    </h3>
    {showComponent && <Message/>}
    <button onClick={handleChngeFlag} >{!showComponent ? "Montar": "Desmontar"}</button>
   </>
  )
}
