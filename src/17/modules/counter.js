// 액션 타입 정의
const INCREASE = 'counter/INCREASE' // 프로젝트가 커질 경우 액션 이름 충돌 방지
const DECREASE = 'counter/DECREASE'

// 액션 생성 함수 
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

// 초기상태
const initialState = {
  number: 0
}

// 리듀서 함수
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      }
    case DECREASE:
      return {
        number: state.number - 1
      }
    default:
      return state
  }
}

export default counter