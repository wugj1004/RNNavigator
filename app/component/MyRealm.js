/**
 * Created by wugj on 2018/5/7.
 */
import React,{Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import Realm from 'realm'

class MyRealm extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            realm: null,
            data:'默认',
        };
    }

    static navigationOptions = ({navigation, screenProps}) => ({
        title: navigation.state.params.title
    });

    componentWillMount() {
        // 根据提供的表初始化 Realm，可同时往数组中放入多个表
        let realmInitialize = new Realm({schema: [PersonSchema]});

        this.setState({
            realm:realmInitialize
        })
    }

    render() {
        return (
            <View style={realmStyles.container}>
                <Text>{this.state.data}</Text>


                <TouchableOpacity style={[realmStyles.btn,{backgroundColor: 'blue'}]} onPress={()=>this._insertData()}>
                    <Text>插入数据</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[realmStyles.btn,{backgroundColor: 'yellow'}]} onPress={()=>this._queryAll()}>
                    <Text>查询数据</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[realmStyles.btn,{backgroundColor: 'orange'}]} onPress={()=>this._updateData()}>
                    <Text>修改数据</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[realmStyles.btn,{backgroundColor: 'red'}]} onPress={()=>this._removeData()}>
                    <Text>删除数据</Text>
                </TouchableOpacity>
            </View>

        )
    }

    // 增加
    _insertData() {
        let realm = this.state.realm;
        realm.write(() => {
            realm.create('Person', {id: 0, name: '效力', tel_number: '137xxxxxxxx', city: 'xx省xx市xxxxxx'});
            realm.create('Person', {id: 1, name: '小明', tel_number: '137xxxxxxxx', city: 'xx省xx市xxxxxx'});
            realm.create('Person', {id: 2, name: '小王', tel_number: '137xxxxxxxx', city: 'xx省xx市xxxxxx'});
            realm.create('Person', {id: 3, name: '皮皮虾我们走', tel_number: '137xxxxxxxx', city: 'xx省xx市xxxxxx'});
            realm.create('Person', {id: 4, name: '小张', tel_number: '137xxxxxxxx', city: 'xx省xx市xxxxxx'});
        })
    }


    _queryAll() {
        let realm = this.state.realm;
        // 查询所有数据
        console.log(realm)
        if (realm){
            let persons = realm.objects('Person');
            if ( persons){
                var queryData = '查询数据：\n';
                for (let i in persons){
                    queryData += `name:${persons[i].name},tel_number:${persons[i].tel_number},city:${persons[i].city}`
                }
                this.setState({
                    data:queryData
                })
            }
        }else{
            this.setState({
                data:`realm数据为空`
            })
        }


    }

    // 根据条件查询
    _filteredQuery() {
        let allData;
        let realm = this.state.realm;
        // 获取Person对象
        let Persons = realm.objects('Person');
        // 设置筛选条件
        let person = Persons.filtered('id == 1');

        if (person) {
            // 遍历表中所有数据
            for (let i = 0; i < person.length; i++) {
                let tempData = '第' + (person[i].id + 1) + '个数据:' + person[i].name + person[i].tel_number + person[i].city + '\n';
                allData += tempData
            }
        }

        this.setState({
            data: '筛选到的数据:' + allData
        })
    }


    // 更新
    _updateData() {
        let realm = this.state.realm;
        realm.write(() => {
            // 方式一
            realm.create('Person', {id: 0, name: '效力，我是修改后的', tel_number: '156xxxxxxxx', city: 'xx省xx市xxxxxx'}, true);

            // // 方式二:如果表中没有主键,那么可以通过直接赋值更新对象
            // // 获取Person对象
            // let Persons = realm.objects('Person');
            // // 设置筛选条件
            // let person = Persons.filtered('name == 苍井空');
            // // 更新数据
            // person.name = '黄鳝门'

        })

        this._queryAll();
    }


    // 删除
    _removeData() {
        let realm = this.state.realm;
        realm.write(() => {
            // 获取Person对象
            let Persons = realm.objects('Person');
            // 删除
            realm.delete(Persons);
        })
        this._queryAll();
    }
}

export default MyRealm;

// 新建表模型
const PersonSchema = {
    name: 'Person',
    primaryKey: 'id',    // 官方没给出自增长的办法,而且一般不会用到主键,这也解决了重复访问的问题,而且实际开发中我们不需要主键的,让服务端管就是了
    properties: {
        id: 'int',
        name: 'string',
        tel_number: {type: 'string', default: '156xxxxxxxx'},   // 添加默认值的写法
        city: 'string' // 直接赋值的方式设置类型
    }
};

const realmStyles = StyleSheet.create({
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
})