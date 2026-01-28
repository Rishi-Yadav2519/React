import React from "react";

const Sidebar = ({ checkedGrades, setCheckedGrades }) => {
  const handleCheckboxChange = (grade) => {
    setCheckedGrades({
      ...checkedGrades,
      [grade]: !checkedGrades[grade],
    });
  };

  return (
    <aside className="bg-neutral-700/70 px-3 py-4 h-[90vh] w-[10vw] fixed z-10 top-[10vh]">
      <label htmlFor="checkbox" className="text-sm font-semibold">
        Filter by grade
      </label>
      <div id="checkbox" className="flex flex-col gap-2 px-3 mt-5">
        <div className="wrapper flex gap-2">
          <input type="checkbox" name="filter" id="A+" className="outline-0" checked={checkedGrades["A+"]} onChange={() => handleCheckboxChange("A+")}/>
          <label htmlFor="A+">A+</label>
        </div>
        <div className="wrapper flex gap-2">
          <input type="checkbox" name="filter" id="A" checked={checkedGrades["A"]} onChange={() => handleCheckboxChange("A")} />
          <label htmlFor="A">A</label>
        </div>
        <div className="wrapper flex gap-2">
          <input type="checkbox" name="filter" id="B+" checked={checkedGrades["B+"]} onChange={() => handleCheckboxChange("B+")} />
          <label htmlFor="B+">B+</label>
        </div>
        <div className="wrapper flex gap-2">
          <input type="checkbox" name="filter" id="B" checked={checkedGrades["B"]} onChange={() => handleCheckboxChange("B")} />
          <label htmlFor="B">B</label>
        </div>
        <div className="wrapper flex gap-2">
          <input type="checkbox" name="filter" id="C+" checked={checkedGrades["C+"]} onChange={() => handleCheckboxChange("C+")} />
          <label htmlFor="C+">C+</label>
        </div>
        <div className="wrapper flex gap-2">
          <input type="checkbox" name="filter" id="C" checked={checkedGrades["C"]} onChange={() => handleCheckboxChange("C")} />
          <label htmlFor="C">C</label>
        </div>
        <div className="wrapper flex gap-2">
          <input type="checkbox" name="filter" id="D" checked={checkedGrades["D"]} onChange={() => handleCheckboxChange("D")} />
          <label htmlFor="D">D</label>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
