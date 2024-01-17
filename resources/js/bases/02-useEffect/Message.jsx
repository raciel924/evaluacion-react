import React, { useEffect } from 'react'

export const Message = () => {
    useEffect(() => {
      console.log('aqui estoy ');
    
      return () => {
        console.log('ya me fui');
      }
    }, []);
    
  return (
    <>
    <h1>Me renderice</h1>

    </>
  )
}
