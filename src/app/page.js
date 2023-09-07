import React from 'react';
import '../../public/Main.scss'; 

const PortfolioPage = () => {
  return (
    <div className="grid-container">
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className={`grid-item ${i === 3 || i === 6 ? 'col-span-2' : ''}`}
        ></div>
      ))}
    </div>
  );
};

export default PortfolioPage;
