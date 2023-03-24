import { configureStore } from '@reduxjs/toolkit'
import stock from './store/stock';
import title from './store/title';

export default configureStore({
  reducer: {
    // 등록하기
    stock: stock.reducer,
    title: title.reducer
  }
}) 
