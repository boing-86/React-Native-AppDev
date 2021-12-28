import type {AppState} from "./AppState";
import type {LoginActions} from "./actions";

const initialState: AppState = {
    loggedIn: false,
    name: "",
    email: "",
    password: ""
};

export const rootReducer = (state: AppState = initialState, action: LoginActions) => {
    switch(action.type){
        case "login":
            return {...state,
            loggedIn: true,
            name: action.name,
            email: action.email,
            password: action.password
            };
        case "logout":
            return initialState;
    }
    return state;
};