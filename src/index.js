import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { createStore } from "redux"
import rootReducer from "./modules/index"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension" // 리덕스 개발자 도구

const store = createStore(rootReducer, composeWithDevTools()) // 스토어를 만듭니다.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)