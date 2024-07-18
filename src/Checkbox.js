import React, { useReducer } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  return (
    <>
      <label htmlFor="checked">{checked ? "Checked" : "Not checked"}</label>
      <input
        id="checked"
        type="checkbox"
        value="Checked"
        onChange={setChecked}
      />
    </>
  );
};

export default Checkbox;
