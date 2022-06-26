
const initState = {
    name: 'vinh',
    age: 20,
    email: 'vinh07102002@gmail.com',
    num: 22
}

const rootReducer = (state = initState, action) => {
    
    if(action.type === 'DO_STH') {
        return {
            ...state,
            // age: Math.round(Math.random() * 100)
        }
    }
    if(action.type === 'RANDOM_NUMBER') {
        return {
            ...state,
            // num:  Math.round(Math.random() * 100)
        }
    }
    return state;
}

export default rootReducer