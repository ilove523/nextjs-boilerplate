import React from "react";
import { FormControl } from "@material-ui/core";
import Picker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { PDatePicker } from "./types";
import { Input } from "../Input";

class DatePicker extends React.Component<PDatePicker> {
  static defaultProps = {
    dateFormat: "yyyy-MM-dd",
    timeFormat: "HH:mm",
    showYearDropdown: true,
    showMonthDropdown: true,
    dropdownMode: "select",
    timeIntervals: 5
  };

  componentDidMount = () => {
    const inputContainers = document.querySelectorAll(".react-datepicker__input-container");
    inputContainers.forEach(el => {
      el.setAttribute("style", "width: 100%");
    });
    this.forceUpdate();
  };

  render = () => {
    const { label, color, InputProps, FormControlProps, ...PickerProps } = this.props;
    return (
      <FormControl {...FormControlProps}>
        <Picker customInput={<Input fullWidth color={color} label={label} {...InputProps} />} {...PickerProps} />
      </FormControl>
    );
  };
}

export default DatePicker;
