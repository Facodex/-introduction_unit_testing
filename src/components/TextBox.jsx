import React, { useState } from 'react'

export const TextBox = () => {
    const [bgColor, setBgColor] = useState('red');
  return (
    <div>
        <article title='parrafo principal' style={{backgroundColor: bgColor}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, deleniti?
        </article>
        <button title='presiona para cambiar' onClick={() => setBgColor(bgColor === 'red' ? 'blue' : 'red')}>presiona para cambiar</button>
    </div>

  )
}
