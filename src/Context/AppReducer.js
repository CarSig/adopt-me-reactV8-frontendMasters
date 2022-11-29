const AppReducer = (state, action) => {
    switch (action.type) {
        case "SET_NOTE":
            return {
                ...state,
                note: action.payload
            }
        case "SET_CHORD":
            return {
                ...state,
                chord: action.payload
            }
        case "SET_SCALE":
            return {
                ...state,
                scale: action.payload
            }
        case "SET_SHAPE":
            return {
                ...state,
                shape: action.payload
            }
        case "SET_ROOT":
            return {
                ...state,
                root: action.payload
            }
        case "SET_SELECTOR":
            return {
                ...state,
                selector: action.payload
            }

        case "SET_SELECTOR_CHORD":
            return {
                ...state,
                selectorChord: action.payload
            }
        case "SET_SELECTOR_SCALE":
            return {
                ...state,
                selectorScale: action.payload
            }
        case "SET_SELECTOR_NOTE":
            return {
                ...state,
                selectorNote: action.payload
            }
        case "SET_SELECTOR_TYPE":
            return {
                ...state,
                selectorType: action.payload
            }
        case "SET_SELECTOR_SHAPE":
            return {
                ...state,
                selectorShape: action.payload
            }

        case "SET_SHAPE_COORDINATES":
            return {
                ...state,
                shapeCoordinates: action.payload
            }
        case "SET_PLAY_NOTES": {
            return {
                ...state,
                playNotes: action.payload
            }
        }
        case "SET_ACCIDENTAL": {
            return {
                ...state,
                accidental: action.payload
            }
        }


        default:
            return state;



    }
}

export default AppReducer