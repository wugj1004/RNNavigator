import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './app/store/store';
import { AppRegistry } from 'react-native';
import Route from './app/route';

import storage from './app/storage/RNAsyncStorage'

export default class App extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
          storage._getStorage();
          global.storage = storage;
      }
    render() {
        return (
            <Provider store={store}>
                <Route/>
            </Provider>
        );
    }
}


AppRegistry.registerComponent('hellowReact', () => App);
