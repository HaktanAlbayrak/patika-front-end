import React from 'react'
import "./style.css"

export const Box = ({ item }) => {
  return (
    <div className='box' >

      <div className='title'>
        {item.name}
      </div>

      <div className='value' >
        {item.value}
      </div>

    </div>
  )
}
