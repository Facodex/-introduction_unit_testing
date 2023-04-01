import React, { useState } from 'react'

export const AcceptCookies = () => {
    const [cookies, setCookies] = useState(false);
  return (
    <div>
        <label htmlFor="cookiesCheckbox">Acepta las cookies</label>
        <input type="checkbox" id="cookiesCheckbox" onClick={() => setCookies(!cookies)}/>
        <article title='confirmacion cookies'>
            { cookies ? 'Cookies aceptadas' : 'Debes aceptar las cookies'}
        </article>
    </div>
  )
}
