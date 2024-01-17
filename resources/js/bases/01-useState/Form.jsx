import { useState } from "react";

export const Form = () => {
    const [search, setsearch] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
            setsearch(e.target.value)
    }

    const handleInputChange = e => {
        setsearch(e.target.value)
    }
    if(search === 'lol') setsearch('capturado')

  return (
    <form  onSubmit={handleSubmit}>
        <input type="text" name="seatch" autoComplete="off"  value={search} onChange={handleInputChange}/>
        <button type ='submit'>Buscar</button>
        <p>Busqueda: {search}</p>
    </form>
  )
}
