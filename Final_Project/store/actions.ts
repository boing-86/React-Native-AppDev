import type {Action} from "redux";

type LoginAction = Action<"login"> & {
    email : string,
    name : string,
    password : string
};

type LogoutAction = Action<"logout">;

export type LoginActions = LoginAction | LogoutAction;

export const loginAction = (name:string, email:string, password:string) =>{
    return {
        type : "login",
        email : email,
        name : name,
        password : password
    };
}

export const logoutAction = () =>{
    return {type : "logout"};
}