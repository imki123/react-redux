import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { applyMiddleware, createStore } from "redux"
import rootReducer from "./modules/index"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension" // 리덕스 개발자 도구
import logger from 'redux-logger'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger))) // 스토어를 만듭니다.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)