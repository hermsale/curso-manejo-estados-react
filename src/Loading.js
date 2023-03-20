import React from 'react';

class Loading extends React.Component{
    // se desmontara al tocar el boton
    componentWillUnmount(){
        console.log("componentWillUnmount")
    };
    render(){
        
        return(        
                    <p>Cargando...</p>    
        );
    }
}

export {Loading};