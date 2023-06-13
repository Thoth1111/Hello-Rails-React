import { configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    greeting: '',
};

const SET_GREETING = 'SET_GREETING';

const setGreeting = (greeting) => {
    return {
    type: SET_GREETING,
    payload: greeting,
    };
};

const fetchGreeting = () => {
    return (dispatch) => {
        fetch('/api/greetings/random')
        .then((response) => response.json())
        .then((data) => {
            dispatch(setGreeting(data));
        })
        .catch((error) => {
            console.error(error);
        });
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GREETING:
            return {
                ...state,
                greeting: action.payload,
            };
        default:
            return state;
    }
};

const store = configureStore(reducer, applyMiddleware(thunk));

export default { store, fetchGreeting };