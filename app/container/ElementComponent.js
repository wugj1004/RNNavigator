/**
 * Created by wugj on 2018/4/10.
 */
import React,{Component} from 'react'
import {Button, View, StyleSheet, Text} from 'react-native'

class ElementComponent extends Component{

    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={elementStyles.container}>
                <View style={elementStyles.button}>
                    <Button  title="按钮手势响应" color="blue" onPress={()=>navigate('Touch',{title:'按钮手势响应'})}/>
                    <Button title="拖动滑动手势响应" color="black" onPress={()=>navigate("Responder",{title:'拖动滑动手势响应'})}/>
                    <Button title="生命周期" color="orange" onPress={()=>navigate("LifeCycle",{title:'生命周期'})}/>

                    <Button title="普通计数器" color="blue" onPress={()=>navigate("Num",{title:'普通计数器'})}/>
                    <Button title="Redux计数器" color="black" onPress={()=>navigate("ReduxNum",{title:'Redux计数器'})}/>
                    <Button title="数据持久化" color="orange" onPress={()=>navigate("MySto",{title:'数据持久化'})}/>

                    <Button title="Realm数据持久化" color="blue" onPress={()=>navigate("MyReal",{title:'Realm数据持久化'})}/>
                </View>
                <Text style={elementStyles.text}>手势响应</Text>
            </View>
        );

    }
}

export default ElementComponent

const elementStyles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    button:{
        marginTop:10,
        alignItems:'center',
        backgroundColor:'red'
    },
    text:{
        height:30,
        color:'white',
        backgroundColor:'red',
        marginTop:5

    }
})