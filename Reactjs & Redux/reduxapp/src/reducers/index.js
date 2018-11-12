export default (state, action) => {
    switch(action.type) {
        case 'SET_TECHNOLOGY' :
        return {
            //Spread operator , sluzat za kopiranje/pravenje referenca od originalniot state, bidejki ne smeeme nikogas da go menuvame direktni
            ...state, 
            technology: action.technology
        }
    case 'FETCH_USERS':
        return {
            ...state,
            users: action.users
        }
        default: return state;
    }
}