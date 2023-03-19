import React from 'react';

function UseState({name}) {

    const [error, setError] = React.useState(false);

    return(
      <div>
        <div>
                <h2>Eliminar {name}</h2>
                <p>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</p>
                {error &&(
                    <p>Error: el codigo es incorrecto</p>
                )}
                <input
                type='text'
                placeholder='Código de seguridad'/>
                <button
                    onClick={ () => setError(!error)}
                >Comprobar</button>
            </div>
      </div>  
    );
}

export {UseState};