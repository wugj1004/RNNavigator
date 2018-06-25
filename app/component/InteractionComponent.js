/**
 * Created by wugj on 2018/6/25.
 */
/**
 * 原生和Rn进行交互*/

import React, {Component}from 'react'
import  {Text,View,StyleSheet, NativeModules, requireNativeComponent } from 'react-native'

import MyCustomView from './MyCustomView'

var ToastAndroidCustom = NativeModules.ToastAndroidCustom;


class InteractionComponent extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentWillMount() {
        ToastAndroidCustom.showToast("1244");
    }

    render() {
        var view = <View style={InteractionStyle.container}>
            <Text>打开启动吐司</Text>
            <MyCustomView
                color='red'
                style={{width:300, height:300}}/>
        </View>;


        return (view);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

}

export default InteractionComponent

const InteractionStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});