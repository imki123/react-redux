import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkNumberAsync, decrease, decreaseAsync, increase, increaseAsync, init, setDiff } from "../modules/counter"

function CounterContainer() {
  const { number } = useSelector((state) => ({ number: state.counter.number })) //rootReducer.counter.number
  const { diff } = useSelector((state) => ({ diff: state.counter.diff }))
  const { checkResult } = useSelector((state) => ({ checkResult: state.counter.checkResult }))

  const dispatch = useDispatch()
  /* const onIncrease = () => dispatch(increase())
  const onDecrease = () => dispatch(decrease()) */
  const onIncrease = () => dispatch(increaseAsync())
  const onDecrease = () => dispatch(decreaseAsync())
  const onCheck = () => dispatch(checkNumberAsync())
  const onSetDiff = (e) => dispatch(setDiff(e.target.value))
  const onInit = () => dispatch(init())

  return (
    <div className='counter'>
      <div style={{ fontSzie: "2rem", fontWeight: "bold" }}>
        Number : {number}
      </div>
      <div>
        diff : <input onChange={onSetDiff} value={diff}></input>
      </div>
      <div>
        more than 3 : {checkResult ? 'true' : 'false'}
      </div>
      <button onClick={onIncrease}>+</button>&nbsp;
      <button onClick={onDecrease}>-</button>&nbsp;
      <button onClick={onCheck}>체크</button>&nbsp;
      <button onClick={onInit}>초기화</button>
    </div>
  )
}
export default CounterContainer
