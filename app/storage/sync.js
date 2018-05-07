/**
 * Created by wugj on 2018/5/4.
 */

/*全局配置只需配置一次即可，这个配置参数介绍的很详细，我就不罗嗦了。
重点看_getStorage（）中sync这个字段。这里接受的是一个对象。
在本地查询不到结果的时候，会根据查询key的值加载对象中的方法（方法名就是key）。
而SYNC 就是我们导出的js文件，这里就涉及到nodejs中的模块这个概念，
模块是用来隔离和实现不同功能的片段，javaScrip中并没有分模块，这也是js中的一大缺陷。
而模块的使用就用到了export这个关键字。*/
let  SYNC = {};
SYNC.user3 =(params)=>{

    if(params == null) return;
    // sync方法的名字必须和所存数据的key完全相同
    // 方法接受的参数为一整个object，所有参数从object中解构取出
    // 这里可以使用promise。或是使用普通回调函数，但需要调用resolve或reject。
    console.log("如果没有数据或者数据已经过期被删除从新请求数据");
    let { id, resolve, reject, syncParams: { extraFetchOptions, someFlag } } = params;
    fetch('user/', {
        method: 'GET',
        body: 'id=' + id,
        ...extraFetchOptions,
    }).then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        if(json && json.user){
            storage.save({
                key: 'user',
                id,
                data: json.user
            });

            if (someFlag) {
                // 根据syncParams中的额外参数做对应处理
            }

            // 成功则调用resolve
            resolve && resolve(json.user);
        }
        else{
            // 失败则调用reject
            reject && reject(new Error('data parse error'));
        }
    }).catch(err => {
        console.warn(err);
        reject && reject(err);
    });
}

export default SYNC