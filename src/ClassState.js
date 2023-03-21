import React from 'react';
import {Loading} from './Loading'

const SECURITY_CODE = 'ASD123';

class ClassState extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            value:'',
            error:false,
            loading:false,
        }
    }

    // UNSAFE_componentWillMount(){
    //     console.log("componentWillMount")
    // };

   

    // componentDidMount(){
    //     console.log("componentDidMount")
    // };

    componentDidUpdate(){
        console.log('actualizacion');
        if(this.state.loading){
            setTimeout(() => {
                console.log('Haciendo la validacion');
                if(SECURITY_CODE===this.state.value){
                    this.setState({loading:false,error:false});
                }else{
                    this.setState({loading:false,error:true});
                }
                // this.setState({loading:false});
                console.log(' Terminando la validacion');
            },3000)
        }
    }

    render(){

        console.log(this.state.value);

        return(
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</p>

                {this.state.error &&(
                    <p>Error: el codigo es incorrecto</p>
                )}

                {this.state.loading &&(
                    <Loading/>
                )}

                    <input
                    value={this.state.value}
                    onChange={(event) => this.setState({
                        value: event.target.value,
                        error: false
                        }
                        )
                    }
                    type='text'
                    placeholder='Código de seguridad'/>
                <button
                    // onClick={() =>
                    //     this.setState(prevState => 
                    //         ({error:!prevState.error}))}
                    onClick={() => this.setState({loading:true,error:false})}
                >Comprobar</button>      
            </div>
        );
    }
}

export {ClassState};