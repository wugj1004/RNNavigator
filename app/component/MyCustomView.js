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

const CUSTOM_VIEW = "MyCustomView";

export default class MyCustomView extends Component {

    constructor(props) {
        super(props);
        console.log('MyCustomView constructor');
        this._onChange = this._onChange.bind(this); // 一定需要这样调用才会把属性绑定过来
    }

    componentWillMount() {
        //this._onChange();
    }

    render() {
        // {...this.props} 一定需要设置，不让你永远也看不到
        var view = <RCTMyCustomView
            ref={CUSTOM_VIEW}
            {...this.props}
            onChangeColor={() => this._onChange()}>
        </RCTMyCustomView>;

        return (view);
    }


    _onChange() {
        if (!this.props.handleClick) {
            return;
        }
        this.props.handleClick();
    }


    // 把事件给Native
    _changeColor() {  // is not a function？没有设置this._onChange = this._onChange.bind(this);的时候

        let self = this;
        UIManager.dispatchViewManagerCommand(
            ReactNative.findNodeHandle(self.refs[CUSTOM_VIEW]),
            1,  // 发送的commandId为1
            null
        );
    }

}

MyCustomView.propTypes = {
    handleClick: PropTypes.func,  // 设置函数
    color: PropTypes.string,  // 设置color属性
    ...View.propTypes // 这里一定需要设置，不然会报错。has no propType for native prop。这个被坑了
};

//第一个参数是原生视图的名字(JAVA层自定义ViewManager$getName的值)，第二个参数是一个描述组件接口的对象。
var RCTMyCustomView = requireNativeComponent('MyCustomView', MyCustomView, {nativeOnly: {onChangeColor: true}});  // 拿到Native组件