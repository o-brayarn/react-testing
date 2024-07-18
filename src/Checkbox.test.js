import { render, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";
test("Selecting checkbox should change value of checked to true", () => {
  const { getByLabelText } = render(<Checkbox />);
  const checkbox = getByLabelText(/not checked/i);
  //   Automate the process of triggering an event change on the checkbox
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
