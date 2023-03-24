import { configureStore } from '@reduxjs/toolkit'
import stock from './store/stock';

export default configureStore({
  reducer: {
    // 등록하기
    stock: stock.reducer,
  }
}) 
