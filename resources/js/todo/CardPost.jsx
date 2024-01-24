import React from 'react'

export const CardPost = ({data}) => {
  return (
    <div>
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.body}</p>
                <a href="#" className="btn btn-primary">Editar</a>
                <a href="#" className="btn btn-warning">Eliminar</a>
            </div>
        </div>
    </div>
  )
}
