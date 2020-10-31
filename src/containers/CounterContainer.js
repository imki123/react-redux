import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrease, increase, init, setDiff } from "../modules/counter"

function CounterContainer() {
  const { number } = useSelector((state) => ({ number: state.counter.number }))
  const { diff } = useSelector((state) => ({ diff: state.counter.diff }))

  const dispatch = useDispatch()
  const onIncrease = () => dispatch(increase())
  const onDecrease = () => dispatch(decrease())
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
      <button onClick={onIncrease}>+</button>&nbsp;
      <button onClick={onDecrease}>-</button>&nbsp;
      <button onClick={onInit}>초기화</button>
    </div>
  )
}
export default CounterContainer
