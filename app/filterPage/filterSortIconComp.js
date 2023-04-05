// import React from 'react'

// function filterSortIconComp() {
//   return (
//     <div>filterSortIconComp</div>
//   )
// }

// export default filterSortIconComp
"use client";
import { useState } from "react";
import styles from "./filter.module.css";

const CheckboxList = ({ options, onFilter }) => {
  const [checkedOptions, setCheckedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    const isChecked = checkedOptions.includes(option);

    if (isChecked) {
      setCheckedOptions(
        checkedOptions.filter((checkedOption) => checkedOption !== option)
      );
    } else {
      setCheckedOptions([...checkedOptions, option]);
    }
  };

  const handleFilter = () => {
    onFilter(checkedOptions);
  };

  return (
    <>
      <div>
        {options.map((option, index) => (
          <div className={styles.btn} key={index}>
            <input
              type="checkbox"
              id={option}
              name={option}
              checked={checkedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckboxList;
