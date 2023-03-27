export function userReducer(state, action) {
  switch (action.type) {
    case 'ADD': // 이 부분은 {type: 'ADD'} 가 들어오면 실행
      return [...state, action.data]
    case 'REMOVE':
      return state.filter((arr) => {
        return arr.id !== +action.data.id
      })
    case 'UPDATE':
      return state.map((arr) => {
        if (arr.id == +action.data.id) {
          return action.data
        } else {
          return arr
        }
      })
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}