const initialState = {
    name: "",
    prezime: "",
    lol: "",
    woo: "",
    pepe: ""
}

const SayHelloReducer = (state=initialState, action) => {
    switch(action.type){
        case "SAY_HELLO":
            return{
                ...state,
                name: action.payload
            }
        case "SAY_PREZIME":
            return{
                ...state,
                prezime: action.payload
            }
        case "SAY_LOL":
            return{
                ...state,
                lol: action.payload
            }
        case "SAY_WOO":
            return{
                ...state,
                woo: action.payload
            }
        case "SAY_PEPE":
            return{
                ...state,
                pepe: action.payload
            }
        default: return state;
    }
}

export default SayHelloReducer;