/**
 * Created by wugj on 2018/4/3.
 */
import React, { Component } from 'react';

import {StyleSheet,View, Text ,Button} from "react-native";

import {StackNavigator} from 'react-navigation';

import NavigatorComponent from './navigator/NavigatorComponent'
import NavigatorWithParams from './navigator/NavigatorWithParams'
import NavigatorOutParams from './navigator/NavigatorOutParams'
import NavigatorTab from './navigator/NaviHome'
import NavigatorDrawer from './navigator/NaviDrawer'


class HomeComponent extends Component<Props> {

    static navigationOptions = {
        title: '主页',
        background:'#ff9900'
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={homeStyles.container}>
                <Button style={homeStyles.btnPosition} color='red' onPress={()=>navigate('NaviHome',{title:'导航页'})} title="页面跳转"/>
                <Button style={homeStyles.btnPosition} color='blue' onPress={()=>navigate('NaviTab',{title:'导航页'})} title="页面跳转"/>
                <Button style={homeStyles.btnPosition} color='green' onPress={()=>navigate('NaviDrawer',{title:'导航页'})} title="页面跳转"/>

            </View>
        );
    }
}

const HomeNavigator = StackNavigator({
    Home: {screen: HomeComponent},
    NaviHome:{screen: NavigatorComponent},
    NaviTab:{screen: NavigatorTab},
    NaviDrawer:{screen: NavigatorDrawer},
    WithParams:{screen: NavigatorWithParams},
    OutNavi:{screen:NavigatorOutParams}

},{
    navigationOptions:{
        title:'title'
    }
});

export default HomeNavigator

const homeStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'column',
    },
    btnPosition:{
        marginTop:10,
        width:200,
        backgroundColor:'red'
    }
});