const  initialState = ({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
})

const reducerIf = (state, action) => {
    if(action.type === 'ERROR') {
        return {
            ...state,
            loading: false,
            error: true
        }
    }else if(action.type === 'CHECK') {
        return{
            ...state,
            loading: true
        }
    }else{
        return{
            ...initialState
        }
    }
}
