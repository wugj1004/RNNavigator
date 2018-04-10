/**
 * Created by wugj on 2018/4/9.
 */
import React,{Component} from 'react'
import {StyleSheet, } from 'react-native'
import {DrawerNavigator, TabNavigator,TabBarBottom} from 'react-navigation'


//展示的页面
import NavigatorTabItem from './NavigatorTabItem'
import Home from './../navigator/NaviDrawer';
import Stack from './../navigator/NaviStack';
import Mine from './../App';


export default NaviHome = TabNavigator({

    //每一个页面的配置
    home: {
        //当前选项卡加载的页面
        screen: Home,
        //配置每一个选项卡的样式
        navigationOptions: ({navigation, screenProps}) => ({
            tabBarLabel: '美食',//显示的标签文字
            //显示的图片
            tabBarIcon: ({tintColor, focused}) => (
                <NavigatorTabItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../../images/ico_service_normal.png')}
                    selectedImage={require('../../images/ico_service_pressed.png')}
                />
            ),
        }),
    },
    stack: {
        screen: Stack,
        navigationOptions: ({navigation, screenProps}) => ({
            tabBarLabel: '电影',
            tabBarIcon: ({tintColor, focused}) => (
                <NavigatorTabItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../../images/ico_find_normal.png')}
                    selectedImage={require('../../images/ico_find_pressed.png')}
                />
            ),
        }),
    },
    mine: {
        screen: Mine,
        navigationOptions: ({navigation, screenProps}) => ({
            tabBarLabel: '酒店',
            // header: null,
            tabBarIcon: ({tintColor, focused}) => (
                <NavigatorTabItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../../images/ico_house_normal.png')}
                    selectedImage={require('../../images/ico_house_pressed.png')}
                />
            ),
        }),
    }
}, {
    initialRouteName: 'home',//初始化页面
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',//tabBar显示位置
    swipeEnabled: true,//滑动切换页面
    animationEnabled: true,//点击按钮切换页面动画切换
    lazy: true,//除初始化页面外延迟加载
    backBehavior: 'none',
    tabBarOptions: {
        activeTintColor: 'rgb(255, 219, 60)',
        inactiveTintColor: 'black',
        showIcon: true,//是否显示图标
        showLabel: true,//是否显示文本
        indicatorStyle: {
            height: 0
        },
        style: {//背景设置
            backgroundColor: 'white',//rgb(255, 255, 255)
        },
        labelStyle: {//字体设置
            fontSize: 12,
            color: 'black'
        },
    },

});

const naviHomeStyles = StyleSheet.create({
    container:{
        flex:1
    }
});