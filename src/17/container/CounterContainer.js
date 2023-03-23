import Counter from '../components/Counter'
import { connect } from 'react-redux';
import React from 'react';
import { increase, decrease } from '../modules/counter'
import { bindActionCreators } from '@reduxjs/toolkit';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

/**  connect 함수 사용하기
const mapStateToProps = state => ({
  number: state.counter.number
})

const mapDispatchToProps = dispatch => ({
  increase: () => {
    dispatch(increase())
  },
  decrease: () => {
    dispatch(decrease())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
*/

// bindActionCreators까지 적용하기
export default connect(
  state => ({
    number: state.counter.number
  }),
  dispatch => bindActionCreators({ increase, decrease }, dispatch)
)(CounterContainer);
