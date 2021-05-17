import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddlware from 'redux-thunk';

let redusers = combineReducers({
   profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    authReducer: authReducer,
});

let store = createStore(redusers, applyMiddleware(thunkMiddlware));
window.store = store;

export default store;