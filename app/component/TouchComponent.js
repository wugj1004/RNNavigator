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
    Button,//按钮显示（只有onPress事件）
    TouchableHighlight,//高亮显示
    TouchableOpacity,//变淡显示
    TouchableNativeFeedback,//原生响应显示
    TouchableWithoutFeedback,//无任何响应显示
    ToolbarAndroid,
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
export default class TouchComponent extends Component<Props> {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            bodyViewBg: 'white',
            childViewBg: 'white',
            top: 0,
            left: 0,

        };
    }

    static navigationOptions = ({navigation, screenProps}) => ({
        title: navigation.state.params.title
    })


    render() {
        return (
            <View style={touchStyles.container}>
                <Text style={touchStyles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={touchStyles.instructions}>
                    To get started, edit App.js
                </Text>
                <TouchableHighlight onPressIn={()=>console.log('TouchableHighlight-onPressIn')}
                                    onPress={()=>console.log('TouchableHighlight-onPress')}
                                    onLongPress={()=>console.log('TouchableHighlight-onLongPress')}
                                    onPressOut={()=>(console.log('TouchableHighlight-onPressOut'))}>
                    <Text style={touchStyles.instructions}>
                        {instructions}
                    </Text>
                </TouchableHighlight>
                <TouchableOpacity onPressIn={()=>console.log('TouchableOpacity-onPressIn')}
                                  onPress={()=>console.log('TouchableOpacity-onPress')}
                                  onLongPress={()=>console.log('TouchableOpacity-onLongPress')}
                                  onPressOut={()=>(console.log('TouchableOpacity-onPressOut'))}>
                    <Text style={touchStyles.instructions}>
                        {'TouchableOpacityTouchableOpacityTouchableOpacityTouchableOpacityTouchableOpacity'}
                    </Text>
                </TouchableOpacity>
                <TouchableNativeFeedback onPressIn={()=>console.log('TouchableNativeFeedback-onPressIn')}
                                         onPress={()=>console.log('TouchableNativeFeedback-onPress')}
                                         onLongPress={()=>console.log('TouchableNativeFeedback-onLongPress')}
                                         onPressOut={()=>(console.log('TouchableNativeFeedback-onPressOut'))}>
                    <Text style={touchStyles.instructions}>
                        {'TouchableNativeFeedbackTouchableNativeFeedbackTouchableNativeFeedback'}
                    </Text>
                </TouchableNativeFeedback>


                <Button title="Button"
                        onPressIn={()=>console.log('onPressIn')}
                        onPress={()=>console.log('onPress')}
                        onLongPress={()=>console.log('onLongPress')}
                        onPressOut={()=>(console.log('onPressOut'))}/>

            </View>
        );
    }


}


const touchStyles = StyleSheet.create({
    container: {
        flex: 1,
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
