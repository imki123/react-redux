# react-redux
Simple counter with react-redux.  
https://imki123.github.io/react-redux   

### How to run
1. ```npm i```
2. ```npm run start```

### How to set react-redux
1. npm i
2. index.js에 createStore(counter), <Provider store={store}> 적용  
2.1. reducer가 여러개라면 modules/index.js 만들고 rootReducer = combineReducers({counter, todo,})  
2.2. index.js에 createStore(rootReducer)
3. modules 폴더생성 counter.js 생성  
4. counter.js에 액션타입, 액션생성함수, 초기상태, 리듀서 작성  
5. containers 폴더 생성 CounterContainer.js 생성  
6. CounterContainer에 useSelector(), useDispatch() 사용  
7. <CounterContainer> 렌더링  
7.1. CounterContainer를 <Counter> 컴포넌트를 따로 만들어서 분리시켜도 무방함   

### How to use redux-thunk
1. thunk는 주로 비동기 디스패치가 필요할 때 사용한다.
2. index.js에 applyMiddleware(ReduxThunk)를 적용한다.
2.1. const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger))) // 디버깅 툴을 사용하고, 리덕스썽크, 로거 미들웨어를 적용했다.  
3. modules/counter.js에 setTimeout()을 이용한 간단한 thunk함수를 만든다.
3.1. thunk함수는 export const increaseAsync = () => (dispatch, getState) => { ... } 구조이다. { ... }에 비동기 작업을 넣어주면 된다.
4. Promise 작업을 위해서는 시작 액션 CHECK_NUMBER, 성공 액션 CHECK_NUMBER_SUCCESS, 실패 액션 CHECK_NUMBER_ERROR를 만들어 리듀서에 구현한다.

### Thank you 😄
