/**
 * Created by wugj on 2018/5/3.
 */
import React,{Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
class NumComponent extends Component {


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = { count: 5 }
    }

    static navigationOptions = ({navigation, screenProps}) => ({
        title: navigation.state.params.title
    });

    componentWillMount() {

    }

    render() {
        return (

            <View style={numStyles.container}>
                <Text style={numStyles.counter}>{this.state.count}</Text>

                <View style={numStyles.buttons}>
                    <TouchableOpacity style={[numStyles.btn,{backgroundColor: 'yellow'}]} onPress={()=>this._onPressReset()}>
                        <Text>归零</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[numStyles.btn,{backgroundColor: 'red'}]} onPress={()=>this._onPressInc()}>
                        <Text>加1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[numStyles.btn,{backgroundColor: 'blue'}]} onPress={()=>this._onPressDec()}>
                        <Text>减1</Text>
                    </TouchableOpacity>
                </View>

            </View>

        )
    }


    _onPressReset() {
        this.setState({ count: 0 })
    }

    _onPressInc() {
        this.setState({ count: this.state.count+1 });
    }

    _onPressDec() {
        this.setState({ count: this.state.count-1 });
    }
}

export default NumComponent

const numStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    counter: {
        fontSize: 50,
        marginBottom: 70
    },
    btn: {
        margin: 10,
        paddingHorizontal:10,
        paddingVertical:5

    },
    buttons: {
        flexDirection:'row'
    }

});