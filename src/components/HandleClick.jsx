import React from 'react'
import Button from 'react-bootstrap/Button';
function HandleClick() { alert('Hola he clickeado');
}
export default function Button1() {
return (
<div className='container'>
<Button variant="primary" onClick={HandleClick}>de clic aqui!</Button>
</div>
)
}