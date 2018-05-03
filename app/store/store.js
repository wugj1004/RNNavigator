/**
 * Created by wugj on 2018/5/3.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducer';

const configureStore = preloadedState => {
    return createStore (
        rootReducer,
        preloadedState,
        compose (
            applyMiddleware(thunk)
        )
    );
}

const store = configureStore();

export default store;