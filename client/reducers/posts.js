/**
 * Created by xplusz on 9/9/16.
 */
function posts(state = [], action) {
    switch (action.type) {
        case "INCREMENT_LIKES":
            var i = action.i;
            
            var newState = [
                ...state.slice(0, i),
                {...state[i], likes: state[i].likes + 1 },
                    ...state.slice(i+1)
            ];

            return newState;
        default:
            return state;
    }

}

export default posts;