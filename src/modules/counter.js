/* 액션 타입 */
const INIT = "counter/INIT"
const SET_DIFF = "counter/SET_DIFF"
const INCREASE = "counter/INCREASE"
const DECREASE = "counter/DECREASE"

/* 액션 생성함수 */
export const init = () => ({ type: INIT })
export const setDiff = (diff) => ({
  type: SET_DIFF,
  diff: isNaN(Number(diff)) ? 0 : Number(diff),
})
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

/* 초기상태 */
const initialState = {
  number: 0,
  diff: 1,
}

/* 리듀서 */
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INIT:
      return {
        number: 0,
        diff: 1,
      }
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      }
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      }
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      }
    default:
      return state
  }
}
