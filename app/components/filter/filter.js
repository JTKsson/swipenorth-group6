import { useState } from "react";
// import annonserArr from "../../../pages/api/jobbannonser/jobbannonser.js"

function FilteredList({ annonserArr }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    if (selectedFilters.includes(value)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
    } else {
      setSelectedFilters([...selectedFilters, value]);
    }
  };

  const filteredList = annonserArr.filter((annonse) =>
    selectedFilters.includes(annonse.category)
  );

  return (
    <div>
      <h2>Filter by category:</h2>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              value="category1"
              onChange={handleCheckboxChange}
              checked={selectedFilters.includes("category1")}
            />
            Category 1
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              value="category2"
              onChange={handleCheckboxChange}
              checked={selectedFilters.includes("category2")}
            />
            Category 2
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              value="category3"
              onChange={handleCheckboxChange}
              checked={selectedFilters.includes("category3")}
            />
            Category 3
          </label>
        </li>
      </ul>
      <h2>Filtered list:</h2>
      <ul>
        {filteredList.map((annonse) => (
          <li key={annonse.id}>{annonse.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList