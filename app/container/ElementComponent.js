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