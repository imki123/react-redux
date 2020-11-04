import {checkNumber} from "../apis/checkNumber"

/* 액션 타입 */
const INIT = "counter/INIT"
const SET_DIFF = "counter/SET_DIFF"
const INCREASE = "counter/INCREASE"
const DECREASE = "counter/DECREASE"

/* 숫자체크하기 프라미스 */
const CHECK_NUMBER = "counter/CHECK_NUMBER"
const CHECK_NUMBER_SUCCESS = "counter/CHECK_NUMBER_SUCCESS"
const CHECK_NUMBER_ERROR = "counter/CHECK_NUMBER_ERROR"

/* 액션 생성함수 */
export const init = () => ({ type: INIT })
export const setDiff = (diff) => ({
  type: SET_DIFF,
  diff: isNaN(Number(diff)) ? 0 : Number(diff),
})
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

//1초 후에 디스패치하는 thunk 함수
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 1000)
}
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000)
}
export const checkNumberAsync = () => async (dispatch, getState) => {
  dispatch({ type: CHECK_NUMBER })
  try {
    console.log(getState())
    const checkResult = await checkNumber(getState().counter.number)
    dispatch({ type: CHECK_NUMBER_SUCCESS, checkResult })
  } catch (error) {
    dispatch({ type: CHECK_NUMBER_ERROR, error })
  }
}

/* 초기상태 */
const initialState = {
  number: 0,
  diff: 1,
  checkResult: null,
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
    case CHECK_NUMBER_SUCCESS:
      return {
        ...state,
        checkResult: action.checkResult,
      }
    default:
      return state
  }
}
