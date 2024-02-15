import React from "react";

const SauceCheckbox = ({ sauceName, checked, onChange }) => {
  return (
    <div className="sauce-checkbox flex items-center mb-2">
      <input
        type="checkbox"
        id={sauceName}
        name={sauceName}
        checked={checked}
        onChange={(e) => onChange(sauceName, e.target.checked)}
        className="mr-2 rounded-sm focus:ring-2 focus:ring-yellow-300 hover:ring-yellow-500"
      />
      <label htmlFor={sauceName} className="text-gray-600">
        {sauceName}
      </label>
    </div>
  );
};

export default SauceCheckbox;
