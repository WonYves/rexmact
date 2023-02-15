import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import TabbarReducer from '../reducer/TabbarReducer'
import CityReducer from '../reducer/CityReducer'
import CinemalistReducer from '../reducer/CinemalistReducer'
import reduxThunk from 'redux-thunk' //异步撞克
import reduxPromise from 'redux-promise' //异步promise
import {persistStore, persistReducer} from 'redux-persist'  //持久化1
import storage from 'redux-persist/lib/storage' //持久化2

// 持久化3
const persistConfig = {
  key: 'wiess',  //键值对 键名称
  storage,  //存储在locastorage中
  whitelist: ['CityReducer']  //持久化白名单
}


// 多个reducer合并扩展
const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemalistReducer
})

const MyPersistReducer = persistReducer(persistConfig, reducer) //持久化4  变为持久化的reducer

// 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// applyMiddleware redux中间件配合 redux-thunk 或者 redux-Promise完成异步
const store = legacy_createStore(MyPersistReducer, composeEnhancers(applyMiddleware(reduxPromise, reduxThunk))) //持久化5

const persistor = persistStore(store) //持久化6


// 手写简易版Redux legacy_createStore
function WyCreateStore(reducer){


  let list = []  // 收集回调函数
  let state = reducer(undefined, {})  //给state赋值初始值 reduce初始返回值是老的数据和空的action对象

  // 订阅
  function subscribe(callback){   //subscribe(()=>{}) 接收的参数是一个回调函数
    list.push(callback)           //收集回调函数 
  }

  // 触发
  function dispatch(action){      //dispatch(()=>{}) 接收的参数是一个毁掉函数
    state = reducer(state, action)  // 给reducer传入老的数据以及action之后经过reducer处理 再赋新的值给state 

    for(let i in list)   {  // 遍历list中的每一项回调函数
      list[i] && list[i]()  //触发传入进来的回调函数
    }
  }

  //获取
  function getState(){
    return state   // 返回最新的state
  }

  // 返回值是上面定义的三个函数 
  return {  
    subscribe,
    dispatch,
    getState
  }
}

export {store, persistor} //持久化7