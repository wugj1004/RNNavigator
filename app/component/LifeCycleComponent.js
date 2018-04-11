/**
 * Created by wugj on 2018/4/11.
 */
import React,{Component} from 'react'
import {Text,View,StyleSheet, } from 'react-native'
class LifeCycleComponent extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    static navigationOptions = ({navigation, screenProps}) => ({
        title: navigation.state.params.title
    })

    componentWillMount() {

    }

    render() {
        return (
            <View style={lifeCycleStyles.container}>

            </View>


        )
    }


    componentDidMount() {

    }
}

export default LifeCycleComponent

const lifeCycleStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

})