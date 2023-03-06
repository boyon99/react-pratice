import { configureStore, createSlice } from '@reduxjs/toolkit'

/* useState()와 비슷한 역할 */
let user = createSlice({
  name : 'user', // state 이름 - name
  initialState : 'kim', // state 값 - initialState
  // state를 수정해주는 함수 - reducers
  reducers : {
    changeName(state){
      return 'john ' + state
    }
  }
})

export let {changeName} = user.actions // user의 모든 내용을 가져와서 저장

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ]
})



/* state 등록 */
export default configureStore({
  reducer: {
    user : user.reducer, // 작명 : (선언한 state 이름).reudcer
    cart : cart.reducer
  }
}) 

