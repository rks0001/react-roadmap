



import React, { useState } from 'react';

function ControlledCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label>Is Checked? {isChecked ? 'Yes' : 'No'}</label>
    </div>
  );
}

export default ControlledCheckbox;
