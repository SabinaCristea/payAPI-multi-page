// import React from "react";

// const CustomCheckbox = ({
//   isChecked,
//   onChange,
// }: {
//   isChecked: boolean;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }) => {
//   return (
//     <div className="relative cursor-pointer select-none group">
//       <input
//         type="checkbox"
//         checked={isChecked}
//         onChange={onChange}
//         className="absolute peer"
//       />
//       <span className="absolute top-0 left-0 h-[25px] w-[25px] bg-gray-300 rounded group-hover:bg-gray-400 peer-checked:bg-blue-600">
//         <span className="absolute hidden h-[10px] w-[5px] border-[3px] border-white border-t-0 border-l-0 left-[9px] top-[5px] rotate-45 peer-checked:block"></span>
//       </span>
//     </div>
//   );
// };

// export default CustomCheckbox;

"use client";
import React, { useState } from "react";
import "./CustomCheckox.scss";

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked); // Update the state based on the checkbox's value
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
