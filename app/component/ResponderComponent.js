/**
 * Created by wugj on 2018/4/11.
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    PanResponder,//view拖动
    View
} from 'react-native';

Props = {};
export default class ResponderComponent extends Component<Props> {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            sampleResponderBg:'white',
            parentViewBg: 'white',
            childViewBg: 'white',

            moveViewBg: 'white',
            top: 0,
            left: 0,

        };
    }

    //导航栏配置
    static navigationOptions = ({navigation, screenProps}) => ({
        title: navigation.state.params.title
    })

    componentWillMount() {
        //普通事件响应
        this._gestureHandlers = {
            onStartShouldSetResponder: () => true,
            onMoveShouldSetResponder: ()=> true,
            onResponderGrant: ()=>{
                this.setState({sampleResponderBg: 'red'})
            },
            onResponderMove: ()=>{
                console.log(`sampleResponderBg-move---identifier：${evt.nativeEvent.identifier}、locationx:${evt.nativeEvent.locationX}、locationY:${evt.nativeEvent.locationY}
                      、pageX:${evt.nativeEvent.pageX}、pageY:${evt.nativeEvent.pageY}、target:${evt.nativeEvent.target}`)
            },
            onResponderRelease: ()=>{
                this.setState({sampleResponderBg: 'white'})
            }
        };

        //事件拦截
        this._gestureHandlers1 = {
            //外部正方形在“捕获期”阻止底层时间成为响应者
            onStartShouldSetResponderCapture: () => true,
            onMoveShouldSetResponderCapture: ()=> true,
            onStartShouldSetResponder: () => true,
            onMoveShouldSetResponder: ()=> true,
            onResponderGrant: ()=>{this.setState({parentViewBg: 'yellow'})},
            onResponderMove: ()=>{console.log('parent-move')},
            onResponderRelease: ()=>{this.setState({parentViewBg: 'white'})},
        };
        this._gestureHandlers2 = {
            //内部正方形在即时实现了on*ShouldSetResponder也无法成为响应者
            onStartShouldSetResponder: () => true,
            onMoveShouldSetResponder: ()=> true,
            onResponderGrant: ()=>{this.setState({childViewBg: 'green'})},
            onResponderMove: ()=>{console.log('childer-move')},
            onResponderRelease: ()=>{this.setState({childViewBg: 'white'})}
        };

        //view移动
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: ()=> true,
            onPanResponderGrant: ()=> {
                //滑动开始时，获取矩形的左上坐标，并设置背景为红色
                this._top = this.state.top
                this._left = this.state.left
                this.setState({moveViewBg: 'blue'})
            },
            onPanResponderMove: (evt, gs)=> {
                console.log(gs.dx + ' ' + gs.dy)
                //随着手势滑动，相应的改变矩形的位置
                this.setState({
                    top: this._top + gs.dy,
                    left: this._left + gs.dx
                })
            },
            onPanResponderRelease: (evt, gs)=> {
                //活动结束后，还原背景为白色
                this.setState({
                    moveViewBg: 'white',
                    top: this._top + gs.dy,
                    left: this._left + gs.dx
                })
            }

        });


    }

    render() {
        return (
            <View style={responderStyles.container}>

                <View
                    {...this._gestureHandlers}
                    style={[responderStyles.sampleResponder,{backgroundColor:this.state.sampleResponderBg,}]}/>


                <View
                    {...this._gestureHandlers1}
                    style={[responderStyles.parentView,{backgroundColor:this.state.parentViewBg,}]}>

                    <View
                        {...this._gestureHandlers2}
                        style={[responderStyles.childrenView, {backgroundColor:this.state.childViewBg} ]}/>
                </View>

                <View
                    {...this._panResponder.panHandlers}
                    style={[responderStyles.moveView,
                    {backgroundColor:this.state.moveViewBg,"top": this.state.top,"left": this.state.left}
                    ]}>
                </View>
            </View>
        );
    }


}


const responderStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    sampleResponder:{
        height: 100,
        width: 100,
        borderColor:'red',
        borderWidth:5
    },
    parentView: {
        height: 200,
        width: 200,
        borderColor: 'yellow',
        borderWidth: 5,
        alignSelf: 'flex-start'
    },
    childrenView: {
        width: 100,
        height: 100,
        borderColor: 'green',
        borderWidth: 5,
    },
    moveView: {
        height: 200,
        width: 200,
        borderColor: 'blue',
        borderWidth: 5,
        alignSelf: 'flex-end'
    },
});
