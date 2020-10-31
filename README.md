# react-redux
Simple counter with react-redux.  

### How to run
1. ```npm i```
2. ```npm run start```

### How to set react-redux
1. npm i redux, react-redux  
2. index.js에 createStore(reducer), <Provider store={store}> 적용  
3. modules 폴더생성 counter.js 생성  
4. counter.js에 액션타입, 액션생성함수, 초기상태, 리듀서 작성  
5. containers 폴더 생성 CounterContainer.js 생성  
6. CounterContainer에 useSelector(), useDispatch() 사용  
7. <CounterContiner> 렌더링  
  
  
2.1. reducer가 여러개라면 modules/index.js 만들고 rootReducer = combineReducers({counter, todo,})  
2.2. index.js에 createStore(rootReducer)

### Thank you
