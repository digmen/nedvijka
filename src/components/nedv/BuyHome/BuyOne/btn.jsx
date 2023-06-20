import React, { useState } from 'react';

const ButtonBlock = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index === activeButton ? null : index);
  };

  return (
    <div style={{ borderRadius: '10px', display: 'flex', justifyContent: 'space-between' }}>
      <button
        style={{ borderTopLeftRadius: '5px',borderBottomLeftRadius: '5px', border: activeButton === 0 ? '1px solid #2a72ee' : '1px solid #d6dadc', padding: '8px 14px',
                color: activeButton === 0 ? '#2a72ee' : '#333' }}
        onClick={() => handleClick(0)}
      >
        {activeButton === 0 ? 'Студия' : 'Студия'}
      </button>
      <button
        style={{ border: activeButton === 1 ? '1px solid #2a72ee' : '1px solid #d6dadc', padding: '8px 14px', borderLeft: '0', borderRight: '0' ,
                color: activeButton === 1 ? '#2a72ee' : '#333'}}
        onClick={() => handleClick(1)}
      >
        {activeButton === 1 ? '1 ' : '1'}
      </button>
      <button
        style={{border: activeButton === 2 ? '1px  solid #2a72ee' : '1px solid #d6dadc', padding: '8px 14px', borderLeft: '0,5', borderRight: '0,5' ,
                color: activeButton === 2 ? '#2a72ee' : '#333' }}
        onClick={() => handleClick(2)}
      >
        {activeButton === 2 ? '2' : '2'}
      </button>
      <button
        style={{border: activeButton === 3 ? '1px solid #2a72ee' : '1px solid #d6dadc', padding: '8px 14px', borderLeft: '0', borderRight: '0' ,
                color: activeButton === 3 ? '#2a72ee' : '#333' }}
        onClick={() => handleClick(3)}
      >
        {activeButton === 3 ? '3' : '3'}
      </button>
      <button
        style={{ borderTopRightRadius: '5px',borderBottomRightRadius: '5px', border: activeButton === 4 ? '1px solid #2a72ee' : '1px solid #d6dadc', padding: '8px 14px',
                color: activeButton === 4 ? '#2a72ee' : '#333' }}
        onClick={() => handleClick(4)}
      >
        {activeButton === 4 ? '4+' : '4+'}
      </button>
    </div>
  );
};

export default ButtonBlock;
