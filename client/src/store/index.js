import { configureStore } from '@reduxjs/toolkit';
import UsersReducer from './reducers/users';
import ListingsReducer from './reducers/listings';
import NotificationsReducer from './reducers/notifications';
import SiteReducer from './reducers/site';


export const store = configureStore({
    reducer: {
        users: UsersReducer,
        listings:ListingsReducer,
        notifications: NotificationsReducer,
        site:SiteReducer
    }
})