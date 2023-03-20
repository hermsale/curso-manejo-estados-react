import React from 'react';

function UseState({name}) {

    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        console.log(' empezando el efecto');
        
    if(loading){
        setTimeout(() => {
            console.log('Haciendo la validacion');
            setLoading(false);
            setError(true);
            console.log(' Terminando la validacion');
        },3000)
    }

        console.log('terminando el efecto');
    }, [loading]);

    return(
      <div>
        <div>
                <h2>Eliminar {name}</h2>
                <p>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</p>
                {error &&(
                    <p>Error: el codigo es incorrecto</p>
                )}

                {loading &&(
                    <p>Cargando...</p>
                )}
                <input
                type='text'
                placeholder='Código de seguridad'/>
                <button
                    onClick={ () => setLoading(true)}
                >Comprobar</button>
            </div>
            
      </div>  
    );
}

export {UseState};