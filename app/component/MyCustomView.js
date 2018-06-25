/**
 * Created by wugj on 2018/6/25.
 */
import React, {
    Component,
} from 'react';

import PropTypes from 'prop-types';

import {
    requireNativeComponent,
    View,
    UIManager,
} from 'react-native';

const ReactNative = require('ReactNative'); // ReactNative通过import没用

export default class MyCustomView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // {...this.props} 一定需要设置，不让你永远也看不到
        return (
            <RCTMyCustomView
                {...this.props}>
            </RCTMyCustomView>);
    }
}

MyCustomView.propTypes = {
    color: PropTypes.string,  // 设置color属性
    ...View.propTypes, // 这里一定需要设置，不然会报错。has no propType for native prop。这个被坑了
};

var RCTMyCustomView = requireNativeComponent('MyCustomView', MyCustomView);  // 拿到Native组件