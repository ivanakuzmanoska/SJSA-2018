const initialState = {
    todos: ["Walk the dog", "Work out", "Learn Java Script"]
}

const TodoReducer =  (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TODO" :
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        default: return state;
    }
}

export default TodoReducer;