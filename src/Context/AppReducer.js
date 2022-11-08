const AppReducer = (state, action) => {
    switch (action.type) {
        case "SET_CHORD":
            return {
                ...state,
                chord: action.payload
            };
        case "SET_NOTE":
            return {
                ...state,
                note: action.payload
            };
        case "SET_SCALE":
            return {
                ...state,
                scale: action.payload
            };
        case "SET_SHAPE":
            return {
                ...state,
                shape: action.payload
            };

        default:
            return state;
    }
}

export default AppReducer