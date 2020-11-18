import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Counter from "../components/Counter"
import {
  checkNumberThunk,
  decreaseAsync,
  increaseAsync,
  init,
  setDiff,
} from "../modules/counter"

function CounterContainer() {
  const { number } = useSelector((state) => ({ number: state.counter.number })) //rootReducer.counter.number
  const { diff } = useSelector((state) => ({ diff: state.counter.diff }))
  const { checkResult } = useSelector((state) => ({
    checkResult: state.counter.checkResult,
  }))

  const dispatch = useDispatch()
  // const onIncrease = () => dispatch(increase())
  // const onDecrease = () => dispatch(decrease())
  const onIncrease = () => dispatch(increaseAsync())
  const onDecrease = () => dispatch(decreaseAsync())
  const onCheck = () => dispatch(checkNumberThunk())
  const onSetDiff = (e) => dispatch(setDiff(e.target.value))
  const onInit = () => dispatch(init())

  return (
    <Counter
      number={number}
      onSetDiff={onSetDiff}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onCheck={onCheck}
      onInit={onInit}
      checkResult={checkResult}
    />
  )
}
export default CounterContainer
