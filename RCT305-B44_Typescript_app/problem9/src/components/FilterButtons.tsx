
import React from 'react';

interface FilterButtonsProps {
  setFilter: (filter: 'all' | 'completed' | 'incomplete') => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('all')}>All Tasks</button>
      <button onClick={() => setFilter('completed')}>Completed Tasks</button>
      <button onClick={() => setFilter('incomplete')}>Incomplete Tasks</button>
    </div>
  );
};

export default FilterButtons;
