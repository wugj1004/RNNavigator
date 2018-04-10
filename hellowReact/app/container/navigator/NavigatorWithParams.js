/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


Props = {};
export default class NavigatorWithParams extends Component<Props> {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {navigatorTitle:'title'};
    }

    static navigationOptions = ({navigation, screenProps}) => ({
        title :`带参${navigation.state.params.user}`,
        //右边按钮
        headerRight:(
            <View>
                <Button
                    title="点我"
                    onPress={() => alert("hello")}
                />
            </View>
        ),
        headerTintColor: 'white',//"返回"颜色
        //按压返回按钮显示的颜色 API > 5.0 有效
        headerPressColorAndroid : 'blue',
        headerStyle: {
            backgroundColor: '#EB3695',
        },
        headerTitleStyle:{
            color: 'white',
            //居中显示
            alignSelf : 'center',
        },
        //是否允许右滑返回，在iOS上默认为true，在Android上默认为false
        gesturesEnabled: true,

    });

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="返回导航界面"/>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>

                <View style={{backgroundColor:'#fff'}}>
                    <Text style={{padding:20}}>Chat with {params.user}</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
