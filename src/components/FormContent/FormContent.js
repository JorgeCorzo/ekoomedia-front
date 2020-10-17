import React from 'react';
import '../../App.scss';

function FormContent({menuitem}) {
    return (
        <div className='forms'>
            <p>Hola Bienvenido, sabemos que quieres viajar en </p>
            <h1>{menuitem}</h1>
            <p>Por favor diligencia el siguiente formulario</p>
        </div>
    );
}

export default FormContent;