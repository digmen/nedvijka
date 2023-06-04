import React, { useEffect, useState } from 'react';
import { API } from '../utils/const';

function Filter() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const filterData = () => {
    const filtered = data.filter((item) => {
      return item.field === inputValue;
    });

    setFilteredData(filtered);
  };

  return (
    <div>
      <h2>Фильтр данных</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={filterData}>Применить фильтр</button>

      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            <div></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Filter };
