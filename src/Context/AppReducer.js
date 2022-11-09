const AppReducer = (state, action) => {
    switch (action.type) {
        case "note":
            return {
                ...state,
                note: action.payload
            }
        case "chord":
            return {
                ...state,
                chord: action.payload
            }
        case "scale":
            return {
                ...state,
                scale: action.payload
            }
        case "shape":
            return {
                ...state,
                shape: action.payload
            }
        case "root":
            return {
                ...state,
                root: action.payload
            }
        case "selector":
            return {
                ...state,
                selector: action.payload
            }
        default:
            return state;



    }
}

export default AppReducer