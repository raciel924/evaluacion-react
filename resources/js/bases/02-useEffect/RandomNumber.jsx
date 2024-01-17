import React, { useEffect, useState } from 'react'

const handleFetchRandomNumber = async() => {
    const url = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
    const response = await fetch(url)
    const data = await response.text(); 
    throw new Error('500 internal error')
    console.log(data)
    return +data
}



export const RandomNumber = () => {
    const [number, setnumber] = useState()
    const [isLoading, setisLoading] = useState(true)
    const [isError, setisError] = useState()
    useEffect(() => {
        handleFetchRandomNumber()
        .then(number => setnumber(number))
        .catch(eror => setisError(eror.message))
        setnumber()
     }, [])

     useEffect(() => {
        if (number) setisLoading(false);
     }, [number])
     useEffect(() => {
        if (isError) setisLoading(false);
     }, [isError])
     
     
  return (
    <>
    {isLoading ? <h2>Loading</h2> :  <h2>random Number:{number}</h2> }
    {}
    {!isLoading  && isError && <h3>{isError}</h3>}
    <hr/>
    </>
  )
}
