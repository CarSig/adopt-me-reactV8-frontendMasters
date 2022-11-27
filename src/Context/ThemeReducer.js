const ThemeReducer = (state, action) => {
    switch (action.type) {
        case "SET_COLOR":
            return {
                ...state,
                color: action.payload
            }


        case "SET_PRIMARY_COLOR":
            return {
                ...state,
                primaryColor: action.payload
            }

        default:
            return state;
    }

}

export default ThemeReducer