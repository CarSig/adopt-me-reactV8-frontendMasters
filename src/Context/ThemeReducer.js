const ThemeReducer = (state, action) => {
    switch (action.type) {
        case "SET_COLOR":
            return {
                ...state,
                color: action.payload
            }
        case "SET_COLOR_SCHEMA":
            return {
                ...state,
                primaryColor: action.payload.primaryColor,
                secondaryColor: action.payload.secondaryColor,
                tertiaryColor: action.payload.tertiaryColor,
                quaternaryColor: action.payload.quaternaryColor,
                quinaryColor: action.payload.quinaryColor,
                textColor: action.payload.textColor,
                textColor2: action.payload.textColor2,
                backgroundColor: action.payload.backgroundColor,
                backgroundColor2: action.payload.backgroundColor2,

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