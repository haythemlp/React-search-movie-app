import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';


import thunk from 'redux-thunk';

import reducer from './reducer';

const rootReducer = combineReducers({MovieApi:reducer});


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(thunk),

})
export default store;