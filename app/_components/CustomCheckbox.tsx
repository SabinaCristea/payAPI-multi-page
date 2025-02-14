"use client";
import React, { useState } from "react";
import "./CustomCheckox.scss";

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    console.log("checked");
  };

  return (
    <div className="w-[2.4rem] h-[2.4rem]">
      <label className="container">
        <input
          type="checkbox"
          className="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="checkmark "></span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
