import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './app/store/store';
import { AppRegistry } from 'react-native';
import Route from './app/route';


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Route/>
            </Provider>
        );
    }
}


AppRegistry.registerComponent('hellowReact', () => App);
