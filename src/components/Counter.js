import React from "react"
import "./Counter.scss"

function Counter(props) {
  const {
    number,
    onSetDiff,
    diff,
    onIncreaseThunk,
    onDecreaseThunk,
    onIncreaseSaga,
    onDecreaseSaga,
    onCheck,
    onInit,
    checkResult,
  } = props

  return (
    <div className='counter'>
      <div className='number'>Number : {number}</div>
      <div>
        diff : <input onChange={onSetDiff} value={diff}></input>
      </div>
      <div>
        <span> use Thunk : </span>
        <button onClick={onIncreaseThunk}>+ (Thunk)</button>&nbsp;
        <button onClick={onDecreaseThunk}>- (Thunk)</button>&nbsp;
      </div>
      <div>
        <span> use Saga : </span>
        <button onClick={onIncreaseSaga}>+ (Saga)</button>&nbsp;
        <button onClick={onDecreaseSaga}>- (Saga)</button>&nbsp;
      </div>
      <div>
        Number is more than 3 : <b>{checkResult ? "true" : "false"}</b>&nbsp;
        <button onClick={onCheck}>숫자 체크</button>
      </div>
      <button onClick={onInit}>초기화</button>
    </div>
  )
}
export default Counter
