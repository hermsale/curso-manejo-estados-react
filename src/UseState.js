import React from 'react';

const SECURITY_CODE = 'ASD123';

function UseState({ name }) {

    // estado compuesto 
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    })


    const onConfirm = () => {
        setState({
            ...state,
            loading: false,
            error: false,
            confirmed: true
        });
    }

    const onError = () => {
        setState({
            ...state,
            loading: false,
            error: true
        });
    };

    const onWrite = (event) => {
        setState({
            ...state,
            value: event.target.value,
            error: false
        });
    }

    const onCheck = () => {
        setState({
            ...state,
            loading: true
        })
    };

    const onDelete = () => {
        setState({
            ...state, deleted: true
        })
    }

    const onReset = () => {
        setState({
            ...state, confirmed: false, value: '', deleted: false
        })
    }
    
    console.log(state);

    React.useEffect(() => {
        console.log(' empezando el efecto');

        if (state.loading) {
            setTimeout(() => {
                console.log('Haciendo la validacion');
                if (SECURITY_CODE === state.value) {
                    onConfirm();
                } else {
                    onError();
                }
                console.log(' Terminando la validacion');
            }, 3000)
        }

        console.log('terminando el efecto');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.loading]);

    // crearemos algunos condicionales para renderizar acorde a lo que el usuario interactue
    if (!state.deleted && !state.confirmed) {
        return (
            <React.Fragment>
                <div>
                    <h2>Eliminar {name}</h2>
                    <p>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</p>
                    {(state.error && !state.loading) && (
                        <p>Error: el codigo es incorrecto</p>
                    )}

                    {state.loading && (
                        <p>Cargando...</p>
                    )}
                    <input
                        type='text'
                        placeholder='Código de seguridad'
                        value={state.value}
                        onChange={
                            (event) => {
                                onWrite(event);
                            }
                        }
                    />
                    <button
                        onClick={
                            () => onCheck()
                        }
                    >Comprobar</button>
                </div>

            </React.Fragment>
        );
    } else if (!state.deleted && state.confirmed) { // si confirman que se quiere eliminar, pregunta de seguridad si se borra el estado
        return (
            <React.Fragment>
                <p>Estado de confirmacion. Seguro de eliminar?</p>
                <button onClick={() =>
                    onDelete()
                }
                >Si, eliminar</button>
                <button
                    onClick={() => 
                        onReset()
                    }
                >No eliminar</button>
            </React.Fragment>
        )
    } else { // SI CONFIRMAN DELETED TRUE Y CONFIRMED TRUE 
        return (
            <React.Fragment>
                <p>Confirmado. Eliminado con exito</p>
                <p>Volver a crear el useState?</p>
                <button
                    onClick={
                        () =>
                        onReset()
                    }
                >Volver al estado inicial</button>
            </React.Fragment>
        )
    }
}

export { UseState };