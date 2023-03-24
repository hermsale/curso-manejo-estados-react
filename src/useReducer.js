import React from 'react';

const SECURITY_CODE = 'ASD123';

function UseReducer({ name }) {

    const [state, dispatch] = React.useReducer(reducer,initialState);


    // const onConfirm = () => {
    //     // setState({
    //     //     ...state,
    //     //     loading: false,
    //     //     error: false,
    //     //     confirmed: true
    //     // });
    // }

    // const onError = () => {
    //     setState({
    //         ...state,
    //         loading: false,
    //         error: true
    //     });
    // };

    // const onWrite = (event) => {
    //     setState({
    //         ...state,
    //         value: event.target.value,
    //         error: false
    //     });
    // }

    // const onCheck = () => {
    //     setState({
    //         ...state,
    //         loading: true
    //     })
    // };

    // const onDelete = () => {
    //     setState({
    //         ...state, deleted: true
    //     })
    // }

    // const onReset = () => {
    //     setState({
    //         ...state, confirmed: false, value: '', deleted: false
    //     })
    // }
    
    console.log(state);

    React.useEffect(() => {
        console.log(' empezando el efecto');

        if (state.loading) {
            setTimeout(() => {
                console.log('Haciendo la validacion');
                if (SECURITY_CODE === state.value) {
                    dispatch({type:'CONFIRM'})
                    // onConfirm();
                } else {
                    dispatch({type:'ERROR'})
                    // onError();
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
                                dispatch({type:'WRITE', payload: event.target.value})
                                // onWrite(event);
                            }
                        }
                    />
                    <button
                        onClick={
                            () => 
                            // onCheck()
                            dispatch({type:'CHECK'})
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
                    // onDelete()
                    dispatch({type:'DELETE'})
                }
                >Si, eliminar</button>
                <button
                    onClick={() => 
                        // onReset()
                        dispatch({type:'RESET'})
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
                        dispatch({type:'RESET'})
                    }
                >Volver al estado inicial</button>
            </React.Fragment>
        )
    }
}

// metodos reducer 
// const reducerIf = (state, action) => {
//     if(action.type === 'ERROR') {
//         return {
//             ...state,
//             loading: false,
//             error: true
//         }
//     }else if(action.type === 'CHECK') {
//         return{
//             ...state,
//             loading: true
//         }
//     }else{
//         return{
//             ...state
//         }
//     }
// }

// const reducerSwitches = (stateReducerSwitch, action) => {
//     switch(action.type){
//         case 'ERROR': return {
//             ...stateReducerSwitch,
//             loading: false,
//             error: true
//         }
//         case 'CHECK': return {
//             ...stateReducerSwitch,
//             loading: true,
//         }
//         case 'CONFIRM': return {
//             ...stateReducerSwitch,
//             loading: false,
//             error: false,
//             confirmed: true
//         }
//         case 'WRITE': return {
//             ...stateReducerSwitch,
//             value: action.payload,
//             error: false
//         }
//         case 'DELETE': return {
//             ...stateReducerSwitch, deleted: true
//         }
//         case 'RESET': return {
//         ...stateReducerSwitch, confirmed: false, value: '', deleted: false
//         }
//         default:
//             return{
//                 ...stateReducerSwitch
//             }
//     }
// }

const  initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
}

const reducerObjects = (state,payload) => ({
        'CONFIRM': {
            ...state,
            loading: false,
            error: false,
            confirmed: true
        },
        'ERROR':{
            ...state,
            loading: false,
            error: true,
        },
        'CHECK':{
            ...state,
            loading: true,
        },
        'WRITE':{
            ...state,
            value: payload,
            error: false,
        },
        'DELETE':{
            ...state, deleted: true,
        },
        'RESET':{
            ...state, confirmed: false, value: '', deleted: false,
        }
})

const reducer = (state, action) => {
    if(reducerObjects(state)[action.type]){
        return reducerObjects(state, action.payload)[action.type];
    }else{
        return {
            ...state,
        };
    }
}

export { UseReducer };