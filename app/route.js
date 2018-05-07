import React,{Component} from 'react'
import {StyleSheet,Image} from 'react-native'
import {StackNavigator, DrawerNavigator, TabNavigator, TabBarBottom} from 'react-navigation'

import Touch from './component/TouchComponent'
import Responder from './component/ResponderComponent'
import LifeCycle from './component/LifeCycleComponent'
import ReduxNum from './component/ReduxNumComponent'
import Num from './component/NumComponent'
import MySto from './component/MyStorage'
import MyReal from './component/MyRealm'


import Home from './container/ElementComponent'
import Movie from './container/navigator/NavigatorParams'
import Mine from './container/App'

import NavigatorTabItem from './container/navigator/NavigatorTabItem'

import NavigatorWithParams from './container/navigator/NavigatorWithParams'
import NavigatorOutParams from './container/navigator/NavigatorOutParams'
import Wallet from './container/App'


/**
 * 配置底部标签
 */
const Tab = TabNavigator({
    //每一个页面的配置
    home: {
        //当前选项卡加载的页面
        screen: Home,
        //配置每一个选项卡的样式
        navigationOptions: ({navigation, screenProps}) => ({
            headerTitle: '美食',
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            tabBarLabel: '美食',//显示的标签文字
            //显示的图片
            tabBarIcon: ({tintColor, focused}) => (
                <NavigatorTabItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./images/ico_service_normal.png')}
                    selectedImage={require('./images/ico_service_pressed.png')}
                />
            ),
        }),
    },
    movie: {
        screen: Movie,
        navigationOptions: ({navigation, screenProps}) => ({
            headerTitle: '电影',
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            tabBarLabel: '电影',
            tabBarIcon: ({tintColor, focused}) => (
                <NavigatorTabItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./images/ico_find_normal.png')}
                    selectedImage={require('./images/ico_find_pressed.png')}
                />

            ),
        }),
    },
    mime: {
        screen: Mine,
        navigationOptions: ({navigation, screenProps}) => ({
            headerTitle: '酒店',
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            tabBarLabel: '酒店',
            // header: null,
            tabBarIcon: ({tintColor, focused}) => (
                <NavigatorTabItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./images/ico_house_normal.png')}
                    selectedImage={require('./images/ico_house_pressed.png')}
                />
            ),
        }),
    }
}, {
    initialRouteName: 'home',//初始化页面
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',//tabBar显示位置
    swipeEnabled: true,//滑动切换页面
    animationEnabled: false,//点击按钮切换页面动画切换
    lazy: true,//除初始化页面外延迟加载
    backBehavior: 'none',
    tabBarOptions: {
        activeTintColor: 'rgb(255, 219, 60)',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'black',//label和icon的前景色 活跃状态下（未选中）
        showIcon: true,//是否显示图标
        showLabel: true,//是否显示文本
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0
        },
        style: {//背景设置
            backgroundColor: 'white',//rgb(255, 255, 255)
        },
        labelStyle: {//字体设置
            fontSize: 12,

        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        }
    },


});

/*
 * 配置堆栈导航
 */
const Stack = StackNavigator({
    Tab: {
        screen: Tab,
    },
    WithParams: {
        screen: NavigatorWithParams,
    },
    OutParams: {
        screen: NavigatorOutParams,
        navigationOptions: {
            title: '不传参',
        }
    },
    Wallet: {
        screen: Wallet,
        navigationOptions: {
            title: '钱包',
        }
    },
    Touch: {
        screen: Touch,
    },
    Responder: {
        screen: Responder,
    },
    LifeCycle: {
        screen: LifeCycle,
    },
    ReduxNum:{
        screen: ReduxNum,
    },
    Num: {
        screen: Num,
    },
    MySto: {
        screen: MySto,
    },
    MyReal: {
        screen: MyReal,
    }
});

/**
 * 配置侧滑菜单
 */
export default navigatorDrawer = DrawerNavigator({

    Home: {
        screen: Stack,
        navigationOptions: {
            drawerLabel: '首页',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_home.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Wallet: {
        screen: Wallet,
        navigationOptions: {
            drawerLabel: '我的钱包',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./images/wallet.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
}, {
    drawerWidth: 250, // 展示的宽度
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentOptions: {
        activeTintColor: 'black',  // 选中文字颜色
        activeBackgroundColor: '#fff', // 选中背景颜色
        inactiveTintColor: '#EB3695',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式

        }
    },
});

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    }
});