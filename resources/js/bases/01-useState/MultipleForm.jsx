import React, { useState } from 'react'

export const MultipleForm = () => {

    const [form, setform] = useState({
        email:'',
        password:'',
    })
    const handleInputChange = (e) => {

        setform(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
       console.log(form)
    }


  return (
    <>
    <h1>Multiple Input Form</h1>
    <hr />
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Email address</label>
        <input
          className='form-control'
            name='email'
          placeholder='Enter email'
          type='email'
          onChange={handleInputChange}
          value={form.email}
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          className='form-control'
          placeholder='Password'
          name='password'
          type='password'
          onChange={handleInputChange}
          value={form.pwd}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
        <p>{form.email}</p>
  </>
  )
}
