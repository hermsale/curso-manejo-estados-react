import React from 'react';

const SECURITY_CODE = 'ASD123';

function UseState({name}) {

    const [state, setState] = React.useState({
        error:false,
        loading:false,
        value:''
    })
    // const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);
    // const [value, setValue] = React.useState('');
    
    // console.log(state.value);

    React.useEffect(() => {
        console.log(' empezando el efecto');
        
        if(state.loading){
            setTimeout(() => {
            console.log('Haciendo la validacion');
            if(SECURITY_CODE===state.value){
                setState({
                    ...state,
                    loading:false,error:false});               
                // setLoading(false);
                // setError(false);
            }else{
                setState({
                    ...state,
                    loading:false,error:true});  
                // setLoading(false);
                // setError(true);
            }
            console.log(' Terminando la validacion');
        },3000)
    }

        console.log('terminando el efecto');
    }, [state.loading, state.value]);

    return(
      <div>
        <div>
                <h2>Eliminar {name}</h2>
                <p>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</p>
                {(state.error && !state.loading)  &&(
                    <p>Error: el codigo es incorrecto</p>
                )}

                {state.loading &&(
                    <p>Cargando...</p>
                )}
                <input
                type='text'
                value={state.value}
                onChange={(event) => {
                    setState({
                        ...state,
                        value:event.target.value,error:false});  
                    // setError(false)
                    // setValue(event.target.value)
                }
                }
                placeholder='Código de seguridad'/>
                <button
                    onClick={ () => setState({
                        ...state,
                        loading:true})}
                >Comprobar</button>
            </div>
            
      </div>  
    );
}

export {UseState};