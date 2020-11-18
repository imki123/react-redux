import React from "react"

function Counter(props) {
  const {number, onSetDiff, diff, onIncrease, onDecrease, onCheck, onInit, checkResult} = props
  return (
    <div className='counter'>
      <div style={{ fontSzie: "2rem", fontWeight: "bold" }}>
        Number : {number}
      </div>
      <div>
        diff : <input onChange={onSetDiff} value={diff}></input>
      </div>
      <button onClick={onIncrease}>+</button>&nbsp;
      <button onClick={onDecrease}>-</button>&nbsp;
      <button onClick={onCheck}>숫자 체크</button>&nbsp;
      <button onClick={onInit}>초기화</button>
      <div>
        Number is more than 3 : <b>{checkResult ? 'true' : 'false'}</b>
      </div>
    </div>
  )
}
export default Counter
