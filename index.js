import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './app/store/store';
import { AppRegistry } from 'react-native';
import Home from './app/route';


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
        );
    }
}


AppRegistry.registerComponent('hellowReact', () => App);
