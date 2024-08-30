import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  const handleBtnClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="welcome">Welcome to your first React Application!</div>
      <div className="btn-wrapper">
        <button className="btn-secondary" onClick={handleBtnClick}>
          Click me!
        </button>
      </div>
      <div className="count-text">Count:{count}</div>
    </>
  );
};
