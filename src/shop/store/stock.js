import { createSlice } from '@reduxjs/toolkit'

// useState와 유사한 역할이다.
let stock = createSlice({
  name: 'stock', // 이름
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 }
  ], // 값
  reducers: {
    // state 변경함수 - action 이라고 한다.
    setStock(state, action) {
      let count = state.findIndex((a) => {
        return a.id === action.payload
      })
      // return 문을 사용할 경우 오류가 생긴다. 괄호가 없는 화살표 함수를 이미 return 문으로 작동하기 때문이다.
      state[count].count++
    }
  }
})

export let { setStock } = stock.actions
export default stock