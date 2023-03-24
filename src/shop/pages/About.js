import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h4>회사정보</h4>
      <Link to='member'>멤버</Link>
      <Link to='location'>위치</Link>
      {/* nested routes의 컴포넌트를 보여주는 위치 */}
      <Outlet></Outlet>
    </div>
  )
}

export default About;