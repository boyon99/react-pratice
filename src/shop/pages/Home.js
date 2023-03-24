import React, { } from 'react';


const Home = ({ shoes }) => {
  return (
    <>
      <div className='main-bg'></div>
      <div className="container">
        <div className="row">
          {
            shoes.map((arr, i) => {
              return (
                <Card shoes={shoes} i={i} key={shoes[i].id} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

const Card = ({ shoes, i }) => {
  return (
    <div className="col-md-4" >
      <img src={shoes[i].img} width="80%" />
      <h4>{shoes[i].title}</h4>
      <p>{shoes[i].content}</p>
    </div>
  )
}

export default Home;