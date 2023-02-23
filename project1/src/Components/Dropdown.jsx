import React, { useState } from 'react';

function Dropdown({ options, selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);

  const handleItemClick = (option) => {
    setSelected(option);
    setIsActive(false);
  };

  return (
    <div className='dropdown'>
      <div className='dropdown-btn' onClick={() => setIsActive(!isActive)}>
        {selected ? `${selected} ` : 'Select an option'}
      </div>
      {isActive && (
        <div className='dropdown-content'>
          {options.map((option) => (
            <div key={option} onClick={() => handleItemClick(option)} className='dropdown-item'>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Dropdowns() {
  const [selectedGenre, setSelectedGenre] = useState('Genres');
  const [selectedAge, setSelectedAge] = useState('Age');
  const [selectedYear, setSelectedYear] = useState('Year');

  return (
    <div className='container'>
      <Dropdown options={['Action', 'Romance', 'Drama', 'Cartoons']} selected={selectedGenre} setSelected={setSelectedGenre} />
      <Dropdown options={['Adults (18+)', 'Kids (12-)', 'Children (18-)']} selected={selectedAge} setSelected={setSelectedAge} />
      <Dropdown options={['2023', '2022', '2018 -- 2021', '2016 -- 2018', 'before 2016']} selected={selectedYear} setSelected={setSelectedYear} />
    </div>
  );
}

export default Dropdowns;