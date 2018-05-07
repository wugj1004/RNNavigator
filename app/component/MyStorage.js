/**
 * Created by wugj on 2018/5/4.
 */
import React,{Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import storage from '../storage/RNAsyncStorage'

class MyStorage extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            userMessage: '默认',
        };

    }



    static navigationOptions = ({navigation, screenProps}) => ({
        title: navigation.state.params.title
    });


    componentWillMount(){

    }

    _insertData(){
        var user = new Object();
        user.from = '我来自中国';
        user.userid = '我的id是';
        user.token = '我的token';
        storage._save('user3',user);
        this._loadData();
    }

    _resetData(){
        var user = new Object();
        user.from = '我来自山西';
        storage._save('user3',user);
        this._loadData();
    }

    _loadData(){
        var promise = new Promise(
            (resolve,reject)=>{storage._load('user3',function(data){
                console.log(`打印异步请求数据:${data.from}`);
                console.log(`打印异步请求数据:${data.message}`);
                if(data.message){
                    reject(data);

                }else{
                    resolve(data);
                }


            })}
        ).then(result =>{
            if(result){
                this.setState({userMessage: result.from});
            }

        }).catch(
            error=>{
            this.setState({userMessage: error.message});
        });
    }

    _deleteByKey(){
        storage._remove('user3');
        this._loadData()
    }

    render() {
        return (
            <View style={storageStyles.container}>
                <Text>{this.state.userMessage}</Text>

                <TouchableOpacity style={[storageStyles.btn,{backgroundColor: 'yellow'}]} onPress={()=>this._insertData()}>
                    <Text>插入数据</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[storageStyles.btn,{backgroundColor: 'yellow'}]} onPress={()=>this._resetData()}>
                    <Text>更新数据</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[storageStyles.btn,{backgroundColor: 'blue'}]} onPress={()=>this._deleteByKey()}>
                    <Text>删除数据</Text>
                </TouchableOpacity>
            </View>

        )
    }


    componentDidMount(){
        this._loadData()

    }

}
export default MyStorage;

const storageStyles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    btn: {
        margin: 10,
        paddingHorizontal:10,
        paddingVertical:5

    },
});