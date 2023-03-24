import React, { } from 'react';
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { setStock } from '../store/stock';

const Cart = () => {
  let stock = useSelector((state) => { return state.stock })
  let dispatch = useDispatch()
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>NUM</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            stock.map((arr, i) => {
              return (
                <tr key={i}>
                  <td>{stock[i].id}</td>
                  <td>{stock[i].name}</td>
                  <td>{stock[i].count}</td>
                  <td><button onClick={() => { dispatch(setStock(stock[i].id)) }}>+1</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  );
};

export default Cart;