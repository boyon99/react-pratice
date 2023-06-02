import React from 'react';
import Color, { Palette } from 'color-thief-react';

export default function ColorThiefComponent() {
  const imgSrc =
    'https://logomaster.ai/hs-fs/hubfs/hero-ind-personal-1.jpg?width=800&height=592&name=hero-ind-personal-1.jpg';
  const Loading = () => <div>Loading...</div>;

  return (
    <div>
      {' '}
      <Color src={imgSrc} crossOrigin="anonymous" format="hex">
        {({ data, loading }) => {
          if (loading) return <Loading />;
          return (
            <div>
              Predominant color: <strong style={{ color: data }}>{data}</strong>
            </div>
          );
        }}
      </Color>
      <Palette src={imgSrc} crossOrigin="anonymous" format="hex" colorCount={4}>
        {({ data, loading }) => {
          if (loading) return <Loading />;
          return (
            <div>
              Palette:
              <ul>
                {data?.map((color, index) => (
                  <li key={index} style={{ color: color }}>
                    <strong>{color}</strong>
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Palette>
      <img src={imgSrc} alt="" />
    </div>
  );
}
